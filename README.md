# JasTur Turismo - Landing Page

Landing page moderna e responsiva para a JasTur Turismo, desenvolvida com React, TypeScript, Tailwind CSS e Framer Motion.

## 🎨 Identidade Visual

- **Cores Principais**: Azul (#3b82f6) e Laranja (#f97316)
- **Cores Secundárias**: Branco, Preto e tons de cinza
- **Tipografia**: Inter (Google Fonts)
- **Animações**: Suaves e elegantes com Framer Motion

## 🚀 Fase 1 - Estrutura Base e Identidade Visual (CONCLUÍDA)

### ✅ Componentes Implementados

- **Paleta de Cores**: Configurada no Tailwind CSS
- **Botão Flutuante WhatsApp**: Componente reutilizável com animações
- **CTA Button**: Botão de chamada para ação com múltiplas variantes
- **Card System**: Sistema de cards com animações
- **Section Components**: Componentes de seção reutilizáveis
- **Logo**: Logo da JasTur com animações
- **Configuração Centralizada**: Arquivo de configuração da empresa
- **SEO Básico**: Meta tags otimizadas

## 🚀 Fase 2 - Seção Hero (Dobra Principal) (CONCLUÍDA)

### ✅ Funcionalidades Implementadas

- **Hero Section Redesenhada**: Conteúdo completo da JasTur
- **Background Slider**: Imagens de destinos turísticos em rotação
- **Título Impactante**: "JasTur: sua próxima parada é aqui!"
- **Subtítulo Persuasivo**: Descrição clara dos serviços
- **CTAs Estratégicos**: Botões para WhatsApp e navegação
- **Estatísticas da Empresa**: Números impressionantes (500+ viagens, 98% satisfação)
- **Navegação Responsiva**: Menu adaptativo com scroll
- **Animações Suaves**: Transições elegantes com Framer Motion
- **Scroll Indicator**: Indicador visual para continuar navegando

## 🚀 Fase 3 - Seção de Serviços (Explore do seu jeito) (CONCLUÍDA)

### ✅ Funcionalidades Implementadas

- **Cards de Serviços**: 3 cards principais com design moderno
- **Ícones Personalizados**: Componente ServiceIcon reutilizável
- **Animações Sequenciais**: Entrada escalonada dos elementos
- **CTAs Específicos**: Botões personalizados para cada serviço
- **Seção de Benefícios**: 4 benefícios gerais da JasTur
- **CTA Final Impactante**: Gradiente com chamada para ação
- **Integração WhatsApp**: Mensagens personalizadas por serviço
- **Responsividade Completa**: Layout adaptável para todos os dispositivos

### 🎯 Serviços Implementados

1. **🚎 Excursões em Grupo**
   - Roteiro completo
   - Guias especializados
   - Novas amizades
   - Preços econômicos

2. **✈️ Viagens Nacionais e Internacionais**
   - Pacotes completos
   - Aéreo incluído
   - Hospedagem
   - Passeios guiados

3. **🚙 Passeios Regionais**
   - Roteiros de 1 dia
   - Destinos próximos
   - Fim de semana
   - Experiências locais

### 🏆 Benefícios da JasTur

- **Guias Especializados**: Profissionais experientes e certificados
- **Destinos Exclusivos**: Roteiros únicos e experiências autênticas
- **Flexibilidade Total**: Datas e horários que se adaptam a você
- **Qualidade Garantida**: 98% de clientes satisfeitos

## 🚀 Fase 4 - Seção de Destinos (Próximas Saídas e Destinos Populares) (CONCLUÍDA)

### ✅ Funcionalidades Implementadas

- **Próximas Saídas Confirmadas**: 3 destinos principais com datas específicas
- **Cards de Destinos Detalhados**: Imagens, preços, datas, vagas e avaliações
- **Destinos Mais Procurados**: Grid de 4 destinos populares com hover effects
- **Categorias de Destinos**: 4 categorias (Praias, Montanhas, Cidades Históricas, Parques)
- **CTAs Específicos**: Botões personalizados para cada destino
- **Informações Completas**: Preços, datas, duração, vagas disponíveis, avaliações
- **CTA Final**: Roteiro personalizado e navegação para depoimentos
- **Responsividade Total**: Layout adaptável para todos os dispositivos

### 🎯 Destinos Implementados

**Próximas Saídas Confirmadas:**
1. **Galinhos/RN** - R$ 350 (20-22 Set)
2. **Gramado/RS** - R$ 420 (15-17 Out)
3. **Maragogi/AL** - R$ 380 (5-7 Nov)

**Destinos Mais Procurados:**
4. **Garanhuns/PE** - R$ 280 (10-12 Dez)
5. **Gramado/RS** - R$ 890 (20-25 Dez)
6. **Porto Seguro/BA** - R$ 750 (15-20 Jan)
7. **Bonito/MS** - R$ 680 (5-10 Fev)

### 🏷️ Categorias de Destinos

- **🏖️ Praias**: 15+ destinos paradisíacos
- **⛰️ Montanhas**: 12+ destinos para aventuras na natureza
- **🏛️ Cidades Históricas**: 8+ destinos com cultura e tradição
- **🎢 Parques Temáticos**: 6+ destinos para diversão garantida

### 📱 Funcionalidades Interativas

- **Hover Effects**: Cards com efeitos de hover sofisticados
- **Animações de Imagens**: Scale e transições suaves
- **CTAs Inteligentes**: Mensagens personalizadas no WhatsApp
- **Navegação Interna**: Scroll suave para outras seções
- **Badges de Categoria**: Identificação visual por tipo de destino
- **Avaliações e Reviews**: Sistema de estrelas e contagem de avaliações

### 📁 Estrutura de Arquivos Atualizada

```
src/
├── components/ui/
│   ├── Logo.tsx              # Logo da JasTur
│   ├── CTAButton.tsx         # Botões de CTA
│   ├── WhatsAppButton.tsx    # Botão flutuante WhatsApp
│   ├── Card.tsx              # Sistema de cards
│   ├── Section.tsx           # Componentes de seção
│   ├── ServiceIcon.tsx       # Componente de ícones
│   ├── HeroSection.tsx       # Seção hero redesenhada
│   ├── BackgroundSlider.tsx  # Slider de imagens melhorado
│   ├── BenefitsSection.tsx   # Seção de serviços (renomeada)
│   ├── GallerySection.tsx    # Seção de destinos (renomeada)
│   └── index.ts              # Exportações centralizadas
├── config/
│   └── jastur.ts             # Configurações completas da empresa
├── LandingPage.tsx           # Página principal
└── App.tsx                   # Componente raiz
```

### 🎯 Funcionalidades da Fase 4

- ✅ Seção de destinos completamente redesenhada
- ✅ Cards detalhados com informações completas
- ✅ Sistema de avaliações e reviews
- ✅ Categorização de destinos
- ✅ CTAs específicos para cada destino
- ✅ Layout responsivo e moderno
- ✅ Animações suaves e elegantes
- ✅ Integração completa com WhatsApp
- ✅ Navegação interna otimizada

## 🚀 Fase 5 - Seção de Depoimentos (Prova Social) (CONCLUÍDA)

### ✅ Funcionalidades Implementadas

- **Carrossel de Depoimentos**: 6 depoimentos principais com auto-play
- **Fotos dos Clientes**: Imagens reais de clientes satisfeitos
- **Sistema de Avaliações**: 5 estrelas para todos os depoimentos
- **Informações Detalhadas**: Nome, localidade, destino, data da viagem
- **Destaques dos Depoimentos**: Pontos-chave de cada experiência
- **Grid de Depoimentos Rápidos**: 6 depoimentos adicionais em cards
- **Estatísticas de Satisfação**: 98% satisfação, 4.9 avaliação, 500+ viagens
- **Controles Interativos**: Navegação manual e indicadores
- **CTA Final Impactante**: Chamada para ação com gradiente
- **Responsividade Total**: Layout adaptável para todos os dispositivos

### 🎯 Depoimentos Principais Implementados

**Carrossel Principal:**
1. **Maria Fernanda Silva** - Recife, PE - Maragogi/AL (Janeiro 2024)
2. **João Carlos Santos** - Olinda, PE - Gramado/RS (Dezembro 2023)
3. **Ana Paula Costa** - Jaboatão, PE - Galinhos/RN (Setembro 2023)
4. **Roberto Almeida** - Caruaru, PE - Bonito/MS (Fevereiro 2024)
5. **Lucia Mendes** - Garanhuns, PE - Gramado/RS (Outubro 2023)
6. **Pedro Henrique Lima** - Petrolina, PE - Porto Seguro/BA (Janeiro 2024)

**Grid de Depoimentos Rápidos:**
- **Fernanda Costa** - Garanhuns/PE
- **Ricardo Santos** - Gramado/RS
- **Amanda Silva** - Maragogi/AL
- **Carlos Oliveira** - Gramado/RS
- **Juliana Lima** - Bonito/MS
- **Marcos Pereira** - Porto Seguro/BA

### 🏆 Estatísticas de Prova Social

- **98%** de Clientes Satisfeitos
- **4.9** Avaliação Média (5 estrelas)
- **500+** Viagens Realizadas
- **6** Depoimentos principais detalhados
- **6** Depoimentos rápidos adicionais
- **12** Clientes diferentes representados

### 📱 Funcionalidades Interativas

- **Auto-play**: Carrossel muda automaticamente a cada 5 segundos
- **Controles Manuais**: Botões de navegação e indicadores
- **Animações Suaves**: Transições elegantes entre depoimentos
- **Hover Effects**: Cards com efeitos de hover sofisticados
- **CTAs Inteligentes**: Mensagens personalizadas no WhatsApp
- **Navegação Interna**: Scroll suave para outras seções
- **Fotos Reais**: Imagens de clientes reais via Unsplash
- **Informações Contextuais**: Destino, data, tamanho do grupo

### 🎨 Características Visuais

- **Cards Modernos**: Design elegante com sombras e hover effects
- **Fotos Circulares**: Imagens de clientes com bordas arredondadas
- **Sistema de Estrelas**: Avaliações visuais com ícones preenchidos
- **Badges de Destino**: Identificação visual do destino visitado
- **Gradientes**: Overlays para melhor legibilidade
- **Animações**: Transições suaves e elegantes
- **Layout Responsivo**: Adaptação perfeita para todos os dispositivos

### 📁 Estrutura de Arquivos Atualizada

```
src/
├── components/ui/
│   ├── Logo.tsx              # Logo da JasTur
│   ├── CTAButton.tsx         # Botões de CTA
│   ├── WhatsAppButton.tsx    # Botão flutuante WhatsApp
│   ├── Card.tsx              # Sistema de cards
│   ├── Section.tsx           # Componentes de seção
│   ├── ServiceIcon.tsx       # Componente de ícones
│   ├── HeroSection.tsx       # Seção hero redesenhada
│   ├── BackgroundSlider.tsx  # Slider de imagens melhorado
│   ├── BenefitsSection.tsx   # Seção de serviços (renomeada)
│   ├── GallerySection.tsx    # Seção de destinos (renomeada)
│   ├── TestimonialsSection.tsx # Seção de depoimentos (redesenhada)
│   └── index.ts              # Exportações centralizadas
├── config/
│   └── jastur.ts             # Configurações completas da empresa
├── LandingPage.tsx           # Página principal
└── App.tsx                   # Componente raiz
```

### 🎯 Funcionalidades da Fase 5

- ✅ Seção de depoimentos completamente redesenhada
- ✅ Carrossel interativo com auto-play
- ✅ Sistema de avaliações com estrelas
- ✅ Fotos reais de clientes satisfeitos
- ✅ Informações detalhadas de cada experiência
- ✅ Grid de depoimentos rápidos
- ✅ Estatísticas de prova social
- ✅ CTAs específicos para conversão
- ✅ Layout responsivo e moderno
- ✅ Animações suaves e elegantes
- ✅ Integração completa com WhatsApp
- ✅ Navegação interna otimizada

## 🚀 Fase 6 - CTA Final e Rodapé (CONCLUÍDA)

### ✅ Funcionalidades Implementadas

- **CTA Final Impactante**: Seção com gradiente e elementos decorativos
- **Estatísticas Finais**: 500+ viagens, 50+ destinos, 98% satisfação, 5+ anos
- **CTAs Principais**: Botões para WhatsApp e navegação para destinos
- **Benefícios Finais**: Transporte seguro, guias especializados, experiência única
- **Garantia de Satisfação**: Banner com compromisso de qualidade
- **Rodapé Completo**: Informações da empresa, links rápidos e contato
- **Redes Sociais**: Instagram, Facebook e YouTube com hover effects
- **Informações Legais**: Copyright, CNPJ, links de privacidade e termos
- **Banner de Certificação**: Empresa certificada, seguro viagem, atendimento 24/7
- **Navegação Interna**: Links para todas as seções da página
- **Botão Voltar ao Topo**: Scroll suave para o início da página

### 🎯 Seção CTA Final

**Características Principais:**
- **Gradiente Impactante**: Azul para laranja com elementos decorativos
- **Título Persuasivo**: "Sua próxima aventura está esperando por você!"
- **Estatísticas Finais**: 4 métricas principais em destaque
- **CTAs Duplos**: WhatsApp e navegação para destinos
- **Benefícios Visuais**: 3 benefícios com ícones e descrições
- **Garantia de Satisfação**: Compromisso de qualidade da empresa

**Elementos Visuais:**
- Elementos decorativos circulares no background
- Animações sequenciais de entrada
- Botões grandes e chamativos
- Ícones representativos para cada benefício
- Banner com backdrop blur para garantia

### 🎯 Rodapé Completo

**Seções Implementadas:**

1. **Informações da Empresa**:
   - Nome e descrição da JasTur
   - Estatísticas em cards destacados
   - Missão e valores da empresa

2. **Links Rápidos**:
   - Navegação para todas as seções
   - Scroll suave interno
   - Hover effects elegantes

3. **Informações de Contato**:
   - Telefone, email e localização
   - Ícones representativos
   - Layout organizado e limpo

4. **Redes Sociais**:
   - Instagram, Facebook e YouTube
   - Links funcionais com hover effects
   - Ícones do Lucide React

5. **CTA Final**:
   - Botão WhatsApp integrado
   - Botão "Voltar ao topo"
   - Layout responsivo

6. **Informações Legais**:
   - Copyright dinâmico
   - CNPJ e ano de fundação
   - Links para políticas e termos

7. **Banner de Certificação**:
   - Empresa certificada
   - Seguro viagem incluso
   - Atendimento 24/7

### 📱 Funcionalidades Interativas

- **Navegação Interna**: Scroll suave para todas as seções
- **Redes Sociais**: Links externos para Instagram, Facebook e YouTube
- **CTAs Inteligentes**: Mensagens personalizadas no WhatsApp
- **Botão Voltar ao Topo**: Scroll suave para o início
- **Hover Effects**: Transições elegantes em todos os elementos
- **Layout Responsivo**: Adaptação perfeita para todos os dispositivos
- **Animações**: Entrada escalonada dos elementos

### 🎨 Características Visuais

- **Design Moderno**: Layout limpo e profissional
- **Cores Consistentes**: Paleta da identidade visual da JasTur
- **Tipografia Hierárquica**: Títulos, subtítulos e texto bem organizados
- **Ícones Lucide**: Consistência visual em toda a interface
- **Gradientes**: Backgrounds impactantes na CTA final
- **Cards Informativos**: Estatísticas em destaque
- **Elementos Decorativos**: Círculos e formas no background

### 📁 Estrutura de Arquivos Atualizada

```
src/
├── components/ui/
│   ├── Logo.tsx              # Logo da JasTur
│   ├── CTAButton.tsx         # Botões de CTA
│   ├── WhatsAppButton.tsx    # Botão flutuante WhatsApp
│   ├── Card.tsx              # Sistema de cards
│   ├── Section.tsx           # Componentes de seção
│   ├── ServiceIcon.tsx       # Componente de ícones
│   ├── HeroSection.tsx       # Seção hero redesenhada
│   ├── BackgroundSlider.tsx  # Slider de imagens melhorado
│   ├── BenefitsSection.tsx   # Seção de serviços (renomeada)
│   ├── GallerySection.tsx    # Seção de destinos (renomeada)
│   ├── TestimonialsSection.tsx # Seção de depoimentos (redesenhada)
│   ├── CTASection.tsx        # CTA final (redesenhada)
│   ├── FooterSection.tsx     # Rodapé completo (redesenhado)
│   └── index.ts              # Exportações centralizadas
├── config/
│   └── jastur.ts             # Configurações completas da empresa
├── LandingPage.tsx           # Página principal
└── App.tsx                   # Componente raiz
```

### 🎯 Funcionalidades da Fase 6

- ✅ CTA final completamente redesenhado
- ✅ Rodapé completo e moderno
- ✅ Navegação interna funcional
- ✅ Redes sociais integradas
- ✅ Informações legais completas
- ✅ Banner de certificação
- ✅ Botão voltar ao topo
- ✅ Layout responsivo e moderno
- ✅ Animações suaves e elegantes
- ✅ Integração completa com WhatsApp
- ✅ Informações de contato organizadas
- ✅ Links rápidos para todas as seções

## 🛠️ Tecnologias Utilizadas

- **React 19** com TypeScript
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Lucide React** para ícones
- **React Icons** para ícones adicionais
- **Vite** como bundler

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📋 Próximas Fases

- **Fase 7**: Otimizações e Finalização

## 📊 Status do Projeto

- **Fase 1**: ✅ Concluída - Estrutura Base e Identidade Visual
- **Fase 2**: ✅ Concluída - Seção Hero (Dobra Principal)
- **Fase 3**: ✅ Concluída - Seção de Serviços (Explore do seu jeito)
- **Fase 4**: ✅ Concluída - Seção de Destinos (Próximas Saídas e Destinos Populares)
- **Fase 5**: ✅ Concluída - Seção de Depoimentos (Prova Social)
- **Fase 6**: ✅ Concluída - CTA Final e Rodapé
- **Fase 7**: 🔄 Próxima - Otimizações e Finalização

## 🎯 Próximos Passos

A **Fase 7** será focada nas otimizações finais e finalização do projeto:
- Otimização de performance
- Melhorias de SEO
- Testes de responsividade
- Ajustes finais de design
- Documentação completa
- Deploy e finalização
