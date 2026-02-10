import { Smartphone, ArrowRight } from 'lucide-react';

export default function AppCTA({ title, description }: { title?: string; description?: string }) {
  return (
    <section className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 sm:p-10 text-white">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Smartphone className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold">
            {title || 'Jetzt in der App bewerben'}
          </h3>
          <p className="text-white/80 mt-1">
            {description || 'Kein Anschreiben. Kein Lebenslauf hochladen. Einfach Interesse zeigen und direkt chatten.'}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-rose-700 font-medium px-6 py-3 rounded-xl hover:bg-rose-50 transition-colors"
          >
            App Store
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-xl hover:bg-white/30 transition-colors"
          >
            Google Play
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
