import React from "react";
import { motion } from "motion/react";
import { Heart, Users, DollarSign, Star, Shield } from "lucide-react";
import { Logo } from "./Logo";
import { jasturConfig } from "../../config/jastur";

const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Saúde e Bem-Estar",
      description: "Experiências que promovem conexão com a natureza e qualidade de vida"
    },
    {
      icon: Users,
      title: "Comunidade e Parcerias",
      description: "Conectamos parceiros locais e clientes em uma rede de benefícios"
    },
    {
      icon: DollarSign,
      title: "Acessibilidade Financeira",
      description: "Turismo financeiramente inclusivo com condições acessíveis"
    },
    {
      icon: Star,
      title: "Experiências Inesquecíveis",
      description: "Aventuras seguras e memoráveis que transformam vidas"
    },
    {
      icon: Shield,
      title: "Atendimento de Qualidade",
      description: "Atendimento humanizado, personalizado e de confiança"
    }
  ];

  return (
    <section id="sobre" className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Logo size="lg" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Sobre a {jasturConfig.company.name}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              {jasturConfig.company.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {jasturConfig.company.mission}
            </p>
          </div>
        </motion.div>

        {/* Pilares da marca */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Nossos <span className="text-primary-600">Pilares</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-4">
                  <pillar.icon size={28} className="text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {pillar.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Diferenciais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Nossos <span className="text-primary-600">Diferenciais</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Facilidade na negociação e condições acessíveis</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Turismo financeiramente inclusivo</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Ouvidoria ativa para melhorar continuamente as experiências</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Atendimento atencioso e personalizado</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Comunidade de vantagens e descontos exclusivos</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Eventos e atividades de bem-estar gratuitos</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Projeto "Minhas Férias, Minha Vida" com pagamento parcelado</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Jovens empreendedores potiguares com propósito</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;