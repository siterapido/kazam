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
    whatsapp: "5584994558857",
    email: "contato@passeiosnataltur.com.br",
    instagram: "@passeiosnataltur",
    phone: "(84) 99455-8857",
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
        "title": "Buggy Litoral Norte",
        "benefits": [
            "Transporte",
            "Bugueiro credenciado",
            "Paradas para fotos",
            "Travessia de balsa",
            "Atividades opcionais (aerobunda, esquibunda etc.)",
            "Visual guiado pelas principais praias e lagoas do norte"
        ],
        "id": "buggy-litoral-norte",
        "icon": "truck",
        "description": "Explore o melhor do litoral norte com emoção e cenários incríveis! Saída do hotel com visual pela Via Costeira, Praia do Meio e Ponte Newton."
    },
    {
        "title": "Passeio 4X4 Litoral Sul",
        "benefits": [
            "Transporte em 4x4",
            "Motorista experiente",
            "Paradas para banho e fotos",
            "Visitas a praias, lagoas e mirantes",
            "Pôr do sol nas dunas"
        ],
        "id": "4x4-litoral-sul",
        "icon": "truck",
        "description": "Conheça o Litoral Sul do RN em um passeio cheio de paisagens incríveis! O roteiro inclui a Barreira do Inferno, o maior cajueiro do mundo e lagoas como Alcaçuz, Carcará e Arituba."
    },
    {
        "title": "Passeio pelas Praias de Pipa",
        "benefits": [
            "Transporte",
            "Paradas para banho",
            "Visitas guiadas",
            "Tempo para fotos e descanso"
        ],
        "id": "praias-pipa",
        "icon": "waves",
        "description": "Conheça as praias mais famosas de Pipa em um passeio cheio de beleza e natureza. Visite a Praia do Madeiro, Cacimbinha, Chapadão, Amor e a Lagoa de Guaraíras."
    },
    {
        "title": "Parrachos de Rio do Fogo + Rio Punaú",
        "benefits": [
            "Transporte",
            "Passeio de lancha ou catamarã",
            "Parada para banho nos parrachos",
            "Visita ao Rio Punaú",
            "Guia acompanhante"
        ],
        "id": "parrachos-rio-fogo",
        "icon": "anchor",
        "description": "Um passeio completo que combina mar cristalino e natureza exuberante! Começamos nos Parrachos de Rio do Fogo, com suas águas rasas e transparentes ideais para mergulho com snorkel."
    },
    {
        "title": "Aventura em Maracajaú",
        "benefits": [
            "Quadriciclo",
            "Instrutor e equipamentos de segurança",
            "Passeio pelas dunas e beira-mar",
            "Paradas para fotos"
        ],
        "id": "aventura-maracajau",
        "icon": "compass",
        "description": "Viva a emoção de pilotar um quadriciclo pelas dunas de Maracajaú, com vistas incríveis do mar ao seu lado. O passeio combina adrenalina e contato com a natureza."
    }
],

  // Destinos em destaque
  featuredDestinations: [
    {
        "name": "Buggy Litoral Norte",
        "included": [
            "Transporte",
            "Bugueiro credenciado",
            "Paradas para fotos",
            "Travessia de balsa",
            "Atividades opcionais (aerobunda, esquibunda etc.)",
            "Visual guiado pelas principais praias e lagoas do norte"
        ],
        "id": "buggy-litoral-norte",
        "category": "Dunas e Aventura",
        "image": "tours/buggy-litoral-norte/buggy-1.png",
        "departureDate": "Diário",
        "duration": "6 horas",
        "price": "180",
        "availableSpots": "20",
        "rating": "4.9",
        "reviewCount": "324",
        "description": "Explore o melhor do litoral norte com emoção e cenários incríveis! Saída do hotel com visual pela Via Costeira, Praia do Meio e Ponte Newton. Paradas nas dunas e lagoas de Genipabu, Pitangui e Jacumã."
    },
    {
        "name": "Passeio 4X4 Litoral Sul",
        "included": [
            "Transporte em 4x4",
            "Motorista experiente",
            "Paradas para banho e fotos",
            "Visitas a praias, lagoas e mirantes",
            "Pôr do sol nas dunas"
        ],
        "id": "4x4-litoral-sul",
        "category": "Paisagens e Natureza",
        "image": "tours/4x4-litoral-sul/4x4-1.png",
        "departureDate": "Diário",
        "duration": "8 horas",
        "price": "160",
        "availableSpots": "25",
        "rating": "4.8",
        "reviewCount": "267",
        "description": "Conheça o Litoral Sul do RN em um passeio cheio de paisagens incríveis! O roteiro inclui a Barreira do Inferno, o maior cajueiro do mundo e lagoas como Alcaçuz, Carcará e Arituba."
    },
    {
        "name": "Passeio pelas Praias de Pipa",
        "included": [
            "Transporte",
            "Paradas para banho",
            "Visitas guiadas",
            "Tempo para fotos e descanso"
        ],
        "id": "praias-pipa",
        "category": "Praias",
        "image": "tours/praias-pipa/pipa-1.png",
        "departureDate": "Diário",
        "duration": "8 horas",
        "price": "140",
        "availableSpots": "30",
        "rating": "4.9",
        "reviewCount": "189",
        "description": "Conheça as praias mais famosas de Pipa em um passeio cheio de beleza e natureza. Visite a Praia do Madeiro, Cacimbinha, Chapadão, Amor e a Lagoa de Guaraíras."
    },
    {
        "name": "Parrachos de Rio do Fogo + Rio Punaú",
        "included": [
            "Transporte",
            "Passeio de lancha ou catamarã",
            "Parada para banho nos parrachos",
            "Visita ao Rio Punaú",
            "Guia acompanhante"
        ],
        "id": "parrachos-rio-fogo",
        "category": "Mergulho",
        "image": "images/tours/parrachos-rio-fogo/riodofogo-1.png",
        "departureDate": "Diário",
        "duration": "8 horas",
        "price": "170",
        "availableSpots": "25",
        "rating": "4.7",
        "reviewCount": "145",
        "description": "Um passeio completo que combina mar cristalino e natureza exuberante! Começamos nos Parrachos de Rio do Fogo, com suas águas rasas e transparentes ideais para mergulho com snorkel."
    },
    {
        "name": "Aventura em Maracajaú",
        "included": [
            "Quadriciclo",
            "Instrutor e equipamentos de segurança",
            "Passeio pelas dunas e beira-mar",
            "Paradas para fotos"
        ],
        "id": "aventura-maracajau",
        "category": "Aventura",
        "image": "images/tours/aventura-maracajau/maracajau-1.png",
        "departureDate": "Diário",
        "duration": "4 horas",
        "price": "170",
        "availableSpots": "15",
        "rating": "4.9",
        "reviewCount": "98",
        "description": "Viva a emoção de pilotar um quadriciclo pelas dunas de Maracajaú, com vistas incríveis do mar ao seu lado. O passeio combina adrenalina e contato com a natureza."
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