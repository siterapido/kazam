import React, { useEffect, useState } from 'react';
import { toWebpPath } from '@/lib/utils';

type OptimizedImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

/**
 * Componente de imagem otimizada com fallback automático para navegadores sem suporte a WebP.
 * Mantém a URL original acessível e prioriza WebP quando disponível.
 */
export function OptimizedImage({ src, alt, loading = 'lazy', decoding = 'async', className, ...imgProps }: OptimizedImageProps) {
  const webpSrc = toWebpPath(src);
  const [hasWebp, setHasWebp] = useState(false);

  useEffect(() => {
    let mounted = true;
    const check = async () => {
      try {
        const res = await fetch(webpSrc, { method: 'HEAD' });
        if (mounted) setHasWebp(res.ok);
      } catch {
        if (mounted) setHasWebp(false);
      }
    };
    check();
    return () => {
      mounted = false;
    };
  }, [webpSrc]);

  return (
    <picture>
      {hasWebp && <source type="image/webp" srcSet={webpSrc} />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding as any}
        className={className}
        {...imgProps}
      />
    </picture>
  );
}