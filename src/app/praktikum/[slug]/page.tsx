import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, MapPin, Building2, Train, Wallet, ClipboardCheck, Target } from 'lucide-react';
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

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Beliebte Branchen für Praktika in ${stadt.name}`,
    numberOfItems: branchen.length,
    itemListElement: branchen.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      description: b.beschreibung,
    })),
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FFF5F6]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, placeJsonLd, itemListJsonLd]) }}
        />

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 confetti-dots opacity-10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white/80 mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li><Link href="/praktikum" className="hover:text-white transition-colors">Praktikum nach Stadt</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium">{stadt.name}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Praktikum in {stadt.name}</h1>
                <p className="text-lg text-white/80 mt-1">{stadt.bundesland}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">{formatEinwohner(stadt.einwohner)}</div>
                <div className="text-sm text-white/80">Einwohner</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">{branchen.length}</div>
                <div className="text-sm text-white/80">Branchen</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">{nachbarn.length}</div>
                <div className="text-sm text-white/80">Nachbarst&auml;dte</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">{lh.text}</div>
                <div className="text-sm text-white/80">Lebenshaltung</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Beschreibung */}
          <section className="mb-10">
            <div className="discovery-quote mb-6">
              <p className="text-gray-800">{stadt.beschreibung}</p>
            </div>
          </section>

          {/* Besonderheiten */}
          <section className="mb-10">
            <div className="board-divider mb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Target className="w-6 h-6 text-rose-500" />
                Das macht {stadt.name} besonders
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {stadt.besonderheiten.map((b, i) => (
                <li key={i} className="checklist-item p-3 bg-white rounded-lg border border-rose-100">
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Beliebte Branchen für Praktika */}
          <section className="mb-10">
            <div className="board-divider mb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-rose-500" />
                Beliebte Branchen f&uuml;r Praktika in {stadt.name}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {branchen.map((b) => (
                <div
                  key={b.slug}
                  className="tape-card p-4 mt-2"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{b.icon}</span>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{b.name}</div>
                      <div className="text-xs text-gray-500 mb-2">{b.beschreibung}</div>
                      <div className="flex flex-wrap gap-1">
                        {b.beispielPraktika.slice(0, 3).map((p) => (
                          <span key={p} className="explore-tag text-xs">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ÖPNV & Lebenshaltung */}
          <section className="mb-10">
            <div className="board-divider mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Leben &amp; Mobilit&auml;t in {stadt.name}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="feature-box">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Train className="w-5 h-5 text-rose-500" />
                  &Ouml;PNV &amp; Verkehr
                </h3>
                <p className="text-gray-700 text-sm">{stadt.oepnv}</p>
              </div>
              <div className="feature-box">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-rose-500" />
                  Lebenshaltungskosten
                </h3>
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
              <div className="board-divider mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-rose-500" />
                  Praktikum in der N&auml;he
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {nachbarn.map((n) => (
                  <Link key={n.slug} href={`/praktikum/${n.slug}`} className="explore-tag hover:bg-rose-100 hover:text-rose-700 transition-colors">
                    <MapPin className="w-3 h-3" />
                    {n.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 rounded-2xl p-8 text-center text-white mb-10 overflow-hidden">
            <div className="absolute inset-0 confetti-dots opacity-10" />
            <div className="relative">
              <h2 className="text-2xl font-bold mb-3">Jetzt Praktikumsplatz in {stadt.name} finden</h2>
              <p className="mb-6 text-white/90">Entdecke freie Praktikumspl&auml;tze und bewirb dich direkt &uuml;ber Praktikumsgenie.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/#app-download" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-rose-600 font-semibold hover:bg-rose-50 transition-colors">App herunterladen</Link>
                <Link href="/praktikum" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">Alle St&auml;dte ansehen</Link>
              </div>
            </div>
          </section>
          <p className="text-xs text-gray-400 text-center">Letzte Aktualisierung: Februar 2026 &middot; Alle Angaben ohne Gew&auml;hr</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
