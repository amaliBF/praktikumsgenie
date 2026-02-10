import fs from 'fs';
import path from 'path';

export interface Praktikumsberuf {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  dauer: string;
  beschreibung: string;
  aufgaben: string[];
  voraussetzungen: string[];
  wasManLernt: string[];
  tipps: string[];
  geeignetFuer: string;
  relatedSlugs: string[];
}

export interface Kategorie {
  slug: string;
  name: string;
  description: string;
}

export const kategorien: Kategorie[] = [
  { slug: 'it-medien', name: 'IT & Medien', description: 'Praktika in Softwareentwicklung, Design, Social Media und Medienproduktion.' },
  { slug: 'handwerk-technik', name: 'Handwerk & Technik', description: 'Praktische Einblicke in Handwerksberufe – von Elektronik über Holz bis Metall.' },
  { slug: 'gesundheit-soziales', name: 'Gesundheit & Soziales', description: 'Praktika in Pflege, Medizin, Therapie und sozialer Arbeit.' },
  { slug: 'kaufmaennisch', name: 'Kaufmännisch', description: 'Einblicke in Büro, Handel, Finanzen und Verwaltung.' },
  { slug: 'gastronomie-hotel', name: 'Gastronomie & Hotel', description: 'Praktika in Küche, Service, Hotellerie und Lebensmittelherstellung.' },
  { slug: 'natur-landwirtschaft', name: 'Natur & Landwirtschaft', description: 'Praktika im Gartenbau, in der Landwirtschaft und im Umgang mit Tieren.' },
  { slug: 'bau-architektur', name: 'Bau & Architektur', description: 'Praktika auf dem Bau, in Planungsbüros und im Ausbaugewerbe.' },
  { slug: 'kreativ-design', name: 'Kreativ & Design', description: 'Praktika in Mode, Gestaltung, Kosmetik und kreativen Berufen.' },
  { slug: 'logistik-verkehr', name: 'Logistik & Verkehr', description: 'Praktika in Transport, Lager, Spedition und Verkehrswesen.' },
  { slug: 'recht-verwaltung', name: 'Recht & Verwaltung', description: 'Praktika in Kanzleien, Behörden, Gerichten und öffentlicher Verwaltung.' },
];

function loadPraktikumsberufe(): Praktikumsberuf[] {
  const dataDir = path.join(process.cwd(), 'data', 'praktikumsberufe');
  if (!fs.existsSync(dataDir)) return [];

  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json'));
  return files
    .map((file) => {
      try {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        return JSON.parse(content) as Praktikumsberuf;
      } catch {
        return null;
      }
    })
    .filter((b): b is Praktikumsberuf => b !== null)
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));
}

let _cache: Praktikumsberuf[] | null = null;
function getCache(): Praktikumsberuf[] {
  if (!_cache) _cache = loadPraktikumsberufe();
  return _cache;
}

export const praktikumsberufe: Praktikumsberuf[] = loadPraktikumsberufe();

export function getPraktikumsberufBySlug(slug: string): Praktikumsberuf | undefined {
  return getCache().find((b) => b.slug === slug);
}

export function getPraktikumsberufeByCategory(categorySlug: string): Praktikumsberuf[] {
  return getCache().filter((b) => b.categorySlug === categorySlug);
}

export function getAllPraktikumsberufeSlugs(): string[] {
  return getCache().map((b) => b.slug);
}

export function getRelatedPraktikumsberufe(beruf: Praktikumsberuf): Praktikumsberuf[] {
  const cache = getCache();
  return beruf.relatedSlugs
    .map((slug) => cache.find((b) => b.slug === slug))
    .filter((b): b is Praktikumsberuf => b !== undefined);
}
