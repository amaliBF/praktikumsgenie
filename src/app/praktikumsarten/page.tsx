import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ClipboardCheck, Clock, Users, Target } from 'lucide-react';
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
      <main className="min-h-screen bg-[#FFF5F6]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 confetti-dots opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white/80 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium">Praktikumsarten</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Praktikumsarten im &Uuml;berblick
              </h1>
            </div>
            <p className="text-lg text-white/90 mb-6 max-w-2xl">
              Welches Praktikum passt zu dir? Hier findest du alle Praktikumsarten mit Dauer, Zielgruppe und den wichtigsten Infos.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3">
              <span className="sticker-badge bg-white/20 border-white/30 text-white">
                <ClipboardCheck className="w-4 h-4" />
                {praktikumsarten.length} Praktikumsarten
              </span>
              <span className="sticker-badge bg-white/20 border-white/30 text-white">
                <Target className="w-4 h-4" />
                Alle Zielgruppen
              </span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="board-divider mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Alle Praktikumsarten entdecken</h2>
              <p className="text-gray-600 mt-1">W&auml;hle eine Praktikumsart, um mehr zu erfahren</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 scrapbook-grid">
              {praktikumsarten.map((p) => (
                <Link
                  key={p.slug}
                  href={`/praktikumsarten/${p.slug}`}
                  className="pin-card p-6 block group mt-3"
                >
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 mb-3 transition-colors">
                    {p.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="sticker-badge">
                      <Clock className="w-3.5 h-3.5" />
                      {p.dauer}
                    </span>
                    <span className="explore-tag">
                      <Users className="w-3 h-3" />
                      {p.zielgruppe}
                    </span>
                    <span className="explore-tag">
                      {typeof p.verguetet === 'boolean' ? (p.verguetet ? 'Verg&uuml;tet' : 'Nicht verg&uuml;tet') : p.verguetet}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {p.beschreibung}
                  </p>
                  <span className="inline-flex items-center gap-1 text-rose-600 font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                    Mehr erfahren
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <section className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 rounded-2xl p-8 text-center text-white mt-16 overflow-hidden">
              <div className="absolute inset-0 confetti-dots opacity-10" />
              <div className="relative">
                <h2 className="text-2xl font-bold mb-3">Praktikumsplatz in deiner Stadt finden</h2>
                <p className="mb-6 text-white/90">
                  Entdecke Praktikumsm&ouml;glichkeiten in &uuml;ber 84 deutschen St&auml;dten.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/praktikum"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-rose-600 font-semibold hover:bg-rose-50 transition-colors"
                  >
                    Praktikum nach Stadt
                  </Link>
                  <Link
                    href="/app"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    App &ndash; Bald verf&uuml;gbar
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
