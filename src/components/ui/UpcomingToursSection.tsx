import React from 'react';
import { motion } from 'motion/react';
import { TourCard } from './TourCard';

const UpcomingToursSection: React.FC = () => {
  const tours = [
    {
      title: "LAGOA DO ARROZ",
      date: "28/09",
      location: "Búzios",
      description: "Trilha de 5km com banho na lagoa cristalina e diversão garantida",
      includes: [
        "🚍 Saída de Natal",
        "🍽️ Café da manhã e almoço",
        "👣 Trilha + banho refrescante",
        "🎒 Translado + guia de turismo"
      ],
      price: "R$ 85,00",
      cta: "Garanta já sua vaga e venha viver essa experiência com a Kazan Adventure!",
      images: [
        "/Próximos destinos/lagoa do arroz.jpg.webp"
      ]
    },
    {
      title: "BATE E VOLTA ENSAIO DA ANITA",
      date: "17/01",
      location: "Natal – Recife",
      description: "Oportunidade de curtir o ensaio mais esperado do ano com clima de Carnaval e retorno seguro",
      includes: [
        "📲 Informações/reservas via direct ou WhatsApp"
      ],
      highlights: [
        "🌴🔥 Experiência única",
        "🥳🎶 Diversão garantida"
      ],
      price: "Consulte",
      cta: "Garanta já sua vaga e venha viver essa experiência única com a gente!",
      images: [
        "/Próximos destinos/annita.png"
      ]
    },
    {
      title: "BÚZIOS RN",
      date: "15/02",
      location: "Nísia Floresta - RN",
      description: "Explore as belezas naturais de Búzios RN com suas praias paradisíacas e paisagens deslumbrantes",
      includes: [
        "🚍 Transporte ida e volta",
        "🏖️ Acesso às praias",
        "📸 Pontos instagramáveis",
        "🥥 Água de coco inclusa",
        "👨‍🏫 Guia especializado"
      ],
      highlights: [
        "🌊 Praias cristalinas",
        "🌅 Pôr do sol único",
        "🐚 Piscinas naturais"
      ],
      price: "R$ 120,00",
      cta: "Reserve sua vaga e descubra o paraíso de Búzios RN!",
      images: [
        "/Próximos destinos/buzios rn.webp"
      ]
    }
  ];

  return (
    <section id="destinos" className="py-16 px-4" style={{ backgroundColor: '#F9F9E1' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Próximos Destinos
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Descubra aventuras incríveis que estão por vir! Garante já sua vaga nos nossos próximos passeios.
          </motion.p>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {tours.map((tour, index) => (
            <TourCard
              key={index}
              title={tour.title}
              date={tour.date}
              location={tour.location}
              description={tour.description}
              includes={tour.includes}
              highlights={tour.highlights}
              price={tour.price}
              cta={tour.cta}
              images={tour.images}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingToursSection;