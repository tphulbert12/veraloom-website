# Veraloom — Marketing Website

The official marketing website for **Veraloom**, built with Next.js 15, TypeScript, and Tailwind CSS using the App Router.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the local development server       |
| `npm run build` | Create an optimized production build     |
| `npm run start` | Start the production server              |
| `npm run lint`  | Run ESLint across the project            |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, nav + footer
│   ├── page.tsx          # Home page with hero
│   ├── features/         # Features page
│   ├── pricing/          # Pricing page
│   ├── privacy/          # Privacy policy
│   └── contact/          # Contact page
├── components/
│   ├── Navbar.tsx        # Responsive navigation
│   ├── Footer.tsx        # Site-wide footer
│   ├── Hero.tsx          # Hero section
│   └── ...
```

## Deployment

Deploy easily to [Vercel](https://vercel.com/) — connect the GitHub repository and every push to `main` will trigger a production build.

---

© Veraloom. All rights reserved.
