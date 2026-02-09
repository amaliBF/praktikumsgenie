import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  MapPin,
  ChevronRight,
  Building2,
  Clock,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  FileText,
  Shield,
  Globe,
  Users,
  ScrollText,
  ClipboardCheck,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import KontaktForm from './KontaktForm';

export const metadata: Metadata = {
  title: 'Kontakt - Wir helfen dir weiter',
  description:
    'Kontaktiere das Praktikumsgenie-Team. Fragen, Support oder Feedback - wir sind für dich da. E-Mail: praktikum@genieportal.de',
  alternates: {
    canonical: '/kontakt',
  },
  openGraph: {
    title: 'Kontakt - Praktikumsgenie | Wir helfen dir weiter',
    description:
      'Kontaktiere uns per E-Mail oder Kontaktformular. Wir antworten in der Regel innerhalb von 24 Stunden.',
    url: 'https://praktikumsgenie.de/kontakt',
    siteName: 'Praktikumsgenie',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt - Praktikumsgenie',
    description:
      'Kontaktiere das Praktikumsgenie-Team. Wir sind für dich da!',
  },
};

const faqItems = [
  {
    question: 'Wie schnell antwortet ihr auf Anfragen?',
    answer:
      'Wir antworten in der Regel innerhalb von 24 Stunden auf alle Anfragen. Bei dringenden Support-Anfragen bemühen wir uns, noch schneller zu reagieren. Premium-Support-Kunden erhalten Antworten innerhalb von 4 Stunden während der Geschäftszeiten.',
  },
  {
    question: 'Ich bin Schüler und habe ein technisches Problem. An wen wende ich mich?',
    answer:
      'Schreibe uns einfach eine E-Mail an praktikum@genieportal.de oder nutze das Kontaktformular mit dem Betreff "Support". Beschreibe dein Problem möglichst genau und wir helfen dir schnellstmöglich weiter. Praktikumsgenie ist für dich komplett kostenlos - auch der Support!',
  },
  {
    question: 'Wie kann ich mein Unternehmen auf Praktikumsgenie registrieren?',
    answer:
      'Ganz einfach: Besuche dashboard.genieportal.de und klicke auf "Registrieren". In nur 2 Schritten legst du dein Firmenprofil und Benutzerkonto an. Danach kannst du sofort Praktikumsanzeigen erstellen und Videos hochladen. Der Start ist kostenlos!',
  },
  {
    question: 'Bietet ihr Schulungen oder Demos für Betriebe an?',
    answer:
      'Ja! Wir bieten kostenlose 15-minütige Video-Demos an, in denen wir euch alle Funktionen zeigen. Kontaktiert uns einfach über das Formular mit dem Betreff "Für Betriebe" und wir vereinbaren einen Termin.',
  },
  {
    question: 'Kann ich Praktikumsgenie für eine Presseanfrage kontaktieren?',
    answer:
      'Natürlich! Für Presseanfragen nutze bitte das Kontaktformular mit dem Betreff "Presse" oder schreibe direkt an praktikum@genieportal.de. Wir stellen gerne Pressematerial, Interviews und Hintergrundinformationen zur Verfügung.',
  },
  {
    question: 'Wo finde ich die rechtlichen Informationen (Impressum, Datenschutz)?',
    answer:
      'Unser Impressum findest du unter praktikumsgenie.de/impressum, die Datenschutzerklärung unter praktikumsgenie.de/datenschutz und die AGB unter praktikumsgenie.de/agb. Links zu allen rechtlichen Seiten findest du auch im Footer jeder Seite.',
  },
];

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Startseite',
      item: 'https://praktikumsgenie.de',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Kontakt',
      item: 'https://praktikumsgenie.de/kontakt',
    },
  ],
};

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontakt - Praktikumsgenie',
  description: 'Kontaktiere das Praktikumsgenie-Team für Fragen, Support oder Feedback.',
  url: 'https://praktikumsgenie.de/kontakt',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Praktikumsgenie',
    url: 'https://praktikumsgenie.de',
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'Butterflies IT UG (haftungsbeschränkt)',
    url: 'https://praktikumsgenie.de',
    email: 'praktikum@genieportal.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hagenower Str. 73',
      addressLocality: 'Schwerin',
      postalCode: '19061',
      addressCountry: 'DE',
    },
    sameAs: [
      'https://instagram.com/praktikumsgenie',
      'https://tiktok.com/@praktikumsgenie',
      'https://youtube.com/@praktikumsgenie',
    ],
  },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-[#FFF5F6]">
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 text-white overflow-hidden">
        <div className="absolute inset-0 confetti-dots opacity-10" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Startseite
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">Kontakt</span>
          </nav>

          <div className="sticker-badge !bg-white/15 !border-white/30 !text-white backdrop-blur mb-8 mx-auto">
            <Mail className="h-4 w-4" />
            <span>Wir sind für dich da</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Kontaktiere uns
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Hast du Fragen, Feedback oder brauchst Hilfe? Unser Team antwortet in der Regel innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 -mt-24 relative z-10 scrapbook-grid">
            <a
              href="#kontaktformular"
              className="feature-box rounded-2xl p-8 text-center hover:shadow-xl transition-shadow block bg-white"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white mb-5">
                <ScrollText className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kontaktformular</h3>
              <p className="text-gray-600">
                Schreibe uns direkt über unser Formular. Wir melden uns schnellstmöglich zurück.
              </p>
              <span className="inline-flex items-center gap-1 text-rose-600 font-medium mt-3 text-sm">
                Zum Formular
                <ChevronRight className="h-4 w-4" />
              </span>
            </a>

            <div className="feature-box rounded-2xl p-8 text-center hover:shadow-xl transition-shadow bg-white">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white mb-5">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">E-Mail</h3>
              <a
                href="mailto:praktikum@genieportal.de"
                className="text-rose-600 hover:text-rose-700 font-medium transition-colors block"
              >
                praktikum@genieportal.de
              </a>
              <p className="text-sm text-gray-500 mt-2">Für alle Anfragen</p>
            </div>

            <div className="feature-box rounded-2xl p-8 text-center hover:shadow-xl transition-shadow bg-white">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white mb-5">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Antwortzeiten</h3>
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">E-Mail:</span>
                <br />
                Innerhalb von 24 Stunden
              </p>
              <p className="text-gray-600 mt-3">
                <span className="font-medium text-gray-900">Premium Support:</span>
                <br />
                Innerhalb von 4 Stunden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section id="kontaktformular" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <KontaktForm />
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="pin-card rounded-2xl p-8">
                <h3 className="board-divider text-lg font-bold text-gray-900 mb-4">Wie können wir helfen?</h3>
                <ul className="space-y-4 mt-6">
                  {[
                    {
                      icon: Users,
                      title: 'Für Schüler & Studenten',
                      description: 'Fragen zur App, Profil-Hilfe, technischer Support',
                    },
                    {
                      icon: Building2,
                      title: 'Für Betriebe',
                      description: 'Registrierung, Pakete, Demos, Firmenprofil',
                    },
                    {
                      icon: Globe,
                      title: 'Presse & Kooperationen',
                      description: 'Pressematerial, Interviews, Partnerschaften',
                    },
                    {
                      icon: Shield,
                      title: 'Datenschutz & Rechtliches',
                      description: 'DSGVO-Anfragen, Datenlösch-Anfragen',
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 text-white flex-shrink-0 mt-0.5">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tape-card rounded-2xl p-8 pt-10">
                <h3 className="board-divider text-lg font-bold text-gray-900 mb-4">Schnell-Links</h3>
                <ul className="space-y-3 mt-6">
                  <li>
                    <Link
                      href="https://dashboard.genieportal.de/login"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-rose-600 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                        <Building2 className="h-4 w-4 text-rose-600" />
                      </div>
                      <span>Betriebe-Dashboard</span>
                      <ExternalLink className="h-3.5 w-3.5 ml-auto text-gray-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/preise"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-rose-600 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                        <FileText className="h-4 w-4 text-rose-600" />
                      </div>
                      <span>Preise & Pakete</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-auto text-gray-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/impressum"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-rose-600 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                        <Shield className="h-4 w-4 text-rose-600" />
                      </div>
                      <span>Impressum</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-auto text-gray-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/datenschutz"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-rose-600 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                        <Shield className="h-4 w-4 text-rose-600" />
                      </div>
                      <span>Datenschutzerklärung</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-auto text-gray-400" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="sticker-badge mb-4">
              <HelpCircle className="h-4 w-4" />
              <span>Häufig gestellte Fragen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Häufige Fragen
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Vielleicht findest du hier schon die Antwort auf deine Frage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 scrapbook-grid">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="tape-card rounded-xl p-6 pt-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white text-xs font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{item.question}</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-9">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="pin-card rounded-2xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Über{' '}
                <span className="gradient-text-discovery">
                  Praktikumsgenie
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Praktikumsgenie ist eine Marke der Butterflies IT UG (haftungsbeschränkt) mit Sitz in Schwerin.
                Unsere Mission: Die Praktikumssuche für junge Menschen so einfach und spaßig wie möglich machen - und gleichzeitig Betrieben helfen, die besten Praktikanten zu finden.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-rose-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Butterflies IT UG (haftungsbeschränkt)</p>
                    <p className="text-gray-600 text-sm">Handelsregister: Amtsgericht Schwerin, HRB 12765</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-rose-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">Hagenower Str. 73, 19061 Schwerin, Deutschland</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-rose-500 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="mailto:praktikum@genieportal.de"
                      className="text-rose-600 hover:text-rose-700 font-medium transition-colors"
                    >
                      praktikum@genieportal.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-rose-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">USt-IdNr.: DE301178757</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/impressum"
                  className="text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors flex items-center gap-1"
                >
                  Impressum
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/datenschutz"
                  className="text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors flex items-center gap-1"
                >
                  Datenschutz
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/agb"
                  className="text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors flex items-center gap-1"
                >
                  AGB
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white">
              <h3 className="text-2xl font-bold mb-3">Folge uns</h3>
              <p className="text-gray-400 mb-8">
                Bleib auf dem Laufenden und entdecke spannende Inhalte rund um Praktikum, Karriere und Berufsorientierung.
              </p>

              <div className="space-y-4">
                <a
                  href="https://instagram.com/praktikumsgenie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold group-hover:text-rose-300 transition-colors">Instagram</p>
                    <p className="text-sm text-gray-400">@praktikumsgenie</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://tiktok.com/@praktikumsgenie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center flex-shrink-0 border border-white/20">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.44V13a8.27 8.27 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold group-hover:text-rose-300 transition-colors">TikTok</p>
                    <p className="text-sm text-gray-400">@praktikumsgenie</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://youtube.com/@praktikumsgenie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold group-hover:text-rose-300 transition-colors">YouTube</p>
                    <p className="text-sm text-gray-400">@praktikumsgenie</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 overflow-hidden">
        <div className="absolute inset-0 confetti-dots opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bereit loszulegen?
          </h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Registriere deinen Betrieb jetzt kostenlos und erreiche motivierte Praktikanten in deiner Region.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.genieportal.de/login"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-rose-600 hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
            >
              <Building2 className="h-4 w-4" />
              Als Betrieb registrieren
            </Link>
            <Link
              href="/preise"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Preise ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
