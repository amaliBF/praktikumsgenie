import Link from 'next/link';
import { Metadata } from 'next';
import { Building2, MapPin, Star, Briefcase, Search, ArrowRight, CheckCircle2, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { fetchApi, CompanyListResponse, CompanyStatsResponse } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Praktikumsbetriebe entdecken | Praktikumsgenie',
  description: 'Finde deinen Praktikumsbetrieb: Firmenprofile, Bewertungen, offene Praktikumsplätze und Videos. Entdecke Top-Arbeitgeber in deiner Region.',
  alternates: { canonical: '/firmen' },
  openGraph: {
    title: 'Praktikumsbetriebe entdecken | Praktikumsgenie',
    description: 'Finde deinen Praktikumsbetrieb: Firmenprofile, Bewertungen, offene Praktikumsplätze und Videos.',
    url: 'https://praktikumsgenie.de/firmen',
  },
};

interface Props {
  searchParams: { q?: string; city?: string; industry?: string; sort?: string; page?: string };
}

export default async function FirmenPage({ searchParams }: Props) {
  const params = new URLSearchParams();
  params.set('portal_id', '2');
  params.set('limit', '24');
  if (searchParams.q) params.set('q', searchParams.q);
  if (searchParams.city) params.set('city', searchParams.city);
  if (searchParams.industry) params.set('industry', searchParams.industry);
  if (searchParams.sort) params.set('sort', searchParams.sort);
  if (searchParams.page) params.set('page', searchParams.page);
  params.set('has_jobs', 'true');

  const [data, stats] = await Promise.all([
    fetchApi<CompanyListResponse>(`/public/companies?${params.toString()}`),
    fetchApi<CompanyStatsResponse>('/public/companies/stats?portal_id=2'),
  ]);

  const companies = data?.items || [];
  const total = data?.total || 0;
  const pagination = data?.pagination;
  const currentPage = pagination?.page || 1;
  const totalPages = pagination?.totalPages || 1;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Firmen' },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50/50 to-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        {/* Hero */}
        <section className="relative pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6TTAgMzR2Mkg0djJIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Praktikumsbetriebe entdecken
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Finde deinen Traum-Praktikumsbetrieb. Vergleiche Arbeitgeber, lies Bewertungen und entdecke offene Praktikumsplätze.
            </p>

            {/* Search */}
            <form className="max-w-2xl mx-auto" action="/firmen">
              <div className="flex bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="flex-1 flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    name="q"
                    defaultValue={searchParams.q || ''}
                    placeholder="Firmenname, Branche oder Stadt..."
                    className="w-full py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 bg-rose-500 hover:bg-rose-600 text-white font-semibold transition-colors"
                >
                  Suchen
                </button>
              </div>
            </form>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-rose-600">Home</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Firmen</li>
            </ol>
          </nav>
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              {/* Stats */}
              {stats && (
                <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Statistiken</h3>
                  <div className="text-3xl font-extrabold text-rose-500 mb-1">{stats.totalCompanies}</div>
                  <div className="text-sm text-gray-500 mb-4">Praktikumsbetriebe</div>
                </div>
              )}

              {/* Top Cities */}
              {stats && stats.topCities.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Top Städte</h3>
                  <ul className="space-y-2">
                    {stats.topCities.slice(0, 8).map((city) => (
                      <li key={city.name}>
                        <Link
                          href={`/firmen?city=${encodeURIComponent(city.name)}`}
                          className="flex items-center justify-between text-sm hover:text-rose-600 transition-colors"
                        >
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-gray-400" />
                            {city.name}
                          </span>
                          <span className="text-gray-400">{city.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Top Industries */}
              {stats && stats.topIndustries.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Top Branchen</h3>
                  <ul className="space-y-2">
                    {stats.topIndustries.slice(0, 8).map((ind) => (
                      <li key={ind.name}>
                        <Link
                          href={`/firmen?industry=${encodeURIComponent(ind.name)}`}
                          className="flex items-center justify-between text-sm hover:text-rose-600 transition-colors"
                        >
                          <span>{ind.name}</span>
                          <span className="text-gray-400">{ind.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>

            {/* Company Grid */}
            <div className="lg:col-span-3">
              {/* Active Filters + Sort */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{total}</span> Betriebe gefunden
                  {searchParams.q && (
                    <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-700 px-2.5 py-1 rounded-full text-xs font-medium">
                      &quot;{searchParams.q}&quot;
                      <Link href="/firmen" className="hover:text-rose-900">&times;</Link>
                    </span>
                  )}
                  {searchParams.city && (
                    <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-700 px-2.5 py-1 rounded-full text-xs font-medium">
                      {searchParams.city}
                      <Link href={`/firmen${searchParams.q ? `?q=${searchParams.q}` : ''}`} className="hover:text-rose-900">&times;</Link>
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {['name', 'jobs', 'rating', 'newest'].map((s) => (
                    <Link
                      key={s}
                      href={`/firmen?${new URLSearchParams({ ...searchParams, sort: s, page: '1' }).toString()}`}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        (searchParams.sort || 'name') === s
                          ? 'bg-rose-500 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {s === 'name' ? 'A-Z' : s === 'jobs' ? 'Meiste Stellen' : s === 'rating' ? 'Bewertung' : 'Neueste'}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Grid */}
              {companies.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {companies.map((company) => (
                    <Link
                      key={company.id}
                      href={`/firmen/${company.slug}`}
                      className="group bg-white rounded-xl border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all p-5"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        {company.logoUrl ? (
                          <img
                            src={company.logoUrl}
                            alt={company.name}
                            className="w-12 h-12 rounded-lg object-contain bg-gray-50 border border-gray-100"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-rose-400" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors truncate">
                            {company.name}
                          </h3>
                          {company.city && (
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {company.city}
                            </p>
                          )}
                        </div>
                        {company.verified && (
                          <CheckCircle2 className="h-5 w-5 text-rose-500 shrink-0" />
                        )}
                      </div>

                      {company.industry && (
                        <span className="inline-block text-xs font-medium bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full mb-2">
                          {company.industry}
                        </span>
                      )}

                      {company.shortDescription && (
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{company.shortDescription}</p>
                      )}

                      <div className="flex items-center gap-3 text-xs text-gray-500 pt-2 border-t border-gray-100">
                        {company.reviewAverage !== null && company.reviewAverage > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                            {company.reviewAverage.toFixed(1)}
                          </span>
                        )}
                        {company.jobCount > 0 && (
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5 text-rose-400" />
                            {company.jobCount} {company.jobCount === 1 ? 'Stelle' : 'Stellen'}
                          </span>
                        )}
                        {company.employeeCount && (
                          <span className="flex items-center gap-1">
                            <Users className="h-3.5 w-3.5 text-gray-400" />
                            {company.employeeCount}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                  <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Keine Betriebe gefunden</h3>
                  <p className="text-gray-500 mb-4">Versuche es mit anderen Suchbegriffen oder Filtern.</p>
                  <Link href="/firmen" className="text-rose-600 hover:text-rose-700 font-medium">
                    Alle Betriebe anzeigen &rarr;
                  </Link>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  {currentPage > 1 && (
                    <Link
                      href={`/firmen?${new URLSearchParams({ ...searchParams, page: String(currentPage - 1) }).toString()}`}
                      className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium hover:bg-gray-50"
                    >
                      Zurück
                    </Link>
                  )}
                  <span className="px-4 py-2 text-sm text-gray-600">
                    Seite {currentPage} von {totalPages}
                  </span>
                  {currentPage < totalPages && (
                    <Link
                      href={`/firmen?${new URLSearchParams({ ...searchParams, page: String(currentPage + 1) }).toString()}`}
                      className="px-4 py-2 rounded-lg bg-rose-500 text-white text-sm font-medium hover:bg-rose-600"
                    >
                      Weiter
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-r from-rose-500 to-pink-600 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Du bist Arbeitgeber?</h2>
            <p className="text-white/80 mb-6">Erstelle dein Firmenprofil und finde die besten Praktikanten über unsere Plattform.</p>
            <a
              href="https://dashboard.genieportal.de/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-rose-600 font-semibold px-6 py-3 rounded-xl hover:bg-rose-50 transition-colors"
            >
              Kostenlos registrieren <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
