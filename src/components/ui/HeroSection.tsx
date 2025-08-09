import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, MapPin } from 'lucide-react';
import { BackgroundSlider } from './BackgroundSlider';
import { Logo } from './Logo';
import { CTAButton } from './CTAButton';
import { jasturConfig } from '../../config/jastur';

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative min-h-screen flex items-center overflow-x-hidden">
          <BackgroundSlider />
          
          {/* Conteúdo principal */}
          <div className="relative z-10 w-full py-24 md:pb-32 lg:pb-36 lg:pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <div className="mx-auto max-w-4xl text-center">
                
                {/* Badge de destaque */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
                >
                  <MapPin className="w-4 h-4 text-secondary-400" />
                  <span className="text-white text-sm font-medium">Destinos incríveis em todo o Brasil</span>
                </motion.div>

                {/* Título principal */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                  <span className="text-primary-200">JasTur:</span> sua próxima{' '}
                  <span className="text-secondary-400">parada é aqui!</span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Excursões, Viagens e Passeios para você conhecer lugares incríveis sem preocupação.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                  <CTAButton
                    size="lg"
                    variant="secondary"
                    icon="whatsapp"
                    whatsappNumber={jasturConfig.contact.whatsapp}
                    whatsappMessage={jasturConfig.whatsappMessages.roteiros}
                    className="w-full min-w-[320px] sm:w-auto px-2 py-1 text-sm"
                  >
                    Falar no WhatsApp
                  </CTAButton>
                  
                  <CTAButton
                    size="lg"
                    variant="outline"
                    icon="arrow"
                    onClick={() => document.getElementById('destinos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full min-w-[320px] sm:w-auto px-2 py-1 text-sm border-white/30 text-white hover:bg-white hover:text-gray-900 hover:border-white"
                  >
                    Destinos Populares
                  </CTAButton>
                </motion.div>


              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

const menuItems = [
  { name: 'Serviços', href: '#servicos' },
  { name: 'Destinos', href: '#destinos' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Contato', href: '#contato' },
];

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [isOverWhiteSection, setIsOverWhiteSection] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Detectar se está sobre seções brancas
      const whiteSections = document.querySelectorAll('section.bg-white, section.bg-gray-50, section.bg-gradient-to-br');
      let overWhite = false;
      
      whiteSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          overWhite = true;
        }
      });
      
      setIsOverWhiteSection(overWhite);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (href: string) => {
    setMenuState(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determinar as classes do menu baseado no estado
  const getMenuClasses = () => {
    if (scrolled) {
      if (isOverWhiteSection) {
        return 'bg-white/70 backdrop-blur-md shadow-lg border border-gray-200/30';
      } else {
        return 'bg-white/20 backdrop-blur-md shadow-lg';
      }
    }
    return '';
  };

  const getTextColor = () => {
    if (scrolled && isOverWhiteSection) {
      return 'text-gray-900';
    }
    return 'text-white';
  };

  const getButtonClasses = () => {
    if (scrolled && isOverWhiteSection) {
      return 'bg-transparent text-gray-900 border-gray-300/60 hover:bg-gray-100/10 hover:border-gray-400';
    }
    return 'bg-transparent text-white border-white/60 hover:bg-white/10 hover:border-white';
  };

  const getCTAButtonClasses = () => {
    if (scrolled && isOverWhiteSection) {
      return '!bg-transparent !border-secondary-500 !text-gray-900 hover:!bg-transparent hover:!border-secondary-600 hover:!text-gray-900 !shadow-none';
    }
    return '!bg-transparent !border-secondary-500 !text-white hover:!bg-transparent hover:!border-secondary-400 hover:!text-white !shadow-none';
  };

  return (
    <header className="overflow-x-hidden">
      <nav
        data-state={menuState && 'active'}
        className="group fixed z-50 w-full pt-2 overflow-x-hidden"
      >
        <div className={`mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12 overflow-x-hidden ${getMenuClasses()}`}>
          <motion.div
            className={`relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6 overflow-x-hidden ${
              scrolled ? 'lg:py-4' : ''
            }`}
          >
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto overflow-x-hidden">
              <a
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo size="md" />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className={`m-auto size-6 duration-200 ${getTextColor()} ${menuState ? 'rotate-180 scale-0 opacity-0' : ''}`} />
                <X className={`absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 ${getTextColor()} ${menuState ? 'rotate-0 scale-100 opacity-100' : ''}`} />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleMenuClick(item.href)}
                        className={`inline-flex items-center justify-center rounded-md h-9 px-3 text-sm font-medium transition-all duration-200 ${getButtonClasses()}`}
                      >
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-2xl group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none overflow-x-hidden">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleMenuClick(item.href)}
                        className="inline-flex items-center justify-center rounded-md h-10 px-4 text-base font-medium bg-transparent text-gray-700 border border-gray-300/60 hover:bg-gray-100/10 hover:border-gray-400 transition-all duration-200 w-full"
                      >
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <CTAButton
                  size="sm"
                  variant="outline"
                  icon="whatsapp"
                  whatsappNumber={jasturConfig.contact.whatsapp}
                  whatsappMessage={jasturConfig.whatsappMessages.default}
                  className={getCTAButtonClasses()}
                >
                  WhatsApp
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}; 