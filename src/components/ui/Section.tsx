import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'secondary';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({ 
  children, 
  className = '', 
  id,
  background = 'white',
  padding = 'lg'
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50'
  };

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  const sectionClasses = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  return (
    <section id={id} className={sectionClasses}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className = '',
  align = 'center'
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const isWhiteText = className.includes('text-white');

  return (
    <motion.div 
      className={`mb-12 ${alignClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isWhiteText ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isWhiteText ? 'text-white/90' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
} 