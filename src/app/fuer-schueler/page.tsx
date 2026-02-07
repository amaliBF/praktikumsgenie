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
  ClipboardCheck,
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
  Target,
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
      <main className="min-h-screen bg-[#FFF5F6]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        {/* Hero Section */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700" />
          <div className="absolute inset-0 confetti-dots opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-rose-200 mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Für Schüler</li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="sticker-badge !bg-white/20 !text-white !border-white/30 backdrop-blur-sm mb-8">
                <ClipboardCheck className="h-4 w-4" />
                100% kostenlos &bull; Kein Lebenslauf nötig
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Finde dein{' '}
                <span className="relative">
                  <span className="relative z-10">Traumpraktikum</span>
                  <span className="absolute bottom-2 left-0 right-0 h-4 bg-white/20 -rotate-1 rounded" />
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
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-rose-600 hover:bg-rose-50 transition-colors shadow-lg"
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
                  <p className="text-sm text-rose-200 mt-1">Kurzvideos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">2 Min</p>
                  <p className="text-sm text-rose-200 mt-1">Profil erstellen</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-bold text-white">0 EUR</p>
                  <p className="text-sm text-rose-200 mt-1">Für immer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-[#FFF5F6] doodle-circles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="sticker-badge mb-4">
                <Target className="h-4 w-4" />
                Deine Vorteile
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Deine Vorteile mit <span className="gradient-text-discovery">Praktikumsgenie</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Praktikumssuche muss nicht stressig sein. So findest du schnell den richtigen Platz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 scrapbook-grid">
              {[
                {
                  icon: Layers,
                  title: 'Alle Praktikumsarten auf einen Blick',
                  description: 'Schülerpraktikum, BOGY/BORS, Pflichtpraktikum, freiwilliges Praktikum oder Schnupperpraktikum – wir zeigen dir alle Optionen und welche zu dir passt.',
                },
                {
                  icon: Video,
                  title: 'Kurzvideos von echten Betrieben',
                  description: 'Sieh in 30-90 Sekunden Videos, wie der Alltag bei den Betrieben wirklich aussieht. Keine Stockfotos, sondern echte Einblicke in den Arbeitsalltag.',
                },
                {
                  icon: Heart,
                  title: 'Swipe & Match',
                  description: 'Gefällt dir ein Betrieb? Swipe nach rechts. Wenn der Betrieb dein Profil auch spannend findet – Match! Dann könnt ihr direkt chatten.',
                },
                {
                  icon: MessageCircle,
                  title: 'Direkter Chat mit Betrieben',
                  description: 'Nach dem Match schreibst du dem Betrieb direkt – wie bei WhatsApp. Kein formelles Anschreiben nötig. Frag einfach, was dich interessiert.',
                },
              ].map((item) => (
                <div key={item.title} className="pin-card p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 mb-6">
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
              <div className="sticker-badge mb-4">
                <Zap className="h-4 w-4" />
                In 5 Schritten
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                So einfach geht&apos;s
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                { step: '1', icon: Smartphone, title: 'App downloaden', description: 'Lade die Praktikumsgenie App kostenlos herunter. Bald im App Store und bei Google Play.' },
                { step: '2', icon: UserCircle, title: 'Profil in 2 Min erstellen', description: 'Interessen auswählen, Standort angeben – fertig. Kein Lebenslauf, keine Noten.' },
                { step: '3', icon: Eye, title: 'Videos von Betrieben schauen', description: 'Scrolle durch Kurzvideos und sieh, wie der Arbeitsalltag bei verschiedenen Betrieben aussieht.' },
                { step: '4', icon: Heart, title: 'Swipen & matchen', description: 'Gefällt dir ein Betrieb? Swipe nach rechts! Wenn der Betrieb dein Profil auch cool findet: Match!' },
                { step: '5', icon: PartyPopper, title: 'Chatten & Praktikum starten', description: 'Schreib dem Betrieb direkt im Chat. Klärt alles und startet euer Praktikum!' },
              ].map((item, index) => (
                <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/20 flex-shrink-0">
                      <item.icon className="h-8 w-8" />
                    </div>
                    {index < 4 && <div className="w-0.5 h-full bg-gradient-to-b from-rose-300 to-transparent mt-2 min-h-[40px]" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="explore-tag">Schritt {item.step}</span>
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
        <section className="py-20 bg-[#FFF5F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Sicher, kostenlos und ohne Haken
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: '100% kostenlos', description: 'Für dich komplett gratis. Heute, morgen und in Zukunft.' },
                { icon: Lock, title: 'Datenschutz', description: 'DSGVO-konform, Server in Deutschland, verschlüsselte Daten.' },
                { icon: Eye, title: 'Du bestimmst', description: 'Du entscheidest, was Betriebe sehen. Dein Profil, deine Regeln.' },
                { icon: Clock, title: 'Kein Spam', description: 'Nur Nachrichten von Betrieben, mit denen du gematcht hast.' },
              ].map((item) => (
                <div key={item.title} className="tape-card p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
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
        <section className="py-20 bg-white doodle-circles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Schon mal stöbern?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 scrapbook-grid">
              <Link href="/praktikumsarten" className="group pin-card p-8">
                <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Layers className="h-7 w-7 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors mb-2">Praktikumsarten</h3>
                <p className="text-gray-600 mb-4">Schülerpraktikum, BOGY, Pflichtpraktikum und mehr. Finde die richtige Art für dich.</p>
                <span className="inline-flex items-center gap-1 text-rose-600 font-medium text-sm group-hover:gap-2 transition-all">Entdecken <ArrowRight className="h-4 w-4" /></span>
              </Link>

              <Link href="/praktikum" className="group pin-card p-8">
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">Praktikum nach Stadt</h3>
                <p className="text-gray-600 mb-4">Finde Praktikumsplätze in deiner Stadt. 84 Städte mit Infos zu Branchen und ÖPNV.</p>
                <span className="inline-flex items-center gap-1 text-pink-600 font-medium text-sm group-hover:gap-2 transition-all">Städte entdecken <ArrowRight className="h-4 w-4" /></span>
              </Link>

              <Link href="/ratgeber" className="group pin-card p-8">
                <div className="w-14 h-14 rounded-2xl bg-fuchsia-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-7 w-7 text-fuchsia-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-fuchsia-600 transition-colors mb-2">Ratgeber & Tipps</h3>
                <p className="text-gray-600 mb-4">Alles über Praktikumsbewerbung, Verhalten im Praktikum und Berufsorientierung.</p>
                <span className="inline-flex items-center gap-1 text-fuchsia-600 font-medium text-sm group-hover:gap-2 transition-all">Ratgeber lesen <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 overflow-hidden">
          <div className="absolute inset-0 confetti-dots opacity-10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Bereit, dein Praktikum zu finden?
            </h2>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Die App kommt bald! Bis dahin: Stöbere in unseren Praktikumsarten und Ratgebern
              und finde heraus, welches Praktikum zu dir passt.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/praktikumsarten" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-rose-600 hover:bg-rose-50 transition-colors shadow-lg">
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
