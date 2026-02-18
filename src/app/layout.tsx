import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import { GenieAuthProvider } from '@/lib/genie-auth';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://praktikumsgenie.de'),
  title: {
    default: 'Praktikumsgenie – Finde dein Praktikum per Swipe',
    template: '%s | Praktikumsgenie',
  },
  description:
    'Finde dein Praktikum per Swipe! Schülerpraktikum, Pflichtpraktikum, BOGY & BORS – Kurzvideos von echten Betrieben, Swipe-Matching und KI-Berufsfinder. Kostenlos für Schüler.',
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
    title: 'Praktikumsgenie – Finde dein Praktikum per Swipe',
    description:
      'Die Plattform die Schüler und Praktikumsbetriebe zusammenbringt. Kurzvideos, Matching, Chat.',
    url: 'https://praktikumsgenie.de',
    siteName: 'Praktikumsgenie',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Praktikumsgenie – Finde dein Praktikum per Swipe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praktikumsgenie – Finde dein Praktikum per Swipe',
    description:
      'Finde dein Praktikum per Swipe! Schülerpraktikum, Pflichtpraktikum, BOGY & BORS. Kurzvideos, Matching, KI-Berufsfinder. Kostenlos für Schüler.',
    images: ['/opengraph-image'],
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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Praktikumsgenie',
  url: 'https://praktikumsgenie.de',
  logo: 'https://praktikumsgenie.de/icon.svg',
  description: 'Die Plattform die Schüler und Praktikumsbetriebe zusammenbringt. Kurzvideos, Matching, Chat.',
  foundingDate: '2025',
  parentOrganization: {
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
  sameAs: [
    'https://instagram.com/praktikumsgenie',
    'https://tiktok.com/@praktikumsgenie',
    'https://youtube.com/@praktikumsgenie',
  ],
};

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Praktikumsgenie',
  url: 'https://praktikumsgenie.de',
  description:
    'Finde dein Praktikum per Swipe! Kurzvideos, Matching und direkter Kontakt mit Betrieben.',
  applicationCategory: 'EducationApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Kostenlos für Schüler',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />
        {/* Smart App Banner / Web App Meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Praktikumsgenie" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Theme Color */}
        <meta name="theme-color" content="#e11d48" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        {/* DNS Prefetch & Preconnect */}
        <link rel="dns-prefetch" href="https://api.genieportal.de" />
        <link rel="preconnect" href="https://api.genieportal.de" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-rose-500">
          Zum Hauptinhalt springen
        </a>
        <div className="pin-bar" />
        <GenieAuthProvider>
          {children}
        </GenieAuthProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
