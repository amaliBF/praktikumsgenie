'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'genie-cookie-consent';

interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);

    const handler = () => {
      localStorage.removeItem(STORAGE_KEY);
      setVisible(true);
    };
    window.addEventListener('openCookieSettings', handler);
    return () => window.removeEventListener('openCookieSettings', handler);
  }, []);

  const save = (consent: Omit<ConsentState, 'timestamp'>) => {
    const state = { ...consent, timestamp: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: state }));
    setVisible(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const acceptNecessary = () => save({ necessary: true, analytics: false, marketing: false });
  const acceptSelected = () => save({ necessary: true, analytics, marketing });

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm p-5 shadow-2xl">
        <div className="mb-3">
          <h3 className="text-sm font-semibold text-gray-900">Cookie-Einstellungen</h3>
          <p className="mt-1 text-xs text-gray-500 leading-relaxed">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.
            Notwendige Cookies sind für die Funktion der Website erforderlich.{' '}
            <a href="/datenschutz" className="text-rose-600 hover:underline">
              Datenschutzerklärung
            </a>
          </p>
        </div>

        {showDetails && (
          <div className="mb-4 space-y-2 rounded-lg bg-gray-50 p-3">
            <label className="flex items-center gap-3 text-xs text-gray-700">
              <input type="checkbox" checked disabled className="rounded accent-rose-600" />
              <span><strong>Notwendig</strong> – Für die Grundfunktionen der Website (immer aktiv)</span>
            </label>
            <label className="flex items-center gap-3 text-xs text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="rounded accent-rose-600"
              />
              <span><strong>Analyse</strong> – Hilft uns, die Website zu verbessern</span>
            </label>
            <label className="flex items-center gap-3 text-xs text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="rounded accent-rose-600"
              />
              <span><strong>Marketing</strong> – Für personalisierte Inhalte</span>
            </label>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={acceptNecessary}
            className="rounded-lg border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Nur notwendige
          </button>
          {showDetails ? (
            <button
              onClick={acceptSelected}
              className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-medium text-white hover:bg-rose-700 transition"
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              Mehr erfahren
            </button>
          )}
          <button
            onClick={acceptAll}
            className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-medium text-white hover:bg-rose-700 transition"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
