'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface SearchStadt {
  slug: string;
  name: string;
  bundesland: string;
  einwohner: number;
}

export default function StaedteSearch({ staedte }: { staedte: SearchStadt[] }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isSticky, setIsSticky] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const normalize = (str: string) =>
    str.toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[-/]/g, ' ');

  const results = query.length >= 2
    ? staedte.filter((s) => {
        const q = normalize(query);
        const name = normalize(s.name);
        const bl = normalize(s.bundesland);
        return name.includes(q) || bl.includes(q) || s.slug.includes(q.replace(/ /g, '-'));
      }).slice(0, 12)
    : [];

  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-65px 0px 0px 0px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
          inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0 && results[selectedIndex]) {
      window.location.href = `/praktikum/${results[selectedIndex].slug}`;
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const formatEinwohner = (n: number) => {
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)} Mio.`;
    return `${Math.round(n / 1000)}k`;
  };

  return (
    <>
      <div ref={sentinelRef} className="h-0" />
      <div className={`relative z-30 transition-all duration-300 ${
        isSticky
          ? 'sticky top-16 bg-white/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-gray-200 shadow-md'
          : 'mb-10 mt-2'
      }`}>
        <div className={`relative ${isSticky ? 'max-w-7xl mx-auto' : ''}`}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <svg className={`w-5 h-5 ${isSticky ? 'text-emerald-500' : 'text-emerald-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Stadt suchen, z.B. München, Berlin, Hamburg..."
            className={`w-full pl-12 pr-12 outline-none transition-all bg-white placeholder:text-gray-400 ${
              isSticky
                ? 'py-3 text-base border-2 border-emerald-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 shadow-sm'
                : 'py-4 text-lg border-2 border-emerald-300 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400'
            }`}
            autoComplete="off"
          />
          {query ? (
            <button
              onClick={() => { setQuery(''); setIsOpen(false); inputRef.current?.focus(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 text-xs text-gray-400">
              <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-gray-500 font-mono">↑↓</kbd>
              <span>navigieren</span>
            </div>
          )}
        </div>

        {isOpen && query.length >= 2 && (
          <div ref={dropdownRef} className={`absolute z-40 top-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden max-h-[480px] overflow-y-auto ${
            isSticky ? 'left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8' : 'left-0 right-0'
          }`}>
            {results.length > 0 ? (
              <>
                <div className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-xs text-emerald-600 font-medium border-b">
                  {results.length === 12 ? '12+ Ergebnisse' : `${results.length} Ergebnis${results.length !== 1 ? 'se' : ''}`} für &quot;{query}&quot;
                </div>
                {results.map((s, i) => (
                  <Link
                    key={s.slug}
                    href={`/praktikum/${s.slug}`}
                    className={`flex items-center justify-between px-4 py-3 hover:bg-emerald-50 transition-colors border-b border-gray-50 last:border-0 ${
                      i === selectedIndex ? 'bg-emerald-50' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-lg flex-shrink-0">📍</span>
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 truncate">{s.name}</div>
                        <div className="text-xs text-gray-500">{s.bundesland} · {formatEinwohner(s.einwohner)} Einwohner</div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-3">
                      <div className="text-sm font-semibold text-emerald-600">Praktikum</div>
                      <div className="text-xs text-gray-400">in {s.name}</div>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <div className="px-4 py-8 text-center">
                <div className="text-gray-400 text-lg mb-1">Keine Stadt gefunden</div>
                <div className="text-sm text-gray-400">Versuche einen anderen Suchbegriff</div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
