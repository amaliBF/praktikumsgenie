'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ClipboardCheck, Menu, X } from 'lucide-react';
import PortalSwitcher from './PortalSwitcher';
import { LoginButton, UserMenu, useAuth } from '@/lib/genie-auth';

const navLinks = [
  { href: '/stellen', label: 'Stellen' },
  { href: '/firmen', label: 'Firmen' },
  { href: '/praktikumsarten', label: 'Praktikumsarten' },
  { href: '/praktikum', label: 'Städte' },
  { href: '/ratgeber', label: 'Ratgeber' },
  { href: '/fuer-betriebe', label: 'Für Betriebe' },
  { href: '/app', label: 'App' },
  { href: '/berufsfinder', label: 'Berufsfinder' },
  { href: '/fuer-schueler', label: 'Für Schüler' },
  { href: '/preise', label: 'Preise' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn, isLoading } = useAuth();

  return (
    <nav className="fixed top-1 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-rose-500/5 border border-rose-100 px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-md shadow-rose-500/20">
                <ClipboardCheck className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900">Praktikumsgenie</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 px-3 py-2 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <PortalSwitcher currentPortal="praktikum" />
              {!isLoading && (isLoggedIn ? <UserMenu /> : <LoginButton />)}
              <Link
                href="https://dashboard.genieportal.de/register"
                className="rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-2 text-sm font-medium text-white hover:from-rose-600 hover:to-pink-700 transition-all shadow-md shadow-rose-500/20"
              >
                Für Betriebe
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-rose-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü"
            >
              {mobileOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden pb-4 border-t border-rose-100 mt-2 pt-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-rose-600 hover:bg-rose-50 px-3 py-2.5 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="my-2 border-rose-100" />
                <div className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Portale</div>
                {[
                  { name: 'Ausbildungsgenie', domain: 'ausbildungsgenie.de' },
                  { name: 'Berufsgenie', domain: 'berufsgenie.de' },
                  { name: 'Minijobgenie', domain: 'minijobgenie.de' },
                  { name: 'Werkstudentengenie', domain: 'werkstudentengenie.de' },
                ].map((p) => (
                  <a
                    key={p.domain}
                    href={`https://${p.domain}`}
                    className="text-sm text-gray-700 hover:text-rose-600 hover:bg-rose-50 px-3 py-2 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {p.name}
                  </a>
                ))}
                <hr className="my-2 border-rose-100" />
                <div className="px-3 py-2">
                  {!isLoading && (isLoggedIn ? <UserMenu /> : <LoginButton />)}
                </div>
                <Link
                  href="https://dashboard.genieportal.de/register"
                  className="text-sm font-medium text-center text-white bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-2.5 rounded-full mt-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Betrieb registrieren
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
