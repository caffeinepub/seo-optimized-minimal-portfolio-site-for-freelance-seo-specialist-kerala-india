import { useEffect } from 'react';
import { type SeoMetadata, defaultSeo, jsonLdData, baseSiteUrl } from './seoConfig';

interface SeoHeadManagerProps {
  metadata?: SeoMetadata;
  currentSection?: string;
}

export function SeoHeadManager({ metadata = defaultSeo, currentSection = 'home' }: SeoHeadManagerProps) {
  useEffect(() => {
    // Update title
    document.title = metadata.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', metadata.description);
    if (metadata.keywords) {
      updateMetaTag('keywords', metadata.keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', metadata.ogTitle || metadata.title, true);
    updateMetaTag('og:description', metadata.ogDescription || metadata.description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', `${baseSiteUrl}#${currentSection}`, true);
    if (metadata.ogImage) {
      updateMetaTag('og:image', metadata.ogImage, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', metadata.twitterCard || 'summary_large_image');
    updateMetaTag('twitter:title', metadata.ogTitle || metadata.title);
    updateMetaTag('twitter:description', metadata.ogDescription || metadata.description);
    if (metadata.ogImage) {
      updateMetaTag('twitter:image', metadata.ogImage);
    }

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${baseSiteUrl}#${currentSection}`;

    // JSON-LD structured data
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(jsonLdData);

  }, [metadata, currentSection]);

  return null;
}
