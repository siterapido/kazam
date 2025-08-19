import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';

import { jasturConfig } from '../../config/jastur';
import { ImageCarousel } from '../ui/ImageCarousel';
import { CTAButton } from '../ui/CTAButton';
import { Card, CardBody } from '../ui/Card';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { openWhatsApp } from '../../lib/utils';

const TourDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Buscar o passeio pelos dados de configuração
  const tour = jasturConfig.featuredDestinations.find(destination => destination.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Passeio não encontrado</h1>
          <p className="text-gray-600 mb-8">O passeio que você está procurando não existe.</p>
          <CTAButton
            variant="primary"
            onClick={() => navigate('/')}
            icon="arrow"
          >
            Voltar à Página Inicial
          </CTAButton>
        </div>
      </div>
    );
  }

  // Função para obter imagens específicas de cada passeio
  const getTourImages = (tourId: string): string[] => {
    const imageMap: Record<string, string[]> = {
      'buggy-litoral-norte': [
        '/Novos Passeios/🏖️ BUGGY LITORAL NORTE/buggy-1.png',
        '/Novos Passeios/🏖️ BUGGY LITORAL NORTE/buggy-2.png',
        '/Novos Passeios/🏖️ BUGGY LITORAL NORTE/buggy-3.png',
        '/Novos Passeios/🏖️ BUGGY LITORAL NORTE/buggy-4.png',
        '/Novos Passeios/🏖️ BUGGY LITORAL NORTE/buggy-5.png',
        '/Novos Passeios/🏖️ BUGGY LITORAL NORTE/buggy-6.png',
        '/Novos Passeios/🏖️ BUGGY LITORAL NORTE/buggy-7.png',
        '/Novos Passeios/🏖️ BUGGY LITORAL NORTE/buggy-8.png'
      ],
      '4x4-litoral-sul': [
        '/Novos Passeios/🚙 PASSEIO 4X4 LITORAL SUL/4x4-1.png',
        '/Novos Passeios/🚙 PASSEIO 4X4 LITORAL SUL/4x4-2.png',
        '/Novos Passeios/🚙 PASSEIO 4X4 LITORAL SUL/4x4-3.png',
        '/Novos Passeios/🚙 PASSEIO 4X4 LITORAL SUL/4x4-4.png',
        '/Novos Passeios/🚙 PASSEIO 4X4 LITORAL SUL/4x4-5.png',
        '/Novos Passeios/🚙 PASSEIO 4X4 LITORAL SUL/4x4-6.png',
        '/Novos Passeios/🚙 PASSEIO 4X4 LITORAL SUL/4x4-7.png',
        '/Novos Passeios/🚙 PASSEIO 4X4 LITORAL SUL/4x4-8.png',
        '/Novos Passeios/🚙 PASSEIO 4X4 LITORAL SUL/4x4-9.png'
      ],
      'praias-pipa': [
        '/Novos Passeios/🌊 PASSEIO PELAS PRAIAS DE PIPA/pipa-1.png',
        '/Novos Passeios/🌊 PASSEIO PELAS PRAIAS DE PIPA/pipa-2.png',
        '/Novos Passeios/🌊 PASSEIO PELAS PRAIAS DE PIPA/pipa-3.png',
        '/Novos Passeios/🌊 PASSEIO PELAS PRAIAS DE PIPA/pipa-4.png',
        '/Novos Passeios/🌊 PASSEIO PELAS PRAIAS DE PIPA/pipa-5.png',
        '/Novos Passeios/🌊 PASSEIO PELAS PRAIAS DE PIPA/pipa-6.png',
        '/Novos Passeios/🌊 PASSEIO PELAS PRAIAS DE PIPA/pipa-8.png'
      ],
      'parrachos-rio-fogo': [
        '/images/tours/parrachos-rio-fogo/riodofogo-1.png',
        '/images/tours/parrachos-rio-fogo/riodofogo-2.png',
        '/images/tours/parrachos-rio-fogo/riodofogo-3.png',
        '/images/tours/parrachos-rio-fogo/riodofogo-4.png',
        '/images/tours/parrachos-rio-fogo/riodofogo-5.png',
        '/images/tours/parrachos-rio-fogo/riodofogo-6.png',
        '/images/tours/parrachos-rio-fogo/riodofogo-7.png',
        '/images/tours/parrachos-rio-fogo/riodofogo-8.png',
        '/images/tours/parrachos-rio-fogo/riodofogo-9.png'
      ],
      'aventura-maracajau': [
        '/images/tours/aventura-maracajau/maracajau-1.png',
        '/images/tours/aventura-maracajau/maracajau-2.png',
        '/images/tours/aventura-maracajau/maracajau-3.png',
        '/images/tours/aventura-maracajau/maracajau-4.png',
        '/images/tours/aventura-maracajau/maracajau-6.png',
        '/images/tours/aventura-maracajau/maracajau-7.png',
        '/images/tours/aventura-maracajau/maracajau-8.png',
        '/images/tours/aventura-maracajau/maracajau-9.png',
        '/images/tours/aventura-maracajau/maracajau-10.png'
      ]
    };

    return imageMap[tourId] || [tour.image];
  };

  const handleWhatsAppContact = () => {
    const message = `Olá! Gostaria de saber mais sobre o passeio "${tour.name}". Poderia me dar mais informações sobre disponibilidade, preços e como reservar?`;
    openWhatsApp(jasturConfig.contact.whatsapp, message);
  };

  const tourImages = getTourImages(tour.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header com navegação */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Voltar</span>
            </button>
            
            <div className="flex items-center gap-4">
              <CTAButton
                variant="primary"
                size="sm"
                icon="whatsapp"
                onClick={handleWhatsAppContact}
              >
                Reservar Agora
              </CTAButton>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Título e informações básicas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
              {tour.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{tour.rating}</span>
              <span className="text-sm text-gray-500">({tour.reviewCount} avaliações)</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {tour.name}
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {tour.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carrossel de imagens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <ImageCarousel
              images={tourImages}
              alt={tour.name}
              className="h-96 md:h-[500px]"
              showThumbnails={true}
              autoPlay={false}
            />
          </motion.div>

          {/* Informações e reserva */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Card de informações principais */}
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informações do Passeio</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-500" />
                    <div>
                      <p className="font-medium text-gray-900">Saídas</p>
                      <p className="text-gray-600">{tour.departureDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <div>
                      <p className="font-medium text-gray-900">Duração</p>
                      <p className="text-gray-600">{tour.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary-500" />
                    <div>
                      <p className="font-medium text-gray-900">Vagas Disponíveis</p>
                      <p className="text-gray-600">{tour.availableSpots} pessoas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary-500" />
                    <div>
                      <p className="font-medium text-gray-900">Categoria</p>
                      <p className="text-gray-600">{tour.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-600 mb-2">
                      R$ {tour.price}
                    </p>
                    <p className="text-sm text-gray-500">por pessoa</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* CTAs de contato */}
            <div className="space-y-3">
              <CTAButton
                variant="primary"
                size="lg"
                icon="whatsapp"
                onClick={handleWhatsAppContact}
                className="w-full"
              >
                Reservar pelo WhatsApp
              </CTAButton>
              
              <CTAButton
                variant="outline"
                size="lg"
                icon="phone"
                onClick={() => window.open(`tel:${jasturConfig.contact.phone}`)}
                className="w-full"
              >
                Ligar Agora
              </CTAButton>
            </div>
          </motion.div>
        </div>

        {/* O que está incluso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Card>
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">O que está incluso</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.included.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para esta aventura?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Entre em contato conosco e garante sua vaga neste passeio incrível!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                variant="secondary"
                size="lg"
                icon="whatsapp"
                onClick={handleWhatsAppContact}
              >
                Reservar Agora
              </CTAButton>
              <CTAButton
                variant="outline"
                size="lg"
                icon="arrow"
                onClick={() => navigate('/')}
                className="border-white/30 text-white hover:bg-white hover:text-gray-900"
              >
                Ver Outros Passeios
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton 
        phoneNumber={jasturConfig.contact.whatsapp} 
        message={`Olá! Gostaria de saber mais sobre o passeio "${tour.name}".`}
      />
    </div>
  );
};

export default TourDetailsPage;