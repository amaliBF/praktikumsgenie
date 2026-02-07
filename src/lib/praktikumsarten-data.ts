import * as fs from 'fs';
import * as path from 'path';

export interface Praktikumsart {
  slug: string;
  name: string;
  dauer: string;
  zielgruppe: string;
  verguetet: boolean | string;
  beschreibung: string;
  voraussetzungen: string[];
  tipps: string[];
  branchen: string[];
}

function loadPraktikumsarten(): Praktikumsart[] {
  const dir = path.join(process.cwd(), 'data', 'praktikumsarten');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')));
}

export const praktikumsarten: Praktikumsart[] = loadPraktikumsarten();

export function getPraktikumsartBySlug(slug: string): Praktikumsart | undefined {
  return praktikumsarten.find((p) => p.slug === slug);
}

export function getAllPraktikumsartenSlugs(): string[] {
  return praktikumsarten.map((p) => p.slug);
}
