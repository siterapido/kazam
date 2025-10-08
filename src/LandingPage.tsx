import React from "react";
import { HeroSection } from "./components/ui/HeroSection";
import UpcomingToursSection from "./components/ui/UpcomingToursSection";
import UnifiedExploreSection from "./components/ui/UnifiedExploreSection";
import BuggyToursSection from "./components/ui/BuggyToursSection";
import TestimonialsSection from "./components/ui/TestimonialsSection";
import FAQSection from "./components/ui/FAQSection";
import FooterSection from "./components/ui/FooterSection";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

import { jasturConfig } from "./config/jastur";

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex flex-col overflow-x-hidden" style={{ backgroundColor: '#F9F9E1' }}>
      <HeroSection />
      <UpcomingToursSection />
      <BuggyToursSection />
      <UnifiedExploreSection />
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