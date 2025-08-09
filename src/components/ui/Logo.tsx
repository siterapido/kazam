
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'text' | 'icon' | 'full';
}

export function Logo({ className = '', size = 'md', variant = 'full' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const logoClasses = `font-bold ${textSizeClasses[size]} ${className}`;

  const renderIcon = () => (
    <motion.img
      src="/id /jastur-logo.png"
      alt="JasTur Logo"
      className={`${sizeClasses[size]} object-contain`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    />
  );

  const renderText = () => (
    <span className="text-gray-900">
      <span className="text-primary-500">Jas</span>
      <span className="text-secondary-500">Tur</span>
    </span>
  );

  if (variant === 'icon') {
    return renderIcon();
  }

  if (variant === 'text') {
    return (
      <div className={logoClasses}>
        {renderText()}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${logoClasses}`}>
      {renderIcon()}
      {renderText()}
    </div>
  );
} 