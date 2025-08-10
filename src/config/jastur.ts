// Configurações da Passeios Natal Tur - Gerado automaticamente
// NÃO EDITE ESTE ARQUIVO DIRETAMENTE! 
// Use SITE_CONFIG.md e execute: npm run config:update

export const jasturConfig = {
  // Informações da empresa
  company: {
    name: "Passeios Natal Tur",
    tagline: "Explore Natal com conforto e segurança",
    description: "Empresa especializada em passeios turísticos em Natal e região, oferecendo experiências únicas nos principais destinos do Rio Grande do Norte",
    cnpj: "12.345.678/0001-90",
    founded: "2020",
    mission: "Proporcionar experiências turísticas inesquecíveis com segurança, conforto e qualidade",
  },

  // Contatos
  contact: {
    whatsapp: "5584999999999",
    email: "contato@passeiosnataltur.com.br",
    instagram: "@passeiosnataltur",
    phone: "(84) 99999-9999",
  },

  // Mensagens padrão do WhatsApp
  whatsappMessages: {
    "default": "Olá! 👋 Gostaria de conhecer nossos passeios incríveis em Natal e região. Qual destino te interessa mais?",
    "roteiros": "Oi! 🗺️ Vi que você tem interesse nos nossos roteiros. Temos opções para todos os gostos: Genipabu, Pipa, Parrachos e muito mais! Qual você gostaria de conhecer?",
    "orcamento": "Olá! 💰 Que bom que quer fazer um orçamento conosco! Me conta: quantas pessoas, qual destino te interessa e qual data você está pensando?",
    "duvidas": "Oi! ❓ Estou aqui para esclarecer todas suas dúvidas sobre nossos passeios. O que você gostaria de saber?",
    "destinos": "Olá! 🏖️ Que destino incrível você quer conhecer? Temos Genipabu, Pipa, Parrachos, Quadriciclo e muito mais! Qual te chama mais atenção?"
},

  // Estatísticas da empresa
  stats: {
    "viagensRealizadas": "2500+",
    "passeiosRealizados": "5000+",
    "destinosDiferentes": "15",
    "clientesSatisfeitos": "4800+",
    "anosExperiencia": "5"
},

  // Serviços oferecidos
  services: [
    {
        "title": "Passeio Litoral Norte Completo",
        "benefits": [
            "Busca e retorno no hotel",
            "Passeio de buggy com piloto experiente",
            "Parada em pontos turísticos",
            "Seguro e equipamentos de segurança"
        ],
        "id": "litoral-norte",
        "icon": "compass",
        "description": "Explore o litoral norte completo com buggy exclusivo, incluindo Genipabu e pontos turísticos"
    },
    {
        "title": "Passeios de Buggy Genipabu",
        "benefits": [
            "Dunas móveis de Genipabu",
            "Santuário das dunas",
            "Parada para fotos",
            "Piloto especializado"
        ],
        "id": "buggy-genipabu",
        "icon": "truck",
        "description": "Aventura nas dunas móveis de Genipabu, um dos cartões postais mais famosos do RN"
    },
    {
        "title": "Passeio Litoral Sul",
        "benefits": [
            "Transporte confortável",
            "Praia de Pipa",
            "Chapadão e mirantes",
            "Tempo livre para banho"
        ],
        "id": "litoral-sul",
        "icon": "waves",
        "description": "Conheça as belezas do litoral sul, incluindo Pipa e suas praias paradisíacas"
    }
],

  // Destinos em destaque
  featuredDestinations: [
    {
        "name": "Genipabu",
        "included": [
            "Passeio de buggy",
            "Dunas móveis",
            "Lagoa de Jacumã",
            "Aquário Natal"
        ],
        "id": "genipabu",
        "category": "Dunas e Aventura",
        "image": "destinations/genipabu.jpg",
        "departureDate": "Diário",
        "duration": "6 horas",
        "price": "R$ 160",
        "availableSpots": "20",
        "rating": "4.8",
        "reviewCount": "342",
        "description": "As famosas dunas móveis de Genipabu oferecem uma experiência única de aventura e contato com a natureza"
    },
    {
        "name": "Pipa",
        "included": [
            "Praia de Pipa",
            "Chapadão",
            "Centro da vila",
            "Tempo livre"
        ],
        "id": "pipa",
        "category": "Praias",
        "image": "destinations/pipa.jpg",
        "departureDate": "Diário",
        "duration": "8 horas",
        "price": "R$ 80",
        "availableSpots": "40",
        "rating": "4.9",
        "reviewCount": "256",
        "description": "Uma das praias mais bonitas do Brasil, com falésias coloridas e vida noturna agitada"
    },
    {
        "name": "Parrachos de Maracajaú",
        "included": [
            "Mergulho com cilindro",
            "Piscinas naturais",
            "Transporte marítimo",
            "Instrutor de mergulho"
        ],
        "id": "parrachos-maracajau",
        "category": "Mergulho",
        "image": "destinations/parrachos.jpg",
        "departureDate": "Diário",
        "duration": "8 horas",
        "price": "R$ 170",
        "availableSpots": "30",
        "rating": "4.7",
        "reviewCount": "189",
        "description": "Conhecido como Caribe Potiguar, oferece mergulho em piscinas naturais com águas cristalinas"
    },
    {
        "name": "Passeio de Quadriciclo",
        "included": [
            "Quadriciclo para 2 pessoas",
            "Equipamentos de segurança",
            "Instrutor acompanhante",
            "Trilhas nas dunas"
        ],
        "id": "quadriciclo",
        "category": "Aventura",
        "image": "destinations/quadriciclo.jpg",
        "departureDate": "Diário",
        "duration": "4 horas",
        "price": "R$ 270",
        "availableSpots": "10",
        "rating": "4.9",
        "reviewCount": "123",
        "description": "Aventura radical nas dunas com quadriciclo, ideal para quem busca adrenalina"
    },
    {
        "name": "Parrachos do Rio do Fogo",
        "included": [
            "Snorkeling",
            "Piscinas naturais",
            "Transporte completo",
            "Almoço incluso"
        ],
        "id": "rio-do-fogo",
        "category": "Mergulho",
        "image": "destinations/rio-do-fogo.jpg",
        "departureDate": "Diário",
        "duration": "8 horas",
        "price": "R$ 150",
        "availableSpots": "25",
        "rating": "4.6",
        "reviewCount": "167",
        "description": "Parrachos com águas calmas e cristalinas, perfeito para snorkeling e relaxamento"
    }
],

  // Cores da identidade visual
  colors: {
    "primary": "#3b82f6",
    "secondary": "#f97316",
    "accent": "#10b981"
},

  // SEO
  seo: {
    title: "Passeios Natal Tur - Explore os melhores destinos do RN",
    description: "Descubra os destinos mais incríveis do Rio Grande do Norte com a Passeios Natal Tur. Buggy, quadriciclo, parrachos e muito mais!",
    keywords: "passeios natal, buggy genipabu, pipa, parrachos maracajaú, turismo rn",
    ogImage: "/images/og-image.jpg",
  },

  // Links de navegação
  navigation: [
    {
        "name": "Serviços",
        "href": "#servicos"
    },
    {
        "name": "Destinos",
        "href": "#destinos"
    },
    {
        "name": "Depoimentos",
        "href": "#depoimentos"
    },
    {
        "name": "Contato",
        "href": "#contato"
    }
],

  // Depoimentos
  testimonials: [
    {
        "name": "Maria Silva",
        "rating": "5",
        "destination": "Genipabu",
        "text": "Passeio incrível! O piloto do buggy foi muito atencioso e as dunas são espetaculares. Recomendo muito!"
    },
    {
        "name": "João Santos",
        "rating": "5",
        "destination": "Pipa",
        "text": "Pipa é um paraíso! A equipe da Passeios Natal Tur nos tratou muito bem. Voltaremos com certeza!"
    },
    {
        "name": "Ana Costa",
        "rating": "5",
        "destination": "Maracajaú",
        "text": "O mergulho nos parrachos foi inesquecível. Águas cristalinas e peixes coloridos. Experiência única!"
    },
    {
        "name": "Pedro Lima",
        "rating": "4",
        "destination": "Quadriciclo",
        "text": "Muita adrenalina e diversão! O instrutor foi muito paciente e nos ensinou tudo direitinho."
    },
    {
        "name": "Carla Oliveira",
        "rating": "5",
        "destination": "Rio do Fogo",
        "text": "Passeio tranquilo e relaxante. As piscinas naturais são lindas e o almoço estava delicioso."
    },
    {
        "name": "Roberto Ferreira",
        "rating": "5",
        "destination": "Litoral Norte",
        "text": "Passeio completo e bem organizado. Conhecemos vários pontos turísticos em um só dia. Excelente!"
    }
],

  // FAQs
  faqs: [
    {
        "question": "Qual é a política de cancelamento?",
        "answer": "Cancelamentos com até 24h de antecedência têm reembolso integral. Menos de 24h, cobramos 50% do valor."
    },
    {
        "question": "Os passeios funcionam em dias chuvosos?",
        "answer": "Sim, a maioria dos nossos passeios funcionam mesmo com chuva leve. Em casos de tempestade, reagendamos sem custo."
    },
    {
        "question": "É necessário saber nadar para os passeios de mergulho?",
        "answer": "Não é obrigatório. Fornecemos coletes salva-vidas e nossos instrutores acompanham de perto todos os participantes."
    },
    {
        "question": "Crianças podem participar dos passeios?",
        "answer": "Sim! Temos passeios adequados para toda família. Crianças até 5 anos não pagam em alguns passeios."
    },
    {
        "question": "Vocês fornecem equipamentos de segurança?",
        "answer": "Sim, todos os equipamentos necessários são fornecidos: coletes, capacetes, óculos de mergulho, etc."
    },
    {
        "question": "Como funciona o pagamento?",
        "answer": "Aceitamos dinheiro, PIX, cartões de débito e crédito. Também parcelamos em até 3x sem juros."
    },
    {
        "question": "Qual o horário dos passeios?",
        "answer": "Geralmente saímos entre 7h e 8h da manhã, retornando entre 15h e 17h, dependendo do destino."
    }
],

  // Parceiros
  partners: [
    {
        "name": "Hotel Ponta Negra",
        "logo": "partners/hotel-ponta-negra.jpg",
        "description": "Parceiro oficial para hospedagem dos nossos clientes"
    },
    {
        "name": "Restaurante Mangai",
        "logo": "partners/mangai.jpg",
        "description": "Parceiro gastronômico oferecendo descontos especiais"
    }
],

  // Imagens do Hero
  heroSlides: [
    {
        "image": "/slides/hero-genipabu.jpg",
        "alt": "Buggy nas dunas de Genipabu ao pôr do sol"
    },
    {
        "image": "/slides/hero-pipa.jpg",
        "alt": "Vista aérea da praia de Pipa com falésias"
    },
    {
        "image": "/slides/hero-parrachos.jpg",
        "alt": "Mergulho nos parrachos com águas cristalinas"
    }
],

  // Logo
  logo: {
    file: "/id/logo-passeios-natal-tur.png",
    alt: "Logo Passeios Natal Tur",
  },
};