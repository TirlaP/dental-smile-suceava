# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
A Next.js dental clinic website template adapted for **Clinica Smile Suceava**, a comprehensive dental clinic serving adults and children in Suceava, Romania. Built with TypeScript, Chakra UI, and i18n support.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Architecture Overview

### Tech Stack
- **Next.js 15** with App Router
- **TypeScript** with strict mode enabled
- **Chakra UI** for component library
- **Framer Motion** for animations
- **i18next** for internationalization (Romanian primary)
- **Lucide React** for icons

### Project Structure
```
/app
  ├── layout.tsx      # Root layout with metadata and SEO
  ├── page.tsx        # Main entry point with client-side navigation
  ├── providers.tsx   # Chakra UI and other providers
  └── globals.css     # Global styles

/components
  ├── /components     # Reusable UI components
  │   ├── Footer.tsx
  │   ├── Navigation.tsx
  │   └── ScrollingNavbar.tsx
  └── /pages         # Page components (SPA navigation)
      ├── HomePage.tsx
      ├── ServicesPage.tsx
      ├── AboutPage.tsx
      ├── ProjectsPage.tsx
      └── ContactPage.tsx

/public
  └── /locales/ro   # Romanian translations
```

### Key Architectural Decisions

1. **Single Page Application Navigation**: The app uses client-side navigation with a state-based page system rather than file-based routing. All pages are dynamically imported in `app/page.tsx`.

2. **Business Information Centralization**: All clinic data is centralized in the `demoBusinessInfo` object in `app/page.tsx`. This includes contact info, hours, social media, and business details.

3. **SEO Configuration**: Metadata and structured data are configured in `app/layout.tsx` with Schema.org markup for DentalClinic type.

4. **Component Props Pattern**: All page components receive `businessInfo` prop for consistency and easy customization.

## Business Information Configuration

The site is configured for Clinica Smile Suceava with:
- **Name**: Clinica Smile Suceava / Smile Dental Clinique
- **Phone**: 0762 454 545
- **Email**: clinica.smile@yahoo.com
- **Address**: Strada Statiunii Nr.13, Suceava, Romania
- **Special Features**: 100% recommendation rate (69 reviews), family-friendly, fear-free environment

## Key Implementation Details

### Navigation System
- Uses a scrolling navbar that changes appearance based on scroll position
- Mobile-responsive with drawer menu
- Client-side navigation updates `currentPage` state

### Internationalization
- Configured for Romanian language (`ro`)
- Translation files in `/public/locales/ro/common.json`
- Uses next-i18next for server-side translation support

### Styling Approach
- Chakra UI theme customization via `providers.tsx`
- Responsive design with Chakra's responsive utilities
- Color mode support (light/dark themes)

### Performance Optimizations
- Dynamic imports for page components
- Next.js Image optimization
- Lazy loading for non-critical components

## Development Guidelines

1. **Component Creation**: Follow existing patterns in `/components`. Use Chakra UI components and maintain TypeScript types.

2. **Business Info Updates**: Modify the `demoBusinessInfo` object in `app/page.tsx` rather than hardcoding values in components.

3. **SEO Updates**: Update metadata in `app/layout.tsx` and ensure structured data reflects actual business information.

4. **Styling**: Use Chakra UI's style props and theme tokens. Avoid custom CSS unless absolutely necessary.

5. **Translations**: Add new text strings to `/public/locales/ro/common.json` and use the translation hook.

## Common Tasks

### Update Business Information
Edit the `demoBusinessInfo` object in `app/page.tsx:18-47`

### Add New Service
1. Update service data in relevant page component
2. Add translations to `/public/locales/ro/common.json`
3. Update SEO metadata if needed

### Modify Navigation
Edit `components/components/ScrollingNavbar.tsx` for desktop nav or the drawer menu in `app/page.tsx:99-132`

### Change Theme Colors
Modify the Chakra theme configuration in `app/providers.tsx`

## Important Notes

- The site emphasizes family-friendly care and fear-free environment based on perfect patient reviews
- All content should reflect the clinic's focus on both adults and children
- Maintain the professional yet warm tone throughout the site
- Ensure Romanian language accuracy in all content