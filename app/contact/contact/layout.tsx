import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact et demande de devis",
  description:
    "Contactez Atlantic Web Studio pour discuter de votre projet de création de site web, d'application sur mesure, de solution de gestion ou de transformation numérique.",
  openGraph: {
    title: "Contactez Atlantic Web Studio",
    description:
      "Présentez votre projet numérique et échangeons sur les solutions adaptées à votre entreprise.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}