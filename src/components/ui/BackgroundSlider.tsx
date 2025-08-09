import { useEffect, useRef, useState } from 'react';

// Array com as imagens existentes na pasta slides
const slides = [
  'garanhuns-pe.webp',
  'gramado-rs.png',
  'maragogi.jpg',
];

const images = slides.map((img) => `/slides/${img}`);

export function BackgroundSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000); // Aumentado para 5 segundos para dar mais tempo de apreciar cada imagem
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, paused]);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden z-0 max-w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Destino turístico ${idx + 1}`}
          className={`transition-all duration-1500 absolute inset-0 w-full h-full object-cover max-w-full ${
            idx === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
          draggable={false}
        />
      ))}
      
      {/* Overlay gradiente melhorado para melhor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 pointer-events-none z-10" />
      
      {/* Overlay adicional para texto com degradê mais suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none z-10" />
      
      {/* Overlay radial para foco central - usando múltiplos gradientes */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none z-10" />
      
      {/* Bolinhas de navegação - mais sutis e reposicionadas */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full border border-white/60 transition-all duration-300 hover:scale-125 ${
              idx === current 
                ? 'bg-white/80 scale-110' 
                : 'bg-white/20 hover:bg-white/40'
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Indicador de progresso - mais sutil */}
      <div className="absolute bottom-6 right-6 w-16 h-0.5 bg-white/20 rounded-full overflow-hidden z-20">
        <div 
          className="h-full bg-white/60 transition-all duration-300 ease-linear"
          style={{ 
            width: `${((current + 1) / images.length) * 100}%`,
            transitionDuration: paused ? '0s' : '5s'
          }}
        />
      </div>
    </div>
  );
} 