import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Video,
  Heart,
  MessageCircle,
  Brain,
  ArrowRight,
  Check,
  Shield,
  Sparkles,
  Zap,
  Eye,
  Star,
  Lock,
  Smartphone,
  UserCircle,
  Search,
  MapPin,
  BookOpen,
  GraduationCap,
  ThumbsUp,
  X,
  Compass,
  Clock,
  PartyPopper,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Praktikumsgenie für Schüler & Studenten – Finde dein Traumpraktikum per Swipe',
  description:
    'Finde dein Traumpraktikum wie auf TikTok: Echte Videos von Betrieben anschauen, swipen, matchen und direkt chatten. 100% kostenlos, kein Lebenslauf nötig.',
  alternates: { canonical: '/fuer-schueler' },
  openGraph: {
    title: 'Finde dein Traumpraktikum per Swipe | Praktikumsgenie',
    description:
      'Schluss mit langweiligen Praktikumsanzeigen! Schau echte Videos, swipe nach rechts und chatte direkt mit Betrieben. 100% kostenlos.',
    url: 'https://praktikumsgenie.de/fuer-schueler',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praktikumsgenie für Schüler & Studenten – Traumpraktikum per Swipe finden',
    description:
      'TikTok-Style Videos, Matching wie bei Tinder, KI-Berufsfinder. Komplett kostenlos.',
  },
};

export default function FuerSchuelerPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Für Schüler' },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Praktikumsgenie für Schüler & Studenten',
    description:
      'Finde dein Traumpraktikum wie auf TikTok: Echte Videos, Matching und Direkt-Chat. 100% kostenlos.',
    url: 'https://praktikumsgenie.de/fuer-schueler',
    audience: {
      '@type': 'Audience',
      audienceType: 'Schüler und Studenten (14-25 Jahre)',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Praktikumsgenie',
      url: 'https://praktikumsgenie.de',
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        {/* Hero Section */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-emerald-200 mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Für Schüler</li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 text-sm text-white mb-8">
                <Sparkles className="h-4 w-4" />
                100% kostenlos &bull; Kein Lebenslauf nötig
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Finde dein{' '}
                <span className="relative">
                  <span className="relative z-10">Traumpraktikum</span>
                  <span className="absolute bottom-2 left-0 right-0 h-4 bg-teal-400/40 -rotate-1 rounded" />
                </span>{' '}
                – per Swipe!
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
                Echte Videos von echten Betrieben. Swipe, wenn&apos;s dir gefällt.
                Match? Dann chattet ihr direkt. Ohne Anschreiben, ohne Stress.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#benefits"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-600 hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Vorteile entdecken
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link
                  href="/praktikumsarten"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-colors"
                >
                  <Layers className="h-5 w-5" />
                  Praktikumsarten
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">30s</p>
                  <p className="text-sm text-emerald-200 mt-1">Kurzvideos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">2 Min</p>
                  <p className="text-sm text-emerald-200 mt-1">Profil erstellen</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">0 EUR</p>
                  <p className="text-sm text-emerald-200 mt-1">Für immer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Deine Vorteile mit Praktikumsgenie
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Praktikumssuche muss nicht stressig sein. So findest du schnell den richtigen Platz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Layers,
                  title: 'Alle Praktikumsarten auf einen Blick',
                  description: 'Schülerpraktikum, BOGY/BORS, Pflichtpraktikum, freiwilliges Praktikum oder Schnupperpraktikum – wir zeigen dir alle Optionen und welche zu dir passt.',
                  color: 'bg-emerald-100 text-emerald-600',
                },
                {
                  icon: Video,
                  title: 'Kurzvideos von echten Betrieben',
                  description: 'Sieh in 30-90 Sekunden Videos, wie der Alltag bei den Betrieben wirklich aussieht. Keine Stockfotos, sondern echte Einblicke in den Arbeitsalltag.',
                  color: 'bg-teal-100 text-teal-600',
                },
                {
                  icon: Heart,
                  title: 'Swipe & Match',
                  description: 'Gefällt dir ein Betrieb? Swipe nach rechts. Wenn der Betrieb dein Profil auch spannend findet – Match! Dann könnt ihr direkt chatten.',
                  color: 'bg-pink-100 text-pink-600',
                },
                {
                  icon: MessageCircle,
                  title: 'Direkter Chat mit Betrieben',
                  description: 'Nach dem Match schreibst du dem Betrieb direkt – wie bei WhatsApp. Kein formelles Anschreiben nötig. Frag einfach, was dich interessiert.',
                  color: 'bg-blue-100 text-blue-600',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.color} mb-6`}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm text-emerald-600 mb-4">
                <Zap className="h-4 w-4" />
                In 5 Schritten
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                So einfach geht&apos;s
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                { step: '1', icon: Smartphone, title: 'App downloaden', description: 'Lade die Praktikumsgenie App kostenlos herunter. Bald im App Store und bei Google Play.', color: 'from-emerald-600 to-emerald-700' },
                { step: '2', icon: UserCircle, title: 'Profil in 2 Min erstellen', description: 'Interessen auswählen, Standort angeben – fertig. Kein Lebenslauf, keine Noten.', color: 'from-teal-600 to-teal-700' },
                { step: '3', icon: Eye, title: 'Videos von Betrieben schauen', description: 'Scrolle durch Kurzvideos und sieh, wie der Arbeitsalltag bei verschiedenen Betrieben aussieht.', color: 'from-blue-600 to-blue-700' },
                { step: '4', icon: Heart, title: 'Swipen & matchen', description: 'Gefällt dir ein Betrieb? Swipe nach rechts! Wenn der Betrieb dein Profil auch cool findet: Match!', color: 'from-pink-500 to-pink-600' },
                { step: '5', icon: PartyPopper, title: 'Chatten & Praktikum starten', description: 'Schreib dem Betrieb direkt im Chat. Klärt alles und startet euer Praktikum!', color: 'from-amber-500 to-amber-600' },
              ].map((item, index) => (
                <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    {index < 4 && <div className="w-0.5 h-full bg-gradient-to-b from-gray-200 to-transparent mt-2 min-h-[40px]" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">Schritt {item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Sicher, kostenlos und ohne Haken
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: '100% kostenlos', description: 'Für dich komplett gratis. Heute, morgen und in Zukunft.', color: 'bg-green-100 text-green-600' },
                { icon: Lock, title: 'Datenschutz', description: 'DSGVO-konform, Server in Deutschland, verschlüsselte Daten.', color: 'bg-blue-100 text-blue-600' },
                { icon: Eye, title: 'Du bestimmst', description: 'Du entscheidest, was Betriebe sehen. Dein Profil, deine Regeln.', color: 'bg-emerald-100 text-emerald-600' },
                { icon: Clock, title: 'Kein Spam', description: 'Nur Nachrichten von Betrieben, mit denen du gematcht hast.', color: 'bg-amber-100 text-amber-600' },
              ].map((item) => (
                <div key={item.title} className="text-center p-6 rounded-2xl bg-white border border-gray-100">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Schon mal stöbern?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/praktikumsarten" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Layers className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Praktikumsarten</h3>
                <p className="text-gray-600 mb-4">Schülerpraktikum, BOGY, Pflichtpraktikum und mehr. Finde die richtige Art für dich.</p>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">Entdecken <ArrowRight className="h-4 w-4" /></span>
              </Link>

              <Link href="/praktikum" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">Praktikum nach Stadt</h3>
                <p className="text-gray-600 mb-4">Finde Praktikumsplätze in deiner Stadt. 84 Städte mit Infos zu Branchen und ÖPNV.</p>
                <span className="inline-flex items-center gap-1 text-teal-600 font-medium text-sm group-hover:gap-2 transition-all">Städte entdecken <ArrowRight className="h-4 w-4" /></span>
              </Link>

              <Link href="/ratgeber" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">Ratgeber & Tipps</h3>
                <p className="text-gray-600 mb-4">Alles über Praktikumsbewerbung, Verhalten im Praktikum und Berufsorientierung.</p>
                <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">Ratgeber lesen <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-20 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Bereit, dein Praktikum zu finden?
            </h2>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Die App kommt bald! Bis dahin: Stöbere in unseren Praktikumsarten und Ratgebern
              und finde heraus, welches Praktikum zu dir passt.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/praktikumsarten" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-600 hover:bg-gray-100 transition-colors shadow-lg">
                <Layers className="h-5 w-5" />
                Praktikumsarten entdecken
              </Link>
              <Link href="/ratgeber" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-colors">
                <BookOpen className="h-5 w-5" />
                Ratgeber lesen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
