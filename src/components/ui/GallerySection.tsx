import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Star, ArrowRight, Clock } from 'lucide-react';
import { Section, SectionHeader } from './Section';
import { Card, CardBody } from './Card';
import { CTAButton } from './CTAButton';

import { jasturConfig } from '../../config/jastur';
import { openWhatsApp } from '../../lib/utils';

const DestinationsSection: React.FC = () => {
  const handleDestinationClick = (destinationId: string) => {
    const destination = jasturConfig.featuredDestinations.find(d => d.id === destinationId);
    const message = `Olá! Gostaria de saber mais sobre ${destination?.name} da JasTur. ${destination?.description}`;
    openWhatsApp(jasturConfig.contact.whatsapp, message);
  };

  // Função para obter características específicas de cada destino
  const getDestinationFeatures = (destination: any) => {
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

  return (
    <Section id="destinos" background="white" padding="xl">
      <SectionHeader
        title="Próximas Saídas e Destinos Populares"
        subtitle="Descubra nossos roteiros mais procurados e reserve sua vaga para a próxima aventura"
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
            🚀 Próximas Saídas Confirmadas
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Garanta sua vaga nos nossos roteiros mais populares com datas já confirmadas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {jasturConfig.featuredDestinations.slice(0, 3).map((destination, index) => (
            <Card
              key={destination.id}
              delay={index * 0.2}
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <CardBody className="p-0">
                {/* Imagem do destino */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge de destaque */}
                  <div className="absolute top-4 left-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.category}
                  </div>
                  
                  {/* Removido o bloco de preço */}
                </div>

                {/* Conteúdo do card */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {destination.name}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Informações do roteiro */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Calendar className="w-4 h-4 text-primary-500" />
                      <span><strong>Clima:</strong> {getDestinationFeatures(destination).clima}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Clock className="w-4 h-4 text-primary-500" />
                      <span><strong>Melhor época:</strong> {getDestinationFeatures(destination).melhorEpoca}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Users className="w-4 h-4 text-primary-500" />
                      <span><strong>População:</strong> {getDestinationFeatures(destination).populacao}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Star className="w-4 h-4 text-secondary-500" />
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

      {/* Seção de Destinos Populares */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ⭐ Destinos Mais Procurados
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça os destinos que nossos clientes mais amam e que sempre fazem sucesso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {jasturConfig.featuredDestinations.slice(3, 7).map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleDestinationClick(destination.id)}
            >
              <div className="relative h-64 overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Conteúdo sobre a imagem */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-secondary-300 transition-colors duration-300">
                    {destination.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-secondary-400" />
                    <span className="text-sm">{destination.rating}/5</span>
                  </div>
                </div>

                {/* Ícone de seta */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
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