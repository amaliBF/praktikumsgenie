// Server-side: use localhost for direct access (faster)
// Client-side: use public URL via api.genieportal.de
const API_BASE =
  typeof window === 'undefined'
    ? (process.env.API_URL || 'http://localhost:3113/v1')
    : (process.env.NEXT_PUBLIC_API_URL || 'https://api.genieportal.de/v1');

export async function fetchApi<T>(path: string, options?: { revalidate?: number }): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate: options?.revalidate ?? 300 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ─── Types ────────────────────────────────────────────────────────────────

export interface JobListItem {
  id: string;
  slug: string;
  title: string;
  beruf: string | null;
  company: {
    id: string;
    name: string;
    slug: string;
    logo: string | null;
  };
  standort: {
    stadt: string | null;
    plz: string | null;
  };
  gehalt: {
    min: number;
    max: number;
    einheit: 'MONTH' | 'HOUR';
  } | null;
  startDatum: string | null;
  hasVideo: boolean;
  videoThumbnail: string | null;
  createdAt: string;
  url: string;
  isExternal?: boolean;
  externalUrl?: string;
}

export interface SearchResponse {
  total: number;
  items: JobListItem[];
  facets: {
    berufsfelder: { name: string; slug: string; count: number }[];
    staedte: { name: string; slug: string; count: number }[];
  };
  pagination: { page: number; limit: number; totalPages: number };
}

export interface StatsResponse {
  totalJobs: number;
  totalCompanies: number;
  topCities: { name: string; count: number }[];
  topProfessions: { name: string; slug: string; count: number }[];
}

export interface LatestResponse {
  items: JobListItem[];
}

export interface ByCityResponse {
  city: { name: string; slug: string };
  total: number;
  items: JobListItem[];
  pagination: { page: number; limit: number; totalPages: number };
}

export interface ByProfessionResponse {
  profession: { name: string; slug: string };
  total: number;
  items: JobListItem[];
  pagination: { page: number; limit: number; totalPages: number };
}

export interface JobDetailResponse {
  job: {
    id: string;
    title: string;
    slug: string;
    description: string | null;
    requirements: string | string[] | null;
    benefits: string | string[] | null;
    beruf: string | null;
    anforderungen: string | string[] | null;
    gehalt: string | null;
    arbeitszeit: string | null;
    dauer: string | null;
    remote: boolean | null;
    standortAdresse: string | null;
    startDate: string | null;
    durationMonths: number | null;
    positionsAvailable: number | null;
    salaryYear1: number | null;
    salaryYear2: number | null;
    salaryYear3: number | null;
    postalCode: string | null;
    city: string | null;
    latitude: number | null;
    longitude: number | null;
    metaTitle: string | null;
    metaDescription: string | null;
    portalId: number;
    publishedAt: string | null;
    expiresAt: string | null;
    viewCount: number;
    likeCount: number;
  };
  company: {
    id: string;
    name: string;
    slug: string;
    email: string | null;
    phone: string | null;
    website: string | null;
    street: string | null;
    postalCode: string | null;
    city: string | null;
    latitude: number | null;
    longitude: number | null;
    industry: string | null;
    industryTags: string | null;
    description: string | null;
    shortDescription: string | null;
    foundedYear: number | null;
    employeeCount: string | null;
    logoUrl: string | null;
    coverImageUrl: string | null;
    trainingSince: number | null;
    totalApprentices: number | null;
    benefits: string | null;
    verified: boolean;
  };
  profession: { id: string; name: string; slug: string; category: string } | null;
  videos: {
    id: string;
    title: string | null;
    description: string | null;
    url: string | null;
    thumbnailUrl: string | null;
    durationSeconds: number | null;
    viewCount: number;
    likeCount: number;
  }[];
  similarJobs: JobListItem[];
}

export interface SchemaResponse {
  schema: Record<string, unknown>;
}

