'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useAuthContext } from './GenieAuthProvider';
import { config } from './config';

const PORTALS = [
  { name: 'Ausbildungsgenie', url: 'https://ausbildungsgenie.de', domain: 'ausbildungsgenie.de' },
  { name: 'Praktikumsgenie', url: 'https://praktikumsgenie.de', domain: 'praktikumsgenie.de' },
  { name: 'Berufsgenie', url: 'https://berufsgenie.de', domain: 'berufsgenie.de' },
  { name: 'Minijobgenie', url: 'https://minijobgenie.de', domain: 'minijobgenie.de' },
  { name: 'Werkstudentengenie', url: 'https://werkstudentengenie.de', domain: 'werkstudentengenie.de' },
  { name: 'Genieportal', url: 'https://genieportal.de', domain: 'genieportal.de' },
];

export function UserMenu() {
  const { user, logout } = useAuthContext();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (!user) return null;

  const initials =
    (user.firstName?.[0] || '') + (user.lastName?.[0] || '');

  const otherPortals = PORTALS.filter((p) => p.domain !== config.domain);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
        style={{ backgroundColor: config.primaryColor }}
        aria-label="Benutzermenu"
      >
        {initials.toUpperCase() || '?'}
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-64 rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
          <div className="border-b border-gray-100 px-4 py-3">
            <p className="text-sm font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>

          <div className="border-b border-gray-100 py-1">
            <p className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-400">
              Genie-Portale
            </p>
            {otherPortals.map((portal) => (
              <a
                key={portal.domain}
                href={portal.url}
                className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                {portal.name}
              </a>
            ))}
          </div>

          <div className="py-1">
            <button
              onClick={async () => {
                setOpen(false);
                await logout();
              }}
              className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
            >
              Abmelden
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
