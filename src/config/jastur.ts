// Configurações da Passeios Natal Tur - Gerado automaticamente
// NÃO EDITE ESTE ARQUIVO DIRETAMENTE! 
// Use SITE_CONFIG.md e execute: npm run config:update

export const jasturConfig = {
  // Informações da empresa
  company: {
    name: "Passeios Natal Tur",
    tagline: "Descubra as maravilhas de Natal!",
    description: "Passeios exclusivos em Natal/RN com as melhores experiências do litoral norte e sul.",
    cnpj: "00.000.000/0000-00",
    founded: "2022",
    mission: "Proporcionar experiências únicas e inesquecíveis nos destinos mais belos de Natal e região.",
  },

  // Contatos
  contact: {
    whatsapp: "5584999887766",
    email: "contato@passeiosnataltur.com.br",
    instagram: "@passeiosnataltur",
    phone: "(84) 99988-7766",
  },

  // Mensagens padrão do WhatsApp
  whatsappMessages: {
    "default": "Olá! Gostaria de conhecer os passeios da Passeios Natal Tur.",
    "roteiros": "Olá! Quero saber sobre os roteiros disponíveis em Natal.",
    "orcamento": "Olá! Gostaria de um orçamento para passeio em Natal.",
    "duvidas": "Olá! Tenho dúvidas sobre os passeios da Passeios Natal Tur.",
    "destinos": "Olá! Quero saber mais sobre os destinos que vocês oferecem em Natal."
},

  // Estatísticas da empresa
  stats: {
    "passeiosRealizados": "1200+",
    "destinosDiferentes": "15+",
    "clientesSatisfeitos": "99%",
    "anosExperiencia": "3+"
},

  // Serviços oferecidos
  services: [
    {
        "title": "Passeios de Buggy",
        "benefits": [
            "Buggys exclusivos",
            "Bugueiros experientes",
            "Segurança garantida",
            "Emoção e aventura"
        ],
        "id": "buggy",
        "icon": "🏎️",
        "description": "Aventure-se pelas dunas de Genipabu e litoral norte com nossos buggys exclusivos e experientes bugueiros."
    },
    {
        "title": "Passeios Aquáticos",
        "benefits": [
            "Mergulho com cilindro",
            "Piscinas naturais",
            "Caribe Potiguar",
            "Experiência única"
        ],
        "id": "aquaticos",
        "icon": "🤿",
        "description": "Mergulhe nas piscinas naturais de Maracajaú e Rio do Fogo, o verdadeiro Caribe Potiguar."
    },
    {
        "title": "Passeios de Aventura",
        "benefits": [
            "Quadriciclos modernos",
            "Trilhas exclusivas",
            "Aventura segura",
            "Paisagens únicas"
        ],
        "id": "aventura",
        "icon": "🏍️",
        "description": "Quadriciclos, 4x4 e muito mais para quem busca adrenalina e paisagens incríveis."
    }
],

  // Destinos em destaque
  featuredDestinations: [
    {
        "name": "Litoral Norte Completo",
        "included": [
            "Busca no hotel",
            "Buggy exclusivo",
            "Guia especializado"
        ],
        "id": "litoral-norte",
        "category": "Aventura",
        "image": "destinations/litoral-norte.jpg",
        "departureDate": "Diário",
        "duration": "1 dia",
        "price": "160",
        "availableSpots": "Disponível",
        "rating": "4.9",
        "reviewCount": "350",
        "description": "Passeio completo pelo litoral norte com buggy exclusivo, incluindo busca no hotel."
    },
    {
        "name": "Genipabu de Buggy",
        "included": [
            "Buggy (até 4 pessoas)",
            "Dunas móveis",
            "Santuário das dunas"
        ],
        "id": "genipabu",
        "category": "Aventura",
        "image": "destinations/genipabu.jpg",
        "departureDate": "Diário",
        "duration": "Meio dia",
        "price": "370",
        "availableSpots": "Disponível",
        "rating": "4.8",
        "reviewCount": "280",
        "description": "Explore as famosas dunas móveis de Genipabu e o Santuário das dunas."
    },
    {
        "name": "Litoral Sul 4x4 (Passeio das Águas)",
        "included": [
            "Transporte 4x4",
            "Guia especializado",
            "Paradas estratégicas"
        ],
        "id": "litoral-sul-4x4",
        "category": "Aventura",
        "image": "destinations/litoral-sul.jpg",
        "departureDate": "Diário",
        "duration": "1 dia",
        "price": "170",
        "availableSpots": "Disponível",
        "rating": "4.7",
        "reviewCount": "190",
        "description": "Aventura 4x4 pelo litoral sul com as mais belas paisagens aquáticas."
    },
    {
        "name": "Parrachos do Rio do Fogo",
        "included": [
            "Transporte",
            "Passeio de barco",
            "Equipamentos de mergulho"
        ],
        "id": "rio-do-fogo",
        "category": "Mergulho",
        "image": "destinations/rio-do-fogo.jpg",
        "departureDate": "Diário",
        "duration": "1 dia",
        "price": "150",
        "availableSpots": "Disponível",
        "rating": "4.8",
        "reviewCount": "240",
        "description": "Mergulhe nas piscinas naturais do Rio do Fogo, no litoral norte do RN."
    },
    {
        "name": "Parrachos de Maracajaú",
        "included": [
            "Transporte",
            "Mergulho com cilindro",
            "Equipamentos inclusos"
        ],
        "id": "maracajau",
        "category": "Mergulho",
        "image": "destinations/maracajau.jpg",
        "departureDate": "Diário",
        "duration": "1 dia",
        "price": "170",
        "availableSpots": "Disponível",
        "rating": "4.9",
        "reviewCount": "380",
        "description": "Mergulho com cilindro nas piscinas naturais de Maracajaú, o Caribe Potiguar."
    },
    {
        "name": "Quadriciclo em Maracajaú",
        "included": [
            "Quadriciclo (até 2 pessoas)",
            "Equipamentos de segurança",
            "Instruções"
        ],
        "id": "quadriciclo",
        "category": "Aventura",
        "image": "destinations/quadriciclo.jpg",
        "departureDate": "Diário",
        "duration": "Meio dia",
        "price": "270",
        "availableSpots": "Disponível",
        "rating": "4.7",
        "reviewCount": "150",
        "description": "Aventura de quadriciclo na Praia de Zumbi, Maracajaú, com dunas e muita emoção."
    }
],

  // Cores da identidade visual - Nova Paleta JasTur
  colors: {
    "primary": "#3BBF72",    // Verde principal
    "secondary": "#1E90FF",  // Azul apoio
    "accent": "#FFD93B",     // Amarelo sol
    "cta": "#FF8C42",        // Laranja CTA
    "neutral": "#F5F5F5"     // Neutro claro
},

  // SEO
  seo: {
    title: "Passeios Natal Tur - Os Melhores Passeios em Natal/RN",
    description: "Descubra os melhores passeios em Natal/RN com a Passeios Natal Tur. Litoral Norte, Pipa, Genipabu, Maracajaú e muito mais. Reserve já seu passeio!",
    keywords: "passeios natal, turismo natal rn, genipabu, pipa, maracajaú, litoral norte, litoral sul, buggy natal, quadriciclo natal",
    ogImage: "/slides/genipabu-dunas.jpg",
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
        "name": "Carlos Mendes",
        "rating": "5",
        "destination": "Genipabu",
        "text": "Passeio incrível! O bugueiro foi super atencioso e as dunas de Genipabu são espetaculares. A Passeios Natal Tur está de parabéns pela organização!"
    },
    {
        "name": "Ana Beatriz",
        "rating": "5",
        "destination": "Maracajaú",
        "text": "Mergulho em Maracajaú foi uma experiência única! As piscinas naturais são realmente o Caribe brasileiro. Super recomendo a Passeios Natal Tur!"
    },
    {
        "name": "Roberto Silva",
        "rating": "5",
        "destination": "Pipa",
        "text": "Pipa é um paraíso! A van estava confortável, o guia foi excelente e tivemos tempo suficiente para aproveitar cada cantinho. Voltaremos com certeza!"
    },
    {
        "name": "Mariana Costa",
        "rating": "5",
        "destination": "Litoral Norte",
        "text": "Passeio completo pelo litoral norte superou nossas expectativas! O buggy era novinho e o motorista conhecia todos os melhores pontos. Top demais!"
    },
    {
        "name": "João Pedro",
        "rating": "5",
        "destination": "Rio do Fogo",
        "text": "Os parrachos do Rio do Fogo são espetaculares! Água cristalina, peixes coloridos... A Passeios Natal Tur proporcionou uma experiência inesquecível!"
    },
    {
        "name": "Fernanda Oliveira",
        "rating": "5",
        "destination": "Quadriciclo",
        "text": "Quadriciclo em Maracajaú foi pura adrenalina! Paisagens lindas, equipamentos novos e muita diversão. A equipe da Passeios Natal Tur é nota 10!"
    }
],

  // FAQs
  faqs: [
    {
        "question": "Quais documentos preciso levar?",
        "answer": "Para todos os passeios é necessário documento com foto (RG, CNH ou passaporte). Menores de idade devem estar acompanhados dos responsáveis ou portar autorização."
    },
    {
        "question": "Como funciona o pagamento?",
        "answer": "Aceitamos PIX, cartão de crédito, débito e dinheiro. Para grupos, oferecemos facilidades de pagamento. Entre em contato via WhatsApp para mais detalhes."
    },
    {
        "question": "Os passeios incluem alimentação?",
        "answer": "Os passeios incluem transporte e equipamentos. Alimentação é por conta do cliente, mas sempre paramos em locais com boa estrutura gastronômica."
    },
    {
        "question": "Posso cancelar meu passeio?",
        "answer": "Sim, cancelamentos com até 24h de antecedência têm reembolso total. Para cancelamentos no mesmo dia, consulte nossa política via WhatsApp."
    },
    {
        "question": "Vocês fazem passeios personalizados?",
        "answer": "Sim! Criamos roteiros exclusivos para grupos, famílias e empresas. Entre em contato pelo WhatsApp para um orçamento personalizado."
    },
    {
        "question": "Qual o horário dos passeios?",
        "answer": "Os horários variam por passeio. Geralmente saímos entre 7h e 8h da manhã, com retorno no final da tarde. Informamos o horário exato na confirmação."
    },
    {
        "question": "Os veículos têm seguro?",
        "answer": "Todos os nossos veículos (buggys, vans, quadriciclos) possuem seguro e passam por manutenção regular. Sua segurança é nossa prioridade."
    }
],

  // Parceiros
  partners: [
    {
        "name": "Buggy Adventure Natal",
        "logo": "partners/buggy-adventure.jpg",
        "description": "Frota de buggys modernos e seguros"
    },
    {
        "name": "Maracajaú Diving",
        "logo": "partners/maracajau-diving.jpg",
        "description": "Equipamentos de mergulho profissionais"
    }
],

  // Imagens do Hero
  heroSlides: [
    {
        "image": "/slides/genipabu-dunas.jpg",
        "alt": "Dunas de Genipabu com buggy"
    },
    {
        "image": "/slides/maracajau-mergulho.jpg",
        "alt": "Mergulho em Maracajaú"
    },
    {
        "image": "/slides/pipa-praia.jpg",
        "alt": "Praia de Pipa com falésias"
    }
],

  // Logo
  logo: {
    file: "/id/passeios-natal-tur-logo.png",
    alt: "Passeios Natal Tur",
  },
};