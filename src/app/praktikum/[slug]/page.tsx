import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, MapPin, Building2, Train, Wallet, ClipboardCheck, Target, Briefcase, Clock, Users, CheckCircle2, GraduationCap, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { staedte, getStadtBySlug, getAllStaedteSlugs, getNachbarstaedte } from '@/lib/staedte-data';
import { branchen } from '@/lib/branchen-data';
import { getPraktikumsberufBySlug, praktikumsberufe } from '@/lib/praktikumsberufe-data';

// Top 30 Berufe für Kombiseiten (30 × 84 Städte = 2.520 Seiten)
const topBerufeSlugs = [
  'fachinformatiker', 'mediengestalter', 'webentwickler', 'elektroniker',
  'kfz-mechatroniker', 'tischler', 'mechatroniker', 'maler',
  'krankenpfleger', 'erzieher', 'physiotherapeut', 'altenpfleger',
  'buerokaufmann', 'einzelhandelskaufmann', 'industriekaufmann', 'bankkaufmann',
  'koch', 'hotelfachmann', 'baecker', 'konditor',
  'gaertner', 'tierpfleger', 'bauzeichner', 'modedesigner',
  'fachlagerist', 'berufskraftfahrer', 'verwaltungsfachangestellter', 'rechtsanwaltsfachangestellter',
  'fotograf', 'social-media-manager',
];

function parseKombiSlug(slug: string): { berufSlug: string; stadtSlug: string } | null {
  const match = slug.match(/^(.+)-in-(.+)$/);
  if (!match) return null;
  const beruf = getPraktikumsberufBySlug(match[1]);
  const stadt = getStadtBySlug(match[2]);
  if (!beruf || !stadt) return null;
  return { berufSlug: match[1], stadtSlug: match[2] };
}

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  // Stadt-Seiten
  const stadtParams = getAllStaedteSlugs().map((slug) => ({ slug }));

  // Kombi-Seiten (Top 30 Berufe × 84 Städte = 2.520)
  const kombiParams: { slug: string }[] = [];
  for (const berufSlug of topBerufeSlugs) {
    if (getPraktikumsberufBySlug(berufSlug)) {
      for (const stadt of staedte) {
        kombiParams.push({ slug: `${berufSlug}-in-${stadt.slug}` });
      }
    }
  }

  return [...stadtParams, ...kombiParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Check for Kombi first
  const kombi = parseKombiSlug(params.slug);
  if (kombi) {
    const beruf = getPraktikumsberufBySlug(kombi.berufSlug)!;
    const stadt = getStadtBySlug(kombi.stadtSlug)!;
    const title = `Praktikum als ${beruf.name} in ${stadt.name} 2026 | Praktikumsgenie`;
    const description = `Praktikum als ${beruf.name} in ${stadt.name}: Aufgaben, Lernziele, Tipps und freie Praktikumsplätze. ${beruf.dauer} Dauer, ${beruf.geeignetFuer}.`;
    return {
      title,
      description,
      alternates: { canonical: `/praktikum/${params.slug}` },
      openGraph: { title, description, url: `https://praktikumsgenie.de/praktikum/${params.slug}`, type: 'article' },
    };
  }

  // Stadt page
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

export default function PraktikumPage({ params }: Props) {
  // Check for Kombi
  const kombi = parseKombiSlug(params.slug);
  if (kombi) {
    return <KombiPage berufSlug={kombi.berufSlug} stadtSlug={kombi.stadtSlug} />;
  }

  // Stadt page
  const stadt = getStadtBySlug(params.slug);
  if (!stadt) notFound();

  return <StadtPage stadtSlug={stadt.slug} />;
}

// ============ Stadt Page ============
function StadtPage({ stadtSlug }: { stadtSlug: string }) {
  const stadt = getStadtBySlug(stadtSlug)!;
  const nachbarn = getNachbarstaedte(stadt);
  const lh = lebenshaltungLabels[stadt.lebenshaltung] || lebenshaltungLabels['mittel'];
  const formatEinwohner = (n: number) => n >= 1000000 ? `${(n / 1000000).toFixed(1)} Mio.` : `${(n / 1000).toFixed(0)}.000`;

  // Top 6 Berufe für Kombi-Links
  const topBerufe = topBerufeSlugs.slice(0, 6).map((s) => getPraktikumsberufBySlug(s)).filter(Boolean);

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
                <div className="text-sm text-white/80">Nachbarstädte</div>
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

          {/* Beliebte Praktikumsberufe in dieser Stadt */}
          {topBerufe.length > 0 && (
            <section className="mb-10">
              <div className="board-divider mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-rose-500" />
                  Beliebte Praktikumsberufe in {stadt.name}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {topBerufe.map((beruf) => beruf && (
                  <Link
                    key={beruf.slug}
                    href={`/praktikum/${beruf.slug}-in-${stadt.slug}`}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-rose-100 hover:border-rose-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-rose-600 transition-colors text-sm">{beruf.name}</div>
                      <div className="text-xs text-gray-500">{beruf.dauer}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Beliebte Branchen für Praktika */}
          <section className="mb-10">
            <div className="board-divider mb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-rose-500" />
                Beliebte Branchen für Praktika in {stadt.name}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {branchen.map((b) => (
                <div key={b.slug} className="tape-card p-4 mt-2">
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
              <h2 className="text-2xl font-bold text-gray-900">Leben &amp; Mobilität in {stadt.name}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="feature-box">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Train className="w-5 h-5 text-rose-500" />
                  ÖPNV &amp; Verkehr
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
                  Praktikum in der Nähe
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
              <p className="mb-6 text-white/90">Entdecke freie Praktikumsplätze und bewirb dich direkt über Praktikumsgenie.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/#app-download" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-rose-600 font-semibold hover:bg-rose-50 transition-colors">App herunterladen</Link>
                <Link href="/praktikum" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">Alle Städte ansehen</Link>
              </div>
            </div>
          </section>
          <p className="text-xs text-gray-400 text-center">Letzte Aktualisierung: Februar 2026 · Alle Angaben ohne Gewähr</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ============ Kombi Page (Beruf × Stadt) ============
function KombiPage({ berufSlug, stadtSlug }: { berufSlug: string; stadtSlug: string }) {
  const beruf = getPraktikumsberufBySlug(berufSlug)!;
  const stadt = getStadtBySlug(stadtSlug)!;
  const lh = lebenshaltungLabels[stadt.lebenshaltung] || lebenshaltungLabels['mittel'];
  const nachbarn = getNachbarstaedte(stadt);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Praktikumsberufe', item: 'https://praktikumsgenie.de/praktikumsberufe' },
      { '@type': 'ListItem', position: 3, name: beruf.name, item: `https://praktikumsgenie.de/praktikumsberufe/${beruf.slug}` },
      { '@type': 'ListItem', position: 4, name: `in ${stadt.name}` },
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
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white/80 mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li><Link href="/praktikumsberufe" className="hover:text-white transition-colors">Praktikumsberufe</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li><Link href={`/praktikumsberufe/${beruf.slug}`} className="hover:text-white transition-colors">{beruf.name}</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium">{stadt.name}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  Praktikum als {beruf.name} in {stadt.name}
                </h1>
                <p className="text-white/80 mt-1">{stadt.bundesland} · {beruf.dauer} · {beruf.geeignetFuer}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* Intro */}
              <section className="bg-white rounded-xl border border-rose-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Praktikum als {beruf.name} in {stadt.name}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{beruf.beschreibung}</p>
                <p className="text-gray-700 leading-relaxed">
                  {stadt.name} in {stadt.bundesland} mit {stadt.einwohner >= 1000000 ? `${(stadt.einwohner / 1000000).toFixed(1)} Millionen` : `${Math.round(stadt.einwohner / 1000)}.000`} Einwohnern bietet zahlreiche Möglichkeiten für ein Praktikum in diesem Bereich. Die Lebenshaltungskosten sind {lh.text.toLowerCase()} und die Stadt ist gut mit dem ÖPNV erreichbar.
                </p>
              </section>

              {/* Aufgaben */}
              <section className="bg-white rounded-xl border border-rose-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-rose-500" />
                  Typische Aufgaben
                </h2>
                <ul className="space-y-3">
                  {beruf.aufgaben.map((a, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-gray-700">{a}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Was man lernt */}
              <section className="bg-white rounded-xl border border-rose-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-rose-500" />
                  Was du lernst
                </h2>
                <ul className="space-y-2">
                  {beruf.wasManLernt.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tipps */}
              <section className="bg-white rounded-xl border border-rose-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  Tipps für dein Praktikum in {stadt.name}
                </h2>
                <ul className="space-y-2">
                  {beruf.tipps.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-amber-500 shrink-0">💡</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Stadt-Info */}
              <section className="bg-white rounded-xl border border-rose-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  Über {stadt.name}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{stadt.beschreibung}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-rose-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 text-sm mb-1 flex items-center gap-1">
                      <Train className="w-4 h-4 text-rose-500" /> ÖPNV
                    </h4>
                    <p className="text-xs text-gray-600">{stadt.oepnv}</p>
                  </div>
                  <div className="p-3 bg-rose-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 text-sm mb-1 flex items-center gap-1">
                      <Wallet className="w-4 h-4 text-rose-500" /> Lebenshaltung
                    </h4>
                    <p className="text-xs text-gray-600">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${lh.color}`}>{lh.text}</span>
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="mt-8 lg:mt-0 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-xl border border-rose-100 p-5">
                <h3 className="font-bold text-gray-900 mb-3">Auf einen Blick</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Beruf</dt>
                    <dd className="font-medium text-gray-900">{beruf.name}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Stadt</dt>
                    <dd className="font-medium text-gray-900">{stadt.name}, {stadt.bundesland}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Dauer</dt>
                    <dd className="font-medium text-gray-900">{beruf.dauer}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Geeignet für</dt>
                    <dd className="font-medium text-gray-900">{beruf.geeignetFuer}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Kategorie</dt>
                    <dd className="font-medium text-gray-900">{beruf.category}</dd>
                  </div>
                </dl>
              </div>

              {/* Voraussetzungen */}
              <div className="bg-white rounded-xl border border-rose-100 p-5">
                <h3 className="font-bold text-gray-900 mb-3">Voraussetzungen</h3>
                <ul className="space-y-2">
                  {beruf.voraussetzungen.map((v, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selber Beruf, andere Städte */}
              <div className="bg-white rounded-xl border border-rose-100 p-5">
                <h3 className="font-bold text-gray-900 mb-3">{beruf.name} in anderen Städten</h3>
                <ul className="space-y-1.5">
                  {nachbarn.slice(0, 5).map((n) => (
                    <li key={n.slug}>
                      <Link href={`/praktikum/${beruf.slug}-in-${n.slug}`} className="text-sm text-gray-600 hover:text-rose-600 transition-colors flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        {beruf.name} in {n.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl p-5 text-white">
                <h3 className="font-bold mb-2">Praktikumsplatz finden</h3>
                <p className="text-sm text-white/80 mb-4">
                  Entdecke offene Praktikumsplätze als {beruf.name} in {stadt.name}.
                </p>
                <Link
                  href="/stellen"
                  className="inline-flex items-center gap-2 bg-white text-rose-600 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-rose-50 transition-colors"
                >
                  Stellen ansehen <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
