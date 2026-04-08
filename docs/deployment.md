# Cloudflare Pages Deployment Guide

This guide provides step-by-step instructions for deploying your Vite + React portfolio to Cloudflare Pages.

## Prerequisites
- A Cloudflare account.
- Your project pushed to a Git provider (GitHub, GitLab, or Bitbucket).

---

## Handling Assets (Images & Large Files)

Since you mentioned that some images and assets are **not uploaded to GitHub**, you have two primary options to ensure they appear on your live website:

### Option A: Direct Local Deployment (Recommended for local assets)
If you have images on your local machine that you **don't** want to push to GitHub, use **Method 2 (Direct Upload)** below. 
1. When you run `npm run build`, Vite will bundle your local images into the `dist/` folder.
2. Using the Wrangler CLI, you upload that `dist/` folder directly from your computer to Cloudflare.
3. **Outcome:** Your website will have the images, but your GitHub repository will stay clean of large files.

### Option B: Cloud Hosting (Google Drive Integration) - Current Implementation
The project is currently configured to use Google Drive for visual assets to keep the repository lightweight.
1. Assets are uploaded to a public Google Drive folder.
2. Direct download links are mapped in `src/assets/assetLinks.ts`.
3. UI components import the `assetLinks` object to render images.
4. **Outcome:** A lightweight repository with fast, CD-hosted assets.

---

## Method 1: Git Integration
This method enables automatic deployments whenever you push changes to your repository.

### 1. Connect Your Repository
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your Git provider and authorize Cloudflare.
4. Select your `Portfolio` repository.

### 2. Configure Build Settings
During the setup process, use the following configuration:

- **Project name:** (e.g., `kaushal-portfolio`)
- **Production branch:** `main` (or your primary branch)
- **Framework preset:** `Vite`
- **Build command:** `npm run build`
- **Build output directory:** `dist`

### 3. Deploy
Click **Save and Deploy**. Cloudflare will start the build process. Once finished, you'll receive a `.pages.dev` URL.

---

## Method 2: Direct Upload (Using Wrangler CLI)
**Use this if you have images/assets locally that are NOT on GitHub.** This method uploads your project directly from your computer, including all local files.

### 1. Install Wrangler
```bash
npm install -g wrangler
```

### 2. Login to Cloudflare
```bash
wrangler login
```

### 3. Build & Deploy
```bash
# Build the project
npm run build

# Deploy the dist folder
npx wrangler pages deploy dist
```

---

## Important Considerations

### SPA Routing (React Router)
Since this project uses `react-router-dom`, a `_redirects` file has been added to the `public/` directory. This ensures that direct navigation to subpages (e.g., `/projects`) doesn't result in a 404 error.

**Content of `public/_redirects`:**
```text
/*    /index.html   200
```

### Environment Variables
If you use any `.env` variables (e.g., for analytics or API keys), you must add them in the Cloudflare Dashboard under:
**Settings** > **Functions** > **Environment variables**.

### Custom Domain
To use your own domain:
1. Go to your Pages project in the dashboard.
2. Select **Custom domains** > **Set up a custom domain**.
3. Follow the prompts to configure your DNS.

---

## Troubleshooting

### Vite 6 vs Vite 5 Mismatch
If you encounter a deployment error stating that Vite 6 is required (often seen when using the latest Cloudflare Wrangler), ensure your project is using Vite 6.
- The project has been upgraded to **Vite 6** to maintain compatibility with the latest Cloudflare Pages build environment.
- If you downgrade Vite, you may need to specify a matching `node` and `npm` version in your Cloudflare build settings.
