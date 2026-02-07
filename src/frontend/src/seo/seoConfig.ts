export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const baseSiteUrl = typeof window !== 'undefined' ? window.location.origin : '';

export const defaultSeo: SeoMetadata = {
  title: 'Freelance SEO Expert in Kerala | SEO Specialist Kerala, India',
  description: 'Professional freelance SEO specialist based in Kerala, India. Offering technical SEO audits, on-page optimization, local SEO, and content strategy to help businesses rank better.',
  keywords: 'Freelance SEO Expert Kerala, SEO Specialist Kerala, SEO Services Kerala India, Technical SEO Kerala, Local SEO Kerala',
  ogTitle: 'Freelance SEO Expert in Kerala | SEO Specialist',
  ogDescription: 'Professional SEO services in Kerala, India. Technical audits, on-page optimization, and local SEO strategies.',
  twitterCard: 'summary_large_image'
};

export const seoBySection: Record<string, SeoMetadata> = {
  home: {
    title: 'Freelance SEO Expert in Kerala | SEO Specialist Kerala, India',
    description: 'Professional freelance SEO specialist based in Kerala, India. Offering technical SEO audits, on-page optimization, local SEO, and content strategy to help businesses rank better.',
    keywords: 'Freelance SEO Expert Kerala, SEO Specialist Kerala, SEO Services Kerala India'
  },
  about: {
    title: 'About | Freelance SEO Specialist in Kerala',
    description: 'Learn about my approach to SEO: honest, execution-focused strategies that deliver measurable results. Based in Kerala, India, working with businesses locally and globally.',
    keywords: 'SEO Specialist Kerala, About SEO Expert, SEO Consultant Kerala'
  },
  services: {
    title: 'SEO Services | Technical SEO & Local SEO in Kerala',
    description: 'Comprehensive SEO services including technical audits, on-page optimization, local SEO, content strategy, and keyword research. Serving businesses in Kerala and beyond.',
    keywords: 'SEO Services Kerala, Technical SEO, Local SEO Kerala, On-Page SEO'
  },
  'case-studies': {
    title: 'Case Studies | SEO Results & Success Stories',
    description: 'Real SEO case studies showing measurable improvements in organic traffic, rankings, and conversions. See how strategic SEO work delivers results.',
    keywords: 'SEO Case Studies, SEO Results, SEO Success Stories Kerala'
  },
  contact: {
    title: 'Contact | Get in Touch for SEO Services',
    description: 'Ready to improve your search rankings? Contact me for a consultation. Based in Kerala, India, serving clients locally and internationally.',
    keywords: 'Contact SEO Expert Kerala, SEO Consultation, Hire SEO Specialist'
  }
};

export const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Freelance SEO Specialist Kerala',
  description: 'Professional SEO services including technical audits, on-page optimization, and local SEO strategies.',
  url: baseSiteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kerala',
    addressCountry: 'IN'
  },
  areaServed: {
    '@type': 'State',
    name: 'Kerala'
  },
  serviceType: ['SEO Services', 'Technical SEO', 'Local SEO', 'Content Strategy'],
  priceRange: '$$',
  provider: {
    '@type': 'Person',
    name: 'SEO Specialist',
    jobTitle: 'Freelance SEO Expert',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kerala',
      addressCountry: 'IN'
    }
  }
};
