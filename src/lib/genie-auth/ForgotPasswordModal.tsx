'use client';

import React, { useState } from 'react';
import { useAuthContext } from './GenieAuthProvider';
import { ssoForgotPassword } from './api';
import { config } from './config';

export function ForgotPasswordModal() {
  const { openLoginModal, closeModals } = useAuthContext();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await ssoForgotPassword(email);
      setSent(true);
    } catch (err: any) {
      setError(err.message || 'Fehler beim Senden.');
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

        <h2 className="mb-1 text-2xl font-bold text-gray-900">
          Passwort vergessen
        </h2>
        <p className="mb-6 text-sm text-gray-500">
          Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum
          Zurücksetzen.
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {sent ? (
          <div className="text-center">
            <div className="mb-4 text-5xl">&#128233;</div>
            <p className="mb-6 text-sm text-gray-600">
              Falls ein Konto mit dieser E-Mail existiert, haben wir dir einen
              Link zum Zurücksetzen gesendet. Bitte überprüfe dein Postfach.
            </p>
            <button
              onClick={openLoginModal}
              className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: config.primaryColor }}
            >
              Zurück zum Login
            </button>
          </div>
        ) : (
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-50"
              style={{ backgroundColor: config.primaryColor }}
            >
              {loading ? 'Wird gesendet...' : 'Link senden'}
            </button>

            <p className="text-center text-sm text-gray-500">
              <button
                type="button"
                onClick={openLoginModal}
                className="font-semibold hover:underline"
                style={{ color: config.primaryColor }}
              >
                Zurück zum Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
