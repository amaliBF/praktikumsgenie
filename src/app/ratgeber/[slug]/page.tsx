import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
    title: `${artikel.title} | Ausbildungsgenie Ratgeber`,
    description: artikel.description,
    alternates: { canonical: `/ratgeber/${artikel.slug}` },
    openGraph: {
      title: artikel.title,
      description: artikel.description,
      url: `https://ausbildungsgenie.de/ratgeber/${artikel.slug}`,
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ausbildungsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://ausbildungsgenie.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: kategorie?.name || artikel.category, item: `https://ausbildungsgenie.de/ratgeber#${artikel.categorySlug}` },
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
    author: { '@type': 'Organization', name: 'Ausbildungsgenie', url: 'https://ausbildungsgenie.de' },
    publisher: { '@type': 'Organization', name: 'Ausbildungsgenie', url: 'https://ausbildungsgenie.de' },
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
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArray) }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-violet-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/ratgeber" className="hover:text-violet-600">Ratgeber</Link></li>
              <li>/</li>
              <li><Link href={`/ratgeber#${artikel.categorySlug}`} className="hover:text-violet-600">{kategorie?.name || artikel.category}</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium truncate max-w-[200px]">{artikel.title}</li>
            </ol>
          </nav>

          {/* Category Badge + Date */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">
              {kategorie?.name || artikel.category}
            </span>
            <span className="text-sm text-gray-400">
              {new Date(artikel.publishDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {artikel.title}
          </h1>

          <p className="text-lg text-gray-600 mb-8">{artikel.description}</p>

          {/* Key Points */}
          {artikel.keyPoints.length > 0 && (
            <section className="bg-violet-50 border border-violet-200 rounded-xl p-5 mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Das Wichtigste in Kürze</h2>
              <ul className="space-y-2">
                {artikel.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-800">
                    <span className="text-violet-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Main Content */}
          <article
            className="prose prose-gray prose-violet max-w-none mb-10 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: artikel.content }}
          />

          {/* FAQ */}
          {artikel.faqs.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufige Fragen</h2>
              <div className="space-y-4">
                {artikel.faqs.map((faq, i) => (
                  <details key={i} className="group border border-gray-200 rounded-lg">
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                      {faq.question}
                      <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related Articles */}
          {related.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Verwandte Artikel</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/ratgeber/${r.slug}`}
                    className="group p-4 rounded-lg border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-violet-700 mb-1">{r.title}</div>
                    <p className="text-xs text-gray-500 line-clamp-2">{r.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Bereit für deine Ausbildung?</h2>
            <p className="mb-6 text-violet-100">
              Finde passende Ausbildungsplätze und bewirb dich direkt über die Ausbildungsgenie App.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#app-download"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-violet-700 font-semibold hover:bg-violet-50 transition-colors"
              >
                App herunterladen
              </Link>
              <Link
                href="/ratgeber"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Alle Ratgeber ansehen
              </Link>
            </div>
          </section>

          <p className="mt-10 text-xs text-gray-400 text-center">
            Stand: {new Date(artikel.publishDate).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })} · Alle Angaben ohne Gewähr
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
