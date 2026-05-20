# Cloudflare `_redirects` Deployment Error

## Issue
The Cloudflare Worker deployment can fail after a successful Vite build with this error:

```text
Invalid _redirects configuration:
Line 1: Infinite loop detected in this rule.
This would cause a redirect to strip `.html` or `/index` and end up triggering this rule again.
[code: 10021]
```

In this project, the failing rule was:

```text
/*    /index.html   200
```

Vite copied `public/_redirects` into `dist/_redirects`, then Wrangler uploaded it with the Worker assets. Cloudflare Workers Assets rejected the rule before publishing the new deployment.

## Root Cause
The app is deployed as a Cloudflare Worker with static assets, not as a classic Pages-only app. The project already configures SPA fallback in `wrangler.toml`:

```toml
[assets]
directory = "dist"
not_found_handling = "single-page-application"
```

That setting serves `index.html` for client-side routes. Adding a catch-all `_redirects` rewrite on top of it is redundant and Cloudflare detects it as a possible infinite loop.

## Fix
Remove `public/_redirects` from the repository.

Then rebuild and deploy:

```bash
npm run build
npx wrangler deploy
```

## Verification
After `npm run build`, confirm `dist/_redirects` is not present. The deployment should upload the static assets and create a new Worker version without error code `10021`.
