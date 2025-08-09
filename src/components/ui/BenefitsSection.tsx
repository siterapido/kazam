import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

import { Section, SectionHeader } from './Section';
import { Card, CardBody } from './Card';
import { CTAButton } from './CTAButton';
import { ServiceIcon } from './ServiceIcon';
import { jasturConfig } from '../../config/jastur';
import { openWhatsApp } from '../../lib/utils';

const ServicesSection: React.FC = () => {
  const handleServiceClick = (serviceId: string) => {
    const service = jasturConfig.services.find(s => s.id === serviceId);
    const message = `Olá! Gostaria de saber mais sobre ${service?.title.toLowerCase()} da JasTur.`;
    openWhatsApp(jasturConfig.contact.whatsapp, message);
  };

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'excursoes': return 'bus';
      case 'viagens': return 'plane';
      case 'passeios': return 'car';
      default: return 'map';
    }
  };

  return (
    <Section id="servicos" background="white" padding="xl" className="relative overflow-hidden">
      {/* Background colorido com gradientes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-24"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-white/5 rounded-full translate-y-40"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-full"></div>
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-indigo-900/20"></div>
      
      <div className="relative z-10">
        <SectionHeader
          title="Explore do seu jeito"
          subtitle="Descubra as diferentes formas de viajar com a JasTur e escolha a que mais combina com você"
          align="center"
          className="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {jasturConfig.services.map((service, index) => (
            <Card
              key={service.id}
              delay={index * 0.2}
              className="group hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur-sm border-0"
            >
              <CardBody className="text-center p-8">
                {/* Ícone do serviço com mais destaque */}
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <ServiceIcon 
                    type={getServiceIcon(service.id) as any} 
                    size="lg" 
                    className="text-white"
                  />
                </motion.div>

                {/* Título do serviço */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefícios com mais destaque */}
                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-center gap-3 text-sm text-gray-700 bg-secondary-50 rounded-lg p-3 group-hover:bg-secondary-100 transition-colors duration-300"
                    >
                      <ServiceIcon type="check" size="sm" className="text-secondary-600 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA específico para cada serviço */}
                <CTAButton
                  size="md"
                  variant="primary"
                  icon="whatsapp"
                  onClick={() => handleServiceClick(service.id)}
                  className="w-full group-hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700"
                >
                  Saber Mais
                </CTAButton>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Seção de benefícios gerais com fundo branco */}
        <div className="mt-20 bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="text-secondary-600">JasTur</span>?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa experiência e dedicação fazem a diferença em cada viagem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'users',
                title: "Guias Especializados",
                description: "Profissionais experientes e certificados"
              },
              {
                icon: 'map',
                title: "Destinos Exclusivos",
                description: "Roteiros únicos e experiências autênticas"
              },
              {
                icon: 'calendar',
                title: "Flexibilidade Total",
                description: "Datas e horários que se adaptam a você"
              },
              {
                icon: 'star',
                title: "Qualidade Garantida",
                description: "98% de clientes satisfeitos"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-secondary-200 group-hover:to-secondary-300 transition-all duration-300 shadow-lg">
                  <ServiceIcon 
                    type={benefit.icon as any} 
                    size="lg" 
                    className="text-secondary-600"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA final da seção com mais destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-white/95 to-secondary-50/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-gray-900 shadow-2xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Pronto para sua próxima <span className="text-secondary-600">aventura</span>?
            </h3>
            <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você a escolher o roteiro perfeito e tirar todas as suas dúvidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                size="lg"
                variant="primary"
                icon="whatsapp"
                whatsappNumber={jasturConfig.contact.whatsapp}
                whatsappMessage={jasturConfig.whatsappMessages.duvidas}
                className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700"
              >
                Falar Conosco
              </CTAButton>
              <CTAButton
                size="lg"
                variant="outline"
                icon="arrow"
                onClick={() => document.getElementById('destinos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:text-white"
              >
                Ver Destinos
              </CTAButton>
            </div>
            
            {/* Seção de redes sociais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <p className="text-gray-600 mb-4">Siga-nos no Instagram para mais inspirações de viagem</p>
                <a 
                  href={`https://instagram.com/${jasturConfig.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-semibold">@{jasturConfig.contact.instagram.replace('@', '')}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ServicesSection; 