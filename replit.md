# Boysatwork.in - Home Services Platform

## Overview

Boysatwork.in is a professional home services booking platform serving Delhi NCR. The application connects customers with verified service professionals including plumbers, electricians, carpenters, painters, and AC technicians. Users can browse services, view details, and submit booking requests through a multi-step form that sends notifications via EmailJS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration supporting light/dark modes
- **Forms**: React Hook Form with Zod validation schemas
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Vite middleware serves frontend in dev mode
- **Production**: Static file serving from compiled dist/public directory

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Validation**: drizzle-zod generates Zod schemas from database tables
- **Storage Interface**: Abstracted through `IStorage` interface in `server/storage.ts` allowing memory or database backends
- **Migrations**: Drizzle Kit manages schema migrations in `/migrations`

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route page components
    lib/          # Utilities and service data
    hooks/        # Custom React hooks
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route registration
  storage.ts      # Data access layer
shared/           # Shared code between client/server
  schema.ts       # Database schema definitions
```

### Key Design Decisions

**Static Service Data**: Service catalog (plumbing, electrical, etc.) is defined as static TypeScript objects in `client/src/lib/services.ts` rather than database tables. This simplifies the initial implementation while allowing future migration to database-driven content.

**Email + WhatsApp Bookings**: Booking submissions open WhatsApp with pre-filled booking details to the business owner's number. EmailJS is also supported as a secondary channel when configured.

**Static Blog Data**: Blog posts are defined as static TypeScript objects in `client/src/lib/blogPosts.ts`. New posts can be added by editing this file. Each post has slug-based routing at `/blog/:slug`.

**Component Architecture**: Uses shadcn/ui's copy-paste component model where UI primitives live in `client/src/components/ui/` and can be customized directly.

**Hero Carousel**: Homepage uses a 3-slide auto-rotating carousel (`HeroCarousel.tsx`) with bold taglines, dark wash over images, and CTA buttons. Auto-rotates every 5 seconds.

## External Dependencies

### Third-Party Services
- **EmailJS**: Client-side email service for booking notifications. Requires three environment variables:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`

### Database
- **PostgreSQL**: Required for production. Connection string provided via `DATABASE_URL` environment variable.

### External APIs
- **WhatsApp**: Deep links to WhatsApp for customer communication and booking notifications (URL scheme, no API)
- **Instagram**: Social media link to https://www.instagram.com/boysatwork.official/ (in header top bar, mobile, and footer)
- **Google Fonts**: Plus Jakarta Sans and other fonts loaded via CDN

### Key npm Dependencies
- `@tanstack/react-query`: Async state management
- `drizzle-orm` / `drizzle-kit`: Database ORM and migrations
- `react-hook-form` / `zod`: Form handling and validation
- `date-fns`: Date formatting utilities
- `wouter`: Client-side routing
- `@emailjs/browser`: Email service integration