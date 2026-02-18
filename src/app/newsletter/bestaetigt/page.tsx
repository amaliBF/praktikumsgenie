import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Search, BookOpen, Compass } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Newsletter bestätigt | Praktikumsgenie',
  description: 'Deine E-Mail-Adresse wurde erfolgreich bestätigt.',
  robots: { index: false },
};

export default function NewsletterBestaetigtPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-2xl mx-auto px-4 pt-32 pb-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-6">
            <CheckCircle className="h-10 w-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Danke! Du bist dabei.</h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">Deine E-Mail-Adresse wurde erfolgreich bestätigt. Wir benachrichtigen dich, sobald die App verfügbar ist.</p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            <Link href="/stellen" className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all group">
              <Search className="h-6 w-6 text-rose-600" />
              <span className="text-sm font-semibold text-gray-900 group-hover:text-rose-700">Stellen entdecken</span>
            </Link>
            <Link href="/praktikumsberufe" className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all group">
              <BookOpen className="h-6 w-6 text-rose-600" />
              <span className="text-sm font-semibold text-gray-900 group-hover:text-rose-700">Berufe entdecken</span>
            </Link>
            <Link href="/ratgeber" className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all group">
              <Compass className="h-6 w-6 text-rose-600" />
              <span className="text-sm font-semibold text-gray-900 group-hover:text-rose-700">Ratgeber lesen</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
