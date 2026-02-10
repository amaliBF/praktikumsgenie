'use client';

import React, { useState } from 'react';
import { useAuthContext } from './GenieAuthProvider';
import { config } from './config';

export function LoginModal() {
  const { login, openRegisterModal, openForgotPasswordModal, closeModals } =
    useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message || 'Anmeldung fehlgeschlagen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModals}
      />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={closeModals}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          aria-label="Schließen"
        >
          &times;
        </button>

        <h2 className="mb-1 text-2xl font-bold text-gray-900">Anmelden</h2>
        <p className="mb-6 text-sm text-gray-500">
          Bei {config.name} einloggen
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              E-Mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="deine@email.de"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2"
              style={{ focusRingColor: config.primaryColor } as any}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Passwort
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={openForgotPasswordModal}
              className="text-sm hover:underline"
              style={{ color: config.primaryColor }}
            >
              Passwort vergessen?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-50"
            style={{ backgroundColor: config.primaryColor }}
          >
            {loading ? 'Wird angemeldet...' : 'Anmelden'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Noch kein Konto?{' '}
          <button
            onClick={openRegisterModal}
            className="font-semibold hover:underline"
            style={{ color: config.primaryColor }}
          >
            Registrieren
          </button>
        </p>
      </div>
    </div>
  );
}
