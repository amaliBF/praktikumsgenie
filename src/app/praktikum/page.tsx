import { Metadata } from 'next';
import Link from 'next/link';
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
                <li className="text-white font-medium">Praktikum nach Stadt</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Praktikum nach Stadt
            </h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl">
              Finde Praktikumsplätze in deiner Nähe. Über {staedte.length} Städte in {bundeslaender.length} Bundesländern mit allen Infos zu Branchen, Lebenshaltung und Verkehrsanbindung.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">{staedte.length}+</div>
                <div className="text-sm text-emerald-200">Städte</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">{bundeslaender.length}</div>
                <div className="text-sm text-emerald-200">Bundesländer</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">{(totalEinwohner / 1000000).toFixed(0)} Mio.</div>
                <div className="text-sm text-emerald-200">Einwohner</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">5</div>
                <div className="text-sm text-emerald-200">Praktikumsarten</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search + Content */}
        <div className="bg-white">
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
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-emerald-100 hover:text-emerald-700 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                    >
                      <span>{bl.name}</span>
                      <span className="text-xs text-gray-400">({count})</span>
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
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{bl.name}</h2>
                    <span className="text-sm text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{blStaedte.length} {blStaedte.length === 1 ? 'Stadt' : 'Städte'}</span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {blStaedte
                      .sort((a, b) => b.einwohner - a.einwohner)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/praktikum/${s.slug}`}
                          className="group flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                        >
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-emerald-700 text-sm">{s.name}</div>
                            <div className="text-xs text-gray-500">{formatEinwohner(s.einwohner)} Einwohner</div>
                          </div>
                          <div className="text-right flex-shrink-0 ml-2">
                            <div className="text-sm font-semibold text-emerald-600">Praktika</div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </section>
              );
            })}

            {/* CTA */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white mt-8 mb-16">
              <h2 className="text-2xl font-bold mb-3">Noch unsicher, welches Praktikum zu dir passt?</h2>
              <p className="mb-6 text-emerald-100">
                Entdecke verschiedene Praktikumsarten und finde heraus, welche am besten zu deiner Situation passt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/praktikumsarten"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Alle Praktikumsarten ansehen
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
