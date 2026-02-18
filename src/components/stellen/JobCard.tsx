import Link from 'next/link';
import { MapPin, Calendar, Video, Building2, ExternalLink } from 'lucide-react';
import { JobListItem, jobUrlToPath } from '@/lib/api';

export default function JobCard({ job }: { job: JobListItem }) {
  const path = jobUrlToPath(job.url);

  return (
    <Link
      href={path}
      className="group block bg-white rounded-xl border border-gray-200 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/50 transition-all p-5"
    >
      <div className="flex gap-4">
        {/* Logo / Video Thumbnail */}
        <div className="flex-shrink-0">
          {job.videoThumbnail ? (
            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={job.videoThumbnail}
                alt={job.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Video className="h-5 w-5 text-white" />
              </div>
            </div>
          ) : job.company.logo ? (
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center p-2">
              <img
                src={job.company.logo}
                alt={job.company.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center border border-rose-100">
              <Building2 className="h-8 w-8 text-rose-400" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors truncate">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mt-0.5">{job.company.name}</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {job.isExternal && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                  <ExternalLink className="h-3 w-3" /> Extern
                </span>
              )}
              {job.hasVideo && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                  <Video className="h-3 w-3" /> Video
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-gray-500">
            {job.standort.stadt && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {job.standort.stadt}
              </span>
            )}
            {job.gehalt && (
              <span className="inline-flex items-center gap-1">
                <span className="font-medium text-gray-700">
                  {job.gehalt.min === job.gehalt.max
                    ? `${job.gehalt.min.toLocaleString('de-DE')}\u20AC`
                    : `${job.gehalt.min.toLocaleString('de-DE')} - ${job.gehalt.max.toLocaleString('de-DE')}\u20AC`}
                </span>
                /Monat
              </span>
            )}
            {job.startDatum && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(job.startDatum).toLocaleDateString('de-DE', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
