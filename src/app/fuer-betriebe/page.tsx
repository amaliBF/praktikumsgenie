import { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Heart,
  MessageCircle,
  BarChart3,
  Users,
  Building2,
  ArrowRight,
  Check,
  Shield,
  ChevronDown,
  Upload,
  Sparkles,
  Globe,
  Headphones,
  Lock,
  Server,
  Zap,
  Clock,
  TrendingUp,
  Target,
  Eye,
  UserPlus,
  Play,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Praktikumsgenie für Betriebe – Praktikanten finden per Video & Matching',
  description:
    'Finden Sie motivierte Praktikanten mit TikTok-Style Videos, intelligentem Matching und Direkt-Chat. Erreichen Sie die Generation Z dort, wo sie ist. Ab 0 EUR/Monat.',
  alternates: { canonical: '/fuer-betriebe' },
  openGraph: {
    title: 'Praktikanten finden per Video & Matching | Praktikumsgenie für Betriebe',
    description:
      'Klassische Stellenanzeigen erreichen Gen Z nicht mehr. Praktikumsgenie verbindet Betriebe und Schüler durch authentische Kurzvideos und Swipe-Matching.',
    url: 'https://praktikumsgenie.de/fuer-betriebe',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praktikumsgenie für Betriebe – Praktikanten finden per Video & Matching',
    description:
      'Erreichen Sie Gen Z mit authentischen Kurzvideos. Intelligentes Matching, Direkt-Chat, Analytics Dashboard.',
  },
};

const faqs = [
  {
    q: 'Wie viel kostet Praktikumsgenie für Betriebe?',
    a: 'Sie können kostenlos starten mit einer Stellenanzeige und einem Firmenprofil. Unsere Paid-Pläne beginnen ab 49 EUR/Monat für den Starter-Plan. Der beliebteste Professional-Plan kostet 149 EUR/Monat und beinhaltet 10 Stellenanzeigen, unbegrenzt Videos, Priority-Platzierung und volle Analytics.',
  },
  {
    q: 'Welche Videos soll ich hochladen?',
    a: 'Am besten funktionieren authentische 30-90 Sekunden Videos, in denen echte Mitarbeiter ihren Arbeitsalltag zeigen. Keine Hochglanz-Produktion nötig – Smartphone reicht! Zeigen Sie Ihren Betrieb, die Aufgaben und das Team. Authentizität schlägt Perfektion.',
  },
  {
    q: 'Wie funktioniert das Matching?',
    a: 'Schüler und Studenten sehen Ihre Videos im Feed und können nach rechts swipen, wenn ihnen Ihr Betrieb gefällt. Wenn Sie den Kandidaten ebenfalls spannend finden, entsteht ein Match. Erst nach dem beidseitigen Like können Sie miteinander chatten – das sorgt für qualitativ hochwertige Kontakte.',
  },
  {
    q: 'Muss ich technisches Wissen haben?',
    a: 'Nein. Unser Dashboard ist intuitiv und selbsterklärend. Videos können Sie direkt vom Smartphone hochladen – wir kümmern uns automatisch um Konvertierung, Optimierung und Thumbnail-Erstellung. In 5 Minuten ist Ihr erstes Video online.',
  },
  {
    q: 'Wie erreiche ich Schüler in meiner Region?',
    a: 'Praktikumsgenie zeigt Schülern bevorzugt Betriebe in ihrer Nähe. Sie geben Ihren Standort bei der Registrierung an. Kandidaten können nach Umkreis filtern – so erreichen Sie genau die jungen Menschen, die in Ihrer Region ein Praktikum suchen.',
  },
  {
    q: 'Kann ich mehrere Mitarbeiter einladen?',
    a: 'Ja! Ab dem Professional-Plan können Sie mehrere Team-Mitglieder einladen. Jeder Mitarbeiter erhält eigene Zugangsdaten und kann Videos hochladen, Kandidaten bewerten und chatten. Ideal für größere Betriebe mit mehreren Abteilungen.',
  },
  {
    q: 'Ist Praktikumsgenie DSGVO-konform?',
    a: 'Absolut. Wir sind ein deutsches Unternehmen, unsere Server stehen in Deutschland und wir erfüllen alle Anforderungen der DSGVO. Daten werden verschlüsselt übertragen und gespeichert. Schüler unter 16 benötigen die Einwilligung ihrer Erziehungsberechtigten.',
  },
  {
    q: 'Wie schnell kann ich starten?',
    a: 'Sofort. Die Registrierung dauert 2 Minuten: Firmendaten eingeben, Benutzerkonto anlegen, fertig. Danach können Sie direkt Ihr Firmenprofil vervollständigen, Stellenanzeigen erstellen und Videos hochladen. Innerhalb von 15 Minuten sind Sie sichtbar.',
  },
  {
    q: 'Was unterscheidet Praktikumsgenie von klassischen Jobbörsen?',
    a: 'Jobbörsen setzen auf Text-Stellenanzeigen – die Gen Z nicht liest. Wir setzen auf Video, Matching und Chat. Schüler erleben Ihren Betrieb in 30 Sekunden, statt Fließtext zu lesen. Das Ergebnis: höhere Reichweite, bessere Passung und schnellere Besetzung.',
  },
  {
    q: 'Kann ich den Erfolg meiner Videos messen?',
    a: 'Ja, unser Analytics Dashboard zeigt Ihnen in Echtzeit: Videoaufrufe, Likes, Match-Rate, Chat-Anfragen und Conversion. So sehen Sie genau, welche Videos funktionieren und können Ihre Strategie optimieren.',
  },
];

