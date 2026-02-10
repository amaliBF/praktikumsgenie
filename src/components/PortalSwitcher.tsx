'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, GraduationCap, ClipboardCheck, Compass, Banknote, BookOpen } from 'lucide-react';

const portals = [
  { name: 'Ausbildungsgenie', domain: 'ausbildungsgenie.de', icon: GraduationCap, color: 'from-violet-600 to-pink-600', id: 'ausbildung' },
  { name: 'Praktikumsgenie', domain: 'praktikumsgenie.de', icon: ClipboardCheck, color: 'from-rose-500 to-pink-600', id: 'praktikum' },
  { name: 'Berufsgenie', domain: 'berufsgenie.de', icon: Compass, color: 'from-amber-500 to-orange-600', id: 'beruf' },
  { name: 'Minijobgenie', domain: 'minijobgenie.de', icon: Banknote, color: 'from-emerald-500 to-green-600', id: 'minijob' },
  { name: 'Werkstudentengenie', domain: 'werkstudentengenie.de', icon: BookOpen, color: 'from-cyan-600 to-teal-600', id: 'werkstudent' },
];

interface PortalSwitcherProps {
  currentPortal: string;
  className?: string;
}

export default function PortalSwitcher({ currentPortal, className = '' }: PortalSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        Portale
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full mt-2 right-0 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
          <div className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Genie-Portale</div>
          {portals.map((portal) => {
            const Icon = portal.icon;
            const isCurrent = portal.id === currentPortal;
            return (
              <a
                key={portal.id}
                href={`https://${portal.domain}`}
                className={`flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 transition-colors ${isCurrent ? 'bg-gray-50' : ''}`}
                onClick={() => setOpen(false)}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${portal.color} flex items-center justify-center shrink-0`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className={`text-sm font-medium truncate ${isCurrent ? 'text-gray-900' : 'text-gray-700'}`}>
                    {portal.name}
                    {isCurrent && <span className="ml-1.5 text-xs text-gray-400">(aktuell)</span>}
                  </div>
                  <div className="text-xs text-gray-400">{portal.domain}</div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
