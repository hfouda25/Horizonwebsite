# Horizon Maritime Consultancy & Investment

Professional maritime consultancy website featuring crew management (MLC 2006), ship management (ISM, ISPS, MLC), survey scheduling, and maintenance tracking for Caribbean operations.

## Features

- **Crew Management**: MLC 2006 compliant crew management with certification tracking, training programs, and welfare standards
- **Ship Management**: Comprehensive ISM, ISPS, and MLC compliance monitoring with real-time fleet tracking
- **Survey Scheduling**: Automated survey scheduling and compliance alerts
- **Maintenance Tracking**: Predictive analytics and comprehensive service history management
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Techno-Maritime Futurism design with glass morphism effects

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Connect to GitHub**:
   - Push this repository to GitHub
   - Connect your GitHub account to Netlify
   - Select the repository

2. **Configure Build Settings** (auto-detected from `netlify.toml`):
   - Build command: `pnpm install && pnpm build`
   - Publish directory: `dist/public`
   - Node version: 22

3. **Deploy**:
   - Click "Deploy site"
   - Your site will be live at `https://[your-site-name].netlify.app`

### Manual Deployment

```bash
# Build the project
pnpm build

# The built files will be in dist/public/
# Upload the contents of dist/public/ to your hosting provider
```

## Project Structure

```
horizon-maritime/
├── client/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── contexts/    # React contexts
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utilities
│   │   ├── App.tsx      # Main app component
│   │   ├── main.tsx     # Entry point
│   │   └── index.css    # Global styles
│   └── index.html       # HTML template
├── server/              # Server placeholder (static site)
├── netlify.toml         # Netlify configuration
└── package.json         # Dependencies
```

## Design System

The website uses a custom **Techno-Maritime Futurism** design system:

- **Colors**: Deep space blue (#0B1221) with electric cyan (#00D9FF) and holographic purple (#9D4EDD)
- **Typography**: Orbitron (headings), Outfit (body), Rajdhani (data)
- **Effects**: Glass morphism, gradient meshes, glow effects
- **Animations**: Fade-in, shimmer, gradient shifts

## Pages

- **Home** (`/`): Hero section with services overview and compliance standards
- **Crew Management** (`/crew-management`): MLC 2006 compliance features
- **Ship Management** (`/ship-management`): ISM, ISPS, MLC standards coverage
- **Surveys** (`/surveys`): Survey scheduling and tracking
- **Maintenance** (`/maintenance`): Predictive maintenance system
- **Contact** (`/contact`): Contact form and location information
- **404** (`/404`): Custom error page

## License

MIT

## Support

For questions or support, contact: info@horizonmaritime.com
