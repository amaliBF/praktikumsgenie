import Header from '@/components/Header';
import Footer from '@/components/Footer';

function JobCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 animate-pulse">
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-lg bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
        <div className="flex-1 min-w-0 space-y-3">
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/2" />
          <div className="flex gap-4">
            <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-24" />
            <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StellenLoading() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search bar skeleton */}
          <div className="mb-8">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-4 animate-pulse" />
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg p-3 animate-pulse">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 h-11 bg-gray-100 dark:bg-gray-800 rounded-xl" />
                <div className="flex-1 sm:max-w-[200px] h-11 bg-gray-100 dark:bg-gray-800 rounded-xl" />
                <div className="w-24 h-11 bg-rose-200 dark:bg-rose-900 rounded-xl" />
              </div>
            </div>
          </div>

          {/* Job cards skeleton */}
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <JobCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
