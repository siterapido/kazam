import React from "react";
import { Logo } from "./Logo";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 bg-white">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-6">
          <Logo size="lg" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Sobre nós</h2>
        <p className="text-lg text-gray-700 mb-4">
          Somos apaixonados por viagens e experiências inesquecíveis. Nosso objetivo é conectar você aos melhores destinos turísticos, com conforto, segurança e praticidade.
        </p>
        <p className="text-md text-gray-600">
          Descubra roteiros exclusivos, dicas de viagem e um atendimento personalizado para tornar sua aventura única.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xl">
          Imagem
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 