export default function FuerBetriebePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://praktikumsgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Für Betriebe' },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Praktikumsgenie für Betriebe – Praktikanten finden per Video & Matching',
    description:
      'Finden Sie motivierte Praktikanten mit TikTok-Style Videos, intelligentem Matching und Direkt-Chat.',
    url: 'https://praktikumsgenie.de/fuer-betriebe',
    publisher: {
      '@type': 'Organization',
      name: 'Praktikumsgenie',
      url: 'https://praktikumsgenie.de',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Hero Section */}
        <section className="relative bg-gray-900 pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-gray-900 to-teal-900/30" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium">Für Betriebe</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-4 py-1.5 text-sm text-emerald-300 mb-6">
                  <Building2 className="h-4 w-4" />
                  Für Praktikumsbetriebe
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Finden Sie die besten Praktikanten –{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    mit Praktikumsgenie
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-xl">
                  Klassische Stellenanzeigen? Liest Gen Z nicht. Zeigen Sie Ihren Betrieb mit
                  authentischen Kurzvideos und finden Sie motivierte Praktikanten per Matching.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://dashboard.praktikumsgenie.de/login"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-semibold text-white hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25"
                  >
                    Kostenlos registrieren
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href="#so-starten-sie"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-600 px-8 py-4 text-base font-medium text-gray-200 hover:bg-white/5 transition-colors"
                  >
                    So funktioniert&apos;s
                    <ChevronDown className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Eye,
                    value: '30-90s',
                    label: 'Kurzvideos',
                    desc: 'Authentische Einblicke',
                  },
                  {
                    icon: Heart,
                    value: '2x Like',
                    label: 'Matching',
                    desc: 'Beidseitiges Interesse',
                  },
                  {
                    icon: MessageCircle,
                    value: 'Direkt',
                    label: 'Chat',
                    desc: 'Ohne Formalitäten',
                  },
                  {
                    icon: BarChart3,
                    value: 'Echtzeit',
                    label: 'Analytics',
                    desc: 'Volle Transparenz',
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-colors"
                  >
                    <card.icon className="h-8 w-8 text-emerald-400 mb-3" />
                    <p className="text-2xl font-bold text-white">{card.value}</p>
                    <p className="font-medium text-gray-200 mt-1">{card.label}</p>
                    <p className="text-sm text-gray-400 mt-0.5">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm text-red-600 mb-4">
                <Target className="h-4 w-4" />
                Die Herausforderung
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Warum klassisches Praktikanten-Recruiting nicht mehr funktioniert
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Die Generation Z tickt anders. Wer junge Talente gewinnen will, muss sich anpassen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: '73%',
                  title: 'der Praktikumsstellen bleiben unbesetzt',
                  description:
                    'Immer mehr Betriebe finden keine Praktikanten. Die Zahl der unbesetzten Stellen erreicht jedes Jahr neue Rekordwerte. Besonders betroffen: Handwerk, Gastronomie und Gesundheitswesen.',
                  color: 'border-red-200 bg-red-50/50',
                  statColor: 'text-red-600',
                },
                {
                  stat: '8 Sek.',
                  title: 'Aufmerksamkeitsspanne der Gen Z',
                  description:
                    'Lange Stellenanzeigen mit Fließtext? Werden nicht gelesen. Gen Z ist mit TikTok, Instagram und YouTube aufgewachsen. Sie entscheiden in Sekunden, ob etwas relevant ist – nicht in Minuten.',
                  color: 'border-orange-200 bg-orange-50/50',
                  statColor: 'text-orange-600',
                },
                {
                  stat: '86%',
                  title: 'wollen authentische Einblicke',
                  description:
                    'Schüler wollen sehen, wie der Arbeitsalltag wirklich aussieht. Hochglanz-Broschüren und Stockfotos wirken abschreckend. Was zählt: echte Menschen, echte Aufgaben, echte Atmosphäre.',
                  color: 'border-amber-200 bg-amber-50/50',
                  statColor: 'text-amber-600',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border-2 ${item.color} p-8`}
                >
                  <p className={`text-5xl font-bold ${item.statColor} mb-4`}>{item.stat}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm text-green-600 mb-4">
                <Sparkles className="h-4 w-4" />
                Unsere Lösung
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                So erreichen Sie die Generation Z
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Praktikumsgenie verbindet Betriebe und Schüler auf eine völlig neue Art:
                mit Videos, Matching und Chat – dort, wo Gen Z zu Hause ist.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Video className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">TikTok-Style Videos</h3>
                <p className="text-emerald-100 leading-relaxed mb-6">
                  Laden Sie 30-90 Sekunden Kurzvideos hoch, in denen Ihre Mitarbeiter den Arbeitsalltag
                  zeigen. Smartphone genügt – wir kümmern uns um die technische Optimierung.
                  Schüler schauen sich Videos an, keine Stellenanzeigen.
                </p>
                <ul className="space-y-2">
                  {['Automatische Konvertierung (HD 720p)', 'Thumbnail-Generierung', 'Feed-Platzierung'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-emerald-100">
                      <Check className="h-4 w-4 text-emerald-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Intelligentes Matching</h3>
                <p className="text-teal-100 leading-relaxed mb-6">
                  Kein Bewerber-Spam, keine unpassenden Kandidaten. Unser Matching basiert auf
                  beidseitigem Interesse: Erst wenn beide Seiten &quot;Like&quot; sagen,
                  entsteht ein Match. Das garantiert Qualität statt Quantität.
                </p>
                <ul className="space-y-2">
                  {['Beidseitiges Like-System', 'Interessen-basiert', 'Regionale Priorisierung'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-teal-100">
                      <Check className="h-4 w-4 text-teal-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Direkt-Chat</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Nach dem Match geht es direkt los: Chat in Echtzeit, ohne Anschreiben und
                  Formalitäten. Schüler kommunizieren so, wie sie es gewohnt sind –
                  unkompliziert und schnell. Das beschleunigt den gesamten Prozess.
                </p>
                <ul className="space-y-2">
                  {['Echtzeit-Nachrichten', 'Keine Bewerbungsunterlagen nötig', 'Push-Benachrichtigungen'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-blue-100">
                      <Check className="h-4 w-4 text-blue-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Alles, was Sie für erfolgreiches Praktikanten-Recruiting brauchen
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Von Video-Upload bis Analytics – unser Dashboard bietet Ihnen alle Werkzeuge,
                um die besten Praktikanten zu finden und zu begeistern.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Upload,
                  title: 'Video-Upload & Management',
                  description:
                    'Laden Sie Videos direkt vom Smartphone oder Computer hoch. Automatische Konvertierung in HD (720p MP4/H.264), Thumbnail-Generierung und Vorschau. Verwalten Sie alle Videos zentral im Dashboard.',
                  color: 'bg-emerald-100 text-emerald-600',
                },
                {
                  icon: Heart,
                  title: 'Kandidaten-Matching',
                  description:
                    'Sehen Sie, welche Schüler Ihre Videos geliked haben. Liken Sie zurück und schaffen Sie ein Match. Das beidseitige Like-System sorgt für qualitativ hochwertige Kontakte.',
                  color: 'bg-teal-100 text-teal-600',
                },
                {
                  icon: MessageCircle,
                  title: 'Echtzeit-Chat',
                  description:
                    'Nach dem Match chatten Sie direkt mit den Kandidaten. Echtzeit-Nachrichten, Lesebestätigungen und Tipp-Indikator. Kommunikation auf Augenhöhe, ohne Formalitäten.',
                  color: 'bg-blue-100 text-blue-600',
                },
                {
                  icon: BarChart3,
                  title: 'Analytics Dashboard',
                  description:
                    'Sehen Sie in Echtzeit: Videoaufrufe, Likes, Matches, Chat-Anfragen und Conversion-Rates. Verstehen Sie, welche Videos funktionieren und optimieren Sie Ihre Strategie.',
                  color: 'bg-emerald-100 text-emerald-600',
                },
                {
                  icon: Users,
                  title: 'Team-Verwaltung',
                  description:
                    'Laden Sie Mitarbeiter als Team-Mitglieder ein. Jeder erhält eigene Zugangsdaten und kann eigenständig Videos hochladen, Kandidaten bewerten und chatten.',
                  color: 'bg-amber-100 text-amber-600',
                },
                {
                  icon: Building2,
                  title: 'Firmenprofil',
                  description:
                    'Präsentieren Sie Ihren Betrieb mit Logo, Beschreibung, Branche, Standort und Mitarbeiterzahl. Ihr Profil ist die digitale Visitenkarte für die nächste Generation.',
                  color: 'bg-indigo-100 text-indigo-600',
                },
                {
                  icon: Zap,
                  title: 'Praktikumsanzeigen erstellen',
                  description:
                    'Erstellen Sie Praktikumsanzeigen in Minuten: Bereich auswählen, Anforderungen definieren, Benefits beschreiben. Automatisch mit Ihren Videos verknüpft für maximale Wirkung.',
                  color: 'bg-yellow-100 text-yellow-600',
                },
                {
                  icon: Globe,
                  title: 'Regionale Sichtbarkeit',
                  description:
                    'Ihr Betrieb wird Schülern in Ihrer Region priorisiert angezeigt. Umkreissuche, Standort-Filter und regionale Feed-Platzierung bringen Ihnen Kandidaten aus der Nähe.',
                  color: 'bg-teal-100 text-teal-600',
                },
                {
                  icon: TrendingUp,
                  title: 'Priority-Platzierung',
                  description:
                    'Im Professional- und Enterprise-Plan erscheinen Ihre Videos weiter oben im Feed. Mehr Sichtbarkeit bedeutet mehr Likes, mehr Matches und mehr qualifizierte Kandidaten.',
                  color: 'bg-orange-100 text-orange-600',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-5`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Start */}
        <section id="so-starten-sie" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                In 4 Schritten zum ersten Match
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Starten Sie in wenigen Minuten – ohne technisches Wissen und ohne Verpflichtungen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: UserPlus,
                  title: 'Kostenlos registrieren',
                  description:
                    'Firmendaten und Benutzerkonto anlegen. Dauert 2 Minuten, keine Kreditkarte nötig.',
                },
                {
                  icon: Building2,
                  title: 'Firmenprofil anlegen',
                  description:
                    'Logo hochladen, Betrieb beschreiben, Branche und Standort angeben. Ihre digitale Visitenkarte.',
                },
                {
                  icon: Play,
                  title: 'Videos hochladen',
                  description:
                    'Kurze, authentische Videos von Ihrem Team und dem Arbeitsalltag. Smartphone genügt.',
                },
                {
                  icon: Heart,
                  title: 'Kandidaten matchen',
                  description:
                    'Schüler liken Ihre Videos. Sie liken zurück. Match! Dann chatten Sie direkt.',
                },
              ].map((item) => (
                <div key={item.title} className="relative text-center group">
                  <div className="mx-auto mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 group-hover:shadow-xl group-hover:shadow-emerald-500/30 transition-shadow">
                      <item.icon className="h-9 w-9" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="https://dashboard.praktikumsgenie.de/login"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Jetzt kostenlos starten
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Transparente Preise, keine versteckten Kosten
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Starten Sie kostenlos und upgraden Sie, wenn Ihr Recruiting wächst.
                Alle Preise netto, monatlich kündbar.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: 'Free',
                  price: '0',
                  period: '',
                  description: 'Zum Ausprobieren',
                  features: [
                    '1 Praktikumsanzeige',
                    '1 Video',
                    'Firmenprofil',
                    'Sichtbar im Feed',
                    'Basis-Chat',
                  ],
                  highlighted: false,
                  cta: 'Kostenlos starten',
                },
                {
                  name: 'Starter',
                  price: '49',
                  period: 'EUR/Monat',
                  description: 'Für kleine Betriebe',
                  features: [
                    '3 Praktikumsanzeigen',
                    '3 Videos',
                    'Matching + Chat',
                    'Basis-Analytics',
                    'E-Mail-Support',
                  ],
                  highlighted: false,
                  cta: 'Starter wählen',
                },
                {
                  name: 'Professional',
                  price: '149',
                  period: 'EUR/Monat',
                  description: 'Beliebteste Wahl',
                  features: [
                    '10 Praktikumsanzeigen',
                    'Unbegrenzt Videos',
                    'Priority-Platzierung',
                    'Volle Analytics',
                    'Team-Zugang (5 Nutzer)',
                    'Priority Support',
                  ],
                  highlighted: true,
                  cta: 'Professional wählen',
                },
                {
                  name: 'Enterprise',
                  price: '399',
                  period: 'EUR/Monat',
                  description: 'Für große Betriebe',
                  features: [
                    'Unbegrenzt alles',
                    'Unbegrenzt Team-Nutzer',
                    'API-Zugang',
                    'Premium Support',
                    'Individuelle Beratung',
                    'Account Manager',
                  ],
                  highlighted: false,
                  cta: 'Kontakt aufnehmen',
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 flex flex-col ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white ring-4 ring-emerald-200 scale-[1.03] shadow-2xl'
                      : 'bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="text-xs font-semibold uppercase tracking-wide text-emerald-200 mb-2">
                      Empfohlen
                    </div>
                  )}
                  <h3
                    className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${plan.highlighted ? 'text-emerald-200' : 'text-gray-500'}`}
                  >
                    {plan.description}
                  </p>
                  <p className="mt-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span
                        className={`text-sm ml-1 ${plan.highlighted ? 'text-emerald-200' : 'text-gray-500'}`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </p>
                  <ul className="mt-8 space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                            plan.highlighted ? 'text-emerald-200' : 'text-emerald-600'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://dashboard.praktikumsgenie.de/login"
                    className={`mt-8 block text-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-white text-emerald-600 hover:bg-gray-100'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Warum Betriebe Praktikumsgenie vertrauen
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'DSGVO-konform',
                  description:
                    'Volle Compliance mit der Datenschutz-Grundverordnung. Verschlüsselte Datenübertragung, transparente Datenverarbeitung und klare Löschfristen. Schüler unter 16 benötigen die Einwilligung der Erziehungsberechtigten.',
                },
                {
                  icon: Server,
                  title: 'Deutsche Server',
                  description:
                    'Alle Daten werden auf Servern in Deutschland gespeichert und verarbeitet. Kein Transfer in Drittländer, kein US Cloud Act. Ihre Daten und die Ihrer Kandidaten sind sicher.',
                },
                {
                  icon: Headphones,
                  title: 'Persönlicher Support',
                  description:
                    'Unser deutschsprachiges Support-Team hilft Ihnen bei allen Fragen – von der Einrichtung bis zur Optimierung Ihrer Videos. Per E-Mail, Chat oder Telefon.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Lock, label: 'SSL-verschlüsselt' },
                { icon: Server, label: 'Hosting in DE' },
                { icon: Shield, label: 'DSGVO-konform' },
                { icon: Clock, label: '99,9% Uptime' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium"
                >
                  <badge.icon className="h-4 w-4" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Häufige Fragen von Betrieben
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Alles, was Sie wissen müssen – auf einen Blick.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-200 shadow-sm"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Bereit, die besten Praktikanten zu finden?
            </h2>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Registrieren Sie sich kostenlos und laden Sie noch heute Ihr erstes Video hoch.
              Keine Kreditkarte, keine Verpflichtung, kein Risiko.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://dashboard.praktikumsgenie.de/login"
                className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-emerald-600 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Building2 className="h-5 w-5" />
                Kostenlos registrieren
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Bereits registriert?{' '}
              <Link
                href="https://dashboard.praktikumsgenie.de/login"
                className="text-white/80 underline hover:text-white"
              >
                Zum Dashboard einloggen
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
