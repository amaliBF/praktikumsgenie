import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ClipboardCheck, Clock, Users, Target, BookOpen, Zap, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PassendeStellen from '@/components/stellen/PassendeStellen';
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
      <main className="min-h-screen bg-[#FFF5F6]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 confetti-dots opacity-10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white/80 mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li><Link href="/praktikumsarten" className="hover:text-white transition-colors">Praktikumsarten</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium">{art.name}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{art.name}</h1>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="sticker-badge bg-white/20 border-white/30 text-white">
                <Clock className="w-4 h-4" />
                Dauer: {art.dauer}
              </span>
              <span className="sticker-badge bg-white/20 border-white/30 text-white">
                <Users className="w-4 h-4" />
                {art.zielgruppe}
              </span>
              <span className="sticker-badge bg-white/20 border-white/30 text-white">
                {typeof art.verguetet === 'boolean' ? (art.verguetet ? 'Verg&uuml;tet' : 'Nicht verg&uuml;tet') : art.verguetet}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Überblick */}
          <section className="mb-10">
            <div className="feature-box">
              <div className="board-divider mb-4">
                <h2 className="text-lg font-bold text-gray-900">&Uuml;berblick</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-rose-100">
                    <tr><td className="py-2.5 font-semibold text-gray-700 w-1/3">Praktikumsart</td><td className="py-2.5 text-gray-900">{art.name}</td></tr>
                    <tr><td className="py-2.5 font-semibold text-gray-700">Dauer</td><td className="py-2.5 text-gray-900">{art.dauer}</td></tr>
                    <tr><td className="py-2.5 font-semibold text-gray-700">Zielgruppe</td><td className="py-2.5 text-gray-900">{art.zielgruppe}</td></tr>
                    <tr><td className="py-2.5 font-semibold text-gray-700">Verg&uuml;tet?</td><td className="py-2.5 text-gray-900">{typeof art.verguetet === 'boolean' ? (art.verguetet ? 'Ja' : 'Nein') : art.verguetet}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Beschreibung */}
          <section className="mb-10">
            <div className="board-divider mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Was ist ein {art.name}?</h2>
            </div>
            <div className="discovery-quote mb-6">
              <p className="text-gray-700 leading-relaxed">{art.beschreibung}</p>
            </div>
          </section>

          {/* Voraussetzungen */}
          {art.voraussetzungen.length > 0 && (
            <section className="mb-10">
              <div className="board-divider mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Target className="w-6 h-6 text-rose-500" />
                  Voraussetzungen
                </h2>
              </div>
              <ul className="space-y-3">
                {art.voraussetzungen.map((v, i) => (
                  <li key={i} className="checklist-item p-3 bg-white rounded-lg border border-rose-100">
                    <span className="text-gray-700">{v}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tipps */}
          {art.tipps.length > 0 && (
            <section className="mb-10">
              <div className="board-divider mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-rose-500" />
                  Tipps f&uuml;r dein {art.name}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {art.tipps.map((t, i) => (
                  <div key={i} className="feature-box">
                    <p className="text-gray-700 text-sm">{t}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Branchen */}
          {art.branchen.length > 0 && (
            <section className="mb-10">
              <div className="board-divider mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-rose-500" />
                  Beliebte Branchen
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {art.branchen.map((b) => (
                  <span key={b} className="explore-tag">
                    {b}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Andere Praktikumsarten */}
          {otherArten.length > 0 && (
            <section className="mb-10">
              <div className="board-divider mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-rose-500" />
                  Weitere Praktikumsarten
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {otherArten.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/praktikumsarten/${a.slug}`}
                    className="tape-card p-4 block group mt-2"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-rose-600 text-sm transition-colors">{a.name}</div>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs text-gray-500">{a.dauer}</span>
                      <span className="text-xs text-gray-400">&middot;</span>
                      <span className="text-xs text-gray-500">{a.zielgruppe}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <PassendeStellen
            query={art.name}
            titel={`Aktuelle Praktikumsstellen: ${art.name}`}
            linkHref={`/stellen?q=${encodeURIComponent(art.name)}`}
            linkText="Alle Stellen anzeigen"
          />

          {/* CTA */}
          <section className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 rounded-2xl p-8 text-center text-white overflow-hidden">
            <div className="absolute inset-0 confetti-dots opacity-10" />
            <div className="relative">
              <h2 className="text-2xl font-bold mb-3">Praktikumsplatz finden</h2>
              <p className="mb-6 text-white/90">Entdecke Praktikumsm&ouml;glichkeiten in deiner Stadt und bewirb dich direkt &uuml;ber Praktikumsgenie.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/praktikum" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-rose-600 font-semibold hover:bg-rose-50 transition-colors">Praktikum nach Stadt</Link>
                <Link href="/app" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">App &ndash; Bald verf&uuml;gbar</Link>
              </div>
            </div>
          </section>

          <p className="mt-10 text-xs text-gray-400 text-center">Letzte Aktualisierung: Februar 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
