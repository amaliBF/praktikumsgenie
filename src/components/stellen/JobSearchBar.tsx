'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Loader2 } from 'lucide-react';

interface Suggestion {
  type: 'beruf' | 'firma' | 'stadt';
  text: string;
  slug: string;
  count: number;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.genieportal.de/v1';

export default function JobSearchBar({
  initialQuery,
  initialCity,
  className,
  compact,
}: {
  initialQuery?: string;
  initialCity?: string;
  className?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery || '');
  const [city, setCity] = useState(initialCity || '');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  // Close suggestions on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const fetchSuggestions = useCallback(async (q: string) => {
    if (q.length < 2) {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/public/jobs/autocomplete?q=${encodeURIComponent(q)}&portal_id=2&limit=5`);
      if (res.ok) {
        const data = await res.json();
        setSuggestions(data.suggestions || []);
        setShowSuggestions(true);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, []);

  function handleQueryChange(value: string) {
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(value), 300);
  }

  function handleSearch(e?: React.FormEvent) {
    e?.preventDefault();
    setShowSuggestions(false);
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (city) params.set('stadt', city);
    router.push(`/stellen?${params.toString()}`);
  }

  function handleSuggestionClick(s: Suggestion) {
    setShowSuggestions(false);
    if (s.type === 'stadt') {
      const citySlug = s.slug || s.text.toLowerCase()
        .replace(/[\u00e4\u00c4]/g, 'ae').replace(/[\u00f6\u00d6]/g, 'oe')
        .replace(/[\u00fc\u00dc]/g, 'ue').replace(/\u00df/g, 'ss')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      router.push(`/stellen/${citySlug}`);
    } else if (s.type === 'beruf') {
      router.push(`/stellen/beruf/${s.slug}`);
    } else {
      setQuery(s.text);
      handleSearch();
    }
  }

  const typeLabels: Record<string, string> = {
    beruf: 'Beruf',
    firma: 'Firma',
    stadt: 'Stadt',
  };

  if (compact) {
    return (
      <form onSubmit={handleSearch} className={className}>
        <div ref={wrapperRef} className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Praktikum, Beruf oder Unternehmen..."
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                {suggestions.map((s, i) => (
                  <button
                    key={`${s.type}-${s.slug}-${i}`}
                    type="button"
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-rose-50 flex items-center gap-2"
                    onClick={() => handleSuggestionClick(s)}
                  >
                    {s.type === 'stadt' ? (
                      <MapPin className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <Search className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                    )}
                    <span className="flex-1 truncate">{s.text}</span>
                    <span className="text-xs text-gray-400">{typeLabels[s.type]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all"
          >
            Suchen
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSearch} className={className}>
      <div ref={wrapperRef} className="relative">
        <div className="flex flex-col sm:flex-row gap-3 bg-white p-3 rounded-2xl shadow-xl shadow-rose-200/30 border border-rose-100">
          {/* Query Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Praktikum, Beruf oder Unternehmen..."
              className="w-full pl-12 pr-4 py-3.5 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            {loading && (
              <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 animate-spin" />
            )}
          </div>

          {/* City Input */}
          <div className="relative sm:w-64">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Wo? (Stadt, PLZ...)"
              className="w-full pl-12 pr-4 py-3.5 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2"
          >
            <Search className="h-5 w-5" />
            <span>Stellen finden</span>
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-3 right-3 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
            {suggestions.map((s, i) => (
              <button
                key={`${s.type}-${s.slug}-${i}`}
                type="button"
                className="w-full text-left px-5 py-3 text-sm hover:bg-rose-50 flex items-center gap-3 border-b border-gray-50 last:border-0"
                onClick={() => handleSuggestionClick(s)}
              >
                {s.type === 'stadt' ? (
                  <MapPin className="h-4 w-4 text-rose-400 flex-shrink-0" />
                ) : (
                  <Search className="h-4 w-4 text-rose-400 flex-shrink-0" />
                )}
                <span className="flex-1">{s.text}</span>
                <span className="text-xs font-medium text-rose-400 bg-rose-50 px-2 py-0.5 rounded-full">
                  {typeLabels[s.type]}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
