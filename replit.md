# GetSolution IT Solutions Website

## Overview
Professional IT solutions website for GetSolution - a multi-page corporate site showcasing eight specialized IT services. Built with React, TypeScript, Express, and Tailwind CSS.

## Project Purpose
Create a professional IT services website with:
- Multi-page navigation (Home, About, Services, Contact)
- Professional hero sections and IT service showcases (8 services)
- Functional contact form with backend integration
- Fully responsive design across all devices
- IT-focused styling with professional branding

## Recent Changes
**November 25, 2025** - Design Proposal Implementation
- Replaced business consulting focus with IT services specialization
- Updated color palette to Professional Blue (#1B365D) and Accent Orange (#E65100)
- Changed typography to Montserrat Bold for headers and Open Sans for body
- Completely redesigned all four pages with IT service focus
- Implemented 8 IT service offerings (Networks, Software, OS, Application Dev, AI, Cybersecurity, Big Data, Cloud)
- Updated About page with IT company vision/mission
- Updated Contact page with Riyadh office address and contact information
- Added Montserrat Bold font for stronger visual hierarchy

## Project Architecture

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with custom design tokens (Professional Blue #1B365D, Orange #E65100)
- **UI Components**: Shadcn UI component library
- **Forms**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query (React Query v5)
- **Icons**: Lucide React
- **Typography**: Montserrat (headers), Open Sans (body)

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
│   │   ├── Home.tsx         # Hero, 4 featured IT services, stats, CTA
│   │   ├── About.tsx        # Company story, mission, vision, values
│   │   ├── Services.tsx     # Complete 8 IT services catalog
│   │   └── Contact.tsx      # Contact form and information
│   └── App.tsx              # Main app with routing
server/
├── routes.ts                # API endpoints for contact form
└── storage.ts               # In-memory storage implementation
shared/
└── schema.ts                # Contact inquiry schema and validation
```

## Brand Guidelines
- **Primary Color**: #1B365D (Professional Blue) - Headers, navigation, hero sections
- **Accent Color**: #E65100 (Vibrant Orange) - CTAs, service cards, highlights
- **Text Color**: #333333 (Dark Grey) - Body text
- **Typography**: Montserrat Bold (36px, 24px) for headings; Open Sans Regular (18px, 16px) for body
- **Design Approach**: Professional IT services focus with clean hierarchy and technical positioning

## IT Services (8 Specializations)
1. **Computer Networks (NET-101)** - Secure and reliable infrastructure for seamless connectivity
2. **Software Publishing (SFT-202)** - Custom software solutions tailored to your needs
3. **Operating Systems (OPS-303)** - Optimization and management of OS environments
4. **Application Development (APP-404)** - Building innovative web and mobile applications
5. **Artificial Intelligence (AI-505)** - Leveraging AI for smarter business insights
6. **Cybersecurity (CYB-606)** - Protecting data with advanced security measures
7. **Big Data Analytics (DAT-707)** - Unlocking value from data with powerful analytics
8. **Cloud Computing (CLD-808)** - Scalable and flexible cloud solutions

## Key Features
1. **Home Page**: Digital Transformation hero, 4 featured IT services, Why Choose Us stats, bottom CTA
2. **About Page**: Company story with imagery, IT-focused mission/vision, core values grid
3. **Services Page**: All 8 IT services in grid layout with codes, capabilities, expertise sections
4. **Contact Page**: Contact form, Riyadh office details, phone numbers, email, business hours, social links
5. **Responsive Navigation**: Desktop horizontal menu, mobile hamburger overlay menu
6. **Footer**: Three-column layout with company info, quick links, and contact details

## API Endpoints
- `POST /api/contact` - Submit contact inquiry (validated with Zod)
- `GET /api/contact` - Get all contact inquiries
- `GET /api/contact/:id` - Get specific inquiry by ID

## Contact Information
- **Address**: AL Khobar Cinema Building 31452, Kingdom of Saudi Arabia
- **Phone**: +966 54 054 1719
- **Email**: info@gscompany.sa
- **Hours**: Sunday - Thursday: 9:00 AM - 6:00 PM

## Development Workflow
- Start development server: `npm run dev`
- Workflow: "Start application" runs Express backend and Vite frontend on same port
- Hot reload enabled for both frontend and backend changes

## Tech Decisions
- **Montserrat + Open Sans**: Professional typography combination for IT services positioning
- **In-Memory Storage**: Using MemStorage for development; can be replaced with database
- **Wouter over React Router**: Lightweight routing for corporate website
- **Shadcn UI**: Professional, accessible components
- **8 IT Services**: Specialized positioning establishing market differentiation
