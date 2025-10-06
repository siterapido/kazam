import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho dos arquivos
const CONFIG_MD_PATH = path.join(__dirname, '..', 'SITE_CONFIG.md');
const OUTPUT_TS_PATH = path.join(__dirname, '..', 'src', 'config', 'jastur.ts');
const ASSETS_PATH = path.join(__dirname, '..', 'assets');
const PUBLIC_PATH = path.join(__dirname, '..', 'public');

// Função para garantir que um diretório existe
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Parser do Markdown para objeto JavaScript
function parseMarkdown(content) {
  const lines = content.split('\n');
  const config = {
    company: {},
    contact: {},
    stats: {},
    colors: {},
    seo: {},
    whatsappMessages: {},
    services: [],
    featuredDestinations: [],
    testimonials: [],
    faqs: [],
    partners: [],
    heroSlides: [],
    logo: {},
    navigation: [
      { name: 'Explore', href: '#explore' },
      { name: 'Depoimentos', href: '#depoimentos' },
      { name: 'Contato', href: '#contato' },
    ]
  };

  let currentSection = '';
  let currentSubSection = '';
  let currentItem = null;
  let currentList = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Seções principais (##)
    if (line.startsWith('## ')) {
      currentSection = line.substring(3).trim();
      currentSubSection = '';
      currentItem = null;
      continue;
    }

    // Subseções (###)
    if (line.startsWith('### ')) {
      currentSubSection = line.substring(4).trim();
      
      // Inicializar novo item baseado na seção
      if (currentSection === 'Serviços') {
        currentItem = { title: currentSubSection, benefits: [] };
      } else if (currentSection === 'Destinos') {
        currentItem = { name: currentSubSection, included: [] };
      } else if (currentSection === 'Depoimentos') {
        currentItem = { name: currentSubSection };
      } else if (currentSection === 'Perguntas Frequentes') {
        currentItem = { question: currentSubSection };
      } else if (currentSection === 'Parceiros') {
        currentItem = { name: currentSubSection };
      } else if (currentSection === 'Imagens do Hero/Slider') {
        currentItem = {};
      } else if (currentSection === 'Mensagens WhatsApp') {
        // Para mensagens do WhatsApp, o subSection é a chave
      }
      currentList = [];
      continue;
    }

    // Processar linhas com dados (- **Chave**: Valor)
    if (line.startsWith('- **') && line.includes('**:')) {
      const keyMatch = line.match(/- \*\*([^*]+)\*\*:\s*(.+)/);
      if (keyMatch) {
        const key = keyMatch[1].trim();
        const value = keyMatch[2].trim();
        
        // Mapear para a estrutura correta baseado na seção
        if (currentSection === 'Informações da Empresa') {
          if (currentSubSection === 'Dados Básicos') {
            const keyMap = {
              'Nome': 'name',
              'Slogan': 'tagline',
              'Descrição': 'description',
              'CNPJ': 'cnpj',
              'Ano de Fundação': 'founded',
              'Missão': 'mission'
            };
            if (keyMap[key]) config.company[keyMap[key]] = value;
          } else if (currentSubSection === 'Contato') {
            const keyMap = {
              'WhatsApp': 'whatsapp',
              'Telefone Formatado': 'phone',
              'Email': 'email',
              'Instagram': 'instagram',
              'Endereço': 'address'
            };
            if (keyMap[key]) config.contact[keyMap[key]] = value;
          } else if (currentSubSection === 'Estatísticas') {
            const keyMap = {
              'Viagens Realizadas': 'viagensRealizadas',
              'Passeios Realizados': 'passeiosRealizados',
              'Destinos Diferentes': 'destinosDiferentes',
              'Clientes Satisfeitos': 'clientesSatisfeitos',
              'Anos de Experiência': 'anosExperiencia'
            };
            if (keyMap[key]) config.stats[keyMap[key]] = value;
          }
        } else if (currentSection === 'Cores da Marca') {
          const keyMap = {
            'Primária': 'primary',
            'Secundária': 'secondary',
            'Accent': 'accent'
          };
          if (keyMap[key]) config.colors[keyMap[key]] = value;
        } else if (currentSection === 'SEO') {
          const keyMap = {
            'Título': 'title',
            'Descrição': 'description',
            'Palavras-chave': 'keywords',
            'Imagem OG': 'ogImage'
          };
          if (keyMap[key]) config.seo[keyMap[key]] = value;
        } else if (currentSection === 'Serviços' && currentItem) {
          const keyMap = {
            'ID': 'id',
            'Ícone': 'icon',
            'Descrição': 'description'
          };
          if (keyMap[key]) currentItem[keyMap[key]] = value;
        } else if (currentSection === 'Destinos' && currentItem) {
          const keyMap = {
            'ID': 'id',
            'Categoria': 'category',
            'Imagem': 'image',
            'Data de Partida': 'departureDate',
            'Duração': 'duration',
            'Preço': 'price',
            'Vagas Disponíveis': 'availableSpots',
            'Avaliação': 'rating',
            'Número de Avaliações': 'reviewCount',
            'Descrição': 'description'
          };
          if (keyMap[key]) currentItem[keyMap[key]] = value;
        } else if (currentSection === 'Depoimentos' && currentItem) {
          const keyMap = {
            'Avaliação': 'rating',
            'Destino': 'destination',
            'Texto': 'text'
          };
          if (keyMap[key]) currentItem[keyMap[key]] = value;
        } else if (currentSection === 'Parceiros' && currentItem) {
          const keyMap = {
            'Logo': 'logo',
            'Descrição': 'description'
          };
          if (keyMap[key]) currentItem[keyMap[key]] = value;
        } else if (currentSection === 'Imagens do Hero/Slider' && currentItem) {
          const keyMap = {
            'Arquivo': 'image',
            'Alt': 'alt'
          };
          if (keyMap[key]) currentItem[keyMap[key]] = value;
        } else if (currentSection === 'Logo') {
          const keyMap = {
            'Arquivo': 'file',
            'Alt': 'alt'
          };
          if (keyMap[key]) config.logo[keyMap[key]] = value;
        }
      }
    }
    
    // Processar itens de lista simples (benefícios, incluído, etc.)
    else if (line.startsWith('- ') && !line.startsWith('- **')) {
      const item = line.substring(2).trim();
      if (currentSection === 'Serviços' && currentItem) {
        currentItem.benefits.push(item);
      } else if (currentSection === 'Destinos' && currentItem) {
        currentItem.included.push(item);
      }
    }
    
    // Processar texto simples (respostas das FAQs, mensagens WhatsApp)
    else if (line && !line.startsWith('#')) {
      if (currentSection === 'Perguntas Frequentes' && currentItem && !currentItem.answer) {
        currentItem.answer = line;
      } else if (currentSection === 'Mensagens WhatsApp' && currentSubSection) {
        const keyMap = {
          'Padrão': 'default',
          'Roteiros': 'roteiros',
          'Orçamento': 'orcamento',
          'Dúvidas': 'duvidas',
          'Destinos': 'destinos'
        };
        if (keyMap[currentSubSection]) {
          config.whatsappMessages[keyMap[currentSubSection]] = line;
        }
      }
    }

    // Salvar item quando uma nova subseção começa, nova seção principal, ou no final
    const isEndOfFile = i === lines.length - 1;
    const isNextSubSection = i < lines.length - 1 && lines[i + 1].startsWith('###');
    const isNextSection = i < lines.length - 1 && lines[i + 1].startsWith('## ');
    
    if ((isEndOfFile || isNextSubSection || isNextSection) && currentItem) {
      if (currentSection === 'Serviços') {
        config.services.push(currentItem);
      } else if (currentSection === 'Destinos') {
        config.featuredDestinations.push(currentItem);
      } else if (currentSection === 'Depoimentos') {
        config.testimonials.push(currentItem);
      } else if (currentSection === 'Perguntas Frequentes') {
        config.faqs.push(currentItem);
      } else if (currentSection === 'Parceiros') {
        config.partners.push(currentItem);
      } else if (currentSection === 'Imagens do Hero/Slider' && currentItem.image) {
        config.heroSlides.push(currentItem);
      }
    }
  }

  return config;
}

