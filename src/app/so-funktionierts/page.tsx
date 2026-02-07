import { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Heart,
  MessageCircle,
  Brain,
  User,
  Building2,
  Upload,
  Users,
  Check,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Zap,
  MapPin,
  Star,
  Shield,
  Clock,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'So funktioniert Praktikumsgenie – Schritt für Schritt erklärt',
  description:
    'Erfahre Schritt für Schritt, wie Praktikumsgenie funktioniert: Profil erstellen, Videos entdecken, Swipen, Matchen und direkt chatten. Für Schüler, Studenten und Betriebe.',
  alternates: { canonical: '/so-funktionierts' },
  openGraph: {
    title: 'So funktioniert Praktikumsgenie – Schritt für Schritt erklärt',
    description:
      'In 5 einfachen Schritten zum Praktikum: Profil erstellen, Videos schauen, Swipen, Matchen, Chatten. So einfach war es noch nie.',
    url: 'https://praktikumsgenie.de/so-funktionierts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'So funktioniert Praktikumsgenie – Schritt für Schritt',
    description:
      'Profil erstellen, Videos entdecken, Swipen, Matchen, Chatten. Praktikumssuche so einfach wie noch nie.',
  },
};

const youthSteps = [
  {
    number: '1',
    icon: User,
    title: 'Profil erstellen',
    color: 'bg-emerald-100 text-emerald-600',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-600',
    description:
      'Der Einstieg bei Praktikumsgenie dauert nur 2 Minuten. Du erstellst ein Profil, das sich komplett von einer klassischen Bewerbung unterscheidet. Statt Noten und Zeugnisse gibst du deine Interessen, Stärken und deinen Standort an.',
    description2:
      'Wähle aus vordefinierten Kategorien, was dich begeistert: Technik, Gesundheit, Kreativität, Computer, Natur oder Kommunikation. Gib an, welche Stärken du hast: Teamarbeit, Selbstständigkeit, Kreativität oder analytisches Denken. Das war es schon.',
    bullets: [
      'E-Mail und Passwort reichen zum Start',
      'Interessen aus Kategorien wählen',
      'Stärken und Vorlieben angeben',
      'Standort für regionale Empfehlungen',
      'Kein Lebenslauf, keine Noten, keine Dokumente',
    ],
  },
  {
    number: '2',
    icon: Video,
    title: 'Videos entdecken',
    color: 'bg-teal-100 text-teal-600',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-cyan-600',
    description:
      'Dein Feed ist wie TikTok, aber für Praktika. Du scrollst durch kurze Videos von 30 bis 90 Sekunden, in denen echte Mitarbeiter ihren Arbeitsalltag zeigen. Jedes Video gibt dir einen authentischen Einblick in einen Beruf und Betrieb.',
    description2:
      'Der Feed lernt mit der Zeit, was dir gefällt. Je mehr du swipest und likest, desto besser werden die Empfehlungen. Du siehst zuerst Videos aus deiner Region und zu Branchen, die zu deinen Interessen passen.',
    bullets: [
      'Fullscreen-Videos im TikTok-Style',
      'Echte Mitarbeiter zeigen ihren Alltag',
      'Personalisierter Feed basierend auf deinen Interessen',
      'Regionale Videos bevorzugt',
      'Neue Inhalte täglich',
    ],
  },
  {
    number: '3',
    icon: Heart,
    title: 'Swipen und Liken',
    color: 'bg-red-100 text-red-600',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-pink-600',
    description:
      'Wenn dir ein Video oder Betriebsprofil gefällt, swipest du nach rechts oder tippst auf das Herz-Symbol. Das signalisiert dem Betrieb, dass du Interesse hast. Wenn dir etwas nicht zusagt, swipest du einfach nach links.',
    description2:
      'Es gibt keinen Druck und keine Verpflichtung. Du kannst so viele Betriebe liken, wie du möchtest. Jeder Like ist anonym, bis ein beidseitiges Match entsteht. Betriebe sehen erst dann dein Profil, wenn auch sie dich geliked haben.',
    bullets: [
      'Swipe rechts oder Herz-Button zum Liken',
      'Swipe links oder X-Button zum Weiterscrollen',
      'Likes sind kostenlos und unbegrenzt',
      'Anonym bis zum beidseitigen Match',
      'Kein Druck, keine Verpflichtung',
    ],
  },
  {
    number: '4',
    icon: Sparkles,
    title: 'Match!',
    color: 'bg-amber-100 text-amber-600',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-yellow-600',
    description:
      'Wenn du einen Betrieb likest und der Betrieb dich ebenfalls liked, entsteht ein Match. Du bekommst sofort eine Benachrichtigung auf dein Handy. Das Match zeigt: Beide Seiten haben Interesse. Das ist der erste Schritt zu deinem Praktikum.',
    description2:
      'Ein Match öffnet den direkten Kommunikationskanal. Ab jetzt könnt ihr miteinander schreiben, ohne Umwege und ohne Formalitäten. Die meisten Matches führen innerhalb weniger Tage zu einem ersten Gespräch oder Probearbeiten.',
    bullets: [
      'Beidseitiges Like = Match',
      'Sofortige Push-Benachrichtigung',
      'Direkter Chat-Kanal wird freigeschaltet',
      'Match-Übersicht im Profil',
      'Von Match zu Gespräch in wenigen Tagen',
    ],
  },
  {
    number: '5',
    icon: MessageCircle,
    title: 'Chatten und Bewerben',
    color: 'bg-blue-100 text-blue-600',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-600',
    description:
      'Nach dem Match startest du den Chat mit dem Betrieb. Schreibe locker und direkt, wie du es von WhatsApp kennst. Stelle Fragen zum Praktikum, zu den Arbeitszeiten, zum Team oder zu den Aufgaben. Es gibt kein festgelegtes Format.',
    description2:
      'Viele Betriebe laden dich nach dem ersten Chat direkt zum Vorstellungsgespräch ein. Der gesamte Prozess von Entdecken bis zum ersten Termin dauert oft nur wenige Tage statt Wochen oder Monate wie bei klassischen Portalen.',
    bullets: [
      'Echtzeit-Chat nach dem Match',
      'Kein formelles Anschreiben nötig',
      'Fragen zum Praktikum und Betrieb stellen',
      'Termine direkt im Chat vereinbaren',
      'Push-Benachrichtigungen für neue Nachrichten',
    ],
  },
];

