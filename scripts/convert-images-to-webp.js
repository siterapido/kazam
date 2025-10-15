#!/usr/bin/env node
/**
 * Conversor automático de imagens para WebP com cache
 * - Procura PNG/JPG/JPEG em diretórios de assets e public
 * - Converte para .webp mantendo a estrutura de diretórios
 * - Usa cache baseado em hash do arquivo e opções de qualidade
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import fg from 'fast-glob';
import sharp from 'sharp';
import os from 'node:os';

const ROOT = process.cwd();
const QUALITY = parseInt(process.env.WEBP_QUALITY || '82', 10); // qualidade visual equilibrada
const CONCURRENCY = Math.max(2, Math.min(os.cpus().length, 8));
const CACHE_FILE = path.join(ROOT, 'scripts', '.webp-cache.json');

const TARGET_DIRS = [
  path.join(ROOT, 'public'),
  path.join(ROOT, 'assets'),
  path.join(ROOT, 'src', 'assets'),
];

// Ignore known corrupt or unsupported files to avoid noisy errors
const IGNORE_PATHS = [
  path.join(ROOT, 'assets', 'logo', 'logo kazan.png'),
  path.join(ROOT, 'public', 'id', 'logo-kazan.png'),
];
const IGNORE_SET = new Set(IGNORE_PATHS.map((p) => p.replace(/\\/g, '/')));

function log(msg) {
  process.stdout.write(`[webp] ${msg}\n`);
}

function fileExists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function loadCache() {
  if (!fileExists(CACHE_FILE)) return { version: 1, quality: QUALITY, files: {} };
  try {
    const data = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
    // se qualidade mudou, invalidar cache
    if (data.quality !== QUALITY) {
      return { version: 1, quality: QUALITY, files: {} };
    }
    return data;
  } catch {
    return { version: 1, quality: QUALITY, files: {} };
  }
}

function saveCache(cache) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  } catch (err) {
    console.error('Erro ao salvar cache:', err.message);
  }
}

function hashFile(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha1');
    const stream = fs.createReadStream(filePath);
    stream.on('error', reject);
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
  });
}

function toWebpPath(p) {
  return p.replace(/\.(png|jpg|jpeg)$/i, '.webp');
}

async function convertOne(sourcePath, webpPath) {
  await sharp(sourcePath)
    .webp({ quality: QUALITY })
    .toFile(webpPath);
}

async function main() {
  log('Iniciando varredura de imagens...');
  const cache = loadCache();

  const patterns = TARGET_DIRS
    .filter((dir) => fs.existsSync(dir))
    .map((dir) => `${dir.replace(/\\/g, '/')}/**/*.{png,jpg,jpeg}`);

  let files = await fg(patterns, {
    dot: false,
    onlyFiles: true,
    followSymbolicLinks: false,
  });

  // Normalize separators and filter ignored paths
  files = files
    .map((f) => f.replace(/\\/g, '/'))
    .filter((f) => !IGNORE_SET.has(f));

  if (files.length === 0) {
    log('Nenhuma imagem encontrada para conversão.');
    return;
  }

  log(`Encontradas ${files.length} imagens. Iniciando conversão com qualidade ${QUALITY}...`);

  let converted = 0;
  let skipped = 0;
  let errors = 0;

  // Limitar concorrência
  const queue = [];
  for (const src of files) {
    const run = async () => {
      try {
        const srcHash = await hashFile(src);
        const webp = toWebpPath(src);

        // se já existe e cache confere, pular
        const cached = cache.files[src];
        if (fileExists(webp) && cached && cached.hash === srcHash) {
          skipped++;
          return;
        }

        // garantir diretório
        const dir = path.dirname(webp);
        fs.mkdirSync(dir, { recursive: true });

        await convertOne(src, webp);
        cache.files[src] = { hash: srcHash, webp };
        converted++;
        log(`Convertido: ${path.relative(ROOT, src)} -> ${path.relative(ROOT, webp)}`);
      } catch (e) {
        errors++;
        console.error(`Erro ao converter ${src}:`, e.message);
      }
    };
    queue.push(run);
  }

  // Executa com concorrência limitada
  const workers = Array(CONCURRENCY).fill(0).map(async (_, i) => {
    for (let idx = i; idx < queue.length; idx += CONCURRENCY) {
      await queue[idx]();
    }
  });
  await Promise.all(workers);

  saveCache(cache);

  log(`Resumo: convertidos=${converted}, pulados(cache)=${skipped}, erros=${errors}`);
}

main().catch((err) => {
  console.error('Falha geral na conversão:', err);
  process.exit(1);
});