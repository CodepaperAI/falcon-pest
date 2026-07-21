const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://falconpestcontrol.com";
const defaultDescription =
  "Falcon Pest Control offers premium, eco-conscious pest management for homes and businesses with luxury-level service.";

export function getBaseMetadata(path = "/", title = "Falcon Pest Control", description = defaultDescription) {
  const canonical = `${siteUrl}${path}`;
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Falcon Pest Control",
      template: "%s | Falcon Pest Control",
    },
    description,
    keywords: [
      "pest control",
      "falcon pest control",
      "rodent control",
      "commercial pest control",
      "eco friendly pest control",
    ],
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: title === "Falcon Pest Control" ? title : `${title} | Falcon Pest Control`,
      description,
      url: canonical,
      siteName: "Falcon Pest Control",
      type: "website",
      images: [
        {
          url: "/hero1.png",
          width: 1200,
          height: 800,
          alt: "Falcon Pest Control premium service",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title === "Falcon Pest Control" ? title : `${title} | Falcon Pest Control`,
      description,
      images: ["/hero1.png"],
    },
  };
}

export function getPageMetadata(path, title, description) {
  return {
    ...getBaseMetadata(path, title, description),
    title,
  };
}

export const jsonLd = {
  website: (path = "/") => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Falcon Pest Control",
    url: `${siteUrl}${path}`,
    description: defaultDescription,
  }),
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Falcon Pest Control",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: ["https://www.instagram.com", "https://www.linkedin.com"],
  }),
  localBusiness: () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Falcon Pest Control",
    image: `${siteUrl}/hero1.png`,
    priceRange: "$",
    telephone: "+1-647-123-4567",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: ["Toronto", "Mississauga", "Brampton"],
    description: defaultDescription,
  }),
  breadcrumb: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  }),
  faq: (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),
};
