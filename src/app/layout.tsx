import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://praktikumsgenie.de'),
  title: {
    default: 'Praktikumsgenie - Finde dein Praktikum per Swipe',
    template: '%s | Praktikumsgenie',
  },
  description:
    'Finde dein Praktikum per Swipe! Schülerpraktikum, Pflichtpraktikum, BOGY & BORS - Kurzvideos von echten Betrieben, Swipe-Matching und KI-Berufsfinder. Kostenlos für Schüler.',
  keywords: [
    'Praktikum',
    'Schülerpraktikum',
    'BOGY',
    'BORS',
    'Pflichtpraktikum',
    'Schnupperpraktikum',
    'Praktikumsplatz',
    'Berufsorientierung',
    'Praktikumssuche',
    'Matching',
    'Kurzvideos',
    'Berufsfinder',
    'Gen Z',
    'Schüler',
  ],
  authors: [{ name: 'Butterflies IT UG' }],
  creator: 'Praktikumsgenie',
  publisher: 'Butterflies IT UG (haftungsbeschränkt)',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Praktikumsgenie - Finde dein Praktikum per Swipe',
    description:
      'Die Plattform die Schüler und Praktikumsbetriebe zusammenbringt. Kurzvideos, Matching, Chat.',
    url: 'https://praktikumsgenie.de',
    siteName: 'Praktikumsgenie',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praktikumsgenie - Finde dein Praktikum per Swipe',
    description:
      'Finde dein Praktikum per Swipe! Schülerpraktikum, Pflichtpraktikum, BOGY & BORS. Kurzvideos, Matching, KI-Berufsfinder. Kostenlos für Schüler.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Praktikumsgenie',
  url: 'https://praktikumsgenie.de',
  description:
    'Die Plattform die Schüler und Praktikumsbetriebe zusammenbringt. TikTok-Style Kurzvideos, Tinder-Matching und KI-Berufsfinder.',
  applicationCategory: 'EducationApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Kostenlos für Schüler',
  },
  creator: {
    '@type': 'Organization',
    name: 'Butterflies IT UG (haftungsbeschränkt)',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hagenower Str. 73',
      addressLocality: 'Schwerin',
      postalCode: '19061',
      addressCountry: 'DE',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
