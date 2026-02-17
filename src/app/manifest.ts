import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Praktikumsgenie – Praktikum per Swipe',
    short_name: 'Praktikumsgenie',
    description:
      'Finde dein Praktikum per Swipe-Matching. Kurzvideos von Betrieben, KI-Berufsfinder und Direkt-Chat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#e11d48',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