const companySteps = [
  {
    number: '1',
    icon: Building2,
    title: 'Registrieren und Profil anlegen',
    color: 'bg-emerald-500/20 text-emerald-400',
    description:
      'Erstellen Sie in wenigen Minuten ein ansprechendes Firmenprofil. Beschreiben Sie Ihren Betrieb, Ihre Praktikumsstellen und was Ihr Unternehmen besonders macht. Fügen Sie Ihr Logo hinzu und laden Sie Stellenanzeigen hoch.',
    description2:
      'Unser Dashboard führt Sie Schritt für Schritt durch den Prozess. In der Registrierung geben Sie zuerst Ihre Firmendaten ein und erstellen dann einen Benutzer-Account. Danach können Sie sofort loslegen.',
    bullets: [
      '2-Schritt-Registrierung (Firma + Benutzer)',
      'Firmenprofil mit Logo und Beschreibung',
      'Stellenanzeigen mit Praktikumsart, Anforderungen und Start-Datum',
      'Kostenloser Free-Plan zum Testen',
    ],
  },
  {
    number: '2',
    icon: Upload,
    title: 'Kurzvideos hochladen',
    color: 'bg-teal-500/20 text-teal-400',
    description:
      'Drehen Sie kurze Videos mit Ihren echten Mitarbeitern. Zeigen Sie den Arbeitsalltag, das Team, die Werkstatt oder das Büro. Authentizität schlägt Hochglanz: Schüler und Studenten wollen sehen, wie es wirklich bei Ihnen ist.',
    description2:
      'Laden Sie die Videos einfach über das Dashboard hoch. Unsere Plattform konvertiert sie automatisch ins optimale Format, erstellt Thumbnails und macht sie im Feed sichtbar. Sie brauchen keine Video-Profis.',
    bullets: [
      '30-90 Sekunden im Hochformat (9:16)',
      'Automatische Konvertierung und Komprimierung',
      'Thumbnail wird automatisch erstellt',
      'Mit Smartphone gedreht reicht völlig',
    ],
  },
  {
    number: '3',
    icon: Users,
    title: 'Kandidaten matchen',
    color: 'bg-blue-500/20 text-blue-400',
    description:
      'Swipen Sie durch Profile interessierter Schüler und Studenten. Sehen Sie deren Interessen, Stärken und Standort. Wenn ein Profil zu Ihrer Stelle passt, liken Sie es. Wenn beide Seiten Interesse zeigen, entsteht ein Match.',
    description2:
      'Das Matching-System spart Ihnen enorm viel Zeit. Statt hunderte Bewerbungen zu sichten, sehen Sie nur Profile von Kandidaten, die bereits Interesse an Ihrem Betrieb gezeigt haben. Jedes Match ist ein qualifizierter Lead.',
    bullets: [
      'Nur vorqualifizierte Kandidaten sehen',
      'Interessen und Stärken auf einen Blick',
      'Standort und Entfernung sichtbar',
      'Schnelle Entscheidung per Swipe',
    ],
  },
  {
    number: '4',
    icon: MessageCircle,
    title: 'Chatten und Einstellen',
    color: 'bg-green-500/20 text-green-400',
    description:
      'Nach dem Match schreiben Sie direkt mit dem Kandidaten. Stellen Sie Fragen, laden Sie zum Probearbeiten ein oder vereinbaren Sie ein Vorstellungsgespräch. Der Chat ist informell und direkt, genau so, wie Gen Z es bevorzugt.',
    description2:
      'Im Dashboard sehen Sie alle Ihre Chats übersichtlich. Antworten Sie schnell und unkompliziert. Die besten Betriebe antworten innerhalb weniger Stunden und haben deutlich höhere Einstellungsquoten.',
    bullets: [
      'Direkter Chat im Dashboard',
      'Push-Benachrichtigungen bei neuen Nachrichten',
      'Einladung zu Probearbeiten oder Gespräch',
      'Schnelle Reaktionszeit erhöht die Erfolgsquote',
    ],
  },
];

