import { useEffect } from 'react';

const BASE_TITLE = 'Kaushal Jain';

// Sets the per-route document title + meta description and resets scroll.
// Replaces the duplicated window.scrollTo(0, 0) effects across pages.
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | ${BASE_TITLE}`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', `${title} | ${BASE_TITLE}`);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', description);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute('content', `${title} | ${BASE_TITLE}`);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute('content', description);

    window.scrollTo(0, 0);
  }, [title, description]);
}
