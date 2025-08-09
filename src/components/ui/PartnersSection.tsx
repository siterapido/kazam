import React from 'react';
import { motion } from 'motion/react';
import { Handshake, Star, Users, Shield } from 'lucide-react';

import { Section, SectionHeader } from './Section';
import { Card, CardBody } from './Card';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      id: 'renascer-vans',
      name: 'Renascer Vans',
      description: 'Especializada em transporte executivo e turístico com frota moderna e confortável',
      image: '/images/parceiro1.jpeg',
      features: [
        'Frota moderna e bem conservada',
        'Motoristas experientes e certificados',
        'Conforto e segurança garantidos',
        'Atendimento personalizado'
      ],
      contact: '0800 081 1818'
    },
    {
      id: 'parvi',
      name: 'Parvi Transporte',
      description: 'Líder em fretamento e turismo com opções de semi-leito e leito para viagens de longa distância',
      image: '/images/parceiro2.jpeg',
      features: [
        'Ônibus de luxo com semi-leito e leito',
        'Wi-Fi e acessibilidade para cadeirantes',
        'Roteiros nacionais e internacionais',
        'Qualidade premium reconhecida'
      ],
      contact: '0800 081 1818'
    }
  ];

  return (
    <Section id="parceiros" background="white" padding="xl" className="relative overflow-hidden">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-100/30 rounded-full translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-200/20 rounded-full -translate-x-24 translate-y-24"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-secondary-100/40 rounded-full"></div>
      
      <div className="relative z-10">
        <SectionHeader
          title="Nossos Parceiros"
          subtitle="Trabalhamos com as melhores empresas de transporte para garantir sua segurança e conforto"
          align="center"
          className="text-gray-900"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur-sm border border-gray-200/50">
                <CardBody className="p-8">
                  {/* Imagem do parceiro */}
                  <div className="relative mb-8 overflow-hidden rounded-2xl">
                    <motion.img
                      src={partner.image}
                      alt={`${partner.name} - Parceiro JasTur`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Badge de parceiro */}
                    <div className="absolute top-4 right-4 bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Handshake size={16} />
                      Parceiro
                    </div>
                  </div>

                  {/* Informações do parceiro */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>

                  {/* Características */}
                  <div className="space-y-3 mb-8">
                    {partner.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center gap-3 text-sm text-gray-700 bg-secondary-50 rounded-lg p-3 group-hover:bg-secondary-100 transition-colors duration-300"
                      >
                        <Star size={16} className="text-secondary-600 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>


                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Seção de benefícios da parceria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Por que trabalhamos com <span className="text-secondary-600">parceiros de qualidade</span>?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossas parcerias garantem que você tenha acesso aos melhores serviços de transporte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Segurança Garantida",
                description: "Frotas certificadas e motoristas qualificados"
              },
              {
                icon: Users,
                title: "Atendimento Premium",
                description: "Serviço personalizado e atenção aos detalhes"
              },
              {
                icon: Star,
                title: "Qualidade Comprovada",
                description: "Parceiros com histórico de excelência"
              },
              {
                icon: Handshake,
                title: "Confiança Total",
                description: "Relacionamento de longa data e confiança mútua"
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
                  <benefit.icon size={32} className="text-secondary-600" />
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
        </motion.div>
      </div>
    </Section>
  );
};

export default PartnersSection; 