export interface ExternalJobDetailResponse {
  job: {
    id: string;
    title: string;
    slug: string;
    description: string | null;
    companyName: string | null;
    city: string | null;
    postalCode: string | null;
    latitude: number | null;
    longitude: number | null;
    salaryMin: number | null;
    salaryMax: number | null;
    salaryUnit: string | null;
    category: string | null;
    categoryTag: string | null;
    jobType: string;
    jobTypeLabel: string;
    portalId: number;
    externalUrl: string;
    source: string;
    publishedAt: string | null;
    expiresAt: string | null;
    clickCount: number;
    isExternal: true;
  };
  company: {
    name: string;
    slug: string;
    logo: string | null;
  };
  similarJobs: JobListItem[];
  portalDomain: string;
}

export interface AutocompleteResponse {
  suggestions: {
    type: 'beruf' | 'firma' | 'stadt';
    text: string;
    slug: string;
    count: number;
  }[];
}

export interface SitemapResponse {
  jobs: { slug: string; lastmod: string }[];
  cities: { slug: string; count: number }[];
  professions: { slug: string; count: number }[];
}

// ─── Company Types ────────────────────────────────────────────────────────

export interface CompanyListItem {
  id: string;
  name: string;
  slug: string;
  city: string | null;
  postalCode: string | null;
  industry: string | null;
  shortDescription: string | null;
  logoUrl: string | null;
  coverImageUrl: string | null;
  employeeCount: string | null;
  verified: boolean;
  reviewCount: number;
  reviewAverage: number | null;
  recommendPercent: number | null;
  jobCount: number;
  videoCount: number;
}

export interface CompanyListResponse {
  total: number;
  items: CompanyListItem[];
  pagination: { page: number; limit: number; totalPages: number };
}

export interface CompanyStatsResponse {
  totalCompanies: number;
  topIndustries: { name: string; count: number }[];
  topCities: { name: string; count: number }[];
}

export interface CompanyDetailResponse {
  company: {
    id: string;
    name: string;
    slug: string;
    legalName: string | null;
    phone: string | null;
    website: string | null;
    street: string | null;
    postalCode: string | null;
    city: string | null;
    latitude: number | null;
    longitude: number | null;
    industry: string | null;
    industryTags: string[];
    description: string | null;
    shortDescription: string | null;
    foundedYear: number | null;
    employeeCount: string | null;
    logoUrl: string | null;
    coverImageUrl: string | null;
    trainingSince: number | null;
    totalApprentices: number | null;
    benefits: string[];
    verified: boolean;
    reviewCount: number;
    reviewAverage: number | null;
    recommendPercent: number | null;
    jobCount: number;
    videoCount: number;
    followerCount: number;
  };
  videos: {
    id: string;
    title: string | null;
    description: string | null;
    thumbnailUrl: string | null;
    url: string | null;
    durationSeconds: number | null;
    viewCount: number;
    featuredPerson: string | null;
  }[];
  jobs: {
    id: string;
    title: string;
    slug: string;
    city: string | null;
    postalCode: string | null;
    startDate: string | null;
    salaryYear1: number | null;
    profession: { name: string; slug: string } | null;
    createdAt: string;
  }[];
}

export interface CompanyReviewsResponse {
  summary: {
    reviewCount: number;
    reviewAverage: number | null;
    recommendPercent: number | null;
  };
  total: number;
  items: {
    id: string;
    overallRating: number;
    title: string | null;
    pros: string | null;
    cons: string | null;
    reviewerType: string | null;
    isAnonymous: boolean;
    companyResponse: string | null;
    companyRespondedAt: string | null;
    helpfulCount: number;
    createdAt: string;
  }[];
  pagination: { page: number; limit: number; totalPages: number };
}

// ─── Helper: build job path from URL field ────────────────────────────────

export function jobUrlToPath(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    // If it's already a path
    return url.startsWith('/') ? url : `/${url}`;
  }
}

// ─── Helper: extract partial ID from composite slug ───────────────────────

export function extractIdFromSlug(compositeSlug: string): string {
  const parts = compositeSlug.split('-');
  // The last segment is the 8-char partial ID
  return parts[parts.length - 1];
}
