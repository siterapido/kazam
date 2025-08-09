
import { motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../../lib/utils';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message = "Olá! Gostaria de saber mais sobre os roteiros da JasTur." }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    openWhatsApp(phoneNumber, message);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/* Ícone do WhatsApp */}
        <FaWhatsapp className="w-6 h-6 relative z-10" />
        
        {/* Animação pulsante simples */}
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Fale conosco no WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </motion.button>
    </div>
  );
} 