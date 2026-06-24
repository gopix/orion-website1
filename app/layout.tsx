import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Orion Bits Systems | Accessibility Remediation| AI & Automation For Publishing",
    template: "%s | ORION Bits Systems",
  },
  description: "Transform your publishing workflows with ORION Bits Systems. We provide AI, content engineering, and Zoho-powered business automation to drive growth.",
  metadataBase: new URL("https://orionbitssystems.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI publishing automation",
    "Zoho CRM implementation",
    "content engineering solutions",
    "digital publishing workflows",
    "publishing automation systems",
    "editorial intelligence layer",
    "Zoho business automation",
    "automated manuscript validation",
    "ORION Bits Systems",
    "Ghaziabad Zoho partner",
    "AI content operations"
  ],
  openGraph: {
    title: "Orion Bits Systems | Accessibility Remediation| AI & Automation For Publishing",
    description: "Transform your publishing workflows with ORION Bits Systems. We provide AI, content engineering, and Zoho-powered business automation to drive growth.",
    url: "https://orionbitssystems.com",
    siteName: "ORION Bits Systems",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "ORION Bits Systems Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orion Bits Systems | Accessibility Remediation| AI & Automation For Publishing",
    description: "Transform your publishing workflows with ORION Bits Systems. We provide AI, content engineering, and Zoho-powered business automation to drive growth.",
    images: ["/logo.jpeg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://orionbitssystems.com/#organization",
      "name": "ORION Bits Systems Pvt. Ltd.",
      "url": "https://orionbitssystems.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://orionbitssystems.com/logo.jpeg",
        "caption": "ORION Bits Systems Logo"
      },
      "description": "Transform your publishing workflows with ORION Bits Systems. We provide AI, content engineering, and Zoho-powered business automation to drive growth.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No - 155 SF, SHAKTI KHAND-4, INDIRAPURAM",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201014",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://orionbitssystems.com/#localbusiness",
      "name": "ORION Bits Systems Pvt. Ltd.",
      "image": "https://orionbitssystems.com/logo.jpeg",
      "description": "AI, Automation & Content Engineering Solutions specifically focused on the Publishing Industry and Zoho-powered business systems.",
      "url": "https://orionbitssystems.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No - 155 SF, SHAKTI KHAND-4, INDIRAPURAM",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201014",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6366",
        "longitude": "77.3719"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
