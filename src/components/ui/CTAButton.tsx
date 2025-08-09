import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'whatsapp' | 'none';
  className?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
}

export function CTAButton({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  size = 'md',
  icon = 'arrow',
  className = '',
  whatsappNumber,
  whatsappMessage
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap";
  
  const variantClasses = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl focus:ring-primary-500",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-white shadow-lg hover:shadow-xl focus:ring-secondary-500",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500"
  };

  const sizeClasses = {
    sm: "px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm",
    md: "px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base",
    lg: "px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-lg"
  };

  const iconClasses = {
    sm: "w-3 h-3 sm:w-4 sm:h-4",
    md: "w-4 h-4 sm:w-5 sm:h-5",
    lg: "w-4 h-4 sm:w-6 sm:h-6"
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const renderIcon = () => {
    if (icon === 'none') return null;
    
    const iconClass = iconClasses[size];
    
    if (icon === 'whatsapp') {
      return <MessageCircle className={`ml-1 sm:ml-2 ${iconClass}`} />;
    }
    
    return <ChevronRight className={`ml-1 sm:ml-2 ${iconClass}`} />;
  };

  const handleClick = () => {
    if (whatsappNumber) {
      openWhatsApp(whatsappNumber, whatsappMessage);
    } else if (onClick) {
      onClick();
    }
  };

  const content = (
    <motion.div
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      <span>{children}</span>
      {renderIcon()}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
} 