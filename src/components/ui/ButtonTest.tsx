import { CTAButton } from './CTAButton';

export function ButtonTest() {
  return (
    <div className="p-8 space-y-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8">Teste de Botões - Legibilidade e Responsividade</h2>
      
      {/* Teste de Variantes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variantes de Botão</h3>
        <div className="flex flex-wrap gap-4">
          <CTAButton variant="primary" size="sm">Botão Pequeno</CTAButton>
          <CTAButton variant="primary" size="md">Botão Médio</CTAButton>
          <CTAButton variant="primary" size="lg">Botão Grande</CTAButton>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <CTAButton variant="secondary" size="sm">Secundário</CTAButton>
          <CTAButton variant="outline" size="sm">Outline</CTAButton>
        </div>
      </div>

      {/* Teste de Textos Longos */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Teste de Textos Longos (Mobile)</h3>
        <div className="flex flex-wrap gap-4">
          <CTAButton variant="primary" size="sm">
            Texto Muito Longo Que Pode Quebrar Linha
          </CTAButton>
          <CTAButton variant="secondary" size="md">
            Outro Texto Extremamente Longo Para Testar Quebra
          </CTAButton>
        </div>
      </div>

      {/* Teste de Contraste */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Teste de Contraste no Hover</h3>
        <div className="flex flex-wrap gap-4">
          <CTAButton variant="outline" size="md">
            Passe o Mouse Aqui
          </CTAButton>
          <CTAButton variant="primary" size="md">
            Hover Teste
          </CTAButton>
        </div>
      </div>

      {/* Teste de Ícones */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Teste de Ícones</h3>
        <div className="flex flex-wrap gap-4">
          <CTAButton variant="primary" size="sm" icon="arrow">
            Com Seta
          </CTAButton>
          <CTAButton variant="secondary" size="md" icon="whatsapp">
            WhatsApp
          </CTAButton>
          <CTAButton variant="outline" size="lg" icon="none">
            Sem Ícone
          </CTAButton>
        </div>
      </div>

      {/* Instruções */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Como Testar:</h4>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Redimensione a janela para testar responsividade</li>
          <li>• Passe o mouse sobre os botões para verificar contraste</li>
          <li>• Verifique se os textos não quebram linha no mobile</li>
          <li>• Teste em diferentes tamanhos de tela</li>
        </ul>
      </div>
    </div>
  );
} 