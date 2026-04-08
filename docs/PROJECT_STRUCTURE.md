# Project Structure

This project follows a component-based architecture for maximum reusability and scalability.

---

## Directory Overview

```text
Portfolio/
├── .vscode/          # VS Code project settings
├── backup/           # Backup files for critical sections
├── docs/             # [NEW] Documentation folder
├── node_modules/     # Project dependencies
├── public/           # Static assets (favicons, PDFs, _redirects)
├── src/              # Source code directory
│   ├── assets/       # [UPDATED] Local icons & assetLinks.ts for cloud assets
│   ├── components/   # Reusable UI parts (Shadcn-style)
│   ├── context/      # React context providers
│   ├── functions/    # Utility functions & data formatting
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Library wrappers (e.g., cn utility)
│   ├── pages/        # Main route components/views
│   ├── types/        # TypeScript interfaces & types
│   ├── App.tsx       # Routing and core layout
│   ├── index.css     # Global styles & Tailwind configuration
│   └── main.tsx      # Application entry point
├── .gitignore        # Files to exclude from Git
├── index.html        # Main HTML template
├── package.json      # Project metadata & scripts
├── postcss.config.js # PostCSS settings
├── tailwind.config.js# Tailwind theme & design tokens
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite build & plugin settings
```

---

## Key Files

### `src/App.tsx`
This file contains the routing logic for the entire portfolio using `react-router-dom`. It is the central hub for defining the URL structure and page navigation.

### `tailwind.config.js`
This is where the project's **Design System** lives. It defines custom colors, font families (Inter, JetBrains Mono), and spacing rules to maintain visual consistency across all pages.

### `src/index.css`
A single CSS file that manages:
1.  Tailwind Directives
2.  Google Fonts Imports
3.  Globally applied animations (like the techy fade-ins)
- **Special Care**: Ensure Google Font imports remain at the top of this file to prevent build issues with Vite.

### `src/assets/assetLinks.ts`
The central registry for all project images. It maps descriptive keys to direct download URLs (currently hosted on Google Drive). This allows for swapping visuals project-wide without editing multiple TSX files.
