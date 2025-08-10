import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Star, Clock, DollarSign } from 'lucide-react';
import { Section, SectionHeader } from './Section';
import { Card, CardBody } from './Card';
import { CTAButton } from './CTAButton';
import { DestinationImageSlider } from './DestinationImageSlider';

import { jasturConfig } from '../../config/jastur';
import { openWhatsApp } from '../../lib/utils';

const DestinationsSection: React.FC = () => {
  const handleDestinationClick = (destinationId: string) => {
    const destination = jasturConfig.featuredDestinations.find(d => d.id === destinationId);
    const message = `Olá! Gostaria de saber mais sobre ${destination?.name} da Passeios Natal Tur. ${destination?.description}`;
    openWhatsApp(jasturConfig.contact.whatsapp, message);
  };

  // Função para obter características específicas de cada destino
  const getDestinationFeatures = (destination: { id: string }) => {
    const features = {
      galinhos: {
        clima: 'Tropical',
        melhorEpoca: 'Set-Mar',
        populacao: '2.500 hab',
        destaque: 'Dunas impressionantes'
      },
      gramado: {
        clima: 'Subtropical',
        melhorEpoca: 'Jun-Dez',
        populacao: '35.000 hab',
        destaque: 'Arquitetura europeia'
      },
      maragogi: {
        clima: 'Tropical',
        melhorEpoca: 'Ano todo',
        populacao: '30.000 hab',
        destaque: 'Piscinas naturais'
      },
      garanhuns: {
        clima: 'Frio',
        melhorEpoca: 'Jun-Ago',
        populacao: '140.000 hab',
        destaque: 'Suíça Pernambucana'
      },
      'porto-seguro': {
        clima: 'Tropical',
        melhorEpoca: 'Set-Mar',
        populacao: '150.000 hab',
        destaque: 'História do Brasil'
      },
      bonito: {
        clima: 'Temperado',
        melhorEpoca: 'Mar-Nov',
        populacao: '22.000 hab',
        destaque: 'Rios cristalinos'
      }
    };
    
    return features[destination.id as keyof typeof features] || {
      clima: 'Temperado',
      melhorEpoca: 'Ano todo',
      populacao: '10.000 hab',
      destaque: 'Belezas naturais'
    };
  };

  // Função para obter as imagens de cada destino
  const getDestinationImages = (destinationId: string): string[] => {
    const imageMap: Record<string, string[]> = {
      'passeio-4x4': [
        '/destinations/passeio-4x4/WhatsApp Image 2025-08-09 at 15.53.28.jpeg',
        '/destinations/passeio-4x4/WhatsApp Image 2025-08-09 at 15.53.30.jpeg',
        '/destinations/passeio-4x4/WhatsApp Image 2025-08-09 at 15.53.31.jpeg',
        '/destinations/passeio-4x4/cajuerio.jpeg'
      ],
      'passeio-rio-do-fogo': [
        '/destinations/passeio-rio-do-fogo/WhatsApp Image 2025-08-09 at 15.52.16.jpeg',
        '/destinations/passeio-rio-do-fogo/WhatsApp Image 2025-08-09 at 15.52.17.jpeg',
        '/destinations/passeio-rio-do-fogo/WhatsApp Image 2025-08-09 at 15.52.17 (1).jpeg',
        '/destinations/passeio-rio-do-fogo/WhatsApp Image 2025-08-09 at 15.52.18.jpeg'
      ],
      'passeio-buggy-litoral-norte': [
        '/destinations/passeio-buggy-litoral-norte/WhatsApp Image 2025-08-09 at 15.57.05.jpeg',
        '/destinations/passeio-buggy-litoral-norte/WhatsApp Image 2025-08-09 at 15.57.06.jpeg',
        '/destinations/passeio-buggy-litoral-norte/WhatsApp Image 2025-08-09 at 15.57.07.jpeg',
        '/destinations/passeio-buggy-litoral-norte/dunas doradas.jpeg'
      ],
      'passeio-maracajau': [
        '/destinations/passeio-maracajau/WhatsApp Image 2025-08-09 at 15.58.31.jpeg',
        '/destinations/passeio-maracajau/WhatsApp Image 2025-08-09 at 15.58.32.jpeg',
        '/destinations/passeio-maracajau/WhatsApp Image 2025-08-09 at 15.58.34.jpeg',
        '/destinations/passeio-maracajau/WhatsApp Image 2025-08-09 at 15.58.35.jpeg'
      ],
      'passeio-quadriciclo': [
        '/destinations/passeio-quadriciclo/WhatsApp Image 2025-08-09 at 15.58.33.jpeg',
        '/destinations/passeio-quadriciclo/WhatsApp Image 2025-08-09 at 15.58.34 (1).jpeg',
        '/destinations/passeio-quadriciclo/WhatsApp Image 2025-08-09 at 15.58.34 (2).jpeg',
        '/destinations/passeio-quadriciclo/WhatsApp Image 2025-08-09 at 15.58.34 (3).jpeg'
      ]
    };

    return imageMap[destinationId] || ['/destinations/' + destinationId + '.jpg'];
  };

  return (
    <Section id="destinos" background="white" padding="xl">
      <SectionHeader
        title="Nossos Destinos e Passeios"
        subtitle="Descubra nossos roteiros e reserve sua vaga para a próxima aventura"
        align="center"
      />

      {/* Seção de Próximas Saídas */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            🚀 Passeios Disponíveis
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha seu destino ideal e garanta sua vaga na próxima aventura
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {jasturConfig.featuredDestinations.map((destination, index) => (
            <Card
              key={destination.id}
              delay={index * 0.2}
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <CardBody className="p-0">
                {/* Imagem do destino */}
                <div className="relative h-48 overflow-hidden">
                  <DestinationImageSlider
                    images={getDestinationImages(destination.id)}
                    alt={destination.name}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge de destaque */}
                  <div className="absolute top-4 left-4 bg-cta-500 text-white px-3 py-1 rounded-full text-sm font-medium pointer-events-none">
                    {destination.category}
                  </div>
                  
                  {/* Removido o bloco de preço */}
                </div>

                {/* Conteúdo do card */}
                <div className="p-4 sm:p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {destination.name}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Informações do roteiro */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Calendar className="w-4 h-4 text-secondary-500" />
                      <span><strong>Clima:</strong> {getDestinationFeatures(destination).clima}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Clock className="w-4 h-4 text-secondary-500" />
                      <span><strong>Melhor época:</strong> {getDestinationFeatures(destination).melhorEpoca}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <DollarSign className="w-4 h-4 text-primary-500" />
                      <span><strong>Preço:</strong> R$ {destination.price}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Star className="w-4 h-4 text-accent-500" />
                      <span><strong>Destaque:</strong> {getDestinationFeatures(destination).destaque}</span>
                    </div>
                  </div>

                  {/* CTA específico */}
                  <CTAButton
                    size="md"
                    variant="primary"
                    icon="whatsapp"
                    onClick={() => handleDestinationClick(destination.id)}
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                  >
                    Quero Ir
                  </CTAButton>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>


      {/* CTA final da seção */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Não encontrou o destino ideal?
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe pode criar um roteiro personalizado especialmente para você e seu grupo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              size="lg"
              variant="secondary"
              icon="whatsapp"
              whatsappNumber={jasturConfig.contact.whatsapp}
              whatsappMessage={jasturConfig.whatsappMessages.roteiros}
            >
              Roteiro Personalizado
            </CTAButton>
            <CTAButton
              size="lg"
              variant="outline"
              icon="arrow"
              onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white/30 text-white hover:bg-white hover:text-gray-900 hover:border-white"
            >
              Ver Depoimentos
            </CTAButton>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default DestinationsSection; 