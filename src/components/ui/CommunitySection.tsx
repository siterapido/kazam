import React from 'react';
import { motion } from 'motion/react';
import { Users, MessageCircle, Gift, Star, Calendar } from 'lucide-react';

import { Section, SectionHeader } from './Section';
import { CTAButton } from './CTAButton';
import { jasturConfig } from '../../config/jastur';

const GROUP_LINK = 'https://chat.whatsapp.com/G51s8ibc6rs35ODAis7qab';

const CommunitySection: React.FC = () => {
  const benefits = [
    { icon: <Users className="w-6 h-6 text-primary-600" />, title: 'Rede de Aventuras', description: 'Conheça pessoas com os mesmos interesses e combine passeios.' },
    { icon: <Gift className="w-6 h-6 text-secondary-600" />, title: 'Vantagens Exclusivas', description: 'Acesso antecipado a vagas, descontos e mimos da comunidade.' },
    { icon: <Calendar className="w-6 h-6 text-accent-600" />, title: 'Eventos e Saídas', description: 'Fique por dentro das próximas saídas e encontros especiais.' },
    { icon: <Star className="w-6 h-6 text-cta-600" />, title: 'Dicas e Reviews', description: 'Compartilhe experiências e receba recomendações dos membros.' }
  ];

  const handleJoinGroup = () => {
    window.open(GROUP_LINK, '_blank');
  };

  return (
    <Section id="comunidade" background="white" padding="xl">
      <SectionHeader
        title={`Comunidade ${jasturConfig.company.name}`}
        subtitle="Entre para nosso grupo e viva benefícios, companhia e informação em cada aventura"
        align="center"
      />

      {/* Card principal convidativo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 max-w-5xl mx-auto mb-12"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-gray-800 font-medium mb-4">
            <MessageCircle className="w-5 h-5 text-primary-600" />
            <span>Grupo oficial no WhatsApp</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Faça parte da nossa comunidade
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conecte-se com a {jasturConfig.company.name}, receba novidades em primeira mão, combine passeios e aproveite vantagens exclusivas.
          </p>
        </div>

        {/* Benefícios em grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex-shrink-0">{b.icon}</div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">{b.title}</h4>
                <p className="text-sm text-gray-600">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA para entrar no grupo */}
        <div className="text-center">
          <CTAButton
            size="lg"
            variant="secondary"
            icon="whatsapp"
            onClick={handleJoinGroup}
            className="min-w-[280px]"
          >
            Entrar no Grupo do WhatsApp
          </CTAButton>
        </div>
      </motion.div>

      {/* Bloco extra de prova social */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full shadow-lg">
          <Users className="w-5 h-5" />
          <span className="font-semibold">Junte-se aos viajantes da comunidade</span>
        </div>
      </motion.div>
    </Section>
  );
};

export default CommunitySection;