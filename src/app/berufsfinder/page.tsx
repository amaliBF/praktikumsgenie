import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Brain,
  Lightbulb,
  Share2,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Target,
  Clock,
  Check,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BerufsinderChat from '@/components/BerufsinderChat';

export const metadata: Metadata = {
  title: 'KI-Berufsfinder – Finde das perfekte Praktikum | Praktikumsgenie',
  description:
    'Der KI-Berufsfinder von Praktikumsgenie analysiert deine Persönlichkeit und empfiehlt dir passende Praktikumsbereiche. 20 Fragen, 5 Minuten, deine Top 3 Berufe. Bald in der Genie App.',
  alternates: { canonical: '/berufsfinder' },
  openGraph: {
    title: 'KI-Berufsfinder – Finde das perfekte Praktikum | Praktikumsgenie',
    description:
      'Beantworte 20 Fragen und erhalte personalisierte Praktikumsempfehlungen basierend auf deiner Persönlichkeit. Kostenlos in der Genie App.',
    url: 'https://praktikumsgenie.de/berufsfinder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI-Berufsfinder – Finde das perfekte Praktikum | Praktikumsgenie',
    description:
      'Beantworte 20 Fragen und erhalte personalisierte Praktikumsempfehlungen. Kostenlos in der Genie App.',
  },
};

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: '20 Fragen beantworten',
    duration: '~5 Minuten',
    description:
      'Beantworte 20 kurze Fragen zu deinen Interessen, Stärken und Vorlieben. Kein Wissen nötig – es gibt keine falschen Antworten. Einfach ehrlich sein.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Persönlichkeitsanalyse erhalten',
    duration: 'Sofort',
    description:
      'Unsere KI analysiert deine Antworten und erstellt ein detailliertes Persönlichkeitsprofil. Du erfährst, welcher Typ du bist und welche Stärken dich auszeichnen.',
  },
  {
    number: '03',
    icon: Target,
    title: 'Top 3 Berufsempfehlungen',
    duration: 'Sofort',
    description:
      'Basierend auf deinem Profil bekommst du deine persönlichen Top 3 Praktikumsbereiche – mit Erklärung, warum sie zu dir passen, plus Infos zu Aufgaben und Branchen.',
  },
];

const features = [
  {
    icon: Brain,
    title: 'Persönlichkeitstyp',
    description:
      'Erfahre, welcher Persönlichkeitstyp du bist. Die KI ordnet dich basierend auf deinen Antworten einem von mehreren Typen zu und erklärt deine Stärken.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Target,
    title: 'Berufsempfehlungen',
    description:
      'Erhalte deine persönlichen Top 3 Praktikumsbereiche mit detaillierten Infos zu Aufgaben, Branchen und was dich dort erwartet.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Sparkles,
    title: 'Passende Stellen',
    description:
      'Direkt nach der Analyse zeigen wir dir offene Praktikumsstellen, die zu deinen Empfehlungen passen – in deiner Region.',
    color: 'bg-fuchsia-100 text-fuchsia-600',
  },
  {
    icon: Share2,
    title: 'Teilen-Funktion',
    description:
      'Teile dein Ergebnis mit Freunden, Eltern oder Lehrern. Vergleicht eure Persönlichkeitstypen und entdeckt gemeinsam neue Berufe.',
    color: 'bg-rose-100 text-rose-500',
  },
];

