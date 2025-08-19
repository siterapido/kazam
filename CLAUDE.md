# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server with hot reload

# Build & Deploy  
npm run build        # TypeScript compilation + Vite production build
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # ESLint with TypeScript support

# Configuration Management
npm run config:update # Generate TypeScript config from SITE_CONFIG.md
```

## Project Architecture

This is a **React 19 + TypeScript + Vite** tourism landing page for JasTur Turismo, built with modern web technologies and focused on performance and user experience.

### Tech Stack
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React + React Icons
- **Build Tool**: Vite with React plugin
- **Path Aliases**: `@/` maps to `src/`

### Core Architecture Patterns

**1. Configuration-Driven Design**
- All business data centralized in `src/config/jastur.ts`
- Company info, destinations, services, contact details, colors, SEO metadata
- WhatsApp integration with custom messages per service

**2. Component-Based Architecture**
```
src/components/ui/
├── Base Components (Logo, CTAButton, Card, Section, etc.)
├── Section Components (HeroSection, BenefitsSection, GallerySection, etc.)
└── Specialty Components (BackgroundSlider, WhatsAppButton, etc.)
```

**3. Design System Integration**
- Custom Tailwind theme with JasTur brand colors (primary blue #3b82f6, secondary orange #f97316)
- Consistent spacing, typography (Inter font), and animation patterns
- Responsive-first approach (mobile → tablet → desktop)

**4. Configuration-Driven Content Management**
- Business data managed via `SITE_CONFIG.md` (Markdown format for easy editing)
- Automatic TypeScript config generation via `npm run config:update`
- Generated config at `src/config/jastur.ts` (DO NOT edit directly)
- Image processing: assets copied from `assets/` to `public/` during config generation

**5. Landing Page Structure**
The main page (`LandingPage.tsx`) follows a conversion-optimized flow:
1. **HeroSection** - Background slider with company stats and main CTA
2. **DestinationsSection** (GallerySection) - Featured destinations with booking CTAs  
3. **ServicesSection** (BenefitsSection) - Service offerings with WhatsApp integration
4. **TestimonialsSection** - Customer reviews with carousel
5. **PartnersSection** - Business partners showcase
6. **FAQSection** - Common questions
7. **FooterSection** - Contact info and navigation
8. **WhatsAppButton** - Floating contact button

### Key Implementation Details

**WhatsApp Integration**: All CTAs connect to WhatsApp with contextual pre-filled messages based on user action (service inquiry, destination booking, etc.)

**Image Management**: Static assets in `public/` with organized folders:
- `images/` - General photos (partners, destinations)  
- `slides/` - Hero section background images
- `id/` - Brand assets (logos, favicons)

**Responsive Breakpoints**: Mobile-first with Tailwind's standard breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

**Animation Strategy**: Framer Motion for entrance animations, hover effects, and carousel functionality. Custom Tailwind animations for simple transitions.

### Development Notes

- TypeScript is strictly configured with separate configs for app (`tsconfig.app.json`) and build tools (`tsconfig.node.json`)
- ESLint configured with React hooks and TypeScript rules
- PostCSS + Autoprefixer for CSS processing
- All components use modern React patterns (functional components, hooks, TypeScript interfaces)
- Semantic HTML and accessibility considerations throughout

### Content Management Workflow

**Important**: To modify business content (services, destinations, testimonials, etc.):
1. Edit `SITE_CONFIG.md` (not the TypeScript config directly)
2. Run `npm run config:update` to regenerate the TypeScript config
3. Images should be placed in `assets/` folder structure before running config update
4. Dev server automatically runs config update, but build requires explicit execution