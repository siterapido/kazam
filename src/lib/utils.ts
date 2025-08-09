/**
 * Combina classes CSS de forma segura
 * @param classes - Classes CSS para combinar
 * @returns String com classes combinadas
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Gera um link do WhatsApp com mensagem personalizada
 * @param phoneNumber - Número do WhatsApp no formato: 5581999999999 (código do país + DDD + número)
 * @param message - Mensagem personalizada (opcional)
 * @returns URL do WhatsApp
 */
export function generateWhatsAppLink(phoneNumber: string, message?: string): string {
  const baseUrl = `https://wa.me/${phoneNumber}`;
  
  if (message) {
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}?text=${encodedMessage}`;
  }
  
  return baseUrl;
}

/**
 * Abre o WhatsApp em uma nova aba
 * @param phoneNumber - Número do WhatsApp
 * @param message - Mensagem personalizada (opcional)
 */
export function openWhatsApp(phoneNumber: string, message?: string): void {
  const whatsappUrl = generateWhatsAppLink(phoneNumber, message);
  window.open(whatsappUrl, '_blank');
} 