// Processar imagens da pasta assets para public
function processImages(config) {
  if (!fs.existsSync(ASSETS_PATH)) {
    console.log('⚠️  Pasta assets/ não encontrada. Criando estrutura...');
    ensureDirectoryExists(path.join(ASSETS_PATH, 'logo'));
    ensureDirectoryExists(path.join(ASSETS_PATH, 'slides'));
    ensureDirectoryExists(path.join(ASSETS_PATH, 'destinations'));
    ensureDirectoryExists(path.join(ASSETS_PATH, 'partners'));
    ensureDirectoryExists(path.join(ASSETS_PATH, 'gallery'));
    console.log('📁 Estrutura de pastas criada em assets/');
    return;
  }

  // Criar diretórios no public se não existirem
  ensureDirectoryExists(path.join(PUBLIC_PATH, 'images'));
  ensureDirectoryExists(path.join(PUBLIC_PATH, 'slides'));
  ensureDirectoryExists(path.join(PUBLIC_PATH, 'id'));

  // Copiar logo
  if (config.logo.file) {
    const sourcePath = path.join(ASSETS_PATH, config.logo.file);
    if (fs.existsSync(sourcePath)) {
      const destPath = path.join(PUBLIC_PATH, 'id', path.basename(config.logo.file));
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✅ Logo copiado: ${config.logo.file}`);
    }
  }

  // Copiar slides
  config.heroSlides.forEach(slide => {
    if (slide.image) {
      const sourcePath = path.join(ASSETS_PATH, slide.image);
      if (fs.existsSync(sourcePath)) {
        const destPath = path.join(PUBLIC_PATH, slide.image);
        ensureDirectoryExists(path.dirname(destPath));
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✅ Slide copiado: ${slide.image}`);
      }
    }
  });

  // Copiar imagens dos destinos
  config.featuredDestinations.forEach(dest => {
    if (dest.image) {
      const sourcePath = path.join(ASSETS_PATH, dest.image);
      if (fs.existsSync(sourcePath)) {
        // Manter o caminho relativo correto
        const publicImagePath = dest.image.replace('destinations/', 'images/');
        const destPath = path.join(PUBLIC_PATH, publicImagePath);
        ensureDirectoryExists(path.dirname(destPath));
        fs.copyFileSync(sourcePath, destPath);
        // Atualizar o caminho no config para apontar para public
        dest.image = '/' + publicImagePath;
        console.log(`✅ Destino copiado: ${dest.image}`);
      }
    }
  });

  // Copiar logos dos parceiros
  config.partners.forEach(partner => {
    if (partner.logo) {
      const sourcePath = path.join(ASSETS_PATH, partner.logo);
      if (fs.existsSync(sourcePath)) {
        const publicImagePath = partner.logo.replace('partners/', 'images/');
        const destPath = path.join(PUBLIC_PATH, publicImagePath);
        ensureDirectoryExists(path.dirname(destPath));
        fs.copyFileSync(sourcePath, destPath);
        partner.logo = '/' + publicImagePath;
        console.log(`✅ Parceiro copiado: ${partner.logo}`);
      }
    }
  });

  // Atualizar caminhos das imagens do hero
  config.heroSlides = config.heroSlides.map(slide => ({
    ...slide,
    image: '/' + slide.image
  }));
}

