import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  TrendingUp,
  Banknote,
  ArrowRight,
  Info,
  MapPin,
  Building2,
  Factory,
  GraduationCap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vergütungsübersicht – Was verdient man im Praktikum? | Praktikumsgenie',
  description:
    'Was verdient man im Praktikum? Vergütungsübersicht für beliebte Praktikumsbranchen in Deutschland: IT, Consulting, Automotive, Banking und mehr – mit Gehaltsvergleich.',
  alternates: { canonical: '/gehalt' },
  openGraph: {
    title: 'Vergütungsübersicht – Was verdient man im Praktikum? | Praktikumsgenie',
    description:
      'Praktikumsvergütungen im Überblick: Erfahre, was du in beliebten Branchen als Praktikant verdienst – von IT bis NGO.',
    url: 'https://praktikumsgenie.de/gehalt',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vergütungsübersicht – Was verdient man im Praktikum?',
    description:
      'Praktikumsvergütungen im Überblick: IT, Consulting, Automotive und mehr. Jetzt Vergütungen vergleichen!',
  },
};

const professions = [
  { name: 'IT & Tech', min: 1200, max: 2000, category: 'IT' },
  { name: 'Unternehmensberatung', min: 1500, max: 2000, category: 'Consulting' },
  { name: 'Automobilindustrie', min: 1000, max: 1800, category: 'Industrie' },
  { name: 'Banking & Finanzen', min: 1200, max: 1800, category: 'Finanzen' },
  { name: 'Pharma & Chemie', min: 1000, max: 1600, category: 'Wissenschaft' },
  { name: 'Marketing & Werbung', min: 800, max: 1400, category: 'Marketing' },
  { name: 'Medien & Journalismus', min: 600, max: 1200, category: 'Medien' },
  { name: 'NGO & Non-Profit', min: 0, max: 800, category: 'Sozial' },
  { name: 'Handwerk & Produktion', min: 500, max: 1000, category: 'Handwerk' },
  { name: 'Recht & Kanzleien', min: 800, max: 1400, category: 'Recht' },
  { name: 'Bildung & Forschung', min: 400, max: 1000, category: 'Bildung' },
  { name: 'Gastronomie & Hotellerie', min: 500, max: 1000, category: 'Gastronomie' },
];

const SALARY_ABSOLUTE_MAX = 2200;

const categoryColors: Record<string, string> = {
  IT: 'bg-blue-100 text-blue-700',
  Consulting: 'bg-indigo-100 text-indigo-700',
  Industrie: 'bg-cyan-100 text-cyan-700',
  Finanzen: 'bg-emerald-100 text-emerald-700',
  Wissenschaft: 'bg-teal-100 text-teal-700',
  Marketing: 'bg-pink-100 text-pink-700',
  Medien: 'bg-purple-100 text-purple-700',
  Sozial: 'bg-rose-100 text-rose-700',
  Handwerk: 'bg-orange-100 text-orange-700',
  Recht: 'bg-slate-100 text-slate-700',
  Bildung: 'bg-amber-100 text-amber-700',
  Gastronomie: 'bg-yellow-100 text-yellow-700',
};

function formatEuro(value: number) {
  return value.toLocaleString('de-DE');
}

