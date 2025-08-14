# TransNepal Freight Services - Next.js

A modern, responsive website for TransNepal Freight Services built with Next.js 14, featuring the App Router, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom TransNepal brand colors
- **Responsive design** optimized for all devices
- **Professional layouts** with hero sections, service cards, and contact forms
- **Board of Directors** page with director profiles

## Project Structure

```
├── app/
│   ├── associates/
│   │   └── trs-logipark/
│   │       └── page.tsx
│   ├── board-of-directors/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── management-team/
│   │   └── page.tsx
│   ├── services/
│   │   └── terminal-management/
│   │       ├── biratnagar/
│   │       │   └── page.tsx
│   │       ├── chobar/
│   │       │   └── page.tsx
│   │       ├── kakarbitta/
│   │       │   └── page.tsx
│   │       └── tatopani/
│   │           └── page.tsx
│   ├── qa-code-of-conduct/
│   │   └── page.tsx
│   ├── calendar/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── (other shared components)
├── public/
│   └── about/
│       └── bod/
│           ├── adarsh-hegde.png
│           ├── bhim-joshi.png
│           ├── mukesh-rathi.png
│           └── pankaj-rathi.png
│   └── (other static assets)
├── tailwind.config.ts
├── README.md
├── package.json
└── tsconfig.json
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Pages

- **Homepage** (`/`) - Main landing page with services, locations, and contact form
- **Board of Directors** (`/board-of-directors`) - Leadership team profiles

## Custom Colors

The project uses custom TransNepal brand colors defined in CSS variables:

- `--trans-blue` - Main brand blue color
- `--trans-blue-50` to `--trans-blue-900` - Color variations

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## Development Features

- Hot reload for fast development
- TypeScript for better code quality
- Responsive design with mobile-first approach
- Optimized images with Next.js Image component
- SEO-friendly with proper meta tags

## Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **AWS Amplify**
- **Digital Ocean App Platform**

---

**TransNepal Freight Services Pvt. Ltd.**  
Nepal's Leading Dry Port Operations