// Gerar arquivo TypeScript
function generateTypeScript(config) {
  const tsContent = `// Configurações da ${config.company.name} - Gerado automaticamente
// NÃO EDITE ESTE ARQUIVO DIRETAMENTE! 
// Use SITE_CONFIG.md e execute: npm run config:update

export const jasturConfig = {
  // Informações da empresa
  company: {
    name: "${config.company.name || ''}",
    tagline: "${config.company.tagline || ''}",
    description: "${config.company.description || ''}",
    cnpj: "${config.company.cnpj || ''}",
    founded: "${config.company.founded || ''}",
    mission: "${config.company.mission || ''}",
  },

  // Contatos
  contact: {
    whatsapp: "${config.contact.whatsapp || ''}",
    email: "${config.contact.email || ''}",
    instagram: "${config.contact.instagram || ''}",
    phone: "${config.contact.phone || ''}",
    address: "${config.contact.address || ''}",
  },

  // Mensagens padrão do WhatsApp
  whatsappMessages: ${JSON.stringify(config.whatsappMessages, null, 4).replace(/"/g, '"')},

  // Estatísticas da empresa
  stats: ${JSON.stringify(config.stats, null, 4).replace(/"/g, '"')},

  // Serviços oferecidos
  services: ${JSON.stringify(config.services, null, 4).replace(/"/g, '"')},

  // Destinos em destaque
  featuredDestinations: ${JSON.stringify(config.featuredDestinations, null, 4).replace(/"/g, '"')},

  // Cores da identidade visual
  colors: ${JSON.stringify(config.colors, null, 4).replace(/"/g, '"')},

  // SEO
  seo: {
    title: "${config.seo.title || ''}",
    description: "${config.seo.description || ''}",
    keywords: "${config.seo.keywords || ''}",
    ogImage: "${config.seo.ogImage ? '/' + config.seo.ogImage : ''}",
  },

  // Links de navegação
  navigation: ${JSON.stringify(config.navigation, null, 4).replace(/"/g, '"')},

  // Depoimentos
  testimonials: ${JSON.stringify(config.testimonials, null, 4).replace(/"/g, '"')},

  // FAQs
  faqs: ${JSON.stringify(config.faqs, null, 4).replace(/"/g, '"')},

  // Parceiros
  partners: ${JSON.stringify(config.partners, null, 4).replace(/"/g, '"')},

  // Imagens do Hero
  heroSlides: ${JSON.stringify(config.heroSlides, null, 4).replace(/"/g, '"')},

  // Logo
  logo: {
    file: "${config.logo.file ? '/id/' + path.basename(config.logo.file) : ''}",
    alt: "${config.logo.alt || ''}",
  },
};`;

  return tsContent;
}