export default function GehaltPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Vergütungsübersicht' },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Vergütungsübersicht – Was verdient man im Praktikum?',
    description:
      'Vergütungsübersicht für beliebte Praktikumsbranchen in Deutschland mit Gehaltsvergleich.',
    url: 'https://praktikumsgenie.de/gehalt',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Praktikumsgenie',
      url: 'https://praktikumsgenie.de',
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />

        {/* Hero Section */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-400 rounded-full blur-3xl" />
            <div className="absolute top-40 right-40 w-64 h-64 bg-fuchsia-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-rose-200 mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium">Vergütungsübersicht</li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 text-sm text-white mb-8">
                <Banknote className="h-4 w-4" />
                Praktikumsvergütungen im Überblick
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Vergütungsübersicht
              </h1>
              <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
                Was verdient man im Praktikum? Hier findest du die Vergütungen beliebter
                Praktikumsbranchen – transparent und übersichtlich.
              </p>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">12</p>
                  <p className="text-sm text-rose-200 mt-1">Branchen</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">0–2.000 €</p>
                  <p className="text-sm text-rose-200 mt-1">Vergütung</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">pro Monat</p>
                  <p className="text-sm text-rose-200 mt-1">Brutto</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-sm text-rose-600 mb-4">
                <TrendingUp className="h-4 w-4" />
                Vergütungsvergleich
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Beliebte Praktikumsbranchen und ihre Vergütungen
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Die folgenden Vergütungen beziehen sich auf freiwillige Praktika (brutto/Monat).
                Bei Pflichtpraktika kann die Vergütung abweichen oder ganz entfallen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {professions.map((profession) => {
                const barMinPercent = (profession.min / SALARY_ABSOLUTE_MAX) * 100;
                const barMaxPercent = (profession.max / SALARY_ABSOLUTE_MAX) * 100;
                return (
                  <div
                    key={profession.name}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-700 transition-colors leading-tight">
                        {profession.name}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${
                          categoryColors[profession.category] || 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {profession.category}
                      </span>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                          {profession.min === 0 ? 'unbezahlt' : `${formatEuro(profession.min)} €`} – {formatEuro(profession.max)} €
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">/Monat (brutto)</span>
                    </div>

                    {/* Bar Visualization */}
                    <div className="mb-3">
                      <div className="w-full bg-gray-100 rounded-full h-3 relative overflow-hidden">
                        {/* Background fill from 0 to min */}
                        {profession.min > 0 && (
                          <div
                            className="absolute top-0 left-0 h-full bg-rose-100 rounded-l-full"
                            style={{ width: `${barMinPercent}%` }}
                          />
                        )}
                        {/* Salary range bar */}
                        <div
                          className="absolute top-0 h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
                          style={{
                            left: `${barMinPercent}%`,
                            width: `${barMaxPercent - barMinPercent}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-400">0 €</span>
                        <span className="text-xs text-gray-400">2.200 €</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-medium">
                      <GraduationCap className="h-3 w-3" />
                      Praktikum
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-[#FFF5F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm text-blue-600 mb-4">
                <Info className="h-4 w-4" />
                Gut zu wissen
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Wovon hängt die Praktikumsvergütung ab?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Die Vergütung im Praktikum ist nicht überall gleich. Verschiedene Faktoren
                beeinflussen, wie viel du tatsächlich verdienst – oder ob du überhaupt bezahlt wirst.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 mb-6">
                  <MapPin className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pflicht vs. Freiwillig</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bei einem <strong>Pflichtpraktikum</strong> (im Rahmen von Schule oder Studium)
                  besteht kein Anspruch auf Mindestlohn. Viele Pflichtpraktika sind daher unbezahlt
                  oder gering vergütet. Bei einem <strong>freiwilligen Praktikum</strong> ab 3 Monaten
                  gilt der gesetzliche Mindestlohn (12,82 €/h).
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 mb-6">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Branche & Unternehmen</h3>
                <p className="text-gray-600 leading-relaxed">
                  Konzerne und gut finanzierte Branchen (IT, Consulting, Banking) zahlen
                  Praktikanten deutlich mehr als NGOs, Medien oder der öffentliche Sektor.
                  Große Unternehmen haben oft standardisierte Vergütungssätze, während bei
                  kleineren Firmen die Vergütung stark variiert.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-fuchsia-200 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-fuchsia-100 text-fuchsia-600 mb-6">
                  <Factory className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dauer & Standort</h3>
                <p className="text-gray-600 leading-relaxed">
                  Längere Praktika (3–6 Monate) werden häufiger vergütet als kurze
                  Schnupperpraktika. In Großstädten wie München, Frankfurt oder Hamburg
                  sind die Vergütungen tendenziell höher – die Lebenshaltungskosten
                  allerdings auch.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mindestlohn im Praktikum</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Seit 2025 beträgt der gesetzliche Mindestlohn 12,82 € pro Stunde. Dieser gilt
                    für <strong>freiwillige Praktika ab 3 Monaten</strong>. Ausgenommen sind:
                    Pflichtpraktika (Schule/Studium), freiwillige Praktika unter 3 Monaten und
                    Einstiegsqualifizierungen. Bei Vollzeit (40h/Woche) entspricht der Mindestlohn
                    ca. 2.220 € brutto/Monat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* From Praktikum to Career */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm text-green-600 mb-4">
                <TrendingUp className="h-4 w-4" />
                Vom Praktikum zum Berufseinstieg
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                So geht es nach dem Praktikum weiter
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Ein Praktikum ist oft der erste Schritt in die Berufswelt. Hier siehst du,
                wie sich dein Gehalt danach entwickeln kann.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    year: 'Praktikum',
                    range: '0 – 2.000 €/Monat',
                    description:
                      'Im Praktikum sammelst du erste Berufserfahrung. Die Vergütung variiert stark – von unbezahlt (Pflichtpraktikum) bis zu 2.000 € in Top-Branchen.',
                    barWidth: '25%',
                    color: 'from-rose-400 to-rose-500',
                  },
                  {
                    year: 'Werkstudent/in',
                    range: '13 – 22 €/Stunde',
                    description:
                      'Als Werkstudent verdienst du deutlich mehr und arbeitest regelmäßig neben dem Studium. Ein guter Übergang zwischen Praktikum und Festanstellung.',
                    barWidth: '40%',
                    color: 'from-rose-500 to-pink-500',
                  },
                  {
                    year: 'Berufseinstieg',
                    range: '2.500 – 4.500 €/Monat',
                    description:
                      'Nach Studium oder Ausbildung steigst du mit deutlich höherem Gehalt ein. Praktikumserfahrung und gute Kontakte zahlen sich hier besonders aus.',
                    barWidth: '65%',
                    color: 'from-pink-500 to-fuchsia-500',
                  },
                  {
                    year: '3–5 Jahre Erfahrung',
                    range: '3.500 – 6.000+ €/Monat',
                    description:
                      'Mit Berufserfahrung steigt dein Gehalt weiter. Spezialisierungen und Branchenwechsel können den Anstieg beschleunigen.',
                    barWidth: '100%',
                    color: 'from-fuchsia-500 to-purple-500',
                  },
                ].map((item) => (
                  <div
                    key={item.year}
                    className="bg-[#FFF5F6] rounded-2xl p-6 border border-rose-100 hover:border-rose-200 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.year}</h3>
                      <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                        {item.range}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${item.color} transition-all duration-700`}
                        style={{ width: item.barWidth }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Source Note */}
        <section className="bg-[#FFF5F6] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-4 bg-white rounded-xl text-sm text-gray-500 border border-rose-100">
              <p>
                <strong className="text-gray-600">Quellen:</strong> Die Vergütungsangaben basieren auf
                öffentlich zugänglichen Informationen von{' '}
                <a
                  href="https://www.stepstone.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:underline"
                >
                  Stepstone
                </a>
                ,{' '}
                <a
                  href="https://de.indeed.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:underline"
                >
                  Indeed
                </a>
                ,{' '}
                <a
                  href="https://www.glassdoor.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:underline"
                >
                  Glassdoor
                </a>
                {' '}und{' '}
                <a
                  href="https://www.meinpraktikum.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:underline"
                >
                  meinpraktikum.de
                </a>
                . Alle Angaben sind Richtwerte und können je nach Branche, Unternehmen und
                Praktikumsart abweichen. Stand: 2026.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-20 w-72 h-72 bg-pink-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-20 w-96 h-96 bg-rose-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Finde jetzt passende Praktikumsplätze
            </h2>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Du weißt jetzt, was du verdienen kannst. Schau dir offene Praktikumsstellen an
              und bewirb dich direkt bei Unternehmen in deiner Nähe.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/stellen"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-rose-600 hover:bg-rose-50 transition-colors shadow-lg"
              >
                Praktikumsplätze finden
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/berufe"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                Alle Berufe entdecken
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
