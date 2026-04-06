# Getting Started

This guide explains how to get the project up and running locally on your development machine.

## Prerequisites
- **Node.js**: (Version 18.x or higher recommended)
- **npm**: (Included with Node.js)

---

## Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
```

### 2. Install dependencies
```bash
npm install
```

---

## Local Development

### 1. Start the development server
```bash
npm run dev
```
The server will usually be available at `http://localhost:5173/`.

### 2. Available Scripts
- `npm run build`: Generates the production bundle in the `dist/` directory.
- `npm run lint`: Checks the code for potential errors using ESLint.
- `npm run preview`: Locally previews the production build.

---

## Environment Variables
Currently, the project uses hardcoded values but is designed to easily migrate to environment variables for sensitive data. Look at the configuration files in `src/functions/` for potential customization.
