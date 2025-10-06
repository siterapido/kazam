
import { motion } from 'motion/react';
import { jasturConfig } from '../../config/jastur';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'text' | 'icon' | 'full';
}

export function Logo({ className = '', size = 'md', variant = 'full' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const logoClasses = `font-bold ${textSizeClasses[size]} ${className}`;

  const renderIcon = () => (
    <motion.img
      src={jasturConfig.logo?.file || '/logo.png'}
      alt={jasturConfig.logo?.alt || jasturConfig.company?.name || 'Logo'}
      className={`${sizeClasses[size]} w-auto object-contain`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    />
  );

  const renderText = () => (
    <span className="text-gray-900">
      <span className="text-secondary-500">{(jasturConfig.company?.name || '').split(' ')[0]}</span>
      <span className="text-secondary-500">{(jasturConfig.company?.name || '').split(' ').slice(1).join(' ')}</span>
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