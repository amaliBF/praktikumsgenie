import {
  Video,
  Heart,
  MessageCircle,
  Briefcase,
  Building2,
  Users,
  ArrowRight,
  Check,
  Zap,
  Shield,
  ChevronRight,
  MapPin,
  FileX,
  ClipboardCheck,
  BookOpen,
  Target,
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFF5F6]">
      <Header />

      {/* Hero Section – Discovery Board */}
      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 doodle-circles relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-pink-100/30 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="sticker-badge mb-8">
                <ClipboardCheck className="h-4 w-4" />
                <span>Dein Praktikum wartet</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
                Finde dein{' '}
                <span className="gradient-text-discovery">
                  Praktikum
                </span>{' '}
                per Swipe
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-xl leading-relaxed">
                Die Plattform, die Schüler und Praktikumsbetriebe zusammenbringt.
                Kurzvideos, Matching und direkter Kontakt &ndash; komplett kostenlos für Schüler.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#features"
                  className="rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-3.5 text-base font-medium text-white hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 flex items-center gap-2"
                >
                  App kommt bald
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="https://dashboard.genieportal.de/register"
                  className="rounded-full border-2 border-rose-200 px-8 py-3.5 text-base font-medium text-gray-700 hover:border-rose-300 hover:bg-white transition-all flex items-center gap-2"
                >
                  <Building2 className="h-4 w-4" />
                  Betrieb registrieren
                </Link>
              </div>
            </div>

            {/* Stats Cards – pinned to board */}
            <div className="grid grid-cols-2 gap-4 scrapbook-grid">
              <div className="pin-card p-6 pt-8">
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-3">
                  <Briefcase className="h-6 w-6 text-rose-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">Alle</p>
                <p className="text-sm text-gray-500 mt-1">Praktikumsarten</p>
              </div>
              <div className="pin-card p-6 pt-8">
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-pink-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-500 mt-1">kostenlos für Schüler</p>
              </div>
              <div className="pin-card p-6 pt-8">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-50 flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-fuchsia-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">1 Min</p>
                <p className="text-sm text-gray-500 mt-1">Bewerbung</p>
              </div>
              <div className="pin-card p-6 pt-8">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-3xl font-bold text-gray-900">84+</p>
                <p className="text-sm text-gray-500 mt-1">Städte deutschlandweit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section – Taped Cards */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="sticker-badge mx-auto mb-6 w-fit">
              <Target className="h-4 w-4" />
              <span>Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Praktikumssuche, die <span className="gradient-text-discovery">Spaß macht</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Kein Anschreiben, keine langweiligen Stellenanzeigen. Einfach echte Einblicke in echte Unternehmen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: 'Video-Einblicke',
                description: 'Echte Mitarbeiter zeigen dir den Arbeitsalltag in kurzen Videos.',
                accent: 'bg-rose-50 text-rose-600',
              },
              {
                icon: Heart,
                title: 'Swipe-Matching',
                description: 'Swipe durch Praktika – gefällt dir eins? Match!',
                accent: 'bg-pink-50 text-pink-600',
              },
              {
                icon: MessageCircle,
                title: 'Direkter Kontakt',
                description: 'Chat direkt mit Unternehmen nach dem Match.',
                accent: 'bg-fuchsia-50 text-fuchsia-600',
              },
              {
                icon: Briefcase,
                title: 'Alle Praktikumsarten',
                description: 'Schülerpraktikum, BOGY/BORS, Pflichtpraktikum, freiwilliges Praktikum.',
                accent: 'bg-red-50 text-red-500',
              },
              {
                icon: FileX,
                title: 'Kein Lebenslauf nötig',
                description: 'Dein Profil reicht – kein Anschreiben, kein Papierkram.',
                accent: 'bg-orange-50 text-orange-500',
              },
              {
                icon: MapPin,
                title: 'Regional First',
                description: 'Praktika in deiner Nähe, sortiert nach Entfernung.',
                accent: 'bg-amber-50 text-amber-600',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="tape-card p-8 pt-10 hover:bg-rose-50/30"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.accent} mb-5`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial – Speech Bubble */}
      <section className="py-20 bg-[#FFF5F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="discovery-quote">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic max-w-2xl mx-auto text-center">
              &bdquo;Meine Schüler haben früher wochenlang nach passenden Praktikumsplätzen gesucht.
              Mit Praktikumsgenie sehen sie in kurzen Videos, wie der Arbeitsalltag wirklich aussieht, und finden
              innerhalb von Minuten ein Match. Das spart mir als Lehrerin enorm viel Zeit bei der Praktikumsvermittlung.&ldquo;
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3 ml-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white font-bold text-sm shadow-md">
              SK
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Sarah K.</p>
              <p className="text-sm text-gray-500">Lehrerin, Gymnasium Schwerin</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works – Pinboard Timeline */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="sticker-badge mx-auto mb-6 w-fit">
              <BookOpen className="h-4 w-4" />
              <span>Anleitung</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              So funktioniert&apos;s
            </h2>
            <p className="mt-4 text-lg text-gray-600">In 4 einfachen Schritten zum Praktikum</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Profil erstellen',
                description: 'Interessen, Schulform und Verfügbarkeit angeben.',
                icon: Users,
              },
              {
                step: '02',
                title: 'Videos schauen',
                description: 'Betriebe zeigen dir ihren Alltag in Kurzvideos.',
                icon: Video,
              },
              {
                step: '03',
                title: 'Swipen & Matchen',
                description: 'Du & der Betrieb müssen beide Interesse zeigen.',
                icon: Heart,
              },
              {
                step: '04',
                title: 'Praktikum starten',
                description: 'Chattet und vereinbart den Praktikumszeitraum.',
                icon: Briefcase,
              },
            ].map((item) => (
              <div key={item.step} className="pin-card p-6 pt-10 text-center group">
                <span className="block text-sm font-black text-rose-300 tracking-widest mb-3">{item.step}</span>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-500/20 mx-auto mb-5 group-hover:scale-105 transition-transform">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section id="fuer-betriebe" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 confetti-dots opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="sticker-badge !bg-white/10 !text-rose-300 !border-white/20 mb-6">
                <Building2 className="h-4 w-4" />
                <span>Für Unternehmen</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Finden Sie die{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                  besten Praktikanten
                </span>{' '}
                per Video & Matching
              </h2>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Klassische Stellenanzeigen erreichen junge Menschen nicht mehr.
                Mit Praktikumsgenie präsentieren Sie sich mit authentischen Kurzvideos
                und finden motivierte Praktikanten per Matching.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Motivierte Schüler & Studenten finden',
                  'Video-Profile statt langweiliger Anzeigen',
                  'Direkter Chat nach dem Match',
                  'Einfaches Management aller Praktikumsplätze',
                  'Team-Verwaltung für mehrere Mitarbeiter',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://dashboard.genieportal.de/register"
                className="inline-flex items-center gap-2 mt-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-3.5 text-base font-medium text-white hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25"
              >
                Jetzt kostenlos starten
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Praktikanten', value: 'Unbegrenzt sichtbar' },
                { icon: Video, label: 'Videos', value: 'Bis zu 10 Videos' },
                { icon: MessageCircle, label: 'Chat', value: 'Direktnachrichten' },
                { icon: Target, label: 'Analytics', value: 'Vollständige Insights' },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <card.icon className="h-8 w-8 text-rose-400 mb-3" />
                  <p className="font-semibold">{card.label}</p>
                  <p className="text-sm text-gray-400 mt-1">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preise" className="py-24 bg-[#FFF5F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="sticker-badge mx-auto mb-6 w-fit">
              <ClipboardCheck className="h-4 w-4" />
              <span>Preise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Faire Preise für Betriebe
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Für Schüler und Studenten ist Praktikumsgenie immer kostenlos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Free',
                price: '0',
                description: 'Zum Ausprobieren',
                features: ['1 Praktikumsanzeige', 'Firmenprofil', 'Sichtbar für Bewerber'],
                highlighted: false,
              },
              {
                name: 'Starter',
                price: '49',
                description: 'Für kleine Betriebe',
                features: [
                  '3 Praktikumsanzeigen',
                  '3 Videos',
                  'Matching + Chat',
                  'Basis-Analytics',
                ],
                highlighted: false,
              },
              {
                name: 'Professional',
                price: '149',
                description: 'Beliebteste Wahl',
                features: [
                  '10 Praktikumsanzeigen',
                  'Unbegrenzt Videos',
                  'Priority-Platzierung',
                  'Volle Analytics',
                  'Team-Zugang',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: '399',
                description: 'Für große Unternehmen',
                features: [
                  'Unbegrenzt alles',
                  'Team-Verwaltung',
                  'API-Zugang',
                  'Premium Support',
                  'Individuelle Beratung',
                ],
                highlighted: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-rose-500 to-pink-600 text-white ring-2 ring-rose-500 ring-offset-2 ring-offset-[#FFF5F6] scale-105 shadow-xl shadow-rose-500/20'
                    : 'pin-card pt-10'
                }`}
              >
                <h3
                  className={`font-semibold text-lg ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${plan.highlighted ? 'text-rose-200' : 'text-gray-500'}`}
                >
                  {plan.description}
                </p>
                <p className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ${plan.highlighted ? 'text-rose-200' : 'text-gray-500'}`}
                  >
                    {plan.price === '0' ? '' : ' €/Mo'}
                  </span>
                </p>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check
                        className={`h-4 w-4 flex-shrink-0 ${
                          plan.highlighted ? 'text-rose-200' : 'text-rose-500'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://dashboard.genieportal.de/register"
                  className={`mt-6 block text-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-rose-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700'
                  }`}
                >
                  Jetzt starten
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Mehr erfahren
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Entdecke alles, was Praktikumsgenie zu bieten hat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 scrapbook-grid">
            {[
              {
                title: 'Alle Features',
                description: 'Video Feed, Matching, Chat und mehr im Detail.',
                href: '/features',
                icon: Zap,
              },
              {
                title: 'Für Schüler',
                description: 'So findest du dein Traumpraktikum per Swipe. Kostenlos und ohne Lebenslauf.',
                href: '/fuer-schueler',
                icon: Heart,
              },
              {
                title: 'Für Betriebe',
                description: 'Finden Sie motivierte Praktikanten mit Videos und Matching. Modern und effektiv.',
                href: '/fuer-betriebe',
                icon: Building2,
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group pin-card p-8 pt-10 hover:bg-rose-50/30"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white mb-5 group-hover:scale-105 transition-transform shadow-md shadow-rose-500/15">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
                <span className="inline-flex items-center gap-1 text-rose-600 font-medium mt-4 text-sm group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 relative overflow-hidden">
        <div className="absolute inset-0 confetti-dots opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Finde dein Traum-Praktikum
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Die App kommt bald. Betriebe können sich jetzt schon registrieren und ihr Profil anlegen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.genieportal.de/register"
              className="rounded-full bg-white px-8 py-3.5 text-base font-medium text-rose-600 hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
            >
              <Building2 className="h-4 w-4" />
              Registriere deinen Betrieb
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
