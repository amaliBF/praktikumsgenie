'use client';

import {
  Globe,
  Heart,
  FileText,
  Brain,
  Bell,
  Smartphone,
} from 'lucide-react';
import { useAuth } from '@/lib/genie-auth';

const benefits = [
  { icon: Globe, text: 'Ein Account \u2013 5 Jobportale' },
  { icon: Heart, text: 'Stellenanzeigen merken' },
  { icon: FileText, text: 'Lebenslauf hochladen' },
  { icon: Brain, text: 'KI-Berufsfinder nutzen' },
  { icon: Bell, text: 'Job-Alerts erhalten' },
  { icon: Smartphone, text: 'Als Erster App-Zugang' },
];

export default function RegistrationBenefits() {
  const { isLoggedIn } = useAuth();

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-2">
          Kostenlos
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Kostenlos registrieren. Alles nutzen.
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Ein Genie-Account, 5 Jobportale, unendliche M&ouml;glichkeiten.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.text}
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="h-5 w-5 text-rose-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          {isLoggedIn ? (
            <a
              href="https://mein.genieportal.de"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-3.5 text-base font-semibold text-white hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/20"
            >
              Zu deinem Dashboard
            </a>
          ) : (
            <a
              href="https://mein.genieportal.de/register"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-3.5 text-base font-semibold text-white hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/20"
            >
              Jetzt kostenlos registrieren
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
