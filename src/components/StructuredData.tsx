import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PixelTech Antilles',
    alternateName: 'PixelTech',
    description: 'PixelTech Antilles - Expert en administration réseau et système en Guadeloupe. Infogérance, support technique, dépannage informatique.',
    url: 'https://pixeltech-antilles.com',
    logo: 'https://pixeltech-antilles.com/logos/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bouillante',
      addressRegion: 'Guadeloupe',
      postalCode: '97125',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bouillante',
    },
    email: 'contact@pixeltech-antilles.com',
    priceRange: '€€',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '16.1300',
        longitude: '-61.7700',
      },
      geoRadius: {
        '@type': 'Distance',
        name: 'Guadeloupe',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services PixelTech Antilles',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Administration réseau & système',
            description: 'Infogérance, virtualisation, monitoring, sécurité informatique',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Support technique',
            description: 'Dépannage informatique, configuration, optimisation',
          },
        },
      ],
    },
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Benoit Paterne',
    jobTitle: 'Expert en Administration Réseau & Système',
    worksFor: {
      '@type': 'Organization',
      name: 'PixelTech',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bouillante',
      addressRegion: 'Guadeloupe',
      addressCountry: 'FR',
    },
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  )
}

