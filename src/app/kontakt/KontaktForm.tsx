'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const betreffOptions = [
  'Allgemeine Anfrage',
  'Support',
  'Für Betriebe',
  'Für Schüler',
  'Presse',
  'Sonstiges',
];

export default function KontaktForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    betreff: '',
    nachricht: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending (no backend connection)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pin-card rounded-2xl p-8 sm:p-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 mb-6">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Nachricht erfolgreich gesendet!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          Vielen Dank für deine Nachricht. Wir melden uns in der Regel innerhalb von 24 Stunden bei dir.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', betreff: '', nachricht: '' });
          }}
          className="text-rose-600 hover:text-rose-700 font-medium text-sm transition-colors"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="pin-card rounded-2xl p-8 sm:p-12"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Schreib uns eine Nachricht</h3>
      <p className="text-gray-600 mb-8">
        Füll das Formular aus und wir melden uns schnellstmöglich bei dir.
      </p>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Dein vollständiger Name"
            className="w-full rounded-xl border border-rose-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow bg-white"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            E-Mail <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="deine@email.de"
            className="w-full rounded-xl border border-rose-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow bg-white"
          />
        </div>

        {/* Betreff */}
        <div>
          <label htmlFor="betreff" className="block text-sm font-semibold text-gray-700 mb-2">
            Betreff <span className="text-rose-500">*</span>
          </label>
          <select
            id="betreff"
            required
            value={formData.betreff}
            onChange={(e) => setFormData({ ...formData, betreff: e.target.value })}
            className="w-full rounded-xl border border-rose-200 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow appearance-none bg-white"
          >
            <option value="" disabled>
              Bitte wählen...
            </option>
            {betreffOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Nachricht */}
        <div>
          <label htmlFor="nachricht" className="block text-sm font-semibold text-gray-700 mb-2">
            Nachricht <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="nachricht"
            required
            rows={6}
            value={formData.nachricht}
            onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
            placeholder="Wie können wir dir helfen?"
            className="w-full rounded-xl border border-rose-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow resize-none bg-white"
          />
        </div>

        {/* Privacy Note */}
        <p className="text-xs text-gray-500">
          Mit dem Absenden stimmst du unserer{' '}
          <a href="/datenschutz" className="text-rose-600 hover:underline">
            Datenschutzerklärung
          </a>{' '}
          zu. Wir verwenden deine Daten ausschließlich zur Bearbeitung deiner Anfrage.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-gradient-to-r from-rose-500 via-pink-600 to-fuchsia-700 px-8 py-4 text-base font-semibold text-white hover:from-rose-600 hover:via-pink-700 hover:to-fuchsia-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-rose-200"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Nachricht senden
            </>
          )}
        </button>
      </div>
    </form>
  );
}
