# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
A Next.js 15 dental clinic website for **Clinica Smile Suceava**, featuring responsive design, Romanian language support, and modern UI components. The site emphasizes family-friendly care and a fear-free environment with 100% patient satisfaction.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
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
- **Next.js 15.3.2** with App Router
- **TypeScript** with strict mode
- **Chakra UI** for component library
- **Framer Motion** for animations
- **Lucide React** for icons
- **React 18.3.1**

### Routing Structure
The app uses Next.js App Router with file-based routing:
```
/app
  ├── page.tsx           # Home page
  ├── servicii/page.tsx  # Services
  ├── despre-noi/page.tsx # About
  ├── cazuri/page.tsx    # Cases/Projects
  ├── contact/page.tsx   # Contact
  ├── layout.tsx         # Root layout with SEO
  ├── template.tsx       # Shared template with navigation
  └── providers.tsx      # Chakra UI providers
```

### Key Architectural Patterns

1. **Shared Business Information**: Centralized in `/lib/business-info.ts` for consistent data across all pages.

2. **Responsive Navigation**: 
   - ScrollingNavbar with dynamic styling based on scroll position
   - Mobile drawer menu implemented in `template.tsx`
   - Burger menu color adjusts based on page and scroll state

3. **SEO & Metadata**: Configured in `layout.tsx` with:
   - Schema.org DentalClinic markup
   - Open Graph tags
   - Meta descriptions in Romanian

4. **Responsive Design Patterns**:
   - Buttons use `Stack` with `direction={{ base: 'column', sm: 'row' }}`
   - Mobile-first approach with Chakra UI breakpoints
   - Full-width elements on mobile with `w={{ base: 'full', sm: 'auto' }}`

## Component Architecture

### Page Components (`/components/pages/`)
Each page component:
- Receives `businessInfo` prop
- Uses responsive Chakra UI components
- Implements Framer Motion animations
- No longer uses `onNavigate` - all navigation uses Next.js Link

### UI Components (`/components/components/`)
- **Navigation.tsx**: Desktop/mobile nav with responsive phone button
- **ScrollingNavbar.tsx**: Transparent on hero, white on scroll
- **Footer.tsx**: Newsletter signup, company info, responsive grid

## Responsive Implementation

### Breakpoints
- `base`: 0px (mobile)
- `sm`: 480px (large phones)
- `md`: 768px (tablets)
- `lg`: 992px (laptops)
- `xl`: 1280px (desktops)

### Common Responsive Patterns
```jsx
// Button groups
<Stack direction={{ base: 'column', sm: 'row' }}>

// Text visibility
<Text display={{ base: 'none', sm: 'inline' }}>

// Sizing
size={{ base: 'lg', md: 'xl' }}
h={{ base: '50px', md: '60px' }}
```

## React Hooks Best Practices
- All `useColorModeValue` hooks must be called at the component level, not inside callbacks or map functions
- Color values are stored in variables when needed inside iterations

## Business Information
Located in `/lib/business-info.ts`:
- Clinica Smile Suceava
- Phone: 0762 454 545
- Email: clinica.smile@yahoo.com
- Address: Strada Statiunii Nr.13, Suceava
- 100% recommendation rate (69 reviews)

## Common Development Tasks

### Update Business Information
Edit `/lib/business-info.ts`

### Modify SEO/Metadata
Edit `/app/layout.tsx` - update meta tags and Schema.org data

### Add New Page Route
1. Create folder in `/app/[route-name]/`
2. Add `page.tsx` that imports the page component
3. Update navigation in `Navigation.tsx` and `template.tsx`

### Fix Navigation Colors
Navigation color logic is in:
- `Navigation.tsx` for desktop nav items
- `template.tsx` for mobile burger menu

### Deploy to Production
```bash
git add -A
git commit -m "Your message"
git push origin main
```

## Important Implementation Notes

1. **No onNavigate Pattern**: All navigation uses Next.js Link component with proper href attributes
2. **Mobile Menu**: Implemented in `template.tsx` with drawer component
3. **Button Responsiveness**: All CTAs stack vertically on mobile using Stack component
4. **Color Mode**: Hooks called at component level to avoid React rules violations
5. **Romanian URLs**: Routes use Romanian names (/servicii, /despre-noi, etc.)