export default function BerufsinderPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'KI-Berufsfinder' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FFF5F6]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 confetti-dots opacity-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-rose-200 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">KI-Berufsfinder</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-white mb-6">
              <Sparkles className="h-4 w-4" />
              <span>KI-gestützte Berufsorientierung</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              KI-Berufsfinder
            </h1>
            <p className="text-lg sm:text-xl text-rose-100 mb-4 max-w-2xl">
              Finde das perfekte Praktikum – in nur 5 Minuten. Unsere KI analysiert deine
              Persönlichkeit und zeigt dir, welcher Praktikumsbereich wirklich zu dir passt.
            </p>
            <p className="text-base text-rose-200 mb-8 max-w-2xl">
              20 Fragen. Dein Persönlichkeitstyp. Dein Traumpraktikum.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#berufsfinder-chat"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-medium text-rose-600 hover:bg-rose-50 transition-colors shadow-lg"
              >
                <Sparkles className="h-4 w-4" />
                Jetzt KI-Berufsfinder starten
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KI-Berufsfinder Chat */}
      <section id="berufsfinder-chat" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-sm text-rose-700 mb-4">
              <Sparkles className="h-4 w-4" />
              KI-gestützte Beratung
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Finde jetzt dein Traumpraktikum
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beantworte ein paar Fragen und unsere KI empfiehlt dir passende
              Praktikumsbereiche – kostenlos und sofort.
            </p>
          </div>
          <BerufsinderChat
            portal="praktikumsgenie"
            accentColor="text-rose-600"
            accentBg="bg-rose-600"
            accentHover="hover:bg-rose-700"
            gradientFrom="from-rose-500"
            gradientTo="to-pink-600"
          />
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="py-20 bg-white doodle-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="sticker-badge mb-6">
              <Lightbulb className="h-4 w-4" />
              In 3 einfachen Schritten
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              So funktioniert&apos;s
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vom ersten Klick bis zur Praktikumsempfehlung – der KI-Berufsfinder führt dich in
              drei einfachen Schritten zu deinem Traumpraktikum.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] border-t-2 border-dashed border-rose-200" />
                )}
                <div className="tape-card p-8 hover:shadow-lg transition-all relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Schritt {step.number}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        <span className="text-xs text-gray-500">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#FFF5F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Was du vom KI-Berufsfinder bekommst
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mehr als nur eine Berufsliste – der KI-Berufsfinder liefert dir ein
              vollständiges Persönlichkeitsprofil mit maßgeschneiderten Empfehlungen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="tape-card p-6 hover:shadow-lg transition-all"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Warum der KI-Berufsfinder?
            </h2>
            <div className="space-y-4">
              {[
                'Basierend auf wissenschaftlichen Persönlichkeitsmodellen',
                'Speziell für Schüler entwickelt – ideal für BOGY, BORS und Schülerpraktikum',
                'Berücksichtigt über 300 Berufsfelder und Praktikumsbereiche',
                'Komplett kostenlos – keine versteckten Kosten',
                'Ergebnisse sofort verfügbar, kein Warten',
                'Beliebig oft wiederholbar – probiere verschiedene Antworten aus',
                'Datenschutzkonform nach DSGVO',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 pin-card p-4">
                  <Check className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 bg-[#FFF5F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Verwandte Themen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/gehalt" className="group p-5 rounded-xl border border-gray-200 hover:border-rose-300 hover:shadow-md transition-all bg-white">
              <h3 className="font-semibold text-gray-900 group-hover:text-rose-700 mb-1">Gehaltsübersicht</h3>
              <p className="text-sm text-gray-500">Was verdient man im Praktikum?</p>
            </Link>
            <Link href="/stellen" className="group p-5 rounded-xl border border-gray-200 hover:border-rose-300 hover:shadow-md transition-all bg-white">
              <h3 className="font-semibold text-gray-900 group-hover:text-rose-700 mb-1">Aktuelle Stellen</h3>
              <p className="text-sm text-gray-500">Praktikumsplätze entdecken</p>
            </Link>
            <Link href="/berufe" className="group p-5 rounded-xl border border-gray-200 hover:border-rose-300 hover:shadow-md transition-all bg-white">
              <h3 className="font-semibold text-gray-900 group-hover:text-rose-700 mb-1">Berufe</h3>
              <p className="text-sm text-gray-500">Praktikumsbereiche erkunden</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 overflow-hidden">
        <div className="absolute inset-0 confetti-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white mb-6 border border-white/20">
            <Sparkles className="h-4 w-4" />
            Kostenlos & sofort
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bereit, dein Traumpraktikum zu finden?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Starte jetzt den KI-Berufsfinder – ein paar Fragen,
            deine persönlichen Top-Empfehlungen.
          </p>
          <a
            href="#berufsfinder-chat"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-medium text-rose-600 hover:bg-rose-50 transition-colors shadow-lg"
          >
            Jetzt KI-Berufsfinder starten
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div>
              <p className="text-3xl font-bold text-white">20</p>
              <p className="text-sm text-white/70 mt-1">Fragen</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">5 Min</p>
              <p className="text-sm text-white/70 mt-1">Dauer</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Top 3</p>
              <p className="text-sm text-white/70 mt-1">Berufe</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
