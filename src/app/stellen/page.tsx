import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Briefcase, ChevronRight, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobSearchBar from '@/components/stellen/JobSearchBar';
import JobCard from '@/components/stellen/JobCard';
import AppCTA from '@/components/stellen/AppCTA';
import {
  fetchApi,
  SearchResponse,
  StatsResponse,
  LatestResponse,
} from '@/lib/api';

export const metadata: Metadata = {
  title: 'Praktikumspl\u00e4tze finden \u2013 Aktuelle Stellen',
  description:
    'Finde dein Praktikum! Aktuelle Praktikumsstellen von Betrieben in deiner N\u00e4he. Mit Video-Vorschau und direktem Chat. Jetzt Stellen durchsuchen.',
  alternates: { canonical: '/stellen' },
  openGraph: {
    title: 'Praktikumspl\u00e4tze finden \u2013 Aktuelle Stellen | Praktikumsgenie',
    description:
      'Aktuelle Praktikumsstellen von Betrieben in deiner N\u00e4he. Mit Video-Vorschau und direktem Chat.',
    url: 'https://praktikumsgenie.de/stellen',
  },
};

export default async function StellenPage({
  searchParams,
}: {
  searchParams: { q?: string; stadt?: string; berufsfeld?: string; page?: string };
}) {
  const q = searchParams.q || '';
  const stadt = searchParams.stadt || '';
  const berufsfeld = searchParams.berufsfeld || '';
  const page = parseInt(searchParams.page || '1', 10);

  const hasFilters = q || stadt || berufsfeld;

  // Fetch data in parallel
  const [searchData, statsData, latestData] = await Promise.all([
    hasFilters
      ? fetchApi<SearchResponse>(
          `/public/jobs/search?portal_id=2&q=${encodeURIComponent(q)}&stadt=${encodeURIComponent(stadt)}&berufsfeld=${encodeURIComponent(berufsfeld)}&page=${page}&limit=20`,
        )
      : null,
    fetchApi<StatsResponse>('/public/jobs/stats?portal_id=2'),
    !hasFilters ? fetchApi<LatestResponse>('/public/jobs/latest?portal_id=2&limit=20') : null,
  ]);

  const stats = statsData || { totalJobs: 0, totalCompanies: 0, topCities: [], topProfessions: [] };
  const searchResults = searchData?.items || [];
  const latestJobs = latestData?.items || [];
  const displayJobs = hasFilters ? searchResults : latestJobs;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Praktikumspl\u00e4tze finden',
    description: 'Aktuelle Praktikumsstellen von Betrieben in ganz Deutschland.',
    url: 'https://praktikumsgenie.de/stellen',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Praktikumsgenie',
      url: 'https://praktikumsgenie.de',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero + Search */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-rose-50/80 via-white to-gray-50">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Finde dein{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                Praktikum
              </span>
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              {stats.totalJobs > 0
                ? `${stats.totalJobs.toLocaleString('de-DE')} Praktikumsstellen von ${stats.totalCompanies.toLocaleString('de-DE')} Betrieben`
                : 'Aktuelle Praktikumsstellen von Betrieben in deiner N\u00e4he'}
            </p>
          </div>

          <JobSearchBar initialQuery={q} initialCity={stadt} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Results */}
        {hasFilters && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {searchData?.total
                    ? `${searchData.total} Stellen gefunden`
                    : 'Keine Stellen gefunden'}
                </h2>
                {(q || stadt) && (
                  <p className="text-sm text-gray-500 mt-1">
                    {q && `Suche: "${q}"`}
                    {q && stadt && ' \u00b7 '}
                    {stadt && `Ort: ${stadt}`}
                  </p>
                )}
              </div>
              <Link
                href="/stellen"
                className="text-sm text-rose-600 hover:text-rose-700 font-medium"
              >
                Filter zur\u00fccksetzen
              </Link>
            </div>

            {/* Facets */}
            {searchData?.facets && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchData.facets.berufsfelder.slice(0, 8).map((f) => (
                  <Link
                    key={f.slug}
                    href={`/stellen/beruf/${f.slug}`}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                      berufsfeld === f.slug
                        ? 'bg-rose-100 text-rose-700 border-rose-200'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-rose-200 hover:text-rose-600'
                    }`}
                  >
                    {f.name}
                    <span className="text-gray-400">({f.count})</span>
                  </Link>
                ))}
              </div>
            )}

            {searchResults.length > 0 ? (
              <div className="space-y-3">
                {searchResults.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                <Briefcase className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">
                  Keine Stellen gefunden. Versuche andere Suchbegriffe.
                </p>
              </div>
            )}

            {/* Pagination */}
            {searchData && searchData.pagination.totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {page > 1 && (
                  <Link
                    href={`/stellen?q=${encodeURIComponent(q)}&stadt=${encodeURIComponent(stadt)}&page=${page - 1}`}
                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    Zur\u00fcck
                  </Link>
                )}
                <span className="px-4 py-2 text-sm text-gray-500">
                  Seite {page} von {searchData.pagination.totalPages}
                </span>
                {page < searchData.pagination.totalPages && (
                  <Link
                    href={`/stellen?q=${encodeURIComponent(q)}&stadt=${encodeURIComponent(stadt)}&page=${page + 1}`}
                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    Weiter
                  </Link>
                )}
              </div>
            )}
          </div>
        )}

        {/* Latest Jobs (when no search) */}
        {!hasFilters && displayJobs.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-rose-600" />
              <h2 className="text-xl font-bold text-gray-900">Neueste Praktikumsstellen</h2>
            </div>
            <div className="space-y-3">
              {displayJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        )}

        {/* Popular Professions */}
        {stats.topProfessions.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Beliebte Praktikumsberufe</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {stats.topProfessions.map((p) => (
                <Link
                  key={p.slug}
                  href={`/stellen/beruf/${p.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-4 hover:border-rose-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-4 w-4 text-rose-500" />
                    <span className="text-sm font-medium text-gray-900 group-hover:text-rose-700 truncate">
                      {p.name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{p.count} Stellen</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Popular Cities */}
        {stats.topCities.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Praktika nach Stadt</h2>
            <div className="flex flex-wrap gap-3">
              {stats.topCities.map((c) => {
                const citySlug = c.name
                  .toLowerCase()
                  .replace(/[\u00e4\u00c4]/g, 'ae')
                  .replace(/[\u00f6\u00d6]/g, 'oe')
                  .replace(/[\u00fc\u00dc]/g, 'ue')
                  .replace(/\u00df/g, 'ss')
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, '');
                return (
                  <Link
                    key={citySlug}
                    href={`/stellen/${citySlug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full hover:border-rose-200 hover:text-rose-700 transition-colors text-sm"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {c.name}
                    <span className="text-gray-400">({c.count})</span>
                    <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* App CTA */}
        <AppCTA
          title="Die Genie-App: Swipen statt Suchen"
          description="Lerne Betriebe per Video kennen. Zeig Interesse mit einem Swipe. Chatte direkt wenn's matcht."
        />
      </div>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
