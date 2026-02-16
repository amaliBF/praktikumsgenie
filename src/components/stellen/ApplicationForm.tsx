"use client";

import { useState, useEffect } from 'react';
import AppNotifyForm from '@/components/AppNotifyForm';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.genieportal.de/v1';

interface FormConfig {
  activeFields: string[];
  requiredFields: string[];
  allowWebsiteApplication: boolean;
}

export default function ApplicationForm({ jobId, jobTitle, companyName }: { jobId: string; jobTitle: string; companyName: string }) {
  const [config, setConfig] = useState<FormConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/public/jobs/${jobId}/application-form`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        setConfig(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [jobId]);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="animate-pulse space-y-3">
          <div className="h-5 bg-gray-200 rounded w-2/3"></div>
          <div className="h-10 bg-gray-100 rounded"></div>
          <div className="h-10 bg-gray-100 rounded"></div>
        </div>
      </div>
    );
  }

  if (!config || !config.allowWebsiteApplication) {
    return (
      <AppNotifyForm
        variant="inline"
        title="App kommt bald!"
        description="Bald kannst du dich direkt in der Genie-App bewerben. Trag dich ein und erfahre als Erstes, wenn es losgeht."
      />
    );
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="font-bold text-green-800 text-lg">Bewerbung gesendet!</h3>
        <p className="text-green-600 text-sm mt-2">Vielen Dank f&uuml;r deine Bewerbung bei {companyName}. Du erh&auml;ltst in K&uuml;rze eine Best&auml;tigungs-E-Mail.</p>
      </div>
    );
  }

  const isActive = (field: string) => config.activeFields.includes(field);
  const isRequired = (field: string) => config.requiredFields.includes(field);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    formData.set('datenschutzAkzeptiert', 'true');
    formData.set('portalId', '2');

    try {
      const res = await fetch(`${API_URL}/public/jobs/${jobId}/apply`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({ message: 'Fehler beim Senden' }));
        throw new Error(data.message || 'Fehler beim Senden');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Fehler beim Senden der Bewerbung');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h3 className="font-bold text-gray-900 text-lg mb-1">Jetzt bewerben</h3>
      <p className="text-sm text-gray-500 mb-4">f&uuml;r: {jobTitle}</p>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-gray-700">Vorname *</label>
            <input name="firstName" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">Nachname *</label>
            <input name="lastName" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-700">E-Mail *</label>
          <input name="email" type="email" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
        </div>

        {isActive('phone') && (
          <div>
            <label className="text-xs font-medium text-gray-700">Telefon{isRequired('phone') ? ' *' : ''}</label>
            <input name="phone" type="tel" required={isRequired('phone')} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
          </div>
        )}

        {isActive('birthDate') && (
          <div>
            <label className="text-xs font-medium text-gray-700">Geburtsdatum{isRequired('birthDate') ? ' *' : ''}</label>
            <input name="birthDate" type="date" required={isRequired('birthDate')} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
          </div>
        )}

        {(isActive('postalCode') || isActive('city')) && (
          <div className="grid grid-cols-2 gap-3">
            {isActive('postalCode') && (
              <div>
                <label className="text-xs font-medium text-gray-700">PLZ{isRequired('postalCode') ? ' *' : ''}</label>
                <input name="postalCode" required={isRequired('postalCode')} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
            )}
            {isActive('city') && (
              <div>
                <label className="text-xs font-medium text-gray-700">Stadt{isRequired('city') ? ' *' : ''}</label>
                <input name="city" required={isRequired('city')} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
            )}
          </div>
        )}

        {isActive('schulabschluss') && (
          <div>
            <label className="text-xs font-medium text-gray-700">Schulabschluss{isRequired('schulabschluss') ? ' *' : ''}</label>
            <select name="schulabschluss" required={isRequired('schulabschluss')} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none bg-white">
              <option value="">Bitte w&auml;hlen</option>
              <option value="Hauptschulabschluss">Hauptschulabschluss</option>
              <option value="Realschulabschluss">Realschulabschluss</option>
              <option value="Fachhochschulreife">Fachhochschulreife</option>
              <option value="Abitur">Abitur</option>
              <option value="Sonstiges">Sonstiges</option>
            </select>
          </div>
        )}

        {isActive('message') && (
          <div>
            <label className="text-xs font-medium text-gray-700">Nachricht{isRequired('message') ? ' *' : ''}</label>
            <textarea name="message" rows={3} required={isRequired('message')} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none resize-none" placeholder="Warum interessiert dich dieses Praktikum?" />
          </div>
        )}

        {isActive('documents') && (
          <div>
            <label className="text-xs font-medium text-gray-700">Dokumente{isRequired('documents') ? ' *' : ''}</label>
            <input
              name="documents"
              type="file"
              multiple
              accept=".pdf,.doc,.docx"
              required={isRequired('documents')}
              className="mt-1 w-full text-sm file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100"
            />
            <p className="text-xs text-gray-400 mt-1">PDF, DOC, max. 5 MB pro Datei</p>
          </div>
        )}

        <label className="flex items-start gap-2 mt-4">
          <input type="checkbox" required className="mt-1 rounded" />
          <span className="text-xs text-gray-500">
            Ich stimme der Verarbeitung meiner Daten gem&auml;&szlig; der Datenschutzerkl&auml;rung zu. *
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
              Wird gesendet...
            </>
          ) : 'Bewerbung absenden'}
        </button>
      </form>
    </div>
  );
}
