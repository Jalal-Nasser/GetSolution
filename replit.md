# GetSolution Corporate Website

## Overview
Professional business website for GetSolution (gscompany.sa) - a multi-page corporate site replicating the design and structure of SSBS.com.sa with custom GetSolution branding. Built with React, TypeScript, Express, and Tailwind CSS.

## Project Purpose
Create a professional corporate website showcasing GetSolution's business consulting, technology solutions, and professional training services with:
- Multi-page navigation (Home, About, Services, Contact)
- Professional hero sections and service showcases
- Functional contact form with backend integration
- Fully responsive design across all devices
- Corporate styling with GetSolution brand colors

## Recent Changes
**November 25, 2025** - Initial Implementation
- Created complete multi-page corporate website structure
- Implemented all four main pages: Home, About, Services, Contact
- Configured GetSolution brand colors (#1E3A8A primary blue, #059669 success green, #DC2626 accent red)
- Generated professional hero and service images using AI
- Built responsive header with navigation and mobile menu
- Created comprehensive footer with contact information and social links
- Implemented contact form with full backend integration, validation, and toast notifications
- Set up in-memory storage for contact inquiries
- Added API endpoints for contact form submission and retrieval

## Project Architecture

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn UI component library
- **Forms**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query (React Query v5)
- **Icons**: Lucide React

### Backend Stack
- **Server**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage) for contact inquiries
- **Validation**: Zod schemas with zod-validation-error
- **API**: RESTful endpoints at /api/contact

### Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── Header.tsx       # Sticky navigation header
│   │   ├── Footer.tsx       # Footer with links and contact info
│   │   └── Layout.tsx       # Main layout wrapper
│   ├── pages/
│   │   ├── Home.tsx         # Hero, services overview, stats, CTA
│   │   ├── About.tsx        # Company story, mission, vision, values
│   │   ├── Services.tsx     # Comprehensive service catalog
│   │   └── Contact.tsx      # Contact form and information
│   └── App.tsx              # Main app with routing
server/
├── routes.ts                # API endpoints for contact form
└── storage.ts               # In-memory storage implementation
shared/
└── schema.ts                # Contact inquiry schema and validation
```

## Brand Guidelines
- **Primary Color**: #1E3A8A (Professional Blue) - Headers, primary buttons, key elements
- **Secondary Color**: #059669 (Success Green) - Success states, highlights
- **Accent Color**: #DC2626 (Call-to-Action Red) - Important CTAs, urgent actions
- **Typography**: Inter for headings/UI, Open Sans for body text
- **Design Approach**: Corporate professionalism with clean hierarchy and structured layouts

## Key Features
1. **Home Page**: Hero section, featured services grid, company statistics, bottom CTA
2. **About Page**: Company story with imagery, mission/vision cards, core values grid
3. **Services Page**: Three service categories (Consulting, Technology, Training) with detailed service cards and methodology section
4. **Contact Page**: Comprehensive contact form with validation, contact information cards, business hours
5. **Responsive Navigation**: Desktop horizontal menu, mobile hamburger overlay menu
6. **Footer**: Three-column layout with company info, quick links, and contact details

## API Endpoints
- `POST /api/contact` - Submit contact inquiry (validated with Zod)
- `GET /api/contact` - Get all contact inquiries
- `GET /api/contact/:id` - Get specific inquiry by ID

## Development Workflow
- Start development server: `npm run dev`
- Workflow: "Start application" runs Express backend and Vite frontend on same port
- Hot reload enabled for both frontend and backend changes

## Tech Decisions
- **In-Memory Storage**: Using MemStorage for development; can be easily replaced with database implementation
- **Wouter over React Router**: Lightweight routing solution suitable for corporate website
- **Shadcn UI**: Provides professional, accessible components out of the box
- **Form Validation**: Zod schemas ensure type safety between frontend and backend
- **Toast Notifications**: User feedback for contact form submission
- **Generated Images**: AI-generated professional imagery for hero sections and services

## Future Enhancements (Next Phase)
- Email notification system for contact form submissions
- Portfolio/projects section with case studies
- Blog or news section for company updates
- Multi-language support (Arabic/English)
- Admin dashboard for inquiry management
