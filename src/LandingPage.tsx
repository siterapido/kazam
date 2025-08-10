import React from "react";
import { HeroSection } from "./components/ui/HeroSection";
import ServicesSection from "./components/ui/BenefitsSection";
import DestinationsSection from "./components/ui/GallerySection";
import TestimonialsSection from "./components/ui/TestimonialsSection";
import FAQSection from "./components/ui/FAQSection";
import FooterSection from "./components/ui/FooterSection";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

import { jasturConfig } from "./config/jastur";

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex flex-col bg-gray-50 overflow-x-hidden">
      <HeroSection />
      <DestinationsSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
      
      {/* Botão flutuante de WhatsApp */}
      <WhatsAppButton 
        phoneNumber={jasturConfig.contact.whatsapp} 
        message={jasturConfig.whatsappMessages.default}
      />
    </main>
  );
};

export default LandingPage; 