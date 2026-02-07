import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Impressum - Praktikumsgenie',
  description: 'Impressum von Praktikumsgenie.de',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-2xl font-bold mb-6">Impressum</h1>

        <p className="mb-4 text-lg">
          <strong>praktikumsgenie.de</strong> ist eine Marke der Butterflies IT UG (haftungsbeschränkt).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Angaben gemäß § 5 DDG</h2>
        <p>
          <strong>Butterflies IT UG (haftungsbeschränkt)</strong><br />
          Hagenower Str. 73<br />
          19061 Schwerin<br />
          Deutschland
        </p>
        <p className="mt-4">
          <strong>Vertreten durch:</strong><br />
          Geschäftsführender Gesellschafter: Andreas Mali
        </p>
        <p className="mt-4">
          <strong>Kontakt:</strong><br />
          E-Mail: <a href="mailto:kontakt@praktikumsgenie.de" className="text-emerald-600 hover:underline">kontakt@praktikumsgenie.de</a>
        </p>
        <p className="mt-4">
          <strong>Registereintrag:</strong><br />
          Handelsregister: Amtsgericht Schwerin, HRB 12765
        </p>
        <p className="mt-4">
          <strong>Umsatzsteuer-ID:</strong><br />
          USt-IdNr. gemäß § 27a UStG: DE301178757
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Andreas Mali<br />
          Hagenower Str. 73<br />
          19061 Schwerin
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p className="mt-2">
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
          zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="mt-2">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
          Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
          der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
          verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="mt-2">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
          einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
          Links umgehend entfernen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="mt-2">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
          Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
          auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>

        <p className="mt-8 text-sm text-gray-500">Stand: Februar 2026</p>
      </div>

      <Footer />
    </div>
  );
}
