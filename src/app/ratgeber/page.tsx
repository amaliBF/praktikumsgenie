import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, ClipboardCheck, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ratgeber, ratgeberKategorien, getRatgeberByCategory } from '@/lib/ratgeber-data';

export const metadata: Metadata = {
  title: 'Ratgeber für Praktikanten – Bewerbung, Tipps, Recht & mehr',
  description:
    `${ratgeber.length}+ Ratgeber-Artikel rund ums Praktikum: Bewerbungstipps, Rechte, Vergütung und vieles mehr.`,
  alternates: { canonical: '/ratgeber' },
  openGraph: {
    title: 'Ratgeber für Praktikanten | Praktikumsgenie',
    description: `Über ${ratgeber.length} Ratgeber-Artikel rund ums Praktikum, Bewerbung und Berufsorientierung.`,
    url: 'https://praktikumsgenie.de/ratgeber',
  },
};

const categoryIcons: Record<string, string> = {
  'bewerbung': '\uD83D\uDCDD',
  'praktikum-allgemein': '\uD83D\uDCDA',
  'studium': '\uD83C\uDF93',
  'berufsorientierung': '\uD83E\uDDED',
  'recht-finanzen': '\uD83D\uDCB0',
};

export default function RatgeberPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber' },
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
                <li className="text-white font-medium">Ratgeber</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Ratgeber f&uuml;r Praktikanten
              </h1>
            </div>
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              {ratgeber.length}+ Artikel mit Tipps und Infos rund ums Praktikum, Bewerbung und deinen Alltag als Praktikant.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">{ratgeber.length}+</div>
                <div className="text-sm text-white/80">Artikel</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">{ratgeberKategorien.length}</div>
                <div className="text-sm text-white/80">Kategorien</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/80">Kostenlos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Category Quick Links */}
          <div className="flex flex-wrap gap-2 mb-10">
            {ratgeberKategorien.map((kat) => {
              const count = getRatgeberByCategory(kat.slug).length;
              if (count === 0) return null;
              return (
                <a
                  key={kat.slug}
                  href={`#${kat.slug}`}
                  className="explore-tag hover:bg-rose-100 hover:text-rose-700 transition-colors"
                >
                  <span>{categoryIcons[kat.slug] || '\uD83D\uDCCB'}</span>
                  <span>{kat.name}</span>
                  <span className="text-xs opacity-60">({count})</span>
                </a>
              );
            })}
          </div>

          {/* Articles by Category */}
          {ratgeberKategorien.map((kat) => {
            const katArtikel = getRatgeberByCategory(kat.slug);
            if (katArtikel.length === 0) return null;
            return (
              <section key={kat.slug} id={kat.slug} className="mb-12 scroll-mt-28">
                <div className="board-divider mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{categoryIcons[kat.slug] || '\uD83D\uDCCB'}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{kat.name}</h2>
                    <span className="sticker-badge text-xs">{katArtikel.length} Artikel</span>
                  </div>
                  <p className="text-gray-600 mt-1">{kat.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 scrapbook-grid">
                  {katArtikel.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/ratgeber/${a.slug}`}
                      className="pin-card p-5 block group mt-3"
                    >
                      <div className="font-medium text-gray-900 group-hover:text-rose-600 mb-2 transition-colors">{a.title}</div>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-3">{a.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {new Date(a.publishDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <span className="inline-flex items-center gap-1 text-rose-600 font-semibold text-xs group-hover:gap-1.5 transition-all">
                          Lesen <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA */}
          <section className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 rounded-2xl p-8 text-center text-white mt-8 mb-16 overflow-hidden">
            <div className="absolute inset-0 confetti-dots opacity-10" />
            <div className="relative">
              <h2 className="text-2xl font-bold mb-3">Bereit f&uuml;r dein Praktikum?</h2>
              <p className="mb-6 text-white/90">
                Finde den perfekten Praktikumsplatz und bewirb dich direkt &uuml;ber unsere App.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/praktikum"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-rose-600 font-semibold hover:bg-rose-50 transition-colors"
                >
                  Praktikum nach Stadt
                </Link>
                <Link
                  href="/#app-download"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  App herunterladen
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
