import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobCard from '@/components/stellen/JobCard';
import AppCTA from '@/components/stellen/AppCTA';
import JobSearchBar from '@/components/stellen/JobSearchBar';
import { fetchApi, ByProfessionResponse } from '@/lib/api';

export async function generateMetadata({
  params,
}: {
  params: { beruf: string };
}): Promise<Metadata> {
  const data = await fetchApi<ByProfessionResponse>(
    `/public/jobs/by-profession/${params.beruf}?portal_id=2`,
  );
  const name = data?.profession?.name || params.beruf.replace(/-/g, ' ');

  return {
    title: `${name} – Aktuelle Praktikumsplätze 2026`,
    description: `Finde Praktikumsplätze als ${name}! ${data?.total || 0} aktuelle Stellenanzeigen. Mit Video-Vorschau und direktem Chat.`,
    alternates: { canonical: `/stellen/beruf/${params.beruf}` },
    openGraph: {
      title: `Praktikum ${name} | Praktikumsgenie`,
      description: `${data?.total || 0} aktuelle Praktikumsplätze als ${name}.`,
      url: `https://praktikumsgenie.de/stellen/beruf/${params.beruf}`,
    },
  };
}

export default async function StellenBerufPage({
  params,
}: {
  params: { beruf: string };
}) {
  const data = await fetchApi<ByProfessionResponse>(
    `/public/jobs/by-profession/${params.beruf}?portal_id=2`,
  );
  const profName = data?.profession?.name || params.beruf.replace(/-/g, ' ');
  const jobs = data?.items || [];
  const total = data?.total || 0;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Praktikumsplätze als ${profName}`,
    description: `${total} aktuelle Praktikumsplätze als ${profName}`,
    url: `https://praktikumsgenie.de/stellen/beruf/${params.beruf}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Stellen', item: 'https://praktikumsgenie.de/stellen' },
        { '@type': 'ListItem', position: 2, name: profName, item: `https://praktikumsgenie.de/stellen/beruf/${params.beruf}` },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-28 pb-8 bg-gradient-to-b from-rose-50/60 to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
            <Link href="/stellen" className="hover:text-rose-600">Stellen</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900 font-medium">{profName}</span>
          </nav>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-rose-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Praktikum{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                {profName}
              </span>
            </h1>
          </div>
          <p className="text-gray-600">
            {total > 0
              ? `${total} aktuelle Praktikumsplätze als ${profName}`
              : `Noch keine Praktikumsplätze als ${profName} – bald kommen neue!`}
          </p>

          <div className="mt-6">
            <JobSearchBar initialQuery={profName} compact />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {jobs.length > 0 ? (
          <div className="space-y-3 mb-12">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200 mb-12">
            <Briefcase className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">
              Noch keine Praktikumsplätze als {profName}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Schau in der App vorbei – dort findest du Betriebe per Video!
            </p>
          </div>
        )}

        {/* Link to beruf info page */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
          <h2 className="font-bold text-gray-900 mb-2">Mehr über den Beruf {profName}</h2>
          <p className="text-sm text-gray-600 mb-4">
            Gehalt, Praktikumsinhalte, Karrierechancen und mehr.
          </p>
          <Link
            href={`/berufe/${params.beruf}`}
            className="text-sm text-rose-600 hover:text-rose-700 font-medium inline-flex items-center gap-1"
          >
            Berufsprofil {profName} ansehen
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <AppCTA />
      </div>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
