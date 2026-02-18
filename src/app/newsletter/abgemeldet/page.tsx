import { Metadata } from 'next';
import Link from 'next/link';
import { MailX, Home, Bell } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Newsletter abgemeldet | Praktikumsgenie',
  description: 'Du wurdest erfolgreich vom Newsletter abgemeldet.',
  robots: { index: false },
};

export default function NewsletterAbgemeldetPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-2xl mx-auto px-4 pt-32 pb-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
            <MailX className="h-10 w-10 text-gray-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Schade, dass du gehst!</h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">Du wurdest erfolgreich vom Newsletter abgemeldet und erhältst keine weiteren Benachrichtigungen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
              <Home className="h-4 w-4" />
              Zur Startseite
            </Link>
            <Link href="/#app-notify" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold hover:from-rose-700 hover:to-pink-700 transition-all">
              <Bell className="h-4 w-4" />
              Erneut anmelden
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
