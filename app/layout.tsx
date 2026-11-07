import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Atlantic Web Studio",
      url: siteUrl,
      logo: `${siteUrl}/images/atlantic-logo.png`,
      image: `${siteUrl}/opengraph-image.png`,
      description:
        "Atlantic Web Studio est une agence digitale spécialisée dans la création de sites web, le développement d'applications sur mesure et les solutions numériques pour les entreprises.",
      email: "dailysen9@gmail.com",
      contactPoint: {
        "@type": "ContactPoint",
        email: "dailysen9@gmail.com",
        contactType: "customer service",
        availableLanguage: ["French"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Atlantic Web Studio",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "fr-FR",
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Atlantic Web Studio, agence digitale spécialisée dans la création de sites web, le développement d'applications sur mesure et les solutions numériques pour les entreprises.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "Atlantic Web Studio | Agence digitale et développement web",
    template: "%s | Atlantic Web Studio",
  },

  description: siteDescription,

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Atlantic Web Studio",
    "Agence digitale",
    "Agence web",
    "Développement web",
    "Création de sites web professionnels",
    "Développement d'applications",
    "Applications sur mesure",
    "Solutions numériques pour entreprises",
    "Digitalisation des entreprises",
    "Solutions de gestion",
    "Agence digitale Congo",
    "Développement web Pointe-Noire",
    "Agence web Dakar",
  ],

  authors: [{ name: "Atlantic Web Studio" }],
  creator: "Atlantic Web Studio",
  publisher: "Atlantic Web Studio",
  applicationName: "Atlantic Web Studio",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Atlantic Web Studio",
    title: "Atlantic Web Studio | Votre partenaire technologique",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Atlantic Web Studio - Votre partenaire technologique",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Atlantic Web Studio | Votre partenaire technologique",
    description: siteDescription,
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-[#101828]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />

        <main className="flex-1 pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
