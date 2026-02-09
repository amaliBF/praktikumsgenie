import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Praktikumsgenie',
  description: 'Datenschutzerklärung von Praktikumsgenie.de - Informationen zur Verarbeitung personenbezogener Daten.',
  alternates: {
    canonical: '/datenschutz',
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
      name: 'Datenschutzerklärung',
      item: 'https://praktikumsgenie.de/datenschutz',
    },
  ],
};

export default function DatenschutzPage() {
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
            <span className="text-white font-medium">Datenschutzerklärung</span>
          </nav>

          <div className="sticker-badge !bg-white/15 !border-white/30 !text-white backdrop-blur mb-8 mx-auto">
            <Shield className="h-4 w-4" />
            <span>Datenschutz & DSGVO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Informationen zur Verarbeitung deiner personenbezogenen Daten
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="pin-card rounded-2xl p-8 sm:p-12">
            <p className="mb-6 text-lg">
              <strong>praktikumsgenie.de</strong> ist eine Marke der Butterflies IT UG (haftungsbeschränkt).
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">1. Verantwortlicher</h2>
            <p>
              Butterflies IT UG (haftungsbeschränkt)<br />
              Vertreten durch: Andreas Mali<br />
              Hagenower Str. 73, 19061 Schwerin<br />
              E-Mail: <a href="mailto:kontakt@praktikumsgenie.de" className="text-rose-600 hover:underline">kontakt@praktikumsgenie.de</a>
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">2. Übersicht der Verarbeitungen</h2>
            <p>
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung
              zusammen und verweist auf die betroffenen Personen.
            </p>
            <p className="mt-2">
              <strong>Arten der verarbeiteten Daten:</strong>
            </p>
            <ul className="list-disc list-inside mb-4 mt-1 space-y-1">
              <li>Bestandsdaten (z.B. Namen, Adressen, Geburtsdatum)</li>
              <li>Inhaltsdaten (z.B. Profilinformationen, Videos, Chat-Nachrichten)</li>
              <li>Kontaktdaten (z.B. E-Mail-Adressen)</li>
              <li>Standortdaten (z.B. PLZ, Stadt für regionale Suche)</li>
              <li>Meta-/Kommunikationsdaten (z.B. IP-Adressen)</li>
              <li>Nutzungsdaten (z.B. besuchte Seiten, Swipe-Verhalten, Zugriffszeit)</li>
              <li>Zahlungsdaten (z.B. bei PayPal-Transaktionen, nur für Betriebe)</li>
            </ul>
            <p>
              <strong>Kategorien betroffener Personen:</strong> Schüler und Studenten, Praktikumsbetriebe, Interessenten.
            </p>
            <p className="mt-2">
              <strong>Zwecke der Verarbeitung:</strong>
            </p>
            <ul className="list-disc list-inside mb-4 mt-1 space-y-1">
              <li>Erbringung der Matching-Plattform und Kundenservice</li>
              <li>Bereitstellung des Video-Feeds und Matching-Systems</li>
              <li>Chat-Kommunikation zwischen gematchten Nutzern und Betrieben</li>
              <li>KI-gestützte Praktikumsempfehlungen</li>
              <li>Kontaktanfragen und Kommunikation</li>
              <li>Sicherheitsmaßnahmen und Jugendschutz</li>
            </ul>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">3. Rechtsgrundlagen</h2>
            <p>
              Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir
              personenbezogene Daten verarbeiten:
            </p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> – Die betroffene Person hat ihre Einwilligung gegeben.</li>
              <li><strong>Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</strong> – Verarbeitung ist für die Erfüllung eines Vertrags erforderlich.</li>
              <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c DSGVO)</strong> – Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.</li>
              <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</strong> – Verarbeitung ist zur Wahrung berechtigter Interessen erforderlich.</li>
            </ul>
            <p>
              <strong>Besonderer Hinweis zu minderjährigen Nutzern:</strong> Bei Nutzern unter 16 Jahren ist die
              Einwilligung der Erziehungsberechtigten gemäß Art. 8 DSGVO erforderlich. Wir fordern diese
              Einwilligung bei der Registrierung ein.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">4. Sicherheitsmaßnahmen</h2>
            <p>
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik,
              der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung
              sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und
              Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem
              Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p className="mt-2">
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit
              von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs,
              der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Die personenbezogenen
              Daten werden über eine SSL-verschlüsselte Verbindung übertragen. Passwörter werden ausschließlich
              verschlüsselt (gehasht) gespeichert.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">5. Datenverarbeitung bei Registrierung und Nutzung</h2>
            <p>
              <strong>Für Schüler und Studenten (Praktikumssuchende):</strong><br />
              Bei der Registrierung werden folgende Daten erhoben: E-Mail-Adresse, Passwort (verschlüsselt gespeichert),
              Geburtsdatum, Standort (PLZ/Stadt). Optional: Name, Interessen, Stärken, bevorzugte Praktikumsbereiche,
              Profilbild/Video.
            </p>
            <p className="mt-2">
              <strong>Für Betriebe:</strong><br />
              Firmenname, Ansprechpartner, E-Mail-Adresse, Passwort (verschlüsselt), Firmenadresse,
              Branche, Logo. Optional: Beschreibungstexte, Videos von Mitarbeitern, Praktikumsanzeigen.
            </p>
            <p className="mt-2">
              <strong>Zweck:</strong> Bereitstellung des Benutzerkontos, Matching zwischen Schülern und Betrieben,
              Anzeige im Video-Feed, Chat-Kommunikation nach erfolgtem Match.
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>
            <p className="mt-2">
              <strong>Speicherdauer:</strong> Bis zur Löschung des Kontos durch den Nutzer oder auf Anfrage.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">6. Video-Inhalte</h2>
            <p>
              Betriebe können Kurzvideos (30-90 Sekunden) hochladen, die echte Mitarbeiter bei der Arbeit zeigen.
              Diese Videos werden auf unseren Servern gespeichert und im Feed der Nutzer angezeigt.
              Videos werden vor der Veröffentlichung auf Qualitäts- und Jugendschutzkriterien geprüft.
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung der im Video gezeigten Personen).
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">7. Matching und Swipe-Daten</h2>
            <p>
              Wir speichern Swipe-Entscheidungen (Like/Pass) und daraus resultierende Matches, um die
              Kernfunktionalität der Plattform bereitzustellen. Diese Daten werden zur Verbesserung
              der Empfehlungen verwendet.
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">8. KI-Praktikumsfinder</h2>
            <p>
              Unser KI-gestützter Praktikumsfinder stellt Nutzern Fragen zu Interessen und Stärken und
              schlägt passende Praktikumsbereiche vor. Die Eingaben werden zur Erstellung der Empfehlung
              verarbeitet und im Nutzerkonto gespeichert.
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>
            <p className="mt-2">
              Es findet keine automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO statt.
              Die KI gibt lediglich unverbindliche Empfehlungen.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">9. Zahlungsabwicklung</h2>
            <p>
              Die Zahlungsabwicklung für Betriebe-Abonnements erfolgt über PayPal. Bei Nutzung von PayPal werden
              Zahlungsdaten direkt an PayPal übermittelt. Es gelten die{' '}
              <a href="https://www.paypal.com/de/legalhub/privacy-full" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">
                Datenschutzbestimmungen von PayPal
              </a>.
              Für Schüler und Studenten ist die Plattform kostenlos; es werden keine Zahlungsdaten erhoben.
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">10. Kontaktformular und E-Mail-Kontakt</h2>
            <p>
              Bei Nutzung des Kontaktformulars werden Ihre Daten (Name, E-Mail, Nachricht) ausschließlich zur
              Bearbeitung Ihrer Anfrage verarbeitet.
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>
            <p className="mt-2">
              <strong>Speicherdauer:</strong> Anfragen werden nach Abschluss der Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">11. Hosting und Serverlogfiles</h2>
            <p>
              Diese Website wird bei <strong>IONOS SE</strong> gehostet.
            </p>
            <p className="mt-2">
              Anbieter: IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland<br />
              Serverstandort: Deutschland (EU)<br />
              Verarbeitete Daten: IP-Adresse, Browsertyp, Zugriffszeit, angeforderte Seiten (Server-Logfiles)<br />
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
              Datenschutzerklärung:{' '}
              <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">
                https://www.ionos.de/terms-gtc/datenschutzerklaerung/
              </a>
            </p>
            <p className="mt-2">
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit IONOS geschlossen, der gewährleistet,
              dass personenbezogene Daten nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet werden.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">12. Cookies</h2>
            <p>
              Wir setzen technisch notwendige Cookies ein, um die Funktionalität der Website zu gewährleisten
              (z.B. Session-Cookies für den Login-Bereich, JWT-Tokens für die Authentifizierung).
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
            <p className="mt-2">
              Tracking-Cookies oder Marketing-Cookies werden nur mit ausdrücklicher Einwilligung gesetzt.
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">Externe Dienste und Datenverarbeitung</h2>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Datenverarbeitung ausschließlich in der EU</h3>
            <p>
              Wir legen großen Wert auf den Schutz Ihrer Daten. Alle von uns eingesetzten Dienste und Server
              befinden sich <strong>ausschließlich innerhalb der Europäischen Union</strong>. Es findet keine
              Übermittlung personenbezogener Daten in Drittländer (außerhalb der EU/EWR) statt.
            </p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li><strong>Webserver:</strong> Deutschland (IONOS)</li>
              <li><strong>E-Mail-Versand:</strong> Deutschland/Frankreich (Brevo)</li>
              <li><strong>Video-CDN:</strong> EU-Server (BunnyCDN)</li>
              <li><strong>Datenbank:</strong> Deutschland (IONOS)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">E-Mail-Versand (Brevo)</h3>
            <p>
              Für den Versand von E-Mails (z.B. Registrierungsbestätigungen, Benachrichtigungen,
              Passwort-Zurücksetzen) nutzen wir den Dienst <strong>Brevo</strong> (ehemals Sendinblue).
            </p>
            <p className="mt-2">
              Anbieter: Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin, Deutschland<br />
              Serverstandort: EU (Deutschland/Frankreich)<br />
              Verarbeitete Daten: E-Mail-Adresse, Name, E-Mail-Inhalt<br />
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)<br />
              Datenschutzerklärung:{' '}
              <a href="https://www.brevo.com/de/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">
                https://www.brevo.com/de/legal/privacypolicy/
              </a>
            </p>
            <p className="mt-2">
              Der E-Mail-Versand erfolgt zentral über die Domain genieportal.de
              (Absender: noreply@genieportal.de, Antworten: support@genieportal.de).
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Video-Hosting und Content Delivery (BunnyCDN)</h3>
            <p>
              Für das Hosting und die Auslieferung von Videos nutzen wir den Dienst <strong>BunnyCDN</strong>.
            </p>
            <p className="mt-2">
              Anbieter: BunnyWay d.o.o., Cesta komandanta Staneta 4A, 1215 Medvode, Slowenien<br />
              Serverstandort: EU<br />
              Verarbeitete Daten: IP-Adresse, Browsertyp, abgerufene Inhalte<br />
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
              Datenschutzerklärung:{' '}
              <a href="https://bunny.net/privacy" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">
                https://bunny.net/privacy
              </a>
            </p>
            <p className="mt-2">
              Videos werden über die Domain <strong>cdn.genieportal.de</strong> ausgeliefert.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Zentrale Dienste über genieportal.de</h3>
            <p>
              Diese Website ist Teil des Genie-Netzwerks. Folgende Dienste werden zentral über
              genieportal.de bereitgestellt:
            </p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li>E-Mail-Versand (noreply@genieportal.de)</li>
              <li>Video-Hosting (cdn.genieportal.de)</li>
              <li>API-Dienste (api.genieportal.de)</li>
            </ul>
            <p className="mb-4">
              Verantwortlich: Butterflies IT UG (haftungsbeschränkt), Hagenower Str. 73, 19061 Schwerin,
              E-Mail: info@genieportal.de
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">13. Ihre Rechte als betroffene Person</h2>
            <p>Ihnen stehen folgende Rechte zu:</p>
            <ul className="list-disc list-inside mb-4 mt-2 space-y-1">
              <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten.</li>
              <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht auf Berichtigung unrichtiger Daten.</li>
              <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht auf Löschung Ihrer Daten (&bdquo;Recht auf Vergessenwerden&ldquo;).</li>
              <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen.</li>
              <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem gängigen Format zu erhalten.</li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung zu widersprechen.</li>
              <li><strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
              <li><strong>Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
            </ul>
            <p>
              Zuständige Aufsichtsbehörde für Mecklenburg-Vorpommern:<br />
              Der Landesbeauftragte für Datenschutz und Informationsfreiheit Mecklenburg-Vorpommern<br />
              Werderstraße 74a, 19055 Schwerin<br />
              <a href="https://www.datenschutz-mv.de" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">www.datenschutz-mv.de</a>
            </p>

            <h2 className="board-divider text-xl font-bold text-gray-900 mt-10 mb-4">14. Änderung dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
              Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch
              gilt dann die neue Datenschutzerklärung.
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
