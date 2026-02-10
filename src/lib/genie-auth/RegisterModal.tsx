'use client';

import React, { useState } from 'react';
import { useAuthContext } from './GenieAuthProvider';
import { config } from './config';

export function RegisterModal() {
  const { register, openLoginModal, closeModals } = useAuthContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Das Passwort muss mindestens 8 Zeichen haben.');
      return;
    }

    setLoading(true);
    try {
      await register({
        email,
        password,
        firstName,
        lastName: lastName || undefined,
        newsletterConsent: newsletter,
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Registrierung fehlgeschlagen.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeModals}
        />
        <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl text-center">
          <div className="mb-4 text-5xl">&#9989;</div>
          <h2 className="mb-2 text-xl font-bold text-gray-900">
            Registrierung erfolgreich!
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            Wir haben dir eine Bestätigungsemail gesendet. Bitte überprüfe dein
            Postfach und bestätige deine E-Mail-Adresse.
          </p>
          <button
            onClick={closeModals}
            className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white"
            style={{ backgroundColor: config.primaryColor }}
          >
            Verstanden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModals}
      />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeModals}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          aria-label="Schließen"
        >
          &times;
        </button>

        <h2 className="mb-1 text-2xl font-bold text-gray-900">
          Konto erstellen
        </h2>
        <p className="mb-6 text-sm text-gray-500">
          Kostenlos bei {config.name} registrieren
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Vorname *
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="Max"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Nachname
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Muster"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              E-Mail *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="deine@email.de"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Passwort * (min. 8 Zeichen)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            />
          </div>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">
              Ich möchte per E-Mail über neue Stellen und Tipps informiert
              werden.
            </span>
          </label>

          <p className="text-xs text-gray-400">
            Mit der Registrierung akzeptierst du unsere{' '}
            <a
              href="/datenschutz"
              target="_blank"
              className="underline hover:text-gray-600"
            >
              Datenschutzerklärung
            </a>{' '}
            und{' '}
            <a
              href="/agb"
              target="_blank"
              className="underline hover:text-gray-600"
            >
              AGB
            </a>
            .
          </p>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-50"
            style={{ backgroundColor: config.primaryColor }}
          >
            {loading ? 'Wird erstellt...' : 'Konto erstellen'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Bereits ein Konto?{' '}
          <button
            onClick={openLoginModal}
            className="font-semibold hover:underline"
            style={{ color: config.primaryColor }}
          >
            Anmelden
          </button>
        </p>
      </div>
    </div>
  );
}
