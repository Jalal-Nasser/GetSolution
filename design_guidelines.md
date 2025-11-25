# GetSolution Corporate Website Design Guidelines

## Design Approach
**Reference-Based**: Inspired by SSBS.com.sa's professional corporate structure - clean organizational hierarchy, structured service presentation, and authoritative business presence. Adapted with GetSolution branding and modern refinements.

## Core Design Principles
- **Professional Authority**: Corporate credibility through structured layouts and polished presentation
- **Clear Hierarchy**: Organized information architecture guiding users through services and company information
- **Business Credibility**: Professional imagery and structured content establishing trust

## Color System
- **Primary**: #1E3A8A (Professional Blue) - Headers, primary buttons, key elements
- **Secondary**: #059669 (Success Green) - Success states, highlights, secondary CTAs
- **Accent**: #DC2626 (Call-to-Action Red) - Important CTAs, urgent actions
- **Background**: #FFFFFF (White) - Main backgrounds, cards
- **Text**: #1F2937 (Dark Grey) - Body text, content
- **Neutral**: #F3F4F6 (Light Grey) - Backgrounds, dividers, subtle sections

## Typography
- **Primary Font**: Inter for headings and UI elements
- **Secondary Font**: Open Sans for body text and descriptions
- **Hierarchy**:
  - H1: 3rem (48px), bold, tracking-tight
  - H2: 2.5rem (40px), semibold
  - H3: 2rem (32px), semibold
  - H4: 1.5rem (24px), medium
  - Body: 1rem (16px), regular
  - Small: 0.875rem (14px), regular

## Layout System
**Spacing Units**: Use Tailwind's 4, 8, 12, 16, 20, 24 (equivalent to 16px, 32px, 48px, 64px, 80px, 96px)
- Section padding: py-16 to py-24
- Container max-width: max-w-7xl
- Grid gaps: gap-8 for cards, gap-12 for major sections

## Component Library

### Navigation
- Sticky header with white background and subtle shadow
- Logo left-aligned, navigation links right-aligned
- Mobile: Hamburger menu transforming to full-screen overlay
- CTA button in header using accent color

### Hero Sections
- Large hero image with overlay gradient (dark blue to transparent)
- Centered headline and subheadline over hero image
- Blurred background buttons for primary CTAs placed over images
- Height: 70vh minimum for impact

### Service Cards
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- White cards with subtle shadow and hover elevation effect
- Icon at top, title, description, and "Learn More" link
- Consistent padding: p-8

### Contact Forms
- Two-column layout on desktop (form left, info right)
- Input fields with border styling, focus state with primary color ring
- Large textarea for messages
- Submit button using primary color with hover state

### Footer
- Three-column layout: Company info, Quick Links, Contact details
- Dark background (#1F2937) with white/light grey text
- Social media icons if applicable
- Copyright and legal links at bottom

## Page Structures

### Home Page
1. Hero with large professional image, company tagline, primary CTA
2. Services overview grid (3-4 featured services)
3. About snippet with company mission
4. Statistics/achievements section
5. Contact CTA section

### About Page
1. Company story hero with image
2. Mission and vision statements
3. Values grid (3-4 core values)
4. Team section (if applicable)

### Services Page
1. Services hero section
2. Comprehensive service cards grid
3. Process/methodology section
4. Related case studies or testimonials

### Contact Page
1. Contact form + company information two-column layout
2. Map integration (optional)
3. Office hours and contact details
4. Alternative contact methods

## Images
- **Hero Images**: Professional corporate imagery showing business environments, technology, or abstract professional themes
- **Service Cards**: Icon-based or small illustrative images representing each service
- **About Page**: Office/team photos, professional workplace imagery
- **Placement**: Hero sections use full-width background images, section breaks can use split image-text layouts

## Responsive Behavior
- **Desktop** (1024px+): Multi-column grids, side-by-side layouts
- **Tablet** (768px-1023px): 2-column grids, stacked sections
- **Mobile** (<768px): Single column, stacked navigation, full-width cards

## Animations
Minimal and professional:
- Smooth page transitions (200ms)
- Hover elevations on cards (shadow transitions)
- Form input focus states
- No distracting scroll animations or excessive motion