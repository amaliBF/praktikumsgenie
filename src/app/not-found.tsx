import Link from 'next/link';
import { ClipboardCheck, Home, Search, BookOpen, ClipboardList, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF5F6] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 doodle-circles" />
      <div className="absolute inset-0 confetti-dots opacity-5" />

      <div className="max-w-lg w-full text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-rose-200">
            <ClipboardCheck className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="sticker-badge mb-4 mx-auto">
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
          className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-rose-200 mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Zur&uuml;ck zur Startseite
        </Link>

        <div className="border-t border-rose-100 pt-8">
          <p className="text-sm text-gray-500 mb-4 font-medium">Vielleicht suchst du das hier:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 scrapbook-grid">
            <Link
              href="/praktikum"
              className="pin-card flex items-center gap-3 p-3 !rounded-xl hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Praktikumspl&auml;tze</div>
                <div className="text-xs text-gray-500">Nach Stadt suchen</div>
              </div>
            </Link>

            <Link
              href="/praktikumsarten"
              className="pin-card flex items-center gap-3 p-3 !rounded-xl hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <ClipboardList className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Praktikumsarten</div>
                <div className="text-xs text-gray-500">BOGY, BORS &amp; mehr</div>
              </div>
            </Link>

            <Link
              href="/ratgeber"
              className="pin-card flex items-center gap-3 p-3 !rounded-xl hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Ratgeber</div>
                <div className="text-xs text-gray-500">Tipps &amp; Artikel</div>
              </div>
            </Link>

            <Link
              href="/"
              className="pin-card flex items-center gap-3 p-3 !rounded-xl hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 text-white" />
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
