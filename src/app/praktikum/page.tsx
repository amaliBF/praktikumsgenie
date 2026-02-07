import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ClipboardCheck, MapPin, Building2, Users, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StaedteSearch from '@/components/StaedteSearch';
import { staedte, bundeslaender, getStaedteByBundesland } from '@/lib/staedte-data';

export const metadata: Metadata = {
  title: 'Praktikum nach Stadt – Praktikumsplätze in ' + staedte.length + '+ Städten',
  description:
    `Finde Praktikumsplätze in über ${staedte.length} deutschen Städten. Alle Infos zu Praktika in Berlin, München, Hamburg, Köln und vielen weiteren Städten.`,
  alternates: { canonical: '/praktikum' },
  openGraph: {
    title: 'Praktikum nach Stadt | Praktikumsgenie',
    description: `Praktikumsplätze in über ${staedte.length} deutschen Städten – finde dein Praktikum vor Ort.`,
    url: 'https://praktikumsgenie.de/praktikum',
  },
};

const formatEinwohner = (n: number) => {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)} Mio.`;
  return `${Math.round(n / 1000).toLocaleString('de-DE')}k`;
};

export default function PraktikumStaedtePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Praktikum nach Stadt' },
    ],
  };

  const searchData = staedte.map((s) => ({
    slug: s.slug,
    name: s.name,
    bundesland: s.bundesland,
    einwohner: s.einwohner,
  }));

  const totalEinwohner = staedte.reduce((sum, s) => sum + s.einwohner, 0);

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
                <li className="text-white font-medium">Praktikum nach Stadt</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Praktikum nach Stadt
              </h1>
            </div>
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              Finde Praktikumspl&auml;tze in deiner N&auml;he. &Uuml;ber {staedte.length} St&auml;dte in {bundeslaender.length} Bundesl&auml;ndern mit allen Infos zu Branchen, Lebenshaltung und Verkehrsanbindung.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">{staedte.length}+</div>
                <div className="text-sm text-white/80">St&auml;dte</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">{bundeslaender.length}</div>
                <div className="text-sm text-white/80">Bundesl&auml;nder</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">{(totalEinwohner / 1000000).toFixed(0)} Mio.</div>
                <div className="text-sm text-white/80">Einwohner</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">5</div>
                <div className="text-sm text-white/80">Praktikumsarten</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search + Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-9 pt-1">
          <StaedteSearch staedte={searchData} />

          {/* Quick Links by Bundesland */}
          <div className="flex flex-wrap gap-2 mb-10">
            {bundeslaender
              .filter((bl) => getStaedteByBundesland(bl.name).length > 0)
              .map((bl) => {
                const count = getStaedteByBundesland(bl.name).length;
                return (
                  <a
                    key={bl.slug}
                    href={`#${bl.slug}`}
                    className="explore-tag hover:bg-rose-100 hover:text-rose-700 transition-colors"
                  >
                    <span>{bl.name}</span>
                    <span className="text-xs opacity-60">({count})</span>
                  </a>
                );
              })}
          </div>

          {/* Städte by Bundesland */}
          {bundeslaender.map((bl) => {
            const blStaedte = getStaedteByBundesland(bl.name);
            if (blStaedte.length === 0) return null;
            return (
              <section key={bl.slug} id={bl.slug} className="mb-12 scroll-mt-28">
                <div className="board-divider mb-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900">{bl.name}</h2>
                    <span className="sticker-badge text-xs">{blStaedte.length} {blStaedte.length === 1 ? 'Stadt' : 'St\u00e4dte'}</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {blStaedte
                    .sort((a, b) => b.einwohner - a.einwohner)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/praktikum/${s.slug}`}
                        className="pin-card p-4 flex items-center justify-between group mt-2 block"
                      >
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-rose-600 text-sm transition-colors">{s.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{formatEinwohner(s.einwohner)} Einwohner</div>
                        </div>
                        <div className="text-right flex-shrink-0 ml-2">
                          <span className="explore-tag text-xs">
                            <MapPin className="w-3 h-3" />
                            Praktika
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
              <h2 className="text-2xl font-bold mb-3">Noch unsicher, welches Praktikum zu dir passt?</h2>
              <p className="mb-6 text-white/90">
                Entdecke verschiedene Praktikumsarten und finde heraus, welche am besten zu deiner Situation passt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/praktikumsarten"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-rose-600 font-semibold hover:bg-rose-50 transition-colors"
                >
                  Alle Praktikumsarten ansehen
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
