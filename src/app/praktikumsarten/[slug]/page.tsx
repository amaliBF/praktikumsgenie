import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPraktikumsartBySlug, getAllPraktikumsartenSlugs, praktikumsarten } from '@/lib/praktikumsarten-data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPraktikumsartenSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const art = getPraktikumsartBySlug(params.slug);
  if (!art) return { title: 'Nicht gefunden' };

  const title = `${art.name} – Dauer, Voraussetzungen & Tipps | Praktikumsgenie`;
  const description = `Alles über ${art.name}: ${art.dauer}, Zielgruppe ${art.zielgruppe}. Voraussetzungen, Tipps und passende Branchen.`;
  return {
    title,
    description,
    alternates: { canonical: `/praktikumsarten/${art.slug}` },
    openGraph: { title, description, url: `https://praktikumsgenie.de/praktikumsarten/${art.slug}`, type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function PraktikumsartDetailPage({ params }: Props) {
  const art = getPraktikumsartBySlug(params.slug);
  if (!art) notFound();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Praktikumsarten', item: 'https://praktikumsgenie.de/praktikumsarten' },
      { '@type': 'ListItem', position: 3, name: art.name },
    ],
  };

  const otherArten = praktikumsarten.filter((a) => a.slug !== art.slug);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Hero */}
        <div className="bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-600 pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-emerald-200 mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/praktikumsarten" className="hover:text-white transition-colors">Praktikumsarten</Link></li>
                <li>/</li>
                <li className="text-white font-medium">{art.name}</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{art.name}</h1>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-white border border-white/30">
                Dauer: {art.dauer}
              </span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-white border border-white/30">
                {art.zielgruppe}
              </span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-white border border-white/30">
                {typeof art.verguetet === 'boolean' ? (art.verguetet ? 'Vergütet' : 'Nicht vergütet') : art.verguetet}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Überblick */}
          <section className="mb-10">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Überblick</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-emerald-200">
                    <tr><td className="py-2 font-semibold text-gray-700 w-1/3">Praktikumsart</td><td className="py-2 text-gray-900">{art.name}</td></tr>
                    <tr><td className="py-2 font-semibold text-gray-700">Dauer</td><td className="py-2 text-gray-900">{art.dauer}</td></tr>
                    <tr><td className="py-2 font-semibold text-gray-700">Zielgruppe</td><td className="py-2 text-gray-900">{art.zielgruppe}</td></tr>
                    <tr><td className="py-2 font-semibold text-gray-700">Vergütet?</td><td className="py-2 text-gray-900">{typeof art.verguetet === 'boolean' ? (art.verguetet ? 'Ja' : 'Nein') : art.verguetet}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Beschreibung */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Was ist ein {art.name}?</h2>
            <p className="text-gray-700 leading-relaxed">{art.beschreibung}</p>
          </section>

          {/* Voraussetzungen */}
          {art.voraussetzungen.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Voraussetzungen</h2>
              <ul className="space-y-2">
                {art.voraussetzungen.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">&#10003;</span>
                    <span className="text-gray-700">{v}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tipps */}
          {art.tipps.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tipps für dein {art.name}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {art.tipps.map((t, i) => (
                  <div key={i} className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <p className="text-emerald-800 text-sm">{t}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Branchen */}
          {art.branchen.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Beliebte Branchen</h2>
              <div className="flex flex-wrap gap-2">
                {art.branchen.map((b) => (
                  <span key={b} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {b}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Andere Praktikumsarten */}
          {otherArten.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Weitere Praktikumsarten</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {otherArten.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/praktikumsarten/${a.slug}`}
                    className="group flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                  >
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-emerald-700 text-sm">{a.name}</div>
                      <div className="text-xs text-gray-500">{a.dauer} -- {a.zielgruppe}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Praktikumsplatz finden</h2>
            <p className="mb-6 text-emerald-100">Entdecke Praktikumsmöglichkeiten in deiner Stadt und bewirb dich direkt über Praktikumsgenie.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/praktikum" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors">Praktikum nach Stadt</Link>
              <Link href="/#app-download" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">App herunterladen</Link>
            </div>
          </section>

          <p className="mt-10 text-xs text-gray-400 text-center">Letzte Aktualisierung: Februar 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
