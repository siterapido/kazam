import React from 'react';
import { Section, SectionHeader } from './Section';

// Lista simples de logos localizadas em public/images/parceiros
// Como estão em public, podem ser referenciadas diretamente por caminho absoluto.
const logos = [
  {
    src: '/images/parceiros/logo - pescados top peixaria.png',
    alt: 'Pescados Top Peixaria',
  },
  {
    src: '/images/parceiros/logo-galileu.png',
    alt: 'Galileu',
  },
];

const SimplePartnersSection: React.FC = () => {
  return (
    <Section id="parceiros" background="white" padding="lg">
      <SectionHeader
        title="Parceiros"
        subtitle="Empresas que caminham conosco"
        align="center"
      />

      {/* Container centralizado e com largura contida */}
      <div className="mx-auto max-w-5xl">
        {/* Blocos em círculo, centralizados no meio do site */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12 w-full">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-center rounded-full h-24 w-24 sm:h-28 sm:w-28 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              aria-label={logo.alt}
            >
              {/* encodeURI para lidar com espaços no caminho */}
              <img
                src={encodeURI(logo.src)}
                alt={logo.alt}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SimplePartnersSection;