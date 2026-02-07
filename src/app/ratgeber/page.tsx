import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ratgeber, ratgeberKategorien, getRatgeberByCategory } from '@/lib/ratgeber-data';

export const metadata: Metadata = {
  title: 'Ratgeber für Azubis – Bewerbung, Gehalt, Berufsschule & mehr',
  description:
    `${ratgeber.length}+ Ratgeber-Artikel rund um Ausbildung: Bewerbungstipps, Gehalt, Berufsschule, Rechte als Azubi und vieles mehr.`,
  alternates: { canonical: '/ratgeber' },
  openGraph: {
    title: 'Ratgeber für Azubis | Ausbildungsgenie',
    description: `Über ${ratgeber.length} Ratgeber-Artikel rund um Ausbildung, Bewerbung, Gehalt und Azubi-Leben.`,
    url: 'https://ausbildungsgenie.de/ratgeber',
  },
};

const categoryIcons: Record<string, string> = {
  'bewerbung': '📝',
  'ausbildung-allgemein': '📚',
  'gehalt-finanzen': '💰',
  'berufsorientierung': '🧭',
  'berufsschule': '🎓',
  'azubi-leben': '🏠',
};

export default function RatgeberPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ausbildungsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber' },
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
        <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-violet-200 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Ratgeber</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ratgeber für Azubis
            </h1>
            <p className="text-lg text-violet-100 mb-8 max-w-2xl">
              {ratgeber.length}+ Artikel mit Tipps und Infos rund um Ausbildung, Bewerbung, Gehalt und deinen Alltag als Azubi.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">{ratgeber.length}+</div>
                <div className="text-sm text-violet-200">Artikel</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white">{ratgeberKategorien.length}</div>
                <div className="text-sm text-violet-200">Kategorien</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-violet-200">Kostenlos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white">
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
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-violet-100 hover:text-violet-700 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    <span>{categoryIcons[kat.slug] || '📋'}</span>
                    <span>{kat.name}</span>
                    <span className="text-xs text-gray-400">({count})</span>
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
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{categoryIcons[kat.slug] || '📋'}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{kat.name}</h2>
                    <span className="text-sm text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{katArtikel.length} Artikel</span>
                  </div>
                  <p className="text-gray-600 mb-4">{kat.description}</p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {katArtikel.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/ratgeber/${a.slug}`}
                        className="group p-4 rounded-lg border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-violet-700 mb-1">{a.title}</div>
                        <p className="text-xs text-gray-500 line-clamp-2">{a.description}</p>
                        <div className="mt-2 text-xs text-gray-400">{new Date(a.publishDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* CTA */}
            <section className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center text-white mt-8 mb-16">
              <h2 className="text-2xl font-bold mb-3">Bereit für deine Ausbildung?</h2>
              <p className="mb-6 text-violet-100">
                Finde den perfekten Ausbildungsberuf und bewirb dich direkt über unsere App.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/berufe"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-violet-700 font-semibold hover:bg-violet-50 transition-colors"
                >
                  Alle Berufe ansehen
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
