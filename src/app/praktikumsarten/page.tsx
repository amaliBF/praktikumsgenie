import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { praktikumsarten } from '@/lib/praktikumsarten-data';

export const metadata: Metadata = {
  title: 'Praktikumsarten im Überblick – Schülerpraktikum, BOGY, Pflichtpraktikum & mehr',
  description:
    'Alle Praktikumsarten auf einen Blick: Schülerpraktikum, BOGY/BORS, Pflichtpraktikum, Freiwilliges Praktikum und Schnupperpraktikum. Dauer, Zielgruppe und Tipps.',
  alternates: { canonical: '/praktikumsarten' },
  openGraph: {
    title: 'Praktikumsarten im Überblick | Praktikumsgenie',
    description: 'Schülerpraktikum, BOGY, Pflichtpraktikum und mehr – finde die passende Praktikumsart für dich.',
    url: 'https://praktikumsgenie.de/praktikumsarten',
  },
};

export default function PraktikumsartenPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Praktikumsarten' },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Hero */}
        <div className="bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-600 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-emerald-200 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Praktikumsarten</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Praktikumsarten im Überblick
            </h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl">
              Welches Praktikum passt zu dir? Hier findest du alle Praktikumsarten mit Dauer, Zielgruppe und den wichtigsten Infos.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {praktikumsarten.map((p) => (
                <Link
                  key={p.slug}
                  href={`/praktikumsarten/${p.slug}`}
                  className="group rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg p-6 transition-all"
                >
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 mb-2">
                    {p.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                      {p.dauer}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-700">
                      {p.zielgruppe}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      {typeof p.verguetet === 'boolean' ? (p.verguetet ? 'Vergütet' : 'Nicht vergütet') : p.verguetet}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {p.beschreibung}
                  </p>
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm mt-4 group-hover:gap-2 transition-all">
                    Mehr erfahren &rarr;
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white mt-16">
              <h2 className="text-2xl font-bold mb-3">Praktikumsplatz in deiner Stadt finden</h2>
              <p className="mb-6 text-emerald-100">
                Entdecke Praktikumsmöglichkeiten in über 84 deutschen Städten.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/praktikum"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Praktikum nach Stadt
                </Link>
                <Link
                  href="/#app-download"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  App herunterladen
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
