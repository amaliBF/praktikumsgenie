'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-emerald-600" />
            <span className="font-bold text-xl">Praktikumsgenie</span>
          </Link>
          <div className="hidden md:flex items-center gap-5">
            <Link href="/praktikumsarten" className="text-sm text-gray-600 hover:text-gray-900">
              Praktikumsarten
            </Link>
            <Link href="/praktikum" className="text-sm text-gray-600 hover:text-gray-900">
              Städte
            </Link>
            <Link href="/ratgeber" className="text-sm text-gray-600 hover:text-gray-900">
              Ratgeber
            </Link>
            <Link href="/fuer-betriebe" className="text-sm text-gray-600 hover:text-gray-900">
              Für Betriebe
            </Link>
            <Link href="/fuer-schueler" className="text-sm text-gray-600 hover:text-gray-900">
              Für Schüler
            </Link>
            <Link href="/preise" className="text-sm text-gray-600 hover:text-gray-900">
              Preise
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://dashboard.praktikumsgenie.de/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              href="https://dashboard.praktikumsgenie.de/login"
              className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Für Betriebe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
