import {
  Video,
  Heart,
  MessageCircle,
  Briefcase,
  Building2,
  Users,
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  ChevronRight,
  Quote,
  MapPin,
  FileX,
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm text-emerald-700 mb-8">
            <Zap className="h-4 w-4" />
            <span>Die neue Art, Praktika zu finden</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 max-w-4xl mx-auto">
            Finde dein{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Praktikum
            </span>{' '}
            per Swipe
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Die Plattform, die Sch&uuml;ler, Studenten und Unternehmen f&uuml;r Praktika zusammenbringt.
            Kurzvideos, Matching und direkter Kontakt.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#features"
              className="rounded-full bg-gray-900 px-8 py-3.5 text-base font-medium text-white hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              App kommt bald
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="https://dashboard.praktikumsgenie.de/login"
              className="rounded-full border-2 border-gray-200 px-8 py-3.5 text-base font-medium text-gray-700 hover:border-gray-300 transition-colors flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Betrieb registrieren
            </Link>
          </div>

          {/* Stats with Icons */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-2">
                <Briefcase className="h-5 w-5 text-emerald-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">Alle</p>
              <p className="text-sm text-gray-500 mt-1">Praktikumsarten</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-500 mt-1">kostenlos</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-2">
                <Zap className="h-5 w-5 text-amber-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">1 Min</p>
              <p className="text-sm text-gray-500 mt-1">Bewerbung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Praktikumssuche, die Spa&szlig; macht
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
                description:
                  'Echte Mitarbeiter zeigen dir den Arbeitsalltag in kurzen Videos.',
                color: 'bg-emerald-100 text-emerald-600',
              },
              {
                icon: Heart,
                title: 'Swipe-Matching',
                description:
                  'Swipe durch Praktika \u2013 gef\u00e4llt dir eins? Match!',
                color: 'bg-teal-100 text-teal-600',
              },
              {
                icon: MessageCircle,
                title: 'Direkter Kontakt',
                description:
                  'Chat direkt mit Unternehmen nach dem Match.',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                icon: Briefcase,
                title: 'Alle Praktikumsarten',
                description:
                  'Sch\u00fclerpraktikum, BOGY/BORS, Pflichtpraktikum, freiwilliges Praktikum.',
                color: 'bg-amber-100 text-amber-600',
              },
              {
                icon: FileX,
                title: 'Kein Lebenslauf n\u00f6tig',
                description:
                  'Dein Profil reicht \u2013 kein Anschreiben, kein Papierkram.',
                color: 'bg-green-100 text-green-600',
              },
              {
                icon: MapPin,
                title: 'Regional First',
                description:
                  'Praktika in deiner N\u00e4he, sortiert nach Entfernung.',
                color: 'bg-orange-100 text-orange-600',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-5`}
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

      {/* Social Proof / Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 sm:p-12 border border-emerald-100">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-emerald-200" />
            <div className="relative text-center">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic max-w-2xl mx-auto">
                &ldquo;Meine Sch&uuml;ler haben fr&uuml;her wochenlang nach passenden Praktikumspl&auml;tzen gesucht.
                Mit Praktikumsgenie sehen sie in kurzen Videos, wie der Arbeitsalltag wirklich aussieht, und finden
                innerhalb von Minuten ein Match. Das spart mir als Lehrerin enorm viel Zeit bei der Praktikumsvermittlung.&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-200 text-emerald-700 font-bold text-sm">
                  SK
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-sm">Sarah K.</p>
                  <p className="text-sm text-gray-500">Lehrerin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              So funktioniert&apos;s
            </h2>
            <p className="mt-4 text-lg text-gray-600">In 4 einfachen Schritten zum Praktikum</p>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Connecting line (lg only) */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200" />

            {[
              {
                step: '1',
                title: 'Profil erstellen',
                description: 'Interessen, Schulform und Verf\u00fcgbarkeit angeben.',
              },
              {
                step: '2',
                title: 'Videos schauen',
                description: 'Betriebe zeigen dir ihren Alltag in Kurzvideos.',
              },
              {
                step: '3',
                title: 'Swipen & Matchen',
                description: 'Du & der Betrieb m\u00fcssen beide Interesse zeigen.',
              },
              {
                step: '4',
                title: 'Praktikum starten',
                description: 'Chattet und vereinbart den Praktikumszeitraum.',
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-2xl font-bold flex items-center justify-center mx-auto relative z-10">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section id="fuer-betriebe" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-emerald-300 mb-6">
                <Building2 className="h-4 w-4" />
                F&uuml;r Unternehmen
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Finden Sie die{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  besten Praktikanten
                </span>{' '}
                per Video & Matching
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                Klassische Stellenanzeigen erreichen junge Menschen nicht mehr.
                Mit Praktikumsgenie pr&auml;sentieren Sie sich mit authentischen Kurzvideos
                und finden motivierte Praktikanten per Matching.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Motivierte Sch\u00fcler & Studenten finden',
                  'Video-Profile statt langweiliger Anzeigen',
                  'Direkter Chat nach dem Match',
                  'Einfaches Management aller Praktikumspl\u00e4tze',
                  'Team-Verwaltung f\u00fcr mehrere Mitarbeiter',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://dashboard.praktikumsgenie.de/login"
                className="inline-flex items-center gap-2 mt-10 rounded-full bg-emerald-600 px-8 py-3.5 text-base font-medium text-white hover:bg-emerald-500 transition-colors"
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
                { icon: Star, label: 'Analytics', value: 'Vollst\u00e4ndige Insights' },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
                >
                  <card.icon className="h-8 w-8 text-emerald-400 mb-3" />
                  <p className="font-semibold">{card.label}</p>
                  <p className="text-sm text-gray-400 mt-1">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preise" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Faire Preise f&uuml;r Betriebe
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              F&uuml;r Sch&uuml;ler und Studenten ist Praktikumsgenie immer kostenlos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Free',
                price: '0',
                description: 'Zum Ausprobieren',
                features: ['1 Praktikumsanzeige', 'Firmenprofil', 'Sichtbar f\u00fcr Bewerber'],
                highlighted: false,
              },
              {
                name: 'Starter',
                price: '49',
                description: 'F\u00fcr kleine Betriebe',
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
                description: 'F\u00fcr gro\u00dfe Unternehmen',
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
                className={`rounded-2xl p-6 ${
                  plan.highlighted
                    ? 'bg-emerald-600 text-white ring-2 ring-emerald-600 ring-offset-2 scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3
                  className={`font-semibold text-lg ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${plan.highlighted ? 'text-emerald-200' : 'text-gray-500'}`}
                >
                  {plan.description}
                </p>
                <p className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ${plan.highlighted ? 'text-emerald-200' : 'text-gray-500'}`}
                  >
                    {plan.price === '0' ? '' : ' EUR/Mo'}
                  </span>
                </p>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check
                        className={`h-4 w-4 flex-shrink-0 ${
                          plan.highlighted ? 'text-emerald-200' : 'text-emerald-600'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://dashboard.praktikumsgenie.de/login"
                  className={`mt-6 block text-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-emerald-600 hover:bg-gray-100'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Mehr erfahren
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Entdecke alles, was Praktikumsgenie zu bieten hat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Alle Features',
                description: 'Video Feed, Matching, Chat und mehr im Detail.',
                href: '/features',
                icon: Zap,
                gradient: 'from-emerald-500 to-teal-600',
              },
              {
                title: 'F\u00fcr Sch\u00fcler',
                description: 'So findest du dein Traumpraktikum per Swipe. Kostenlos und ohne Lebenslauf.',
                href: '/fuer-schueler',
                icon: Heart,
                gradient: 'from-teal-500 to-cyan-600',
              },
              {
                title: 'F\u00fcr Betriebe',
                description: 'Finden Sie motivierte Praktikanten mit Videos und Matching. Modern und effektiv.',
                href: '/fuer-betriebe',
                icon: Building2,
                gradient: 'from-blue-500 to-indigo-600',
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} text-white mb-5`}>
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-medium mt-4 text-sm group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Finde dein Traum-Praktikum
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Die App kommt bald. Betriebe k&ouml;nnen sich jetzt schon registrieren und ihr Profil anlegen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.praktikumsgenie.de/login"
              className="rounded-full bg-white px-8 py-3.5 text-base font-medium text-emerald-600 hover:bg-gray-100 transition-colors flex items-center gap-2"
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
