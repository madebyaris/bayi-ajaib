// Structured Data (JSON-LD) schemas for SEO

import { officeLocations, companyStats } from '@/data';

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VIBE TALENT',
  alternateName: 'Vibe Talent Indonesia',
  description: 'Indonesia\'s leading headhunter and talent acquisition firm specializing in executive search, recruitment agency services, and HR consulting across Jakarta, Surabaya, and Bandung.',
  url: 'https://vibe-talent.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://vibe-talent.com/logo.png',
    width: 300,
    height: 100,
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://vibe-talent.com/og-image.jpg',
    width: 1200,
    height: 630,
  },
  foundingDate: '2017',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: companyStats.teamSize,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: officeLocations[0]?.address.split(',')[0] || 'Jakarta Business District',
    addressLocality: 'Jakarta',
    addressRegion: 'DKI Jakarta',
    postalCode: '12190',
    addressCountry: 'ID',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: officeLocations[0]?.phone || '+62-21-5555-0001',
      contactType: 'customer service',
      availableLanguage: ['English', 'Indonesian'],
      areaServed: 'ID',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'ContactPoint',
      telephone: officeLocations[0]?.phone || '+62-21-5555-0001',
      contactType: 'sales',
      availableLanguage: ['English', 'Indonesian'],
      areaServed: 'ID',
    },
  ],
  sameAs: [
    'https://linkedin.com/company/vibe-talent',
    'https://twitter.com/vibe_talent',
    'https://facebook.com/vibetalent',
    'https://instagram.com/vibe.talent',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Recruitment Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Executive Search',
        description: 'Strategic C-suite and senior leadership recruitment',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Recruitment Process Outsourcing',
        description: 'End-to-end recruitment solution with embedded team',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Mass Hiring',
        description: 'Large-scale recruitment campaigns for rapid expansion',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Employer of Record',
        description: 'Compliant international hiring without local entities',
      },
    ],
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Indonesia',
      sameAs: 'https://en.wikipedia.org/wiki/Indonesia',
    },
  ],
  serviceArea: [
    {
      '@type': 'City',
      name: 'Jakarta',
      sameAs: 'https://en.wikipedia.org/wiki/Jakarta',
    },
    {
      '@type': 'City',
      name: 'Surabaya',
      sameAs: 'https://en.wikipedia.org/wiki/Surabaya',
    },
    {
      '@type': 'City',
      name: 'Bandung',
      sameAs: 'https://en.wikipedia.org/wiki/Bandung',
    },
  ],
};

// Professional Service Schema
export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'VIBE TALENT - Professional Recruitment Services',
  description: 'Expert headhunter and talent acquisition services in Indonesia',
  provider: {
    '@type': 'Organization',
    name: 'VIBE TALENT',
  },
  areaServed: 'Indonesia',
  serviceType: 'Recruitment Services',
  category: 'Human Resources',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Recruitment Solutions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Executive Search',
          description: 'C-suite and senior leadership recruitment',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '15000',
          priceCurrency: 'USD',
          valueAddedTaxIncluded: true,
        },
      },
    ],
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    price: 'Contact for pricing',
    priceCurrency: 'IDR',
    validFrom: '2025-01-01',
    validThrough: '2025-12-31',
  },
};

// LocalBusiness Schema for each office
export const getLocalBusinessSchema = (officeId: string) => {
  const office = officeLocations.find(loc => loc.id === officeId);
  if (!office) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://vibe-talent.com/locations/${office.city.toLowerCase()}`,
    name: `VIBE TALENT ${office.name}`,
    description: `Professional headhunter and recruitment agency in ${office.city}`,
    url: `https://vibe-talent.com/locations/${office.city.toLowerCase()}`,
    telephone: office.phone,
    email: office.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.address.split(',')[0],
      addressLocality: office.city,
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: office.coordinates.lat,
      longitude: office.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    priceRange: '$$',
    hasMap: `https://maps.google.com/?q=${office.coordinates.lat},${office.coordinates.lng}`,
    parentOrganization: {
      '@type': 'Organization',
      name: 'VIBE TALENT',
      url: 'https://vibe-talent.com',
    },
  };
};

// JobPosting Schema (for job listings)
export const getJobPostingSchema = (job: {
  id: string;
  title: string;
  description: string;
  postedDate: string;
  deadline: string;
  type: string;
  company: string;
  location: string;
  currency: string;
  salaryMin: number;
  salaryMax: number;
  requirements: string[];
  skills: string[];
  benefits: string[];
  industry: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Job ID',
      value: job.id,
    },
    datePosted: job.postedDate,
    validThrough: job.deadline,
    employmentType: job.type.toUpperCase().replace('-', '_'),
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
      sameAs: 'https://vibe-talent.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'ID',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: job.currency,
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: 'YEAR',
      },
    },
    qualifications: job.requirements.join(', '),
    skills: job.skills.join(', '),
    benefits: job.benefits.join(', '),
    workHours: '40 hours per week',
    occupationalCategory: job.industry,
  };
};

// WebSite Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VIBE TALENT',
  alternateName: 'Vibe Talent Indonesia',
  description: 'Indonesia\'s leading headhunter and talent acquisition firm',
  url: 'https://vibe-talent.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://vibe-talent.com/jobs?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  sameAs: [
    'https://linkedin.com/company/vibe-talent',
    'https://twitter.com/vibe_talent',
    'https://facebook.com/vibetalent',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'VIBE TALENT',
    logo: {
      '@type': 'ImageObject',
      url: 'https://vibe-talent.com/logo.png',
    },
  },
};

// Breadcrumb Schema Helper
export const getBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
};
