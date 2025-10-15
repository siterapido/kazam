import React from 'react';
import { motion } from 'motion/react';
import { TourCard } from './TourCard';
import { composeWhatsAppMessage, openWhatsApp } from '../../lib/utils';
import { jasturConfig } from '../../config/jastur';

const UpcomingToursSection: React.FC = () => {
  const handleUpcomingTourClick = (tour: any) => {
    const message = composeWhatsAppMessage({
      kind: 'destination',
      destination: {
        id: tour.title.toLowerCase().replace(/\s+/g, '-'),
        name: tour.title,
        description: tour.description
      }
    });
    openWhatsApp(jasturConfig.contact.whatsapp, message);
  };

  const tours = [
    {
      title: "São José do Campestre",
      date: "19/10",
      location: "São José do Campestre - RN",
      description: "Passeio cultural e ecológico por São José do Campestre, com pontos históricos e natureza.",
      includes: [
        "🚍 Saída de Natal",
        "🗺️ Guia de turismo",
        "📸 Paradas para fotos",
        "💧 Águas e suporte básico"
      ],
      price: "R$ 130,00",
      cta: "Garanta sua vaga para São José do Campestre!",
      images: [
        "/Próximos destinos/campestre1.png"
      ]
    },
    {
      title: "Pedra da Boca",
      date: "30/11",
      location: "Araruna - PB",
      description: "Aventura na Pedra da Boca com paisagens únicas e trilhas para todos os níveis.",
      includes: [
        "🚍 Transporte ida e volta",
        "👣 Trilhas guiadas",
        "📸 Pontos instagramáveis",
        "🧴 Suporte durante o passeio"
      ],
      price: "Consulte",
      cta: "Reserve agora sua experiência na Pedra da Boca!",
      images: [
        "/Próximos destinos/pedra-da-boca.webp"
      ]
    },
    {
      title: "Ensaios da Anitta",
      date: "17/01",
      location: "Natal – Recife",
      description: "Bate e volta para curtir os ensaios da Anitta com segurança e comodidade.",
      includes: [
        "🚐 Bate e volta",
        "📲 Reservas via WhatsApp",
        "🎶 Clima de Carnaval",
        "🛡️ Retorno seguro"
      ],
      highlights: [
        "🥳 Diversão garantida",
        "🎤 Experiência única"
      ],
      price: "R$ 140,00",
      cta: "Garanta sua vaga para os ensaios da Anitta!",
      images: [
        "/Próximos destinos/annita.png"
      ]
    },
    {
      title: "Aldeia Catu",
      date: "25/01",
      location: "Catu - RN",
      description: "Imersão cultural na Aldeia Catu com vivência local e turismo comunitário.",
      includes: [
        "🚍 Saída de Natal",
        "🗺️ Guia local",
        "🤝 Vivência cultural",
        "📸 Paradas para fotos"
      ],
      price: "Consulte",
      cta: "Participe dessa experiência na Aldeia Catu!",
      images: [
        "/Próximos destinos/aldeia-catu.jpg"
      ]
    },
    {
      title: "Pipa",
      date: "08/02",
      location: "Tibau do Sul - RN",
      description: "Day trip para Pipa: praias paradisíacas, falésias e pontos instagramáveis.",
      includes: [
        "🚍 Transporte ida e volta",
        "🏖️ Acesso às praias",
        "📸 Pontos instagramáveis",
        "👨‍🏫 Guia especializado"
      ],
      price: "Consulte",
      cta: "Reserve sua vaga e venha curtir Pipa!",
      images: [
        "/Próximos destinos/pipa.jpg"
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
              onCtaClick={() => handleUpcomingTourClick(tour)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingToursSection;