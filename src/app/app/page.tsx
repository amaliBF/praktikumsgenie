import Link from 'next/link';
import { Metadata } from 'next';
import {
  Smartphone, Play, MessageCircle, Sparkles, Bell, Heart, ArrowRight,
  ChevronRight, Star, Shield, Zap, Users, Video, Search,
} from 'lucide-react';
import AppNotifyForm from '@/components/AppNotifyForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Die Genie App – Dein Praktikum per Swipe | Praktikumsgenie',
  description: 'Finde dein Traumpraktikum mit der Genie App. Swipe durch Video-Stellenanzeigen, chatte direkt mit Betrieben und nutze den KI-Berufsfinder. Kostenlos für iOS & Android.',
  openGraph: {
    title: 'Die Genie App – Dein Praktikum per Swipe',
    description: 'Swipe durch Video-Stellenanzeigen, chatte direkt mit Betrieben und nutze den KI-Berufsfinder.',
  },
};

const features = [
  {
    icon: Video,
    title: 'Video-Stellenanzeigen',
    description: 'Erlebe Praktikumsbetriebe hautnah – mit echten Videos statt langweiliger Texte.',
  },
  {
    icon: Heart,
    title: 'Swipe-Matching',
    description: 'Swipe nach rechts, wenn dir ein Betrieb gefällt. Bei gegenseitigem Interesse entsteht ein Match.',
  },
  {
    icon: MessageCircle,
    title: 'Direkt-Chat',
    description: 'Chatte direkt mit Praktikumsbetrieben – ohne Umwege über Bewerbungsportale.',
  },
  {
    icon: Sparkles,
    title: 'KI-Berufsfinder',
    description: 'Unser KI-Assistent hilft dir, das perfekte Praktikum zu finden – basierend auf deinen Interessen.',
  },
  {
    icon: Bell,
    title: 'Push-Benachrichtigungen',
    description: 'Erhalte sofort eine Nachricht, wenn neue passende Praktikumsplätze online gehen.',
  },
  {
    icon: Shield,
    title: 'Datenschutz',
    description: 'Deine Daten gehören dir. DSGVO-konform und Server in Deutschland.',
  },
];

const steps = [
  {
    step: '1',
    title: 'Profil erstellen',
    description: 'Erstelle in 2 Minuten dein Profil mit deinen Interessen und Wunschberufen.',
  },
  {
    step: '2',
    title: 'Videos ansehen & swipen',
    description: 'Scrolle durch Video-Stellenanzeigen und swipe nach rechts, wenn dir ein Betrieb gefällt.',
  },
  {
    step: '3',
    title: 'Match & Chat',
    description: 'Bei gegenseitigem Interesse entsteht ein Match und ihr könnt direkt chatten.',
  },
  {
    step: '4',
    title: 'Praktikumsplatz sichern',
    description: 'Vereinbare ein Vorstellungsgespräch und sichere dir deinen Traum-Praktikumsplatz.',
  },
];

const faqs = [
  {
    q: 'Ist die App kostenlos?',
    a: 'Ja, die Genie App ist für Schüler und Bewerber komplett kostenlos. Keine versteckten Kosten, kein Abo.',
  },
  {
    q: 'Für welche Geräte ist die App verfügbar?',
    a: 'Die Genie App gibt es für iPhone (iOS) und Android-Smartphones. Tablet-Unterstützung folgt.',
  },
  {
    q: 'Wie funktioniert das Matching?',
    a: 'Du siehst Video-Stellenanzeigen und swipest nach rechts (gefällt mir) oder links (nicht interessiert). Wenn auch der Betrieb dich spannend findet, entsteht ein Match und ihr könnt chatten.',
  },
  {
    q: 'Kann ich die App auch ohne Registrierung nutzen?',
    a: 'Du kannst Stellen und Videos ansehen, aber für das Matching und den Chat brauchst du ein kostenloses Profil.',
  },
  {
    q: 'Werden meine Daten sicher gespeichert?',
    a: 'Ja, alle Daten werden DSGVO-konform auf Servern in Deutschland gespeichert. Du kannst dein Profil jederzeit löschen.',
  },
];

export default function AppPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'App' },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-600 to-rose-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-rose-200 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white font-medium">App</li>
            </ol>
          </nav>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-white/90 mb-6">
                <Zap className="h-4 w-4 text-yellow-300" />
                Bald verfügbar für iOS & Android
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Dein Praktikum<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">per Swipe</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Die Genie App verbindet Video-Stellenanzeigen, Swipe-Matching und KI-Berufsfinder in einer App. Finde dein Traumpraktikum – so einfach wie nie.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="#notify"
                  className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 font-semibold px-6 py-3.5 rounded-xl hover:bg-rose-50 transition-colors shadow-lg"
                >
                  <Bell className="h-5 w-5" />
                  App &ndash; Bald verf&uuml;gbar
                </Link>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-[580px]">
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl border-4 border-gray-800">
                  <div className="absolute inset-3 bg-gradient-to-b from-rose-500 to-pink-700 rounded-[2.2rem] overflow-hidden">
                    <div className="flex justify-between items-center px-6 pt-3 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/60 rounded-sm" />
                        <div className="w-4 h-2 bg-white/60 rounded-sm" />
                        <div className="w-6 h-3 bg-white/60 rounded-sm" />
                      </div>
                    </div>
                    <div className="px-4 pt-6">
                      <div className="text-white text-center mb-4">
                        <div className="text-lg font-bold">Entdecken</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-3">
                        <div className="w-full h-40 bg-white/5 rounded-xl flex items-center justify-center mb-3">
                          <Play className="h-12 w-12 text-white/60" />
                        </div>
                        <div className="text-white font-semibold text-sm">Schülerpraktikum im Marketing</div>
                        <div className="text-white/60 text-xs mt-1">Digital Agentur GmbH · Hamburg</div>
                      </div>
                      <div className="flex justify-center gap-4 pt-2">
                        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                          <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                          <Heart className="h-6 w-6 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Alles, was du brauchst
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Die Genie App vereint alles in einer Anwendung – von der Praktikumssuche bis zum Vorstellungsgespräch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-gray-200 hover:border-rose-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-4 group-hover:from-rose-200 group-hover:to-pink-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              So funktioniert&apos;s
            </h2>
            <p className="text-lg text-gray-600">In 4 einfachen Schritten zu deinem Praktikum</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg shadow-rose-500/20">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-7 -right-3 h-5 w-5 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify Section */}
      <section id="notify" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppNotifyForm
            variant="section"
            title="Erfahre als Erstes, wenn die App da ist"
            description="Wir arbeiten mit Hochdruck an der Genie App. Trag dich ein und wir benachrichtigen dich zum Launch."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Häufige Fragen</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:bg-gray-50">
                  {faq.q}
                  <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <AppNotifyForm
            variant="banner"
            title="Bereit f&uuml;r dein Traumpraktikum?"
            description="Trag dich ein und erfahre als Erstes, wenn die Genie App verf&uuml;gbar ist."
          />
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
