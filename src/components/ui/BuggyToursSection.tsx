import React from 'react';
import { Section, SectionHeader } from './Section';
import { TourCard } from './TourCard';
import { composeWhatsAppMessage, openWhatsApp } from '../../lib/utils';
import { jasturConfig } from '../../config/jastur';

const BuggyToursSection: React.FC = () => {
  const handleBuggyTourClick = (tour: any) => {
    const message = composeWhatsAppMessage({
      kind: 'service',
      service: {
        id: tour.title.toLowerCase().replace(/\s+/g, '-'),
        title: tour.title,
        description: tour.description
      }
    });
    openWhatsApp(jasturConfig.contact.whatsapp, message);
  };

  const tours = [
    {
      title: 'Passeio de Buggy (Genipabu) Dunas fixas e móveis',
      date: 'Diário',
      location: 'Genipabu/RN',
      description:
        'Conheça os dois parques de Genipabu com dunas fixas e móveis, paradas para fotos em visuais incríveis e opções de skybunda e sandboard.',
      includes: [
        'Saída: Aquário Natal',
        'Dunas de Genipabu (fixas e móveis)',
        'Parada fotos: Santuário da duna',
        'Parada fotos: Visual da Lagoa de Genipabu',
        'Parada fotos: Visual da praia de Genipabu',
        'Parada pra fotos na praia',
        'Skybunda (opcional)',
        'Sandboard (opcional)',
        'Parada banho de mar (opcional)',
        'Parada Rio Ceará-Mirim',
        'Buggy até 4 passageiros',
        'Duração aproximada: 2h',
        'Taxa ambiental das dunas inclusa',
        'Com emoção ou sem emoção'
      ],
      highlights: ['Dunas móveis', 'Fotos panorâmicas', 'Taxas inclusas'],
      price: 'R$ 530 / buggy',
      cta: 'Reservar pelo WhatsApp',
      images: ['/Próximos destinos/Passeios de Buggy/pexels-fabio-akamine-1315530474-29467599.jpg']
    },
    {
      title: 'Passeio de Buggy (Genipabu) só Duna fixa',
      date: 'Diário',
      location: 'Genipabu/RN',
      description:
        'Roteiro focado nas dunas fixas com paradas estratégicas para fotos e atividades opcionais. Ideal para quem quer uma experiência mais curta.',
      includes: [
        'Saída: Aquário Natal',
        'Duna fixa de Genipabu',
        'Parada fotos: Visual da Lagoa de Genipabu',
        'Parada fotos: Visual da praia de Genipabu',
        'Parada pra fotos na praia',
        'Skybunda (opcional)',
        'Sandboard (opcional)',
        'Parada banho de mar (opcional)',
        'Parada Rio Ceará-Mirim',
        'Buggy até 4 passageiros',
        'Duração aproximada: 1h30',
        'Taxa ambiental da duna inclusa',
        'Com emoção ou sem emoção'
      ],
      highlights: ['Experiência rápida', 'Paradas para fotos', 'Atividades opcionais'],
      price: 'R$ 360 / buggy',
      cta: 'Reservar pelo WhatsApp',
      images: ['/Próximos destinos/Passeios de Buggy/pexels-frederic-hancke-113473984-33503244.jpg']
    },
    {
      title: 'Passeio de Buggy (Genipabu) Litoral Norte',
      date: 'Saída 09:00',
      location: 'Litoral Norte/RN',
      description:
        'Roteiro completo pelo litoral norte: dunas, travessia de balsa, lagoas, emoções nas dunas de Jacumã e parada para almoço. Taxas inclusas.',
      includes: [
        'Saída: Aquário Natal (09:00)',
        'Dunas fixas de Genipabu',
        'Visual da lagoa e da praia',
        'Parada pra fotos na duna',
        'Travessia da balsa de Barra do Rio (ida e volta inclusa)',
        'Parada Lagoa de Pitangui (banho)',
        'Dunas douradas (fotos)',
        'Dunas de Jacumã (emoção)',
        'Skybunda/Aerobunda/Kamikaze (opcionais)',
        'Parada almoço (Jacumã)',
        'Buggy até 4 passageiros',
        'Duração aproximada: 6h',
        'Taxas de balsa e dunas inclusas',
        'Com emoção ou sem emoção'
      ],
      highlights: ['Travessia de balsa inclusa', 'Jacumã com emoção', 'Dia completo'],
      price: 'R$ 720 / buggy',
      cta: 'Reservar pelo WhatsApp',
      images: ['/Próximos destinos/Passeios de Buggy/pexels-victorlucss-16565329.jpg']
    }
  ];

  return (
    <Section id="buggy" background="gray" padding="xl">
      <SectionHeader
        title="Passeios de Buggy em Genipabu"
        subtitle="Escolha seu roteiro: dunas fixas, móveis ou litoral norte com travessia de balsa."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
            imagePosition={
              tour.title.includes('Litoral Norte') || tour.title.includes('Dunas fixas e móveis')
                ? 'bottom'
                : 'center'
            }
            delay={index * 0.1}
            onCtaClick={() => handleBuggyTourClick(tour)}
          />
        ))}
      </div>
    </Section>
  );
};

export default BuggyToursSection;