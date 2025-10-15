/**
 * Combina classes CSS de forma segura
 * @param classes - Classes CSS para combinar
 * @returns String com classes combinadas
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

import { jasturConfig } from '../config/jastur';

/**
 * Formata uma mensagem padronizada para WhatsApp com detalhes de tour/serviço/destino
 */
export type WhatsAppMessageContext =
  | { kind: 'tour'; tour: {
      id: string;
      name: string;
      category?: string;
      duration?: string;
      departureDate?: string;
      availableSpots?: number;
      price?: number | string;
      included?: string[];
      description?: string;
    } }
  | { kind: 'service'; service: {
      id: string;
      title: string;
      description?: string;
    } }
  | { kind: 'destination'; destination: {
      id: string;
      name: string;
      description?: string;
    } };

export function composeWhatsAppMessage(ctx: WhatsAppMessageContext): string {
  const company = jasturConfig.company.name;
  const bullet = '\n• ';

  if (ctx.kind === 'tour') {
    const t = ctx.tour;
    const included = t.included && t.included.length ? bullet + 'Incluídos: ' + t.included.join(', ') : '';
    const priceText = t.price !== undefined ? `${t.price}` : '';
    const base = `Olá! 👋 Tenho interesse em reservar o passeio "${t.name}" com a ${company}.`;
    const details = [
      t.category ? bullet + `Categoria: ${t.category}` : '',
      t.duration ? bullet + `Duração: ${t.duration}` : '',
      t.departureDate ? bullet + `Saídas: ${t.departureDate}` : '',
      t.availableSpots !== undefined ? bullet + `Vagas: ${t.availableSpots}` : '',
      priceText ? bullet + `Preço: R$ ${priceText} por pessoa` : '',
    ].filter(Boolean).join('');
    const tail = `\n\nPoderia informar disponibilidade, formas de pagamento e como reservar?`;
    return `${base}${details}${included}${tail}`;
  }

  if (ctx.kind === 'service') {
    const s = ctx.service;
    const base = `Olá! 👋 Gostaria de saber mais sobre ${s.title.toLowerCase()} da ${company}.`;
    const desc = s.description ? `\n\nDescrição: ${s.description}` : '';
    const tail = `\n\nQuais opções, preços e disponibilidade?`;
    return `${base}${desc}${tail}`;
  }

  if (ctx.kind === 'destination') {
    const d = ctx.destination;
    const base = `Olá! 👋 Tenho interesse em ${d.name} com a ${company}.`;
    const desc = d.description ? `\n\n${d.description}` : '';
    const tail = `\n\nPoderia enviar valores, datas e roteiro?`;
    return `${base}${desc}${tail}`;
  }

  return jasturConfig.whatsappMessages?.default || `Olá! Gostaria de falar com a ${company}.`;
}

/**
 * Gera um link do WhatsApp com mensagem personalizada
 * @param phoneNumber - Número do WhatsApp no formato: 5581999999999 (código do país + DDD + número)
 * @param message - Mensagem personalizada (opcional)
 * @returns URL do WhatsApp
 */
export function generateWhatsAppLink(phoneNumber?: string, message?: string): string {
  // Se não houver número, usar o endpoint genérico com mensagem
  const hasNumber = Boolean(phoneNumber && phoneNumber.trim());
  const baseUrl = hasNumber ? `https://wa.me/${phoneNumber}` : `https://wa.me/`;

  if (message) {
    const encodedMessage = encodeURIComponent(message);
    // Quando não há número, WhatsApp aceita apenas o parâmetro text
    return hasNumber ? `${baseUrl}?text=${encodedMessage}` : `${baseUrl}?text=${encodedMessage}`;
  }

  return baseUrl;
}

/**
 * Abre o WhatsApp em uma nova aba
 * @param phoneNumber - Número do WhatsApp
 * @param message - Mensagem personalizada (opcional)
 */
export function openWhatsApp(phoneNumber?: string, message?: string): void {
  const whatsappUrl = generateWhatsAppLink(phoneNumber, message);
  window.open(whatsappUrl, '_blank');
}

/**
 * Converte caminho de imagem para a variante .webp mantendo a estrutura
 * Ex.: /images/foto.jpg -> /images/foto.webp
 */
export function toWebpPath(src: string): string {
  return src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
}