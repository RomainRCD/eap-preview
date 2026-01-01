import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  structuredData 
}: SEOHeadProps) => {
  const baseUrl = "https://www.eap-location.fr";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : undefined;

  // Default LocalBusiness structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EAP Location",
    "description": "Location de chariots télescopiques rotatifs pour professionnels du BTP partout en France",
    "url": baseUrl,
    "telephone": "+33368385456",
    "email": "contact@eap-location.fr",
    "foundingDate": "2016",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 07:30-18:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "324"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "itemOffered": {
        "@type": "Service",
        "name": "Location chariot télescopique rotatif",
        "description": "Location courte et longue durée de chariots télescopiques rotatifs de 16m à 35m"
      }
    }
  };

  const mergedStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="EAP Location" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/og-preview.png" />
      <meta property="og:site_name" content="EAP Location" />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/og-preview.png" />
      
      {/* Mobile optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#E65100" />
      
      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(mergedStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
