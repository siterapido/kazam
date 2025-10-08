import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Star, Clock, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Section, SectionHeader } from './Section';
import { Card, CardBody } from './Card';
import { CTAButton } from './CTAButton';
import { DestinationImageSlider } from './DestinationImageSlider';

import { jasturConfig } from '../../config/jastur';
import { openWhatsApp, composeWhatsAppMessage } from '../../lib/utils';

const DestinationsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleDestinationClick = (destinationId: string) => {
    const destination = jasturConfig.featuredDestinations.find(d => d.id === destinationId);
    if (!destination) return;
    const message = composeWhatsAppMessage({
      kind: 'destination',
      destination: {
        id: destination.id,
        name: destination.name,
        description: destination.description,
      }
    });
    openWhatsApp(jasturConfig.contact.whatsapp, message);
  };

  const handleViewDetails = (destinationId: string) => {
    navigate(`/passeio/${destinationId}`);
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

  // Função para obter as imagens de cada destino usando a imagem principal do config
  const getDestinationImages = (destinationId: string): string[] => {
    const dest = jasturConfig.featuredDestinations.find(d => d.id === destinationId);
    if (!dest || !dest.image) return [];
    // Exibir a imagem principal por enquanto; futuras versões podem incluir sliders múltiplos via assets
    return [dest.image];
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

        {/* Verificar se há destinos disponíveis */}
        {jasturConfig.featuredDestinations.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
              <div className="text-6xl mb-6">🚧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Passeios Temporariamente Indisponíveis
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Estamos trabalhando para trazer novos destinos incríveis para você. 
                Entre em contato conosco para mais informações sobre futuros passeios.
              </p>
              <CTAButton
                size="lg"
                variant="primary"
                icon="whatsapp"
                whatsappNumber={jasturConfig.contact.whatsapp}
                whatsappMessage={jasturConfig.whatsappMessages.duvidas}
              >
                Falar Conosco
              </CTAButton>
            </div>
          </motion.div>
        ) : (
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

                    {/* CTAs */}
                    <div className="flex gap-2">
                      <CTAButton
                        size="md"
                        variant="outline"
                        icon="eye"
                        onClick={() => handleViewDetails(destination.id)}
                        className="flex-1 group-hover:scale-105 transition-transform duration-300"
                      >
                        Ver Detalhes
                      </CTAButton>
                      <CTAButton
                        size="md"
                        variant="primary"
                        icon="whatsapp"
                        onClick={() => handleDestinationClick(destination.id)}
                        className="flex-1 group-hover:scale-105 transition-transform duration-300"
                      >
                        Reservar
                      </CTAButton>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
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
              whatsappMessage={jasturConfig.whatsappMessages.default}
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