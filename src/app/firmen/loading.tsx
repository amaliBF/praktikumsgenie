import Header from '@/components/Header';
import Footer from '@/components/Footer';

function CompanyCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-lg bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/3" />
        </div>
      </div>
      <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-full mb-2" />
      <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-3/4" />
    </div>
  );
}

export default function FirmenLoading() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-72 mb-2" />
            <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded w-96" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <CompanyCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
