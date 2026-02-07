import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, BookOpen, ClipboardCheck, Calendar, Tag, Target, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getRatgeberBySlug, getAllRatgeberSlugs, getRelatedRatgeber, ratgeberKategorien } from '@/lib/ratgeber-data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllRatgeberSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artikel = getRatgeberBySlug(params.slug);
  if (!artikel) return { title: 'Artikel nicht gefunden' };

  return {
    title: `${artikel.title} | Praktikumsgenie Ratgeber`,
    description: artikel.description,
    alternates: { canonical: `/ratgeber/${artikel.slug}` },
    openGraph: {
      title: artikel.title,
      description: artikel.description,
      url: `https://praktikumsgenie.de/ratgeber/${artikel.slug}`,
      type: 'article',
      publishedTime: artikel.publishDate,
    },
    twitter: { card: 'summary_large_image', title: artikel.title, description: artikel.description },
  };
}

export default function RatgeberArtikelPage({ params }: Props) {
  const artikel = getRatgeberBySlug(params.slug);
  if (!artikel) notFound();

  const related = getRelatedRatgeber(artikel);
  const kategorie = ratgeberKategorien.find((k) => k.slug === artikel.categorySlug);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://praktikumsgenie.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: kategorie?.name || artikel.category, item: `https://praktikumsgenie.de/ratgeber#${artikel.categorySlug}` },
      { '@type': 'ListItem', position: 4, name: artikel.title },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: artikel.title,
    description: artikel.description,
    datePublished: artikel.publishDate,
    dateModified: '2026-02-01',
    author: { '@type': 'Organization', name: 'Praktikumsgenie', url: 'https://praktikumsgenie.de' },
    publisher: { '@type': 'Organization', name: 'Praktikumsgenie', url: 'https://praktikumsgenie.de' },
  };

  const faqJsonLd = artikel.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: artikel.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  const jsonLdArray = [breadcrumbJsonLd, articleJsonLd, ...(faqJsonLd ? [faqJsonLd] : [])];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FFF5F6]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArray) }}
        />

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 confetti-dots opacity-10" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/80 mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li><Link href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li><Link href={`/ratgeber#${artikel.categorySlug}`} className="hover:text-white transition-colors">{kategorie?.name || artikel.category}</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium truncate max-w-[200px]">{artikel.title}</li>
              </ol>
            </nav>

            {/* Category Badge + Date */}
            <div className="flex items-center gap-3 mb-4">
              <span className="sticker-badge bg-white/20 border-white/30 text-white">
                <Tag className="w-3.5 h-3.5" />
                {kategorie?.name || artikel.category}
              </span>
              <span className="text-sm text-white/70 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(artikel.publishDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {artikel.title}
            </h1>

            <p className="text-lg text-white/90">{artikel.description}</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Key Points */}
          {artikel.keyPoints.length > 0 && (
            <section className="mb-10">
              <div className="discovery-quote mb-6">
                <div className="board-divider mb-4">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5 text-rose-500" />
                    Das Wichtigste in K&uuml;rze
                  </h2>
                </div>
                <ul className="space-y-2">
                  {artikel.keyPoints.map((point, i) => (
                    <li key={i} className="checklist-item p-1">
                      <span className="text-gray-800">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Main Content */}
          <article
            className="prose prose-gray max-w-none mb-10 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-rose-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: artikel.content }}
          />

          {/* FAQ */}
          {artikel.faqs.length > 0 && (
            <section className="mb-10">
              <div className="board-divider mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-rose-500" />
                  H&auml;ufige Fragen
                </h2>
              </div>
              <div className="space-y-4">
                {artikel.faqs.map((faq, i) => (
                  <details key={i} className="group pin-card mt-2 overflow-hidden">
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-900 hover:bg-rose-50/50 transition-colors">
                      {faq.question}
                      <span className="text-rose-400 group-open:rotate-180 transition-transform ml-2 flex-shrink-0">&#9660;</span>
                    </summary>
                    <div className="px-4 pb-4 text-gray-700 border-t border-rose-100">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related Articles */}
          {related.length > 0 && (
            <section className="mb-10">
              <div className="board-divider mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-rose-500" />
                  Verwandte Artikel
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 scrapbook-grid">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/ratgeber/${r.slug}`}
                    className="pin-card p-5 block group mt-3"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-rose-600 mb-2 transition-colors">{r.title}</div>
                    <p className="text-xs text-gray-500 line-clamp-2">{r.description}</p>
                    <span className="inline-flex items-center gap-1 text-rose-600 font-semibold text-xs mt-2 group-hover:gap-1.5 transition-all">
                      Lesen <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 rounded-2xl p-8 text-center text-white overflow-hidden">
            <div className="absolute inset-0 confetti-dots opacity-10" />
            <div className="relative">
              <h2 className="text-2xl font-bold mb-3">Bereit f&uuml;r dein Praktikum?</h2>
              <p className="mb-6 text-white/90">
                Finde passende Praktikumspl&auml;tze und bewirb dich direkt &uuml;ber die Praktikumsgenie App.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/#app-download"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-rose-600 font-semibold hover:bg-rose-50 transition-colors"
                >
                  App herunterladen
                </Link>
                <Link
                  href="/ratgeber"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Alle Ratgeber ansehen
                </Link>
              </div>
            </div>
          </section>

          <p className="mt-10 text-xs text-gray-400 text-center">
            Stand: {new Date(artikel.publishDate).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })} &middot; Alle Angaben ohne Gew&auml;hr
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
