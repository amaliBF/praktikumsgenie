import AppNotifyForm from '@/components/AppNotifyForm';

export default function AppCTA({ title, description }: { title?: string; description?: string }) {
  return (
    <section>
      <AppNotifyForm
        variant="banner"
        title={title || 'Jetzt in der App bewerben'}
        description={description || 'Kein Anschreiben. Kein Lebenslauf hochladen. Einfach Interesse zeigen und direkt chatten.'}
      />
    </section>
  );
}