const faqs = [
  {
    question: 'Ist Praktikumsgenie wirklich kostenlos für Schüler und Studenten?',
    answer:
      'Ja, Praktikumsgenie ist und bleibt 100% kostenlos für Schüler und Studenten. Alle Features sind verfügbar: Video Feed, Matching, Chat, KI-Praktikumsfinder. Es gibt keine versteckten Kosten und keine Premium-Features, die extra kosten.',
  },
  {
    question: 'Brauche ich einen Lebenslauf oder Bewerbungsunterlagen?',
    answer:
      'Nein, bei Praktikumsgenie brauchst du keinen Lebenslauf, kein Anschreiben und keine Zeugnisse. Du erstellst ein einfaches Profil mit deinen Interessen und Stärken. Der Rest läuft über Videos, Matching und Chat.',
  },
  {
    question: 'Wie funktioniert der KI-Praktikumsfinder?',
    answer:
      'Der KI-Praktikumsfinder stellt dir 5-7 Fragen zu deinen Interessen, Stärken und Vorlieben. Basierend auf deinen Antworten analysiert die künstliche Intelligenz, welche Praktikumsbereiche am besten zu dir passen, und erklärt dir warum.',
  },
  {
    question: 'Was passiert nach einem Match?',
    answer:
      'Nach einem beidseitigen Match (du likest den Betrieb und der Betrieb liked dich) öffnet sich ein direkter Chat. Du kannst sofort mit dem Betrieb schreiben, Fragen stellen und einen Termin für ein Probearbeiten oder Gespräch vereinbaren.',
  },
  {
    question: 'Können Betriebe mich ohne Match kontaktieren?',
    answer:
      'Nein, erst nach einem beidseitigen Match ist der Chat freigeschaltet. Das schützt dich vor unerwünschten Nachrichten. Betriebe können dein Profil erst sehen, wenn beide Seiten Interesse gezeigt haben.',
  },
  {
    question: 'Was kostet Praktikumsgenie für Betriebe?',
    answer:
      'Betriebe können mit dem kostenlosen Free-Plan starten (1 Stellenanzeige, Firmenprofil). Für mehr Stellenanzeigen, Videos, Analytics und Team-Zugang gibt es die Pläne Starter (49 EUR/Monat), Professional (149 EUR/Monat) und Enterprise (399 EUR/Monat).',
  },
  {
    question: 'Wie drehe ich als Betrieb gute Videos?',
    answer:
      'Am besten filmen Sie mit dem Smartphone im Hochformat (9:16). Lassen Sie echte Mitarbeiter ihren Arbeitsalltag zeigen: Was machen sie täglich? Wie ist das Team? Warum gefällt ihnen die Arbeit hier? Authentizität ist wichtiger als perfekte Qualität.',
  },
  {
    question: 'Sind meine Daten sicher?',
    answer:
      'Ja, Praktikumsgenie ist DSGVO-konform. Deine Daten werden auf deutschen Servern gespeichert, verschlüsselt übertragen und niemals an Dritte verkauft. Du kannst dein Profil und alle Daten jederzeit löschen.',
  },
];

