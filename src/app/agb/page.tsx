import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'AGB - Praktikumsgenie',
  description: 'Allgemeine Geschäftsbedingungen von Praktikumsgenie.de - Butterflies IT UG (haftungsbeschränkt).',
  alternates: {
    canonical: '/agb',
  },
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
      name: 'AGB',
      item: 'https://praktikumsgenie.de/agb',
    },
  ],
};

export default function AgbPage() {
  return (
    <div className="min-h-screen bg-[#FFF5F6]">
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
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
            <span className="text-white font-medium">AGB</span>
          </nav>

          <div className="sticker-badge !bg-white/15 !border-white/30 !text-white backdrop-blur mb-8 mx-auto">
            <FileText className="h-4 w-4" />
            <span>Allgemeine Geschäftsbedingungen</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Nutzungsbedingungen für die Plattform Praktikumsgenie
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="pin-card rounded-2xl p-8 sm:p-12">

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-2 mb-4">1. Geltungsbereich</h2>
            <p>
              Diese AGB gelten für alle Verträge über die Nutzung der Plattform praktikumsgenie.de
              zwischen der Butterflies IT UG (haftungsbeschränkt), Hagenower Str. 73, 19061 Schwerin
              (nachfolgend &bdquo;Betreiber&ldquo;) und dem Nutzer. Es wird unterschieden zwischen
              Schülern/Studenten (Praktikumssuchende) und gewerblichen Nutzern (Praktikumsbetriebe).
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">2. Leistungsbeschreibung</h2>
            <p>
              Praktikumsgenie ist eine Vermittlungsplattform, die Schüler/Studenten und Praktikumsbetriebe
              zusammenbringt. Die Plattform umfasst:
            </p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li>Einen Video-Feed mit Kurzvideos von Praktikumsbetrieben</li>
              <li>Ein Swipe-basiertes Matching-System zwischen Schülern und Betrieben</li>
              <li>Eine Chat-Funktion nach erfolgtem Match</li>
              <li>Einen KI-gestützten Praktikumsfinder</li>
              <li>Ein Dashboard für Betriebe zur Verwaltung von Praktikumsanzeigen, Videos und Kandidaten</li>
            </ul>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">3. Registrierung und Nutzerkonto</h2>
            <p>
              Für die Nutzung ist eine Registrierung erforderlich. Bei der Registrierung sind wahrheitsgemäße
              Angaben zu machen. Minderjährige Nutzer unter 16 Jahren benötigen die Einwilligung eines
              Erziehungsberechtigten.
            </p>
            <p className="mt-2">
              Jeder Nutzer darf nur ein Konto erstellen. Die Zugangsdaten sind vertraulich zu behandeln.
              Der Nutzer haftet für alle Aktivitäten, die über sein Konto vorgenommen werden.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">4. Kosten und Abonnements</h2>
            <p>
              <strong>Für Schüler und Studenten:</strong> Die Nutzung der Plattform ist vollständig kostenlos.
            </p>
            <p className="mt-2">
              <strong>Für Betriebe:</strong> Es stehen verschiedene Abonnement-Modelle zur Verfügung
              (Free, Starter, Professional, Enterprise). Die aktuellen Preise sind auf der Preisseite
              einsehbar. Kostenpflichtige Abonnements werden monatlich abgerechnet.
            </p>
            <p className="mt-2">
              Die Zahlung erfolgt per PayPal (Kreditkarte, SEPA-Lastschrift, PayPal-Guthaben o.ä.) vor Leistungserbringung.
              Abonnements verlängern sich automatisch, sofern nicht vor Ablauf der Laufzeit gekündigt wird.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">5. Widerrufsbelehrung</h2>
            <p>
              <strong>Widerrufsrecht:</strong> Gewerbliche Nutzer (Betriebe) haben als Verbraucher das Recht,
              binnen 14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. Die Widerrufsfrist beträgt
              14 Tage ab dem Tag des Vertragsschlusses.
            </p>
            <p className="mt-2">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Butterflies IT UG, Hagenower Str. 73,
              19061 Schwerin, E-Mail: praktikum@genieportal.de) mittels einer eindeutigen Erklärung
              über Ihren Entschluss informieren.
            </p>
            <p className="mt-2">
              Das Widerrufsrecht erlischt bei digitalen Inhalten vorzeitig, wenn der Nutzer ausdrücklich
              zugestimmt hat, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen
              wird (§ 356 Abs. 5 BGB).
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">6. Pflichten der Nutzer</h2>
            <p>Der Nutzer verpflichtet sich:</p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li>Keine rechtswidrigen, beleidigenden oder jugendgefährdenden Inhalte zu veröffentlichen</li>
              <li>Keine falschen oder irreführenden Angaben zu machen</li>
              <li>Die Rechte Dritter (insbesondere Urheberrechte, Persönlichkeitsrechte) zu achten</li>
              <li>Die Plattform nicht für andere Zwecke als die bestimmungsgemäße Nutzung zu verwenden</li>
              <li>Keine automatisierten Zugriffe (Bots, Scraper) auf die Plattform durchzuführen</li>
            </ul>
            <p>
              Betriebe stellen sicher, dass für alle in Videos gezeigten Personen eine Einwilligung
              zur Veröffentlichung vorliegt.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">7. Inhalte und Videos</h2>
            <p>
              Betriebe behalten die Urheberrechte an ihren hochgeladenen Videos. Mit dem Upload räumen sie
              dem Betreiber ein einfaches, nicht-exklusives Nutzungsrecht zur Anzeige der Videos auf der
              Plattform ein. Der Betreiber behält sich das Recht vor, Videos abzulehnen oder zu entfernen,
              die gegen diese AGB, geltendes Recht oder Jugendschutzbestimmungen verstoßen.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">8. Haftung</h2>
            <p>
              Der Betreiber vermittelt lediglich den Kontakt zwischen Schülern/Studenten und Betrieben.
              Für das Zustandekommen eines Praktikumsvertrags wird keine Haftung übernommen.
            </p>
            <p className="mt-2">
              Die Haftung des Betreibers ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit
              gesetzlich zulässig. Bei leichter Fahrlässigkeit haftet der Betreiber nur bei Verletzung
              wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den vorhersehbaren,
              vertragstypischen Schaden.
            </p>
            <p className="mt-2">
              Der Betreiber übernimmt keine Haftung für die Richtigkeit der von Nutzern oder Betrieben
              bereitgestellten Informationen. Die KI-gestützten Praktikumsempfehlungen sind unverbindlich
              und stellen keine Berufsberatung dar.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">9. Kündigung und Kontolöschung</h2>
            <p>
              Schüler und Studenten können ihr Konto jederzeit löschen. Kostenpflichtige Betriebe-Abonnements
              können zum Ende der jeweiligen Laufzeit gekündigt werden.
            </p>
            <p className="mt-2">
              Der Betreiber behält sich das Recht vor, Nutzerkonten bei Verstoß gegen diese AGB zu sperren
              oder zu löschen. Bei Löschung werden personenbezogene Daten gemäß der Datenschutzerklärung
              behandelt.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">10. Jugendschutz</h2>
            <p>
              Der Betreiber verpflichtet sich zu angemessenen Maßnahmen zum Schutz minderjähriger Nutzer.
              Dazu gehören die Moderation von Inhalten, die Meldung von unangemessenem Verhalten und
              die Möglichkeit, Nutzer zu blockieren. Chat-Nachrichten sind nur nach beidseitigem Match möglich.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">11. Datenschutz</h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{' '}
              <Link href="/datenschutz" className="text-rose-600 hover:underline">Datenschutzerklärung</Link>.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">12. Änderung der AGB</h2>
            <p>
              Der Betreiber behält sich das Recht vor, diese AGB jederzeit anzupassen. Nutzer werden über
              Änderungen per E-Mail oder In-App-Benachrichtigung informiert. Die weitere Nutzung der Plattform
              nach Inkrafttreten der Änderungen gilt als Zustimmung.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">13. Anwendbares Recht und Gerichtsstand</h2>
            <p>
              Es findet ausschließlich deutsches Recht Anwendung unter Ausschluss des UN-Kaufrechts.
              Gerichtsstand ist, soweit gesetzlich zulässig, Schwerin.
            </p>

            <div className="mt-10 pt-6 border-t border-rose-100">
              <p className="text-sm text-gray-500">Stand: Februar 2026</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
