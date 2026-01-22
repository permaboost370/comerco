export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Comerco Agrotechnology",
    alternateName: ["Microspore Hellas", "Sacom Hellas"],
    url: "https://comerco.gr",
    logo: "https://comerco.gr/images/logo.png",
    description:
      "Ένας από τους μεγαλύτερους παραγωγούς φυσικών και βιολογικών λιπασμάτων στην Ευρώπη. Καινοτόμες λύσεις βιοτεχνολογίας για βιώσιμη γεωργία.",
    foundingDate: "2012",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Πανεπιστημίου 44",
      addressLocality: "Αθήνα",
      postalCode: "10679",
      addressCountry: "GR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+30-210-361-2754",
        contactType: "customer service",
        availableLanguage: ["Greek", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+30-210-654-8176",
        contactType: "customer service",
        availableLanguage: ["Greek", "English"],
      },
    ],
    email: "info@comerco.gr",
    sameAs: [
      "https://www.facebook.com/comercoagrotechnology",
      "https://www.instagram.com/comerco_agrotechnology/",
      "https://gr.linkedin.com/company/comerco-agrotechnology",
    ],
    areaServed: {
      "@type": "Country",
      name: "Greece",
    },
    knowsAbout: [
      "Organic Fertilizers",
      "Biostimulants",
      "Agricultural Biotechnology",
      "Sustainable Agriculture",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Comerco Agrotechnology",
    url: "https://comerco.gr",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://comerco.gr/el/products?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["el", "en"],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://comerco.gr/#business",
    name: "Comerco Agrotechnology",
    image: "https://comerco.gr/og-image.jpg",
    url: "https://comerco.gr",
    telephone: "+30-210-361-2754",
    email: "info@comerco.gr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Πανεπιστημίου 44",
      addressLocality: "Αθήνα",
      postalCode: "10679",
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.9838,
      longitude: 23.7275,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
