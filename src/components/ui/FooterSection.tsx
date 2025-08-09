import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { Logo } from './Logo';
import { jasturConfig } from '../../config/jastur';

const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="w-full bg-gray-900 text-gray-300">
      {/* Seção principal do rodapé */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Informações da empresa */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Logo size="lg" variant="icon" className="text-white" />
                <h3 className="text-2xl font-bold text-white">JasTur Turismo</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {jasturConfig.company.description} Conectamos pessoas a experiências inesquecíveis 
                através de viagens seguras e memoráveis desde {jasturConfig.company.founded}.
              </p>
              
              {/* Estatísticas da empresa */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-primary-400">{jasturConfig.stats.viagensRealizadas}</div>
                  <div className="text-sm text-gray-400">Viagens Realizadas</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-primary-400">{jasturConfig.stats.clientesSatisfeitos}</div>
                  <div className="text-sm text-gray-400">Satisfação</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#servicos" 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#destinos" 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('destinos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Próximas Saídas
                </a>
              </li>
              <li>
                <a 
                  href="#depoimentos" 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a 
                  href="#cta-final" 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cta-final')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="text-white font-medium">{jasturConfig.contact.phone}</div>
                  <div className="text-sm text-gray-400">Telefone</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="text-white font-medium">{jasturConfig.contact.email}</div>
                  <div className="text-sm text-gray-400">Email</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="text-white font-medium">Pernambuco, Brasil</div>
                  <div className="text-sm text-gray-400">Localização</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Seção de redes sociais e CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">
            
            {/* Redes sociais */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h5 className="text-white font-medium">Siga-nos:</h5>
              <div className="flex gap-3">
                <a 
                  href={`https://instagram.com/${jasturConfig.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* CTA final */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <CTAButton
                size="md"
                variant="primary"
                icon="whatsapp"
                whatsappNumber={jasturConfig.contact.whatsapp}
                whatsappMessage={jasturConfig.whatsappMessages.default}
              >
                WhatsApp
              </CTAButton>
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                title="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Seção inferior com informações legais */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} {jasturConfig.company.name}. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                CNPJ: {jasturConfig.company.cnpj} | Fundada em {jasturConfig.company.founded}
              </p>
            </div>

            {/* Links legais */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Política de Cancelamento
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Banner de certificação */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:justify-center md:items-center text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">Empresa Certificada</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">Seguro Viagem Incluso</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">Atendimento 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 