// Função principal
function main() {
  console.log('🚀 Iniciando geração de configuração...\n');

  // Verificar se o arquivo SITE_CONFIG.md existe
  if (!fs.existsSync(CONFIG_MD_PATH)) {
    console.error('❌ Arquivo SITE_CONFIG.md não encontrado!');
    console.log('📝 Por favor, crie o arquivo SITE_CONFIG.md na raiz do projeto.');
    process.exit(1);
  }

  try {
    // Ler o arquivo Markdown
    console.log('📖 Lendo SITE_CONFIG.md...');
    const mdContent = fs.readFileSync(CONFIG_MD_PATH, 'utf-8');

    // Fazer o parse do conteúdo
    console.log('🔄 Processando configurações...');
    const config = parseMarkdown(mdContent);

    // Processar imagens
    console.log('🖼️  Processando imagens...');
    processImages(config);

    // Gerar TypeScript
    console.log('📝 Gerando arquivo TypeScript...');
    const tsContent = generateTypeScript(config);

    // Salvar arquivo
    fs.writeFileSync(OUTPUT_TS_PATH, tsContent);
    console.log(`✅ Arquivo gerado com sucesso: ${OUTPUT_TS_PATH}`);

    // Resumo
    console.log('\n📊 Resumo da configuração:');
    console.log(`   - Empresa: ${config.company.name}`);
    console.log(`   - Serviços: ${config.services.length}`);
    console.log(`   - Destinos: ${config.featuredDestinations.length}`);
    console.log(`   - Depoimentos: ${config.testimonials.length}`);
    console.log(`   - FAQs: ${config.faqs.length}`);
    console.log(`   - Parceiros: ${config.partners.length}`);
    console.log(`   - Slides: ${config.heroSlides.length}`);

    console.log('\n🎉 Configuração gerada com sucesso!');
    console.log('💡 Execute "npm run dev" para ver as mudanças.');

  } catch (error) {
    console.error('❌ Erro ao processar configuração:', error);
    process.exit(1);
  }
}

// Executar
main();