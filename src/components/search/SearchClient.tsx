"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilters from "@/components/search/SearchFilters";
import SearchResults from "@/components/search/SearchResults";
import { EnrichedProducts } from "@/types/types";

interface FilterOptions {
  query: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: string;
}

interface SearchClientProps {
  initialProducts: EnrichedProducts[];
}

export default function SearchClient({ initialProducts }: SearchClientProps) {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterOptions>({
    query: searchParams.get('q') || '',
    category: searchParams.get('category') || '',
    minPrice: Number(searchParams.get('minPrice')) || 0,
    maxPrice: Number(searchParams.get('maxPrice')) || 1000,
    sortBy: searchParams.get('sortBy') || 'name',
  });

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <div className="w-full lg:w-80 lg:sticky lg:top-20 lg:h-fit">
        <SearchFilters 
          onFiltersChange={handleFiltersChange}
          initialFilters={filters}
        />
      </div>
      
      {/* Search Results */}
      <div className="flex-1 min-w-0">
        <SearchResults 
          products={initialProducts}
          filters={filters}
        />
      </div>
    </div>
  );
}