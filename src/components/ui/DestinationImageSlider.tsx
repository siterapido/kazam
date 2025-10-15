import { useState, useEffect } from 'react';
import { toWebpPath } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DestinationImageSliderProps {
  images: string[];
  alt: string;
  className?: string;
}

export function DestinationImageSlider({ images, alt, className = '' }: DestinationImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [webpAvailable, setWebpAvailable] = useState<Record<string, boolean>>({});

  // Verifica disponibilidade de WebP para cada imagem e cacheia o resultado
  useEffect(() => {
    let isMounted = true;
    const checkWebpAvailability = async () => {
      const entries = await Promise.all(
        images.map(async (img) => {
          const webp = toWebpPath(img);
          try {
            const res = await fetch(webp, { method: 'HEAD' });
            return [img, res.ok] as const;
          } catch {
            return [img, false] as const;
          }
        })
      );
      if (!isMounted) return;
      const map: Record<string, boolean> = {};
      for (const [img, ok] of entries) {
        map[img] = ok;
      }
      setWebpAvailable(map);
    };
    if (images.length > 0) {
      checkWebpAvailability();
    }
    return () => {
      isMounted = false;
    };
  }, [images]);

  const hasWebp = (img: string) => webpAvailable[img] === true;

  // Auto-play do slider mais lento
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); // Aumentado para 8 segundos

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    // Pausa por 10 segundos após interação manual
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    // Pausa por 10 segundos após interação manual
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  if (images.length === 0) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400">Sem imagem</span>
      </div>
    );
  }

  if (images.length === 1) {
    const img = images[0];
    return (
      <picture>
        {hasWebp(img) && <source type="image/webp" srcSet={toWebpPath(img)} />}
        <img
          src={img}
          alt={alt}
          className={`w-full h-full object-cover object-center ${className}`}
          loading="lazy"
          decoding="async"
        />
      </picture>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      {/* Imagem de fundo sempre visível */}
      {(() => {
        const bg = images[(currentIndex - 1 + images.length) % images.length];
        return (
          <picture>
            {hasWebp(bg) && <source type="image/webp" srcSet={toWebpPath(bg)} />}
            <img
              src={bg}
              alt=""
              className="w-full h-full object-cover object-center absolute inset-0"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          </picture>
        );
      })()}
      
      <AnimatePresence mode="sync">
        {(() => {
          const cur = images[currentIndex];
          return (
            <picture>
              {hasWebp(cur) && <source type="image/webp" srcSet={toWebpPath(cur)} />}
              <motion.img
                key={currentIndex}
                src={cur}
                alt={`${alt} - Foto ${currentIndex + 1}`}
                className="w-full h-full object-cover object-center absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                loading="lazy"
                decoding="async"
              />
            </picture>
          );
        })()}
      </AnimatePresence>

      {/* Controles de navegação */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 z-30 backdrop-blur-sm cursor-pointer hover:scale-110 active:scale-95"
            title="Imagem anterior"
            type="button"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 z-30 backdrop-blur-sm cursor-pointer hover:scale-110 active:scale-95"
            title="Próxima imagem"
            type="button"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  // Pausa por 10 segundos após interação manual
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex 
                    ? 'bg-white scale-125 shadow-md' 
                    : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                }`}
                type="button"
                aria-label={`Ir para imagem ${index + 1}`}
                title={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}