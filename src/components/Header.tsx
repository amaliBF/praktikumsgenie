'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ClipboardCheck, Menu, X, CircleUser, Building2, ArrowRight } from 'lucide-react';
import { UserMenu, useAuth } from '@/lib/genie-auth';
import { useAuthContext } from '@/lib/genie-auth/GenieAuthProvider';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/stellen', label: 'Stellen' },
  { href: '/firmen', label: 'Firmen' },
  { href: '/praktikumsarten', label: 'Praktikumsarten' },
  { href: '/berufsfinder', label: 'Berufsfinder' },
  { href: '/ratgeber', label: 'Ratgeber' },
  { href: '/fuer-betriebe', label: 'Für Betriebe' },
  { href: '/app', label: 'App' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { isLoggedIn, isLoading } = useAuth();
  const { openLoginModal, openRegisterModal } = useAuthContext();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav aria-label="Hauptnavigation" className="fixed top-1 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md rounded-2xl shadow-lg shadow-rose-500/5 border border-rose-100 dark:border-gray-800 px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-md shadow-rose-500/20">
                <ClipboardCheck className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900 dark:text-white">Praktikumsgenie</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950 px-3 py-2 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop: User/Company area */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              {!isLoading && isLoggedIn ? (
                <UserMenu />
              ) : (
                <div ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white hover:from-rose-400 hover:to-pink-500 transition-all shadow-sm hover:shadow-md"
                    aria-label="Anmelden"
                  >
                    <CircleUser className="h-6 w-6" />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 top-12 z-50 w-72 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl overflow-hidden">
                      {/* User section */}
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <CircleUser className="h-5 w-5 text-rose-500" />
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">Für Schüler & Studierende</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">Melde dich an, um dich auf Praktikumsstellen zu bewerben.</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => { setUserMenuOpen(false); openLoginModal(); }}
                            className="flex-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
                          >
                            Anmelden
                          </button>
                          <button
                            onClick={() => { setUserMenuOpen(false); openRegisterModal(); }}
                            className="flex-1 rounded-lg px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 transition-all"
                          >
                            Registrieren
                          </button>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-100" />

                      {/* Company section */}
                      <div className="p-4 bg-gray-50">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="h-5 w-5 text-pink-600" />
                          <span className="text-sm font-semibold text-gray-900">Für Unternehmen</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">Stellenanzeigen schalten und passende Bewerber finden.</p>
                        <a
                          href="https://dashboard.genieportal.de"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center justify-center gap-2 w-full rounded-lg px-3 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-fuchsia-600 hover:from-pink-500 hover:to-fuchsia-500 transition-all shadow-sm"
                        >
                          Zum Arbeitgeber-Portal
                          <ArrowRight className="h-4 w-4" />
                        </a>
                        <p className="text-[11px] text-gray-400 mt-2 text-center">Weiterleitung zum zentralen Genieportal</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-rose-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden pb-4 border-t border-rose-100 dark:border-gray-800 mt-2 pt-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950 px-3 py-2.5 rounded-lg transition-colors font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <hr className="my-2 border-rose-100" />

                {/* Mobile: User section */}
                {!isLoading && isLoggedIn ? (
                  <div className="px-3 py-2">
                    <UserMenu />
                  </div>
                ) : (
                  <>
                    <div className="px-3 py-1.5">
                      <div className="flex items-center gap-2 mb-2">
                        <CircleUser className="h-4 w-4 text-rose-500" />
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Für Schüler & Studierende</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => { setMobileOpen(false); openLoginModal(); }}
                          className="flex-1 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          Anmelden
                        </button>
                        <button
                          onClick={() => { setMobileOpen(false); openRegisterModal(); }}
                          className="flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600"
                        >
                          Registrieren
                        </button>
                      </div>
                    </div>
                  </>
                )}

                <hr className="my-2 border-rose-100" />

                {/* Mobile: Company section */}
                <div className="px-3 py-1.5">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-4 w-4 text-pink-600" />
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Für Unternehmen</span>
                  </div>
                  <a
                    href="https://dashboard.genieportal.de"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-fuchsia-600 shadow-sm"
                  >
                    Zum Arbeitgeber-Portal
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <p className="text-[11px] text-gray-400 mt-1.5 text-center">Weiterleitung zum zentralen Genieportal</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
