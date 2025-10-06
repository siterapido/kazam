/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Verde Kazan Adventure
        primary: {
          50: '#f4f6f3',
          100: '#e8ede6',
          200: '#d1dbc9',
          300: '#b5c5a7',
          400: '#95a982',
          500: '#2E3D2C', // Primária (fundo escuro, cabeçalho, rodapé, botões principais)
          600: '#253327',
          700: '#1e2920',
          800: '#18201a',
          900: '#131815',
        },
        secondary: {
          50: '#f6f8f2',
          100: '#ecf0e4',
          200: '#d9e1ca',
          300: '#c1cda8',
          400: '#a5b584',
          500: '#8AA03D', // Secundária (detalhes, hover, links)
          600: '#7a9035',
          700: '#68792d',
          800: '#566326',
          900: '#475220',
        },
        accent: {
          50: '#f8faf4',
          100: '#f1f5e8',
          200: '#e3ebd1',
          300: '#d0ddb4',
          400: '#b9cc92',
          500: '#A4C639', // Destaque (botões, CTA, ícones importantes)
          600: '#94b332',
          700: '#7f9a2a',
          800: '#6b8023',
          900: '#59691d',
        },
        cta: {
          50: '#f8faf4',
          100: '#f1f5e8',
          200: '#e3ebd1',
          300: '#d0ddb4',
          400: '#b9cc92',
          500: '#A4C639', // Destaque (botões, CTA, ícones importantes) - mesmo que accent
          600: '#94b332',
          700: '#7f9a2a',
          800: '#6b8023',
          900: '#59691d',
        },
        neutral: {
          50: '#F9F9E1', // Fundo geral (background principal)
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#C1C1C1', // Neutra (bordas, divisórias, sombras)
          500: '#a3a3a3',
          600: '#737373',
          700: '#525252',
          800: '#404040',
          900: '#1E1E1E', // Texto principal (textos e títulos)
        },
        // Cores diretas para facilitar uso
        'kazan-primary': '#2E3D2C',
        'kazan-secondary': '#8AA03D',
        'kazan-background': '#F9F9E1',
        'kazan-text': '#1E1E1E',
        'kazan-accent': '#A4C639',
        'kazan-neutral': '#C1C1C1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

