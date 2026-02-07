import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { staedte, getStadtBySlug, getAllStaedteSlugs, getNachbarstaedte } from '@/lib/staedte-data';
import { branchen } from '@/lib/branchen-data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllStaedteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const stadt = getStadtBySlug(params.slug);
  if (!stadt) return { title: 'Nicht gefunden' };

  const title = `Praktikum in ${stadt.name} 2026 – Praktikumsplätze & Branchen`;
  const description = `Praktikum in ${stadt.name} (${stadt.bundesland}): Entdecke beliebte Branchen für Praktika, Infos zu Lebenshaltung, ÖPNV und freie Praktikumsplätze.`;
  return {
    title,
    description,
    alternates: { canonical: `/praktikum/${stadt.slug}` },
    openGraph: { title, description, url: `https://praktikumsgenie.de/praktikum/${stadt.slug}`, type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

const lebenshaltungLabels: Record<string, { text: string; color: string }> = {
  'niedrig': { text: 'Niedrig', color: 'text-emerald-600 bg-emerald-50' },
  'mittel': { text: 'Mittel', color: 'text-blue-600 bg-blue-50' },
  'hoch': { text: 'Hoch', color: 'text-orange-600 bg-orange-50' },
  'sehr hoch': { text: 'Sehr hoch', color: 'text-red-600 bg-red-50' },
};

export default function PraktikumStadtPage({ params }: Props) {
  const stadt = getStadtBySlug(params.slug);
  if (!stadt) notFound();

  const nachbarn = getNachbarstaedte(stadt);
  const lh = lebenshaltungLabels[stadt.lebenshaltung] || lebenshaltungLabels['mittel'];
  const formatEinwohner = (n: number) => n >= 1000000 ? `${(n / 1000000).toFixed(1)} Mio.` : `${(n / 1000).toFixed(0)}.000`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Praktikum nach Stadt', item: 'https://praktikumsgenie.de/praktikum' },
      { '@type': 'ListItem', position: 3, name: stadt.name },
    ],
  };

  const placeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: stadt.name,
    address: { '@type': 'PostalAddress', addressLocality: stadt.name, addressRegion: stadt.bundesland, addressCountry: 'DE' },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, placeJsonLd]) }}
        />

        {/* Hero */}
        <div className="bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-600 pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-emerald-200 mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/praktikum" className="hover:text-white transition-colors">Praktikum nach Stadt</Link></li>
                <li>/</li>
                <li className="text-white font-medium">{stadt.name}</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">Praktikum in {stadt.name}</h1>
            <p className="text-lg text-emerald-100 mb-6">{stadt.bundesland}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">{formatEinwohner(stadt.einwohner)}</div>
                <div className="text-sm text-emerald-200">Einwohner</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">{branchen.length}</div>
                <div className="text-sm text-emerald-200">Branchen</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">{nachbarn.length}</div>
                <div className="text-sm text-emerald-200">Nachbarstädte</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">{lh.text}</div>
                <div className="text-sm text-emerald-200">Lebenshaltung</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Beschreibung */}
          <section className="mb-10">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="text-gray-800">{stadt.beschreibung}</p>
            </div>
          </section>

          {/* Besonderheiten */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Das macht {stadt.name} besonders</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {stadt.besonderheiten.map((b, i) => (
                <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Beliebte Branchen für Praktika */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Beliebte Branchen für Praktika in {stadt.name}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {branchen.map((b) => (
                <div
                  key={b.slug}
                  className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{b.name}</div>
                    <div className="text-xs text-gray-500 mb-1">{b.beschreibung}</div>
                    <div className="flex flex-wrap gap-1">
                      {b.beispielPraktika.slice(0, 3).map((p) => (
                        <span key={p} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ÖPNV & Lebenshaltung */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Leben & Mobilität in {stadt.name}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">ÖPNV & Verkehr</h3>
                <p className="text-gray-700 text-sm">{stadt.oepnv}</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Lebenshaltungskosten</h3>
                <p className="text-gray-700 text-sm">
                  Die Lebenshaltungskosten in {stadt.name} sind{' '}
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${lh.color}`}>{lh.text.toLowerCase()}</span>
                  {stadt.lebenshaltung === 'niedrig' && ' – ideal für Praktikanten mit kleinem Budget.'}
                  {stadt.lebenshaltung === 'mittel' && ' – ein gutes Verhältnis von Kosten und Angebot.'}
                  {stadt.lebenshaltung === 'hoch' && '. Eine WG oder das Pendeln von zu Hause kann helfen.'}
                  {stadt.lebenshaltung === 'sehr hoch' && '. Tipp: Pendle von zu Hause oder suche eine WG für die Praktikumszeit.'}
                </p>
              </div>
            </div>
          </section>

          {/* Nachbarstädte */}
          {nachbarn.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Praktikum in der Nähe</h2>
              <div className="flex flex-wrap gap-2">
                {nachbarn.map((n) => (
                  <Link key={n.slug} href={`/praktikum/${n.slug}`} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-emerald-100 hover:text-emerald-700 transition-colors">
                    {n.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white mb-10">
            <h2 className="text-2xl font-bold mb-3">Jetzt Praktikumsplatz in {stadt.name} finden</h2>
            <p className="mb-6 text-emerald-100">Entdecke freie Praktikumsplätze und bewirb dich direkt über Praktikumsgenie.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/#app-download" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors">App herunterladen</Link>
              <Link href="/praktikum" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">Alle Städte ansehen</Link>
            </div>
          </section>
          <p className="text-xs text-gray-400 text-center">Letzte Aktualisierung: Februar 2026 -- Alle Angaben ohne Gewähr</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
