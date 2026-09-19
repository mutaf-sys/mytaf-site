import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Playfair_Display } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/lib/site";

const headingFont = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Empirebrass — Мастерская исторической латунной фурнитуры",
    template: "%s — Empirebrass",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: siteConfig.name,
    title: "Empirebrass — Мастерская исторической латунной фурнитуры",
    description: siteConfig.description,
    images: [
      {
        url: "/images/catalog/banner-collection.jpg",
        width: 960,
        height: 1280,
        alt: "Историческая латунная фурнитура ручной работы",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${siteConfig.url}/images/logo.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressCountry: "RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      >
        <a href="#main" className="skip-link">
          Перейти к содержимому
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}