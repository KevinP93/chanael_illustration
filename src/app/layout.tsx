import type { Metadata } from "next";
import "./globals.css";
import { siteEnv } from "@/lib/env";

const siteTitle = "Chanael Illustration";
const siteDescription =
  "Portfolio d'illustration et ateliers en ligne portés par l'univers artistique de Chantal.";

export const metadata: Metadata = {
  metadataBase: new URL(siteEnv.siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteEnv.siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: "/media/social/illustration-reseau.png",
        width: 1200,
        height: 1200,
        alt: "Illustration signature de Chanael Illustration",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/media/social/illustration-reseau.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
