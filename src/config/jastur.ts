// Configurações da JasTur
export const jasturConfig = {
  // Informações da empresa
  company: {
    name: "JasTur Turismo",
    tagline: "Sua próxima parada é aqui!",
    description: "Excursões, Viagens e Passeios para você conhecer lugares incríveis sem preocupação.",
    cnpj: "00.000.000/0000-00", // Será atualizado com o CNPJ real
    founded: "2020",
    mission: "Conectar pessoas a experiências inesquecíveis através de viagens seguras e memoráveis.",
  },

  // Contatos
  contact: {
    whatsapp: "5581986082327", // Número real da JasTur: +55 81 98608-2327
    email: "contato@jastur.com.br", // Será atualizado com o email real
    instagram: "@jasturtur", // Instagram oficial da JasTur
    phone: "(81) 98608-2327", // Telefone real da JasTur
  },

  // Mensagens padrão do WhatsApp
  whatsappMessages: {
    default: "Olá! Gostaria de saber mais sobre os roteiros da JasTur.",
    roteiros: "Olá! Gostaria de consultar os roteiros disponíveis da JasTur.",
    orcamento: "Olá! Gostaria de solicitar um orçamento para viagem.",
    duvidas: "Olá! Tenho dúvidas sobre os serviços da JasTur.",
    destinos: "Olá! Gostaria de saber mais sobre os destinos da JasTur.",
  },

  // Estatísticas da empresa
  stats: {
    viagensRealizadas: "500+",
    destinosDiferentes: "50+",
    clientesSatisfeitos: "98%",
    anosExperiencia: "5+",
  },

  // Serviços oferecidos
  services: [
    {
      id: "excursoes",
      title: "Excursões em Grupo",
      description: "A maneira mais divertida e econômica de viajar com um roteiro completo e guias especializados.",
      icon: "🚎",
      benefits: ["Roteiro completo", "Guias especializados", "Novas amizades", "Preços econômicos"],
    },
    {
      id: "viagens",
      title: "Viagens Nacionais e Internacionais",
      description: "Pacotes completos com aéreo, hospedagem e passeios para você realizar a viagem dos seus sonhos.",
      icon: "✈️",
      benefits: ["Pacotes completos", "Aéreo incluído", "Hospedagem", "Passeios guiados"],
    },
    {
      id: "passeios",
      title: "Passeios Regionais",
      description: "Roteiros de um dia para conhecer as belezas do nosso estado. Perfeito para uma escapada de fim de semana.",
      icon: "🚙",
      benefits: ["Roteiros de 1 dia", "Destinos próximos", "Fim de semana", "Experiências locais"],
    },
  ],

  // Destinos em destaque
  featuredDestinations: [
    {
      id: "galinhos",
      name: "Galinhos/RN",
      image: "/slides/garanhuns-pe.webp", // Usando imagem existente como placeholder
      category: "Praia",
      departureDate: "20 a 22 de Setembro",
      duration: "3 dias / 2 noites",
      price: "350",
      availableSpots: "12",
      rating: "4.8",
      reviewCount: "45",
      included: ["Transporte", "Hospedagem", "Café da manhã"],
      description: "Conheça uma das praias mais bonitas do Nordeste com águas cristalinas e dunas impressionantes.",
    },
    {
      id: "gramado",
      name: "Gramado/RS",
      image: "/slides/gramado-rs.png", // Usando imagem existente como placeholder
      category: "Montanha",
      departureDate: "15 a 17 de Outubro",
      duration: "3 dias / 2 noites",
      price: "420",
      availableSpots: "8",
      rating: "4.9",
      reviewCount: "67",
      included: ["Transporte", "Hospedagem", "Passeios"],
      description: "A capital do turismo brasileiro com arquitetura europeia, clima frio e gastronomia típica alemã.",
    },
    {
      id: "maragogi",
      name: "Maragogi/AL",
      image: "/slides/maragogi.jpg",
      category: "Praia",
      departureDate: "5 a 7 de Novembro",
      duration: "3 dias / 2 noites",
      price: "380",
      availableSpots: "15",
      rating: "4.7",
      reviewCount: "89",
      included: ["Transporte", "Hospedagem", "Passeio de barco"],
      description: "As piscinas naturais mais famosas do Brasil, com águas azuis e vida marinha exuberante.",
    },
    {
      id: "garanhuns",
      name: "Garanhuns/PE",
      image: "/slides/garanhuns-pe.webp",
      category: "Montanha",
      departureDate: "10 a 12 de Dezembro",
      duration: "3 dias / 2 noites",
      price: "280",
      availableSpots: "20",
      rating: "4.6",
      reviewCount: "34",
      included: ["Transporte", "Hospedagem", "Café da manhã"],
      description: "A Suíça Pernambucana com clima frio, artesanato local e gastronomia típica.",
    },
    {
      id: "gramado",
      name: "Gramado/RS",
      image: "/slides/gramado-rs.png",
      category: "Montanha",
      departureDate: "20 a 25 de Dezembro",
      duration: "6 dias / 5 noites",
      price: "890",
      availableSpots: "6",
      rating: "4.9",
      reviewCount: "123",
      included: ["Transporte", "Hospedagem", "Passeios", "Café da manhã"],
      description: "A capital do turismo brasileiro com arquitetura europeia e o Natal mais bonito do Brasil.",
    },
    {
      id: "porto-seguro",
      name: "Porto Seguro/BA",
      image: "/slides/maragogi.jpg", // Usando imagem existente como placeholder
      category: "Praia",
      departureDate: "15 a 20 de Janeiro",
      duration: "6 dias / 5 noites",
      price: "750",
      availableSpots: "10",
      rating: "4.8",
      reviewCount: "78",
      included: ["Transporte", "Hospedagem", "Passeios", "Café da manhã"],
      description: "O berço do Brasil com praias paradisíacas e história rica em cultura e tradição.",
    },
    {
      id: "bonito",
      name: "Bonito/MS",
      image: "/slides/garanhuns-pe.webp", // Usando imagem existente como placeholder
      category: "Natureza",
      departureDate: "5 a 10 de Fevereiro",
      duration: "6 dias / 5 noites",
      price: "680",
      availableSpots: "8",
      rating: "4.9",
      reviewCount: "56",
      included: ["Transporte", "Hospedagem", "Passeios", "Café da manhã"],
      description: "Capital do ecoturismo brasileiro com rios cristalinos e cachoeiras deslumbrantes.",
    },
  ],

  // Cores da identidade visual
  colors: {
    primary: "#3b82f6", // Azul
    secondary: "#f97316", // Laranja
    accent: "#64748b", // Cinza
  },

  // SEO
  seo: {
    title: "JasTur Turismo - Excursões, Viagens e Passeios",
    description: "Descubra os melhores destinos turísticos com a JasTur. Excursões em grupo, viagens nacionais e internacionais, passeios regionais. Sua próxima aventura começa aqui!",
    keywords: "turismo, excursões, viagens, passeios, agência de viagem, destinos turísticos, JasTur, Pernambuco, Nordeste, Brasil",
    ogImage: "/slides/garanhuns-pe.webp",
  },

  // Links de navegação
  navigation: [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Destinos', href: '#destinos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ],
}; 