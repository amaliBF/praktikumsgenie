import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Building2, MapPin, Star, Briefcase, Globe, Phone, CheckCircle2,
  Users, Calendar, Award, ThumbsUp, Play, ChevronRight, ExternalLink,
  Clock, ArrowRight,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { fetchApi, CompanyDetailResponse, CompanyReviewsResponse } from '@/lib/api';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetchApi<CompanyDetailResponse>(`/public/companies/${params.slug}`);
  if (!data) return { title: 'Unternehmen nicht gefunden' };

  const c = data.company;
  const title = `${c.name}${c.city ? ` in ${c.city}` : ''} – Praktikumsbetrieb | Praktikumsgenie`;
  const description = c.shortDescription || c.description?.substring(0, 155) || `${c.name} – Praktikumsbetrieb auf Praktikumsgenie. Offene Praktikumsplätze, Bewertungen und Videos.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function FirmenDetailPage({ params }: Props) {
  const [data, reviewsData] = await Promise.all([
    fetchApi<CompanyDetailResponse>(`/public/companies/${params.slug}`),
    fetchApi<CompanyReviewsResponse>(`/public/companies/${params.slug}/reviews?limit=5`),
  ]);

  if (!data) notFound();

  const c = data.company;
  const videos = data.videos;
  const jobs = data.jobs;
  const reviews = reviewsData?.items || [];
  const reviewSummary = reviewsData?.summary;

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Firmen', item: 'https://praktikumsgenie.de/firmen' },
      { '@type': 'ListItem', position: 3, name: c.name },
    ],
  };

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: c.name,
    ...(c.legalName && { legalName: c.legalName }),
    ...(c.website && { url: c.website }),
    ...(c.logoUrl && { logo: c.logoUrl }),
    ...(c.description && { description: c.description }),
    ...(c.foundedYear && { foundingDate: String(c.foundedYear) }),
    ...(c.city && {
      address: {
        '@type': 'PostalAddress',
        ...(c.street && { streetAddress: c.street }),
        addressLocality: c.city,
        ...(c.postalCode && { postalCode: c.postalCode }),
        addressCountry: 'DE',
      },
    }),
    ...(reviewSummary && reviewSummary.reviewCount > 0 && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: reviewSummary.reviewAverage,
        reviewCount: reviewSummary.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

        {/* Header */}
        <section className="relative pt-20 pb-8">
          {c.coverImageUrl ? (
            <div className="absolute inset-0 h-48">
              <img src={c.coverImageUrl} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent" />
            </div>
          ) : (
            <div className="absolute inset-0 h-48 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-600">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent" />
            </div>
          )}

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-rose-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/firmen" className="hover:text-rose-600">Firmen</Link></li>
                <li>/</li>
                <li className="text-gray-900 font-medium truncate max-w-[200px]">{c.name}</li>
              </ol>
            </nav>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                {c.logoUrl ? (
                  <img src={c.logoUrl} alt={c.name} className="w-20 h-20 rounded-xl object-contain bg-gray-50 border border-gray-100 shadow-sm" />
                ) : (
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center shadow-sm">
                    <Building2 className="h-10 w-10 text-rose-400" />
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{c.name}</h1>
                    {c.verified && <CheckCircle2 className="h-6 w-6 text-rose-500" />}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                    {c.city && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {c.postalCode && `${c.postalCode} `}{c.city}
                      </span>
                    )}
                    {c.industry && (
                      <span className="inline-block bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                        {c.industry}
                      </span>
                    )}
                    {c.foundedYear && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Seit {c.foundedYear}
                      </span>
                    )}
                    {c.employeeCount && (
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {c.employeeCount} Mitarbeiter
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  {reviewSummary && reviewSummary.reviewCount > 0 && (
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`h-5 w-5 ${
                              s <= Math.round(reviewSummary.reviewAverage || 0)
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900">{reviewSummary.reviewAverage?.toFixed(1)}</span>
                      <span className="text-sm text-gray-500">({reviewSummary.reviewCount} Bewertungen)</span>
                      {reviewSummary.recommendPercent && (
                        <span className="flex items-center gap-1 text-sm text-green-600 font-medium">
                          <ThumbsUp className="h-3.5 w-3.5" />
                          {reviewSummary.recommendPercent}% empfehlen
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-2 sm:items-end">
                  {c.website && (
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-rose-600 hover:text-rose-700 font-medium"
                    >
                      <Globe className="h-4 w-4" /> Website <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {c.phone && (
                    <a href={`tel:${c.phone}`} className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900">
                      <Phone className="h-4 w-4" /> {c.phone}
                    </a>
                  )}
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">{c.jobCount}</div>
                  <div className="text-xs text-gray-500">Offene Stellen</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">{c.videoCount}</div>
                  <div className="text-xs text-gray-500">Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">{c.followerCount}</div>
                  <div className="text-xs text-gray-500">Follower</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">
                    {reviewSummary?.reviewAverage?.toFixed(1) || '–'}
                  </div>
                  <div className="text-xs text-gray-500">Bewertung</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              {c.description && (
                <section className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-3">Über {c.name}</h2>
                  <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {c.description}
                  </div>
                </section>
              )}

              {/* Benefits */}
              {c.benefits && c.benefits.length > 0 && (
                <section className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Benefits & Vorteile</h2>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {c.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Open Jobs */}
              {jobs.length > 0 && (
                <section id="offene-stellen" className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-900">Offene Stellen ({c.jobCount})</h2>
                  </div>
                  <div className="space-y-3">
                    {jobs.map((job) => (
                      <Link
                        key={job.id}
                        href={`/stellen/${c.slug}-${job.slug}-${job.id.substring(0, 8)}`}
                        className="block group p-4 rounded-lg border border-gray-100 hover:border-rose-200 hover:bg-rose-50/30 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                              {job.title}
                            </h3>
                            <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                              {job.profession && <span>{job.profession.name}</span>}
                              {job.city && (
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" /> {job.city}
                                </span>
                              )}
                              {job.startDate && (
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" /> {new Date(job.startDate).toLocaleDateString('de-DE')}
                                </span>
                              )}
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-rose-500" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Videos */}
              {videos.length > 0 && (
                <section className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Videos ({c.videoCount})</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {videos.map((video) => (
                      <div key={video.id} className="group relative rounded-lg overflow-hidden bg-gray-900 aspect-video">
                        {video.thumbnailUrl ? (
                          <img src={video.thumbnailUrl} alt={video.title || ''} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-rose-600/20 to-pink-600/20" />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                            <Play className="h-5 w-5 text-rose-600 ml-0.5" />
                          </div>
                        </div>
                        {video.title && (
                          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80">
                            <p className="text-sm text-white font-medium truncate">{video.title}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Reviews */}
              {reviews.length > 0 && (
                <section className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">
                    Bewertungen ({reviewSummary?.reviewCount || 0})
                  </h2>
                  <div className="space-y-5">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 last:border-0 pb-5 last:pb-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className={`h-4 w-4 ${
                                  s <= review.overallRating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                          {review.title && <span className="font-semibold text-sm text-gray-900">{review.title}</span>}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                          {review.reviewerType && <span>{review.reviewerType}</span>}
                          <span>{new Date(review.createdAt).toLocaleDateString('de-DE')}</span>
                        </div>
                        {review.pros && (
                          <div className="mb-2">
                            <span className="text-xs font-medium text-green-600 block mb-1">Pro</span>
                            <p className="text-sm text-gray-600">{review.pros}</p>
                          </div>
                        )}
                        {review.cons && (
                          <div className="mb-2">
                            <span className="text-xs font-medium text-red-500 block mb-1">Contra</span>
                            <p className="text-sm text-gray-600">{review.cons}</p>
                          </div>
                        )}
                        {review.companyResponse && (
                          <div className="mt-3 bg-gray-50 rounded-lg p-3">
                            <span className="text-xs font-medium text-gray-500 block mb-1">Antwort des Arbeitgebers</span>
                            <p className="text-sm text-gray-600">{review.companyResponse}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="mt-8 lg:mt-0 space-y-6">
              {/* Training Info */}
              {(c.trainingSince || c.totalApprentices) && (
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-rose-500" />
                    Praktikum & Ausbildung
                  </h3>
                  {c.trainingSince && (
                    <div className="text-sm text-gray-600 mb-2">
                      Bildet aus seit <span className="font-semibold text-gray-900">{c.trainingSince}</span>
                    </div>
                  )}
                  {c.totalApprentices && (
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{c.totalApprentices}</span> Auszubildende & Praktikanten
                    </div>
                  )}
                </div>
              )}

              {/* Quick Actions */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-3">Aktionen</h3>
                <div className="space-y-2">
                  {c.jobCount > 0 && (
                    <a
                      href="#offene-stellen"
                      className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg bg-rose-500 text-white font-medium text-sm hover:bg-rose-600 transition-colors"
                    >
                      <Briefcase className="h-4 w-4" />
                      {c.jobCount} {c.jobCount === 1 ? 'Stelle' : 'Stellen'} ansehen
                    </a>
                  )}
                  <Link
                    href="/stellen"
                    className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
                  >
                    <Briefcase className="h-4 w-4" />
                    Alle Praktikumsplätze durchsuchen
                  </Link>
                </div>
              </div>

              {/* Location */}
              {(c.street || c.city) && (
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-rose-500" />
                    Standort
                  </h3>
                  <address className="not-italic text-sm text-gray-600 leading-relaxed">
                    {c.street && <div>{c.street}</div>}
                    <div>{c.postalCode && `${c.postalCode} `}{c.city}</div>
                  </address>
                </div>
              )}

              {/* Industry Tags */}
              {c.industryTags && c.industryTags.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Branchen</h3>
                  <div className="flex flex-wrap gap-2">
                    {c.industryTags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
