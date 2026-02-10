import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Briefcase, Clock, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { praktikumsberufe, kategorien } from '@/lib/praktikumsberufe-data';

export const metadata: Metadata = {
  title: 'Praktikumsberufe entdecken – 80 Berufe im Überblick | Praktikumsgenie',
  description:
    'Entdecke 80 Praktikumsberufe in 10 Kategorien: IT, Handwerk, Gesundheit, Kaufmännisch und mehr. Aufgaben, Lernziele und Bewerbungstipps für dein Schülerpraktikum.',
  alternates: { canonical: '/praktikumsberufe' },
  openGraph: {
    title: 'Praktikumsberufe entdecken | Praktikumsgenie',
    description: 'Entdecke 80 Praktikumsberufe in 10 Kategorien mit Aufgaben, Lernzielen und Bewerbungstipps.',
    url: 'https://praktikumsgenie.de/praktikumsberufe',
  },
};

export default function PraktikumsberufePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Praktikumsberufe' },
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white/80 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium">Praktikumsberufe</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Praktikumsberufe entdecken
              </h1>
            </div>
            <p className="text-lg text-white/90 mb-6 max-w-2xl">
              In welchem Beruf möchtest du dein Praktikum machen? Entdecke {praktikumsberufe.length} Berufe mit typischen Aufgaben, Lernzielen und Bewerbungstipps.
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {kategorien.map((kategorie) => {
            const berufe = praktikumsberufe.filter((b) => b.categorySlug === kategorie.slug);
            if (berufe.length === 0) return null;

            return (
              <section key={kategorie.slug} className="mb-12" id={kategorie.slug}>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{kategorie.name}</h2>
                <p className="text-gray-600 mb-6">{kategorie.description}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {berufe.map((beruf) => (
                    <Link
                      key={beruf.slug}
                      href={`/praktikumsberufe/${beruf.slug}`}
                      className="group bg-white rounded-xl border border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all p-5"
                    >
                      <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors mb-2">
                        {beruf.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {beruf.dauer}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          {beruf.geeignetFuer}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{beruf.beschreibung}</p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Category Quick Navigation */}
          <div className="mt-8 p-6 bg-white rounded-xl border border-rose-100">
            <h3 className="font-bold text-gray-900 mb-4">Kategorien</h3>
            <div className="flex flex-wrap gap-2">
              {kategorien.map((k) => (
                <a
                  key={k.slug}
                  href={`#${k.slug}`}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
                >
                  {k.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-r from-rose-500 to-pink-600 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Praktikumsplatz finden</h2>
            <p className="text-white/80 mb-6">Entdecke offene Praktikumsplätze bei Top-Arbeitgebern in deiner Nähe.</p>
            <Link
              href="/stellen"
              className="inline-flex items-center gap-2 bg-white text-rose-600 font-semibold px-6 py-3 rounded-xl hover:bg-rose-50 transition-colors"
            >
              Praktikumsstellen ansehen <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
