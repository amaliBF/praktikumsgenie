import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'AGB - Praktikumsgenie',
  description: 'Allgemeine Geschäftsbedingungen von Praktikumsgenie.de',
};

export default function AgbPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-2xl font-bold mb-6">Allgemeine Geschäftsbedingungen (AGB)</h1>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Geltungsbereich</h2>
        <p>
          Diese AGB gelten für alle Verträge über die Nutzung der Plattform praktikumsgenie.de
          zwischen der Butterflies IT UG (haftungsbeschränkt), Hagenower Str. 73, 19061 Schwerin
          (nachfolgend &bdquo;Betreiber&ldquo;) und dem Nutzer. Es wird unterschieden zwischen
          Schülern/Studenten (Praktikumssuchende) und gewerblichen Nutzern (Praktikumsbetriebe).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Leistungsbeschreibung</h2>
        <p>
          Praktikumsgenie ist eine Vermittlungsplattform, die Schüler/Studenten und Praktikumsbetriebe
          zusammenbringt. Die Plattform umfasst:
        </p>
        <ul className="list-disc list-inside mb-4 mt-2">
          <li>Einen Video-Feed mit Kurzvideos von Praktikumsbetrieben</li>
          <li>Ein Swipe-basiertes Matching-System zwischen Schülern und Betrieben</li>
          <li>Eine Chat-Funktion nach erfolgtem Match</li>
          <li>Einen KI-gestützten Praktikumsfinder</li>
          <li>Ein Dashboard für Betriebe zur Verwaltung von Praktikumsanzeigen, Videos und Kandidaten</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Registrierung und Nutzerkonto</h2>
        <p>
          Für die Nutzung ist eine Registrierung erforderlich. Bei der Registrierung sind wahrheitsgemäße
          Angaben zu machen. Minderjährige Nutzer unter 16 Jahren benötigen die Einwilligung eines
          Erziehungsberechtigten.
        </p>
        <p className="mt-2">
          Jeder Nutzer darf nur ein Konto erstellen. Die Zugangsdaten sind vertraulich zu behandeln.
          Der Nutzer haftet für alle Aktivitäten, die über sein Konto vorgenommen werden.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Kosten und Abonnements</h2>
        <p>
          <strong>Für Schüler und Studenten:</strong> Die Nutzung der Plattform ist vollständig kostenlos.
        </p>
        <p className="mt-2">
          <strong>Für Betriebe:</strong> Es stehen verschiedene Abonnement-Modelle zur Verfügung
          (Free, Starter, Professional, Enterprise). Die aktuellen Preise sind auf der Preisseite
          einsehbar. Kostenpflichtige Abonnements werden monatlich abgerechnet.
        </p>
        <p className="mt-2">
          Die Zahlung erfolgt per Stripe (Kreditkarte, SEPA-Lastschrift o.ä.) vor Leistungserbringung.
          Abonnements verlängern sich automatisch, sofern nicht vor Ablauf der Laufzeit gekündigt wird.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Widerrufsbelehrung</h2>
        <p>
          <strong>Widerrufsrecht:</strong> Gewerbliche Nutzer (Betriebe) haben als Verbraucher das Recht,
          binnen 14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. Die Widerrufsfrist beträgt
          14 Tage ab dem Tag des Vertragsschlusses.
        </p>
        <p className="mt-2">
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Butterflies IT UG, Hagenower Str. 73,
          19061 Schwerin, E-Mail: kontakt@praktikumsgenie.de) mittels einer eindeutigen Erklärung
          über Ihren Entschluss informieren.
        </p>
        <p className="mt-2">
          Das Widerrufsrecht erlischt bei digitalen Inhalten vorzeitig, wenn der Nutzer ausdrücklich
          zugestimmt hat, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen
          wird (§ 356 Abs. 5 BGB).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Pflichten der Nutzer</h2>
        <p>Der Nutzer verpflichtet sich:</p>
        <ul className="list-disc list-inside mb-4 mt-2">
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

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Inhalte und Videos</h2>
        <p>
          Betriebe behalten die Urheberrechte an ihren hochgeladenen Videos. Mit dem Upload räumen sie
          dem Betreiber ein einfaches, nicht-exklusives Nutzungsrecht zur Anzeige der Videos auf der
          Plattform ein. Der Betreiber behält sich das Recht vor, Videos abzulehnen oder zu entfernen,
          die gegen diese AGB, geltendes Recht oder Jugendschutzbestimmungen verstoßen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Haftung</h2>
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

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Kündigung und Kontolöschung</h2>
        <p>
          Schüler und Studenten können ihr Konto jederzeit löschen. Kostenpflichtige Betriebe-Abonnements
          können zum Ende der jeweiligen Laufzeit gekündigt werden.
        </p>
        <p className="mt-2">
          Der Betreiber behält sich das Recht vor, Nutzerkonten bei Verstoß gegen diese AGB zu sperren
          oder zu löschen. Bei Löschung werden personenbezogene Daten gemäß der Datenschutzerklärung
          behandelt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Jugendschutz</h2>
        <p>
          Der Betreiber verpflichtet sich zu angemessenen Maßnahmen zum Schutz minderjähriger Nutzer.
          Dazu gehören die Moderation von Inhalten, die Meldung von unangemessenem Verhalten und
          die Möglichkeit, Nutzer zu blockieren. Chat-Nachrichten sind nur nach beidseitigem Match möglich.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">11. Datenschutz</h2>
        <p>
          Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{' '}
          <Link href="/datenschutz" className="text-emerald-600 hover:underline">Datenschutzerklärung</Link>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">12. Änderung der AGB</h2>
        <p>
          Der Betreiber behält sich das Recht vor, diese AGB jederzeit anzupassen. Nutzer werden über
          Änderungen per E-Mail oder In-App-Benachrichtigung informiert. Die weitere Nutzung der Plattform
          nach Inkrafttreten der Änderungen gilt als Zustimmung.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">13. Anwendbares Recht und Gerichtsstand</h2>
        <p>
          Es findet ausschließlich deutsches Recht Anwendung unter Ausschluss des UN-Kaufrechts.
          Gerichtsstand ist, soweit gesetzlich zulässig, Schwerin.
        </p>

        <p className="mt-8 text-sm text-gray-500">Stand: {new Date().toLocaleDateString('de-DE')}</p>
      </div>

      <Footer />
    </div>
  );
}
