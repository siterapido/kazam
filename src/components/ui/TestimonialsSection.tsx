import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, MapPin, MessageCircle, Instagram } from 'lucide-react';
import { Section, SectionHeader } from './Section';

import { CTAButton } from './CTAButton';
import { jasturConfig } from '../../config/jastur';


const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Dados dos depoimentos - Focados no novo posicionamento da Kazan
  const testimonials = [
    {
      id: 1,
      name: "Thiago Oliveira",
      location: "Natal, RN",
      rating: 5,
      destination: "Passeio de Buggy - Genipabu",
      date: "há 1 semana",
      image: "https://img.freepik.com/fotos-gratis/homem-barbudo-expressivo-vestindo-camisa_273609-5894.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: `Cara, que experiência incrível! A ${jasturConfig.company.name} conseguiu fazer um passeio que cabia no meu orçamento e ainda foi melhor que eu esperava. O pessoal é jovem como eu e entende o que a gente quer. Saí renovado!`,
      highlights: ["Cabia no orçamento", "Pessoal jovem", "Saí renovado"],
      verified: true,
      helpful: 18
    },
    {
      id: 2,
      name: "Camila Santos",
      location: "Parnamirim, RN",
      rating: 5,
      destination: "Trilha Ecológica - Mata da Pipa",
      date: "há 2 semanas",
      image: "https://img.freepik.com/fotos-gratis/ainda-bem-que-mulher-bonita-com-rabo-de-cavalo-encaracolado-tem-sorriso-charmoso-usa-sueter-listrado-poses_273609-8851.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: `Finalmente uma empresa que entende que nem todo mundo pode pagar uma fortuna pra se divertir! A trilha foi perfeita, me conectei com a natureza e ainda fiz novos amigos. A ${jasturConfig.company.name} é diferente mesmo!`,
      highlights: ["Preço acessível", "Conexão com natureza", "Novos amigos"],
      verified: true,
      helpful: 15
    },
    {
      id: 3,
      name: "Rafael Costa",
      location: "Mossoró, RN",
      rating: 5,
      destination: "Passeio de Quadriciclo",
      date: "há 3 semanas",
      image: "https://img.freepik.com/fotos-gratis/jovem-bonito-posando-com-chapeu_23-2148884336.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: "Mano, que adrenalina! Trabalho a semana toda e precisava de algo assim. O atendimento foi super humano, parcelaram pra mim e ainda ganhei desconto por ser da comunidade. Voltando com certeza!",
      highlights: ["Adrenalina", "Atendimento humano", "Parcelaram"],
      verified: true,
      helpful: 12
    },
    {
      id: 4,
      name: "Jéssica Almeida",
      location: "Ceará-Mirim, RN",
      rating: 5,
      destination: "Day Use - Praia de Pipa",
      date: "há 1 mês",
      image: "https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-mulher-roxa_273609-11669.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: `Que dia maravilhoso! Estava precisando relaxar e a ${jasturConfig.company.name} organizou tudo pensando no meu bem-estar. Preço justo, pessoas incríveis e saí de lá com a energia renovada. Recomendo demais!`,
      highlights: ["Bem-estar", "Preço justo", "Energia renovada"],
      verified: true,
      helpful: 20
    },
    {
      id: 5,
      name: "Anderson Silva",
      location: "Macaíba, RN",
      rating: 5,
      destination: "Mergulho - Maracajaú",
      date: "há 2 dias",
      image: "https://img.freepik.com/fotos-gratis/homem-maduro-com-barba-e-cabelo-grisalho_23-2148884340.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: `Experiência transformadora! Nunca pensei que conseguiria fazer mergulho com meu salário, mas a ${jasturConfig.company.name} tornou isso possível. O projeto "Minhas Férias, Minha Vida" é genial - paguei parcelado e realizei um sonho!`,
      highlights: ["Transformadora", "Tornou possível", "Sonho realizado"],
      verified: true,
      helpful: 25
    },
    {
      id: 6,
      name: "Larissa Medeiros",
      location: "São Gonçalo do Amarante, RN",
      rating: 5,
      destination: "Passeio de Catamarã",
      date: "há 5 dias",
      image: "https://img.freepik.com/fotos-gratis/mulher-jovem-e-atraente-com-cabelo-longo-e-escuro_23-2148884345.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: `Que empresa incrível! Além do passeio ser lindo, eles realmente se importam com a gente. Atendimento personalizado, preços honestos e ainda fazem parte de uma comunidade que me dá descontos em outros lugares. Virei fã!`,
      highlights: ["Se importam", "Preços honestos", "Comunidade"],
      verified: true,
      helpful: 16
    }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-accent-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Para depoimentos rápidos (quick testimonials) - Focados no novo posicionamento:
  const quickTestimonials = [
    {
      id: 1,
      name: "Bruno Medeiros",
      initials: "BM",
      image: "https://img.freepik.com/fotos-gratis/retrato-de-um-homem-em-estilo-de-desenho-animado_23-2151134275.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: "Preço que cabe no bolso!", destination: "Buggy - Genipabu"
    },
    {
      id: 2,
      name: "Carla Freitas",
      initials: "CF",
      image: "https://img.freepik.com/fotos-gratis/mulher-de-desenho-animado-com-oculos_23-2151136901.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: "Atendimento humanizado!", destination: "Trilha - Pipa"
    },
    {
      id: 3,
      name: "Marcos Souza",
      initials: "MS",
      image: "https://img.freepik.com/fotos-gratis/personagem-de-desenho-animado-em-3d_23-2151033951.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: "Parcelaram pra mim!", destination: "Quadriciclo"
    },
    {
      id: 4,
      name: "Priscila Lima",
      initials: "PL",
      image: "https://img.freepik.com/fotos-gratis/close-de-uma-garota-elegante-e-atraente-com-um-hairbun-sorrindo-e-parecendo-esperancosa_176420-25550.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: "Renovei as energias!", destination: "Day Use - Pipa"
    },
    {
      id: 5,
      name: "Gustavo Rocha",
      initials: "GR",
      image: "https://img.freepik.com/fotos-gratis/homem-jovem-e-atraente-com-cabelo-curto-e-escuro_23-2148884342.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: "Comunidade incrível!", destination: "Mergulho - Maracajaú"
    },
    {
      id: 6,
      name: "Fernanda Gomes",
      initials: "FG",
      image: "https://img.freepik.com/fotos-gratis/mulher-jovem-e-atraente-com-cabelo-longo-e-escuro_23-2148884346.jpg?w=200&h=200&fit=facearea&facepad=2",
      text: "Realizei meu sonho!", destination: "Catamarã"
    }
  ];

  return (
    <Section id="depoimentos" background="white" padding="xl">
      <SectionHeader
        title="Avaliações dos nossos clientes"
        subtitle={`Veja o que nossos clientes estão dizendo sobre suas experiências com a ${jasturConfig.company.name}`}
        align="center"
      />

      {/* Estatísticas de satisfação */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
            <div className="text-gray-600 text-sm">Avaliação média</div>
            <div className="flex justify-center mt-2">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">1.247</div>
            <div className="text-gray-600 text-sm">Avaliações</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600 text-sm">Recomendam</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">5.0</div>
            <div className="text-gray-600 text-sm">Qualidade</div>
          </div>
        </div>
      </motion.div>

      {/* Carrossel de depoimentos - Estilo Google */}
      <div className="relative max-w-4xl mx-auto mb-16 px-4 md:px-0">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="bg-white p-6 md:p-8 lg:p-12">
                {/* Header do depoimento */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </h3>
                        {testimonials[currentIndex].verified && (
                          <div className="bg-secondary-100 text-secondary-600 text-xs px-2 py-1 rounded-full">
                            ✓ Verificado
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {testimonials[currentIndex].location}
                      </div>
                      <div className="text-xs text-gray-400">
                        {testimonials[currentIndex].date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>

                {/* Texto do depoimento */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>

                {/* Destino visitado */}
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-4 h-4 text-secondary-500" />
                  <span className="text-sm text-gray-600">
                    Visitou <strong>{testimonials[currentIndex].destination}</strong>
                  </span>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonials[currentIndex].highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-accent-50 text-accent-700 text-sm px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Footer do depoimento */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MessageCircle className="w-4 h-4" />
                      <span>{testimonials[currentIndex].helpful} pessoas acharam útil</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                        Útil
                      </button>
                      <span className="text-gray-300">•</span>
                      <button className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                        Responder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles de navegação */}
        <button
          onClick={prevTestimonial}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 z-10"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 z-10"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Grid de depoimentos rápidos */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Mais avaliações recentes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quickTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    {renderStars(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{testimonial.destination}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Junte-se aos nossos clientes satisfeitos!
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Faça parte das mais de 1.200 avaliações positivas e descubra por que a ${jasturConfig.company.name} é a escolha certa para seus passeios.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
            <CTAButton
              size="lg"
              variant="secondary"
              icon="whatsapp"
              whatsappNumber={jasturConfig.contact.whatsapp}
              whatsappMessage={jasturConfig.whatsappMessages.duvidas}
            >
              Falar Conosco
            </CTAButton>
            <CTAButton
              size="lg"
              variant="outline"
              icon="arrow"
              onClick={() => document.getElementById('destinos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white/30 text-white hover:bg-white hover:text-gray-900 hover:border-white"
            >
              Ver Destinos
            </CTAButton>
          </div>
        </div>
      </motion.div>

      {/* Seção de Instagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16"
      >
        <div className="bg-gradient-to-r from-kazan-secondary to-kazan-accent rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Siga-nos no Instagram
          </h3>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Acompanhe nossas aventuras, destinos incríveis e momentos especiais dos nossos clientes
          </p>
          <a 
            href={`https://instagram.com/${jasturConfig.contact.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30"
          >
            <Instagram className="w-6 h-6" />
            <span className="font-semibold text-lg">@{jasturConfig.contact.instagram.replace('@', '')}</span>
          </a>
        </div>
      </motion.div>
    </Section>
  );
};

export default TestimonialsSection;