# Charge Home Solutions — Public Website

Public-facing marketing website for Charge Home Solutions.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Getting started

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Structure

```
app/
  layout.tsx      Root layout, fonts, metadata
  page.tsx        Homepage composition
  globals.css     Tailwind entry + design tokens
components/
  site-header.tsx
  hero-section.tsx
  placeholder-content.tsx
  site-footer.tsx
```

## Scope

This repository contains only the public website. Authentication, databases,
API backends, and CRM/dashboard functionality live elsewhere.
