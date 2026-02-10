import { MetadataRoute } from 'next';
import { staedte } from '@/lib/staedte-data';
import { ratgeber } from '@/lib/ratgeber-data';
import { praktikumsarten } from '@/lib/praktikumsarten-data';
import { praktikumsberufe } from '@/lib/praktikumsberufe-data';

// Top 30 Berufe für Kombiseiten (muss mit praktikum/[slug]/page.tsx übereinstimmen)
const topBerufeSlugs = [
  'fachinformatiker', 'mediengestalter', 'webentwickler', 'elektroniker',
  'kfz-mechatroniker', 'tischler', 'mechatroniker', 'maler',
  'krankenpfleger', 'erzieher', 'physiotherapeut', 'altenpfleger',
  'buerokaufmann', 'einzelhandelskaufmann', 'industriekaufmann', 'bankkaufmann',
  'koch', 'hotelfachmann', 'baecker', 'konditor',
  'gaertner', 'tierpfleger', 'bauzeichner', 'modedesigner',
  'fachlagerist', 'berufskraftfahrer', 'verwaltungsfachangestellter', 'rechtsanwaltsfachangestellter',
  'fotograf', 'social-media-manager',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://praktikumsgenie.de';
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/praktikum`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/praktikumsarten`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/praktikumsberufe`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ratgeber`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/stellen`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/firmen`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/so-funktionierts`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fuer-betriebe`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fuer-schueler`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/preise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vorteile`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/app`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/berufsfinder`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ];

  // Praktikumsarten pages
  const praktikumsartenPages: MetadataRoute.Sitemap = praktikumsarten.map((p) => ({
    url: `${baseUrl}/praktikumsarten/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Praktikumsberufe pages (80 Berufsprofile)
  const praktikumsberufePages: MetadataRoute.Sitemap = praktikumsberufe.map((b) => ({
    url: `${baseUrl}/praktikumsberufe/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Städte pages (84 Städte)
  const staedtePages: MetadataRoute.Sitemap = staedte.map((s) => ({
    url: `${baseUrl}/praktikum/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Kombiseiten: Top 30 Berufe × 84 Städte = 2.520 Seiten
  const kombiPages: MetadataRoute.Sitemap = [];
  for (const berufSlug of topBerufeSlugs) {
    for (const stadt of staedte) {
      kombiPages.push({
        url: `${baseUrl}/praktikum/${berufSlug}-in-${stadt.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  // Ratgeber pages
  const ratgeberPages: MetadataRoute.Sitemap = ratgeber.map((r) => ({
    url: `${baseUrl}/ratgeber/${r.slug}`,
    lastModified: r.publishDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...praktikumsartenPages,
    ...praktikumsberufePages,
    ...staedtePages,
    ...kombiPages,
    ...ratgeberPages,
  ];
}
