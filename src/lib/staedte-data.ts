import fs from 'fs';
import path from 'path';

export interface Stadt {
  slug: string;
  name: string;
  bundesland: string;
  einwohner: number;
  beschreibung: string;
  topBerufe: string[];
  nachbarstaedte: string[];
  besonderheiten: string[];
  oepnv: string;
  lebenshaltung: 'niedrig' | 'mittel' | 'hoch' | 'sehr hoch';
}

export interface Bundesland {
  slug: string;
  name: string;
}

export const bundeslaender: Bundesland[] = [
  { slug: 'baden-wuerttemberg', name: 'Baden-Württemberg' },
  { slug: 'bayern', name: 'Bayern' },
  { slug: 'berlin', name: 'Berlin' },
  { slug: 'brandenburg', name: 'Brandenburg' },
  { slug: 'bremen', name: 'Bremen' },
  { slug: 'hamburg', name: 'Hamburg' },
  { slug: 'hessen', name: 'Hessen' },
  { slug: 'mecklenburg-vorpommern', name: 'Mecklenburg-Vorpommern' },
  { slug: 'niedersachsen', name: 'Niedersachsen' },
  { slug: 'nordrhein-westfalen', name: 'Nordrhein-Westfalen' },
  { slug: 'rheinland-pfalz', name: 'Rheinland-Pfalz' },
  { slug: 'saarland', name: 'Saarland' },
  { slug: 'sachsen', name: 'Sachsen' },
  { slug: 'sachsen-anhalt', name: 'Sachsen-Anhalt' },
  { slug: 'schleswig-holstein', name: 'Schleswig-Holstein' },
  { slug: 'thueringen', name: 'Thüringen' },
];

function loadStaedte(): Stadt[] {
  const dataDir = path.join(process.cwd(), 'data', 'staedte');
  if (!fs.existsSync(dataDir)) return [];

  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json'));
  return files
    .map((file) => {
      try {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        return JSON.parse(content) as Stadt;
      } catch {
        return null;
      }
    })
    .filter((s): s is Stadt => s !== null)
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));
}

let _cache: Stadt[] | null = null;
function getCache(): Stadt[] {
  if (!_cache) _cache = loadStaedte();
  return _cache;
}

export const staedte: Stadt[] = loadStaedte();

export function getStadtBySlug(slug: string): Stadt | undefined {
  return getCache().find((s) => s.slug === slug);
}

export function getStaedteByBundesland(bundesland: string): Stadt[] {
  return getCache().filter((s) => s.bundesland === bundesland);
}

export function getAllStaedteSlugs(): string[] {
  return getCache().map((s) => s.slug);
}

export function getNachbarstaedte(stadt: Stadt): Stadt[] {
  const cache = getCache();
  return stadt.nachbarstaedte
    .map((slug) => cache.find((s) => s.slug === slug))
    .filter((s): s is Stadt => s !== undefined);
}

export function getTopStaedte(count: number = 10): Stadt[] {
  return [...getCache()].sort((a, b) => b.einwohner - a.einwohner).slice(0, count);
}
