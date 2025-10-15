import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { toWebpPath } from '@/lib/utils';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  showThumbnails?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  alt,
  className = '',
  showThumbnails = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [webpAvailable, setWebpAvailable] = useState<Record<string, boolean>>({});

  // Verifica disponibilidade de WebP para cada imagem (HEAD) e cacheia resultados
  useEffect(() => {
    let mounted = true;
    const checkAllWebp = async () => {
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
      if (!mounted) return;
      const map: Record<string, boolean> = {};
      for (const [img, ok] of entries) map[img] = ok;
      setWebpAvailable(map);
    };
    if (images.length > 0) checkAllWebp();
    return () => {
      mounted = false;
    };
  }, [images]);

  const hasWebp = (img: string) => webpAvailable[img] === true;

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, images.length, autoPlayInterval]);

  // Pause auto-play when user interacts
  const pauseAutoPlay = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToSlide = (index: number) => {
    pauseAutoPlay();
    setCurrentIndex(index);
  };

  const goToPrevious = useCallback(() => {
    pauseAutoPlay();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    pauseAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFullscreen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          setIsFullscreen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, goToPrevious, goToNext]);

  if (!images || images.length === 0) {
    return (
      <div className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-gray-500">Nenhuma imagem disponível</span>
      </div>
    );
  }

  return (
    <>
      {/* Main Carousel */}
      <div className={`relative overflow-hidden rounded-lg ${className}`}>
        {/* Main Image Container */}
        <div className="relative h-full">
          <AnimatePresence mode="wait">
            {(() => {
              const currentImage = images[currentIndex];
              return (
                <picture key={currentIndex}>
                  {hasWebp(currentImage) && (
                    <source type="image/webp" srcSet={toWebpPath(currentImage)} />
                  )}
                  <motion.img
                    src={currentImage}
                    alt={`${alt} - Imagem ${currentIndex + 1}`}
                    className="w-full h-full object-cover object-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    loading={currentIndex === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </picture>
              );
            })()}
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
            aria-label="Visualizar em tela cheia"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Slide Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {showThumbnails && images.length > 1 && (
          <div className="p-4 bg-gray-50">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-primary-500 scale-105'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <picture>
                    {hasWebp(image) && (
                      <source type="image/webp" srcSet={toWebpPath(image)} />
                    )}
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20"
              aria-label="Fechar tela cheia"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Fullscreen Image */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {(() => {
                const currentImage = images[currentIndex];
                return (
                  <picture key={`fullscreen-${currentIndex}`}>
                    {hasWebp(currentImage) && (
                      <source type="image/webp" srcSet={toWebpPath(currentImage)} />
                    )}
                    <motion.img
                      src={currentImage}
                      alt={`${alt} - Imagem ${currentIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                );
              })()}

              {/* Navigation in Fullscreen */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Slide Indicators in Fullscreen */}
              {images.length > 1 && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Image Counter in Fullscreen */}
              {images.length > 1 && (
                <div className="absolute top-8 left-8 bg-black/50 text-white px-4 py-2 rounded-full text-lg">
                  {currentIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageCarousel;