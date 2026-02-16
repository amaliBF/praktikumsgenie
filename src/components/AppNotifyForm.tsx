'use client';

import { useState } from 'react';
import { Smartphone, Bell, CheckCircle, Loader2 } from 'lucide-react';

const API_URL = 'https://api.genieportal.de/v1';
const DOMAIN = 'praktikumsgenie.de';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function AppNotifyForm({
  title = 'Die Genie-App kommt bald!',
  description = 'Wir arbeiten mit Hochdruck an der App. Trag dich ein und erfahre als Erstes, wenn sie verfügbar ist.',
  variant = 'banner',
}: {
  title?: string;
  description?: string;
  variant?: 'banner' | 'inline' | 'section';
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/api/public/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, domain: DOMAIN }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Fast geschafft! Bitte bestätige deine E-Mail-Adresse.');
      } else {
        setStatus('error');
        setMessage(data.message || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.');
      }
    } catch {
      setStatus('error');
      setMessage('Verbindungsfehler. Bitte versuche es später erneut.');
    }
  };

  if (variant === 'inline') {
    return (
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <Bell className="h-5 w-5 text-rose-600" />
          <span className="text-sm font-semibold text-rose-700 uppercase tracking-wide">Bald verfügbar</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        {status === 'success' ? (
          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 rounded-xl p-4">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm">{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-2.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-xl text-sm hover:from-rose-700 hover:to-pink-700 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bell className="h-4 w-4" />}
              Benachrichtigen
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-red-600 text-sm mt-2">{message}</p>}
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Bell className="h-4 w-4" />
          Bald verfügbar
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">{description}</p>
        {status === 'success' ? (
          <div className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 rounded-xl p-4 px-6">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-xl hover:from-rose-700 hover:to-pink-700 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bell className="h-4 w-4" />}
              Erinnere mich
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-red-600 text-sm mt-3">{message}</p>}
      </div>
    );
  }

  // variant === 'banner' (default) — full-width CTA replacement
  return (
    <div className="rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 p-8 sm:p-10 text-center text-white">
      <Smartphone className="h-10 w-10 mx-auto mb-4 opacity-90" />
      <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
      <p className="text-rose-100 mb-6 max-w-lg mx-auto">{description}</p>
      {status === 'success' ? (
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-xl p-4 px-6">
          <CheckCircle className="h-5 w-5" />
          <span>{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail-Adresse"
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-white text-rose-700 font-semibold rounded-xl hover:bg-rose-50 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bell className="h-4 w-4" />}
            Erinnere mich
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-white/80 text-sm mt-3">{message}</p>}
    </div>
  );
}
