import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Logo } from "./Logo";

const faqs = [
  {
    question: "Como faço para reservar uma viagem?",
    answer: "Basta clicar no botão 'Reservar agora' e preencher o formulário com seus dados.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartões de crédito, débito e transferências bancárias.",
  },
  {
    question: "Posso cancelar ou remarcar minha viagem?",
    answer: "Sim, consulte nossa política de cancelamento para mais detalhes.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <div className="flex justify-center mb-6">
          <Logo size="lg" />
        </div>
        <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 rounded-full px-4 py-2 mb-4">
          <HelpCircle className="w-5 h-5 text-secondary-500" />
          <span className="font-semibold">Dúvidas? Estamos aqui para ajudar!</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Perguntas Frequentes</h2>
        <p className="text-lg text-gray-600">Encontre respostas rápidas para as dúvidas mais comuns sobre nossos serviços e viagens.</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`transition-all duration-300 rounded-2xl shadow-md border border-gray-200 bg-white/90 overflow-hidden ${isOpen ? 'ring-2 ring-secondary-400' : ''}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-lg font-semibold text-gray-900 focus:outline-none hover:bg-secondary-50 transition-colors"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-secondary-400" />
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-6 h-6 text-secondary-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-6 pb-5 text-gray-700 text-base transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                style={{
                  transitionProperty: 'max-height, opacity',
                }}
              >
                {isOpen && <div>{faq.answer}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection; 