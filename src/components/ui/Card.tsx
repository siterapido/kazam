import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
  hover?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  delay = 0, 
  onClick,
  hover = true 
}: CardProps) {
  const baseClasses = "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300";
  const hoverClasses = hover ? "hover:shadow-xl hover:-translate-y-1" : "";
  const clickClasses = onClick ? "cursor-pointer" : "";
  
  const cardClasses = `${baseClasses} ${hoverClasses} ${clickClasses} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-6 border-b border-gray-100 ${className}`}>
      {children}
    </div>
  );
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`p-6 border-t border-gray-100 bg-gray-50 ${className}`}>
      {children}
    </div>
  );
} 