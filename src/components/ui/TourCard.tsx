import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';

interface TourCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  includes: string[];
  highlights?: string[];
  price: string;
  cta: string;
  images: string[];
  delay?: number;
  imagePosition?: 'center' | 'bottom' | 'top' | 'left' | 'right';
}

export const TourCard: React.FC<TourCardProps> = ({
  title,
  date,
  location,
  description,
  includes,
  highlights,
  price,
  cta,
  images,
  delay = 0,
  imagePosition = 'center'
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const positionClass =
    imagePosition === 'bottom'
      ? 'object-bottom'
      : imagePosition === 'top'
      ? 'object-top'
      : imagePosition === 'left'
      ? 'object-left'
      : imagePosition === 'right'
      ? 'object-right'
      : 'object-center';

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mx-auto border border-neutral-200 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {/* Image Slider */}
      <div className="relative h-64 overflow-hidden">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${title} - Imagem ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover ${positionClass}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary-600/80 hover:bg-primary-700 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600/80 hover:bg-primary-700 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-secondary-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
          {price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Content that grows */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-4 text-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">{title}</h3>
            <div className="flex items-center justify-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-secondary-500" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-accent-500" />
                <span>{location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-700 mb-4 leading-relaxed text-center">{description}</p>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-neutral-800 mb-2 text-center">Destaques:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Includes */}
          <div className="mb-6">
            <h4 className="font-semibold text-neutral-800 mb-3 flex items-center justify-center gap-2">
              <Users size={18} className="text-secondary-500" />
              Inclui:
            </h4>
            <div className="space-y-2">
              {includes.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="text-secondary-500 mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button - Always at bottom */}
        <motion.button
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {cta}
        </motion.button>
      </div>
    </motion.div>
  );
};