# SEO and Visibility Strategy

This document tracks practical ways to make `kaushaljain.com` easier for search engines, social previews, recruiters, and scrapers to understand.

## Goals

- Make the site reliably crawlable at `https://kaushaljain.com`.
- Help Google understand that the site represents Kaushal Jain as a software engineer.
- Improve link previews on LinkedIn, GitHub, X, Discord, and messaging apps.
- Make project pages and resume links easier for recruiters and automated tools to parse.
- Reduce technical issues that can block indexing, scraping, or rich previews.

## Priority Plan

### 1. Fix Domain Serving

The portfolio should be served directly from Cloudflare, not through GoDaddy forwarding.

Actions:

- Disable GoDaddy domain forwarding.
- Remove GoDaddy forwarding `A` records such as `3.33.251.168` and `15.197.225.128`.
- Add the domain to Cloudflare Workers as custom domains:
  - `kaushaljain.com`
  - `www.kaushaljain.com`
- Prefer moving nameservers from GoDaddy to Cloudflare so Cloudflare can manage apex DNS cleanly.
- Ensure `https://kaushaljain.com` returns the actual portfolio HTML.
- Decide one canonical host, usually `https://kaushaljain.com`, and redirect `www` to it.

Verification:

```bash
nslookup kaushaljain.com
nslookup www.kaushaljain.com
curl -I https://kaushaljain.com
curl -I https://www.kaushaljain.com
```

Expected result:

- The apex and `www` domains resolve.
- HTTPS works.
- There is at most one clean redirect.
- The response is from Cloudflare/your Worker, not GoDaddy forwarding.

### 2. Fix Text Encoding

Some source files currently show mojibake such as broken dash, arrow, and emoji text. This can appear in page snippets, scraper output, and visible UI.

Actions:

- Replace broken text with valid UTF-8 characters or ASCII equivalents.
- Prefer ASCII in source files unless the typography meaning is important.
- Check:
  - `index.html`
  - `src/pages/*.tsx`
  - `src/site.ts`
  - `docs/*.md`

Examples:

```text
Kaushal Jain [broken dash] final-year...
```

Should become:

```text
Kaushal Jain - final-year...
```

Prefer the ASCII version unless there is a strong reason to keep typographic punctuation.

### 3. Add Static Metadata

React updates page metadata after JavaScript loads, but many scrapers only read the initial `index.html`. Put important global metadata directly in `index.html`.

Recommended tags:

```html
<link rel="canonical" href="https://kaushaljain.com/" />
<meta property="og:url" content="https://kaushaljain.com/" />
<meta property="og:site_name" content="Kaushal Jain" />
<meta name="twitter:title" content="Kaushal Jain | Portfolio" />
<meta name="twitter:description" content="Computer Science student at PEC Chandigarh building backend, AI, ML, and full-stack projects." />
```

Also keep:

- `title`
- `meta description`
- `og:title`
- `og:description`
- `og:image`
- `twitter:card`
- `twitter:image`

Use an image that is at least `1200x630` for strong social previews.

### 4. Add Structured Data

Add JSON-LD so search engines understand the site as a personal portfolio.

Recommended schema:

- `Person`
- `WebSite`
- `sameAs` links for GitHub, LinkedIn, LeetCode, and other public profiles
- `alumniOf` or `affiliation` for PEC Chandigarh
- `knowsAbout` for backend engineering, machine learning, AI, full-stack development, Django, React, and Python

Example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kaushal Jain",
  "url": "https://kaushaljain.com",
  "image": "https://res.cloudinary.com/dxhf4srxx/image/upload/v1776057328/portfolio/profile.jpg",
  "jobTitle": "Software Engineer",
  "description": "Computer Science student at PEC Chandigarh building backend, AI, ML, and full-stack projects.",
  "sameAs": [
    "https://github.com/KaushalJainAI",
    "https://www.linkedin.com/in/kaushal-jain-72a886259/",
    "https://leetcode.com/u/user1211TH/"
  ],
  "knowsAbout": [
    "Backend Engineering",
    "Machine Learning",
    "Artificial Intelligence",
    "Django",
    "React",
    "Python",
    "Full-Stack Development"
  ]
}
</script>
```

### 5. Add `robots.txt`

Create `public/robots.txt`:

```text
User-agent: *
Allow: /

Sitemap: https://kaushaljain.com/sitemap.xml
```

### 6. Add `sitemap.xml`

Create `public/sitemap.xml` with the main routes:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kaushaljain.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://kaushaljain.com/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://kaushaljain.com/projects</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://kaushaljain.com/skills</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://kaushaljain.com/research</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://kaushaljain.com/contact</loc>
    <priority>0.7</priority>
  </url>
</urlset>
```

Update this when routes change.

### 7. Improve Project Discoverability

Recruiters and search engines need specific project signals, not only broad category labels.

Actions:

- Link each project to its exact GitHub repository instead of the GitHub profile.
- Add direct live demo links where available.
- Add measurable outcomes:
  - response time improvements
  - users/customers served
  - model performance
  - cost reductions
  - deployment details
- Add a short case study for the strongest project, likely NGU Spices.

Suggested project case study structure:

- Problem
- Role and ownership
- Tech stack
- Architecture
- Key implementation decisions
- Performance/security considerations
- Result
- Screenshots
- Links

### 8. Improve Page Copy for Search Intent

The site should include phrases people may search for:

- `Kaushal Jain`
- `Kaushal Jain portfolio`
- `Kaushal Jain PEC Chandigarh`
- `backend developer`
- `AI engineer`
- `machine learning engineer`
- `Django developer`
- `React TypeScript portfolio`
- `full-stack developer`

Use these naturally in headings, descriptions, project summaries, and metadata. Avoid keyword stuffing.

### 9. Improve Images

Images help social previews and perceived quality, but large images can hurt performance.

Actions:

- Add `loading="lazy"` and `decoding="async"` to non-hero images.
- Keep above-the-fold hero image eager.
- Use Cloudinary transformations:

```text
f_auto,q_auto,w_1200
```

- Make sure important images have descriptive alt text.
- Use a dedicated social preview image at `1200x630`.

### 10. Submit and Monitor

After DNS and metadata are fixed:

- Add the site to Google Search Console.
- Submit `https://kaushaljain.com/sitemap.xml`.
- Inspect the homepage URL and request indexing.
- Test social previews:
  - LinkedIn Post Inspector
  - Facebook Sharing Debugger
  - X Card Validator
- Monitor Core Web Vitals.
- Search Google for:

```text
site:kaushaljain.com
"Kaushal Jain"
"Kaushal Jain" "PEC Chandigarh"
```

## Technical Checklist

- [ ] GoDaddy forwarding disabled
- [ ] Cloudflare custom domain configured
- [ ] Apex and `www` domains resolve
- [ ] HTTPS works
- [ ] Canonical URL added
- [ ] `og:url` added
- [ ] Twitter metadata completed
- [ ] JSON-LD added
- [ ] `robots.txt` added
- [ ] `sitemap.xml` added
- [ ] Broken encoding fixed
- [ ] Project links point to exact repos
- [ ] Non-hero images use lazy loading
- [ ] Social preview image is 1200x630
- [ ] Site submitted to Google Search Console

## Content Strategy

Publish or add content that increases credibility:

- One detailed NGU Spices case study.
- One backend/security case study from the firmware IP platform.
- One ML case study for NASA Battery RUL.
- A short page or section for resume highlights.
- A concise technical writing section if you publish notes, docs, or blog posts later.

The strongest portfolio visibility comes from specific proof: exact repositories, live demos, architecture details, measurable outcomes, and consistent public profile links.
