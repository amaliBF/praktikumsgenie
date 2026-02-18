export interface Branche {
  slug: string;
  name: string;
  icon: string; // lucide icon name
  beschreibung: string;
  beispielPraktika: string[];
}

export const branchen: Branche[] = [
  {
    slug: 'it-technik',
    name: 'IT & Technik',
    icon: 'Monitor',
    beschreibung: 'Software, Web, Hardware, Netzwerke',
    beispielPraktika: ['Webentwicklung', 'IT-Support', 'App-Entwicklung', 'Systemadministration'],
  },
  {
    slug: 'handwerk',
    name: 'Handwerk',
    icon: 'Wrench',
    beschreibung: 'Elektro, Sanitär, Tischlerei, KFZ',
    beispielPraktika: ['Tischlerei', 'KFZ-Werkstatt', 'Elektroinstallation', 'Malerbetrieb'],
  },
  {
    slug: 'gesundheit-soziales',
    name: 'Gesundheit & Soziales',
    icon: 'Heart',
    beschreibung: 'Pflege, Medizin, Sozialarbeit',
    beispielPraktika: ['Krankenhaus', 'Pflegeheim', 'Arztpraxis', 'Kindergarten'],
  },
  {
    slug: 'wirtschaft-buero',
    name: 'Wirtschaft & Büro',
    icon: 'BarChart3',
    beschreibung: 'Verwaltung, Finanzen, Marketing',
    beispielPraktika: ['Buchhaltung', 'Marketing', 'Personalwesen', 'Verwaltung'],
  },
  {
    slug: 'medien-design',
    name: 'Medien & Design',
    icon: 'Palette',
    beschreibung: 'Grafik, Film, Journalismus, Social Media',
    beispielPraktika: ['Grafikdesign', 'Videoproduktion', 'Redaktion', 'Social Media'],
  },
  {
    slug: 'gastronomie-hotel',
    name: 'Gastronomie & Hotel',
    icon: 'UtensilsCrossed',
    beschreibung: 'Küche, Service, Hotellerie',
    beispielPraktika: ['Restaurant', 'Hotel', 'Catering', 'Bäckerei'],
  },
  {
    slug: 'handel-verkauf',
    name: 'Handel & Verkauf',
    icon: 'ShoppingCart',
    beschreibung: 'Einzelhandel, Großhandel, E-Commerce',
    beispielPraktika: ['Einzelhandel', 'Lager & Logistik', 'Kundenservice', 'E-Commerce'],
  },
  {
    slug: 'naturwissenschaften',
    name: 'Naturwissenschaften',
    icon: 'Microscope',
    beschreibung: 'Chemie, Biologie, Physik, Labor',
    beispielPraktika: ['Labor', 'Forschung', 'Umwelttechnik', 'Pharma'],
  },
];

export function getBrancheBySlug(slug: string): Branche | undefined {
  return branchen.find((b) => b.slug === slug);
}

export function getAllBranchenSlugs(): string[] {
  return branchen.map((b) => b.slug);
}
