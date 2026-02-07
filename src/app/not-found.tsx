import Link from 'next/link';
import { Sparkles, Home, Search, BookOpen, ClipboardList, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-emerald-600" />
          </div>
        </div>

        <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Fehler 404
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Seite nicht gefunden
        </h1>

        <p className="text-lg text-gray-600 mb-2">
          Dieses Praktikum ist leider beendet &ndash; diese Seite gibt es nicht mehr.
        </p>
        <p className="text-gray-500 mb-8">
          Kein Problem! Es warten noch viele spannende Praktikumspl&auml;tze auf dich.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Zur&uuml;ck zur Startseite
        </Link>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4 font-medium">Vielleicht suchst du das hier:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/praktikum"
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <Search className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Praktikumspl&auml;tze</div>
                <div className="text-xs text-gray-500">Nach Stadt suchen</div>
              </div>
            </Link>

            <Link
              href="/praktikumsarten"
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <ClipboardList className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Praktikumsarten</div>
                <div className="text-xs text-gray-500">BOGY, BORS &amp; mehr</div>
              </div>
            </Link>

            <Link
              href="/ratgeber"
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <BookOpen className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Ratgeber</div>
                <div className="text-xs text-gray-500">Tipps &amp; Artikel</div>
              </div>
            </Link>

            <Link
              href="/"
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <Home className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Startseite</div>
                <div className="text-xs text-gray-500">Praktikumsgenie.de</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
