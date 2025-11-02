import { Suspense } from "react";
import SearchClient from "@/components/search/SearchClient";
import { getAllProducts } from "../actions";
import { Skeleton } from "@/components/ui/skeleton";

interface SearchProps {
  searchParams: { [key: string]: string | undefined };
}

function SearchSkeleton() {
  return (
    <section className="pt-14 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar Skeleton */}
        <div className="w-full lg:w-80 space-y-6">
          <Skeleton className="h-8 w-32" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
        
        {/* Products Grid Skeleton */}
        <div className="flex-1">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Search: React.FC<SearchProps> = async ({ searchParams }) => {
  try {
    const products = await getAllProducts();
    
    if (!products) {
      return (
        <section className="pt-14 px-4 max-w-7xl mx-auto">
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-text mb-4">Unable to load products</h3>
            <p className="text-text-light">Please try again later.</p>
          </div>
        </section>
      );
    }

    return (
      <section className="pt-14 px-4 max-w-7xl mx-auto">
        <Suspense fallback={<SearchSkeleton />}>
          <SearchClient initialProducts={products} />
        </Suspense>
      </section>
    );
  } catch (error) {
    console.error("Error in search page:", error);
    return (
      <section className="pt-14 px-4 max-w-7xl mx-auto">
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-text mb-4">Something went wrong</h3>
          <p className="text-text-light">Please try refreshing the page.</p>
        </div>
      </section>
    );
  }
};

export default Search;
