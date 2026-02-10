import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Briefcase, Clock, Users, CheckCircle2, Lightbulb, GraduationCap, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getPraktikumsberufBySlug,
  getAllPraktikumsberufeSlugs,
  getRelatedPraktikumsberufe,
  kategorien,
} from '@/lib/praktikumsberufe-data';
import { staedte } from '@/lib/staedte-data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPraktikumsberufeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const beruf = getPraktikumsberufBySlug(params.slug);
  if (!beruf) return { title: 'Nicht gefunden' };

  const title = `Praktikum als ${beruf.name} – Aufgaben, Lernziele & Tipps | Praktikumsgenie`;
  const description = `Praktikum als ${beruf.name}: Typische Aufgaben, was du lernst, Voraussetzungen und Bewerbungstipps. ${beruf.dauer} Dauer, ${beruf.geeignetFuer}.`;
  return {
    title,
    description,
    alternates: { canonical: `/praktikumsberufe/${beruf.slug}` },
    openGraph: { title, description, url: `https://praktikumsgenie.de/praktikumsberufe/${beruf.slug}`, type: 'article' },
  };
}

export default function PraktikumsberufDetailPage({ params }: Props) {
  const beruf = getPraktikumsberufBySlug(params.slug);
  if (!beruf) notFound();

  const related = getRelatedPraktikumsberufe(beruf);
  const kategorie = kategorien.find((k) => k.slug === beruf.categorySlug);

  // Top 6 Städte für "Praktikum als X in Y" Links
  const topStaedte = staedte.slice(0, 6);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Praktikumsberufe', item: 'https://praktikumsgenie.de/praktikumsberufe' },
      { '@type': 'ListItem', position: 3, name: beruf.name },
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
                <li className="text-white font-medium">{beruf.name}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Praktikum als {beruf.name}
              </h1>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/30">
                <Clock className="w-4 h-4" />
                {beruf.dauer}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/30">
                <Users className="w-4 h-4" />
                {beruf.geeignetFuer}
              </span>
              {kategorie && (
                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/30">
                  <Target className="w-4 h-4" />
                  {kategorie.name}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section className="bg-white rounded-xl border border-rose-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Über das Praktikum</h2>
                <p className="text-gray-700 leading-relaxed">{beruf.beschreibung}</p>
              </section>

              {/* Aufgaben */}
              <section className="bg-white rounded-xl border border-rose-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-rose-500" />
                  Typische Aufgaben im Praktikum
                </h2>
                <ul className="space-y-3">
                  {beruf.aufgaben.map((aufgabe, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-700">{aufgabe}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Was man lernt */}
              <section className="bg-white rounded-xl border border-rose-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-rose-500" />
                  Was du im Praktikum lernst
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
                  Tipps für dein Praktikum
                </h2>
                <ul className="space-y-2">
                  {beruf.tipps.map((tipp, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-amber-500 shrink-0">💡</span>
                      {tipp}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Praktikum in Städten */}
              <section className="bg-white rounded-xl border border-rose-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Praktikum als {beruf.name} in deiner Stadt
                </h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {topStaedte.map((stadt) => (
                    <Link
                      key={stadt.slug}
                      href={`/praktikum/${beruf.slug}-in-${stadt.slug}`}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-rose-50 transition-colors text-sm"
                    >
                      <span className="text-rose-500">📍</span>
                      <span className="text-gray-700 hover:text-rose-600">{beruf.name} in {stadt.name}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/praktikum"
                  className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 text-sm font-medium mt-4"
                >
                  Alle Städte ansehen <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="mt-8 lg:mt-0 space-y-6">
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

              {/* Quick Facts */}
              <div className="bg-white rounded-xl border border-rose-100 p-5">
                <h3 className="font-bold text-gray-900 mb-3">Auf einen Blick</h3>
                <dl className="space-y-3 text-sm">
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

              {/* Related */}
              {related.length > 0 && (
                <div className="bg-white rounded-xl border border-rose-100 p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Ähnliche Praktikumsberufe</h3>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/praktikumsberufe/${r.slug}`}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-rose-600 transition-colors"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                          {r.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl p-5 text-white">
                <h3 className="font-bold mb-2">Praktikumsplatz finden</h3>
                <p className="text-sm text-white/80 mb-4">
                  Entdecke offene Praktikumsplätze als {beruf.name} in deiner Nähe.
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