export default function SoFunktioniertsPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'So funktioniert\u0027s' },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'So funktioniert Praktikumsgenie – Schritt für Schritt erklärt',
    description:
      'Erfahre Schritt für Schritt, wie Praktikumsgenie funktioniert. Für Schüler, Studenten und Betriebe.',
    url: 'https://praktikumsgenie.de/so-funktionierts',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Praktikumsgenie',
      url: 'https://praktikumsgenie.de',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-emerald-200 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">So funktioniert&apos;s</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-emerald-200 mb-6 border border-white/20">
              <Zap className="h-4 w-4" />
              <span>Schritt für Schritt erklärt</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              So funktioniert Praktikumsgenie
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 mb-10 max-w-2xl">
              Von der Registrierung bis zum Match in wenigen Minuten. Wir zeigen dir
              Schritt für Schritt, wie du dein Traumpraktikum findest oder als Betrieb
              die besten Praktikanten gewinnst.
            </p>

            {/* Quick jump */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#fuer-schueler"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-emerald-600 font-medium text-sm hover:bg-emerald-50 transition-colors"
              >
                <User className="h-4 w-4" />
                Für Schüler & Studenten
                <ChevronDown className="h-3 w-3" />
              </a>
              <a
                href="#fuer-betriebe"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full text-white font-medium text-sm hover:bg-white/20 transition-colors"
              >
                <Building2 className="h-4 w-4" />
                Für Betriebe
                <ChevronDown className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '2 Min', label: 'Profil erstellen', icon: Clock },
              { value: '30-90s', label: 'Video-Länge', icon: Video },
              { value: '100%', label: 'Kostenlos für Schüler', icon: Shield },
              { value: '5 Schritte', label: 'Bis zum ersten Match', icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für Schüler & Studenten */}
      <section id="fuer-schueler" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm text-emerald-700 mb-4">
              <User className="h-4 w-4" />
              Für Schüler & Studenten
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              In 5 Schritten zum Praktikum
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              So findest du mit Praktikumsgenie deinen Traumpraktikumsplatz. Schneller und
              einfacher als du denkst.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {youthSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < youthSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full w-0.5 h-16 bg-gradient-to-b from-emerald-200 to-transparent -ml-px" />
                )}

                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    index % 2 === 1 ? '' : ''
                  }`}
                >
                  {/* Text Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-xl font-bold flex items-center justify-center flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description2}</p>
                    <ul className="space-y-2.5">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div
                      className={`bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} rounded-3xl p-8 sm:p-10 relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />

                      <div className="relative z-10">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center">
                          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                            <step.icon className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-white font-bold text-xl mb-2">Schritt {step.number}</p>
                          <p className="text-white/80 text-sm">{step.title}</p>
                        </div>

                        {/* Progress indicator */}
                        <div className="flex justify-center mt-6 gap-2">
                          {youthSteps.map((_, i) => (
                            <div
                              key={i}
                              className={`h-1.5 rounded-full ${
                                i <= index ? 'bg-white w-8' : 'bg-white/30 w-4'
                              } transition-all`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trennlinie */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200" />
      </div>

      {/* Für Betriebe */}
      <section id="fuer-betriebe" className="py-20 bg-gray-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-emerald-300 mb-4">
              <Building2 className="h-4 w-4" />
              Für Praktikumsbetriebe
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              In 4 Schritten zum{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                perfekten Praktikanten
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              So nutzen Betriebe Praktikumsgenie, um motivierte Praktikanten zu finden und
              einzustellen.
            </p>
          </div>

          <div className="space-y-12">
            {companySteps.map((step, index) => (
              <div
                key={step.number}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10"
              >
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  {/* Step Number + Icon */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-2xl font-bold flex items-center justify-center flex-shrink-0">
                        {step.number}
                      </div>
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${step.color}`}>
                        <step.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-6">{step.description2}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Progress bar */}
                {index < companySteps.length - 1 && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1 rounded-full"
                        style={{ width: `${((index + 1) / companySteps.length) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://dashboard.praktikumsgenie.de/login"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-base font-medium text-white hover:bg-emerald-500 transition-colors"
            >
              Jetzt als Betrieb registrieren
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Process Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Der Weg zum Match auf einen Blick
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              So treffen Schüler, Studenten und Betriebe bei Praktikumsgenie aufeinander.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: User, label: 'Profil', sublabel: 'erstellen', color: 'from-emerald-500 to-teal-600' },
              { icon: Video, label: 'Videos', sublabel: 'entdecken', color: 'from-teal-500 to-cyan-600' },
              { icon: Heart, label: 'Liken', sublabel: 'und Swipen', color: 'from-red-500 to-pink-600' },
              { icon: Sparkles, label: 'Match!', sublabel: 'Beidseitig', color: 'from-amber-500 to-orange-600' },
              { icon: MessageCircle, label: 'Chatten', sublabel: 'und Bewerben', color: 'from-blue-500 to-cyan-600' },
            ].map((item, index) => (
              <div key={item.label} className="relative">
                <div
                  className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-center text-white`}
                >
                  <item.icon className="h-8 w-8 mx-auto mb-3" />
                  <p className="font-bold text-lg">{item.label}</p>
                  <p className="text-white/70 text-sm">{item.sublabel}</p>
                </div>
                {index < 4 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-gray-600">
              Alles, was du über Praktikumsgenie wissen musst.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="px-6 py-5">
                  <h3 className="font-semibold text-gray-900 text-lg">{faq.question}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Jetzt loslegen und Praktikum neu erleben
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Ob Schüler auf der Suche nach dem Traumpraktikum oder Betrieb auf der Suche nach
            motivierten Praktikanten: Praktikumsgenie bringt euch zusammen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.praktikumsgenie.de/login"
              className="rounded-full bg-white px-8 py-3.5 text-base font-medium text-emerald-600 hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Als Betrieb registrieren
            </Link>
            <Link
              href="/features"
              className="rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Alle Features ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
