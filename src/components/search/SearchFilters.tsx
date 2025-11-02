"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductCategory, ProductCategoryMetadata } from "@/constants/index";
import { categoryToSlug } from "@/libs/slugs";

interface FilterOptions {
  query: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: string;
}

interface SearchFiltersProps {
  onFiltersChange: (filters: FilterOptions) => void;
  initialFilters?: FilterOptions;
}

export default function SearchFilters({ onFiltersChange, initialFilters }: SearchFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState<FilterOptions>(initialFilters || {
    query: searchParams.get('q') || '',
    category: searchParams.get('category') || '',
    minPrice: Number(searchParams.get('minPrice')) || 0,
    maxPrice: Number(searchParams.get('maxPrice')) || 1000,
    sortBy: searchParams.get('sortBy') || 'name'
  });

  const [isExpanded, setIsExpanded] = useState(false);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.query) params.set('q', filters.query);
    if (filters.category) params.set('category', filters.category);
    if (filters.minPrice > 0) params.set('minPrice', filters.minPrice.toString());
    if (filters.maxPrice < 1000) params.set('maxPrice', filters.maxPrice.toString());
    if (filters.sortBy !== 'name') params.set('sortBy', filters.sortBy);

    const queryString = params.toString();
    const newUrl = queryString ? `/search?${queryString}` : '/search';
    
    router.replace(newUrl, { scroll: false });
    onFiltersChange(filters);
  }, [filters, router, onFiltersChange]);

  const handleFilterChange = (key: keyof FilterOptions, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      query: '',
      category: '',
      minPrice: 0,
      maxPrice: 1000,
      sortBy: 'name'
    });
  };

  const categories = Object.entries(ProductCategoryMetadata);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-border-light">
      {/* Mobile Filter Toggle */}
      <div className="p-4 border-b border-border-light lg:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="font-semibold text-text">Filters</span>
          <svg
            className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isExpanded ? 'block' : 'hidden'} lg:block`}>
        <div className="p-6 space-y-6">
          
          {/* Search Query */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Search Products
            </label>
            <input
              type="text"
              value={filters.query}
              onChange={(e) => handleFilterChange('query', e.target.value)}
              placeholder="Search by name..."
              className="w-full px-3 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-3 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">All Categories</option>
              {categories.map(([categoryKey, metadata]) => (
                <option key={categoryKey} value={categoryKey}>
                  {metadata.title}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Price Range
            </label>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
                  placeholder="Min"
                  min="0"
                  className="w-full px-3 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <span className="text-text-light">to</span>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                  placeholder="Max"
                  min="0"
                  className="w-full px-3 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              {/* Price Range Slider */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                  className="w-full h-2 bg-border-light rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-text-light">
                  <span>₹0</span>
                  <span>₹1000+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sort Options */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Sort By
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full px-3 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="name">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="category">Category</option>
            </select>
          </div>

          {/* Clear Filters */}
          <button
            onClick={clearFilters}
            className="w-full px-4 py-2 bg-bg text-text border border-border rounded-md hover:bg-border-light transition-colors duration-200"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
}