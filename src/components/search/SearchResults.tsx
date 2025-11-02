"use client";

import { useState, useEffect } from "react";
import { ClientProducts } from "@/components/products/ClientProducts";
import { EnrichedProducts } from "@/types/types";

interface FilterOptions {
  query: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: string;
}

interface SearchResultsProps {
  products: EnrichedProducts[];
  filters: FilterOptions;
}

export default function SearchResults({ products, filters }: SearchResultsProps) {
  const [filteredProducts, setFilteredProducts] = useState<EnrichedProducts[]>(products);

  const normalizeText = (text: string): string => {
    return text
      .replace(/[-_]/g, "")
      .replace(/[^\w\s]/g, "")
      .toLowerCase();
  };

  const sortProducts = (products: EnrichedProducts[], sortBy: string): EnrichedProducts[] => {
    const sorted = [...products];
    
    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'category':
        return sorted.sort((a, b) => a.category.localeCompare(b.category));
      default:
        return sorted;
    }
  };

  useEffect(() => {
    let filtered = products;

    // Filter by search query
    if (filters.query) {
      filtered = filtered.filter((product) =>
        normalizeText(product.name).includes(normalizeText(filters.query)) ||
        normalizeText(product.category).includes(normalizeText(filters.query))
      );
    }

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category);
    }

    // Filter by price range
    filtered = filtered.filter((product) => {
      const price = product.price;
      return price >= filters.minPrice && price <= filters.maxPrice;
    });

    // Sort products
    filtered = sortProducts(filtered, filters.sortBy);

    setFilteredProducts(filtered);
  }, [products, filters]);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-text-light"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-text mb-4">No products found</h3>
        <p className="text-text-light mb-6 max-w-md mx-auto">
          {filters.query 
            ? `No products found for "${filters.query}". Try adjusting your filters or search terms.`
            : "No products match your current filters. Try adjusting your criteria."
          }
        </p>
        <div className="space-y-2 text-sm text-text-light">
          <p>Try:</p>
          <ul className="list-disc list-inside space-y-1 max-w-xs mx-auto">
            <li>Checking your spelling</li>
            <li>Using different keywords</li>
            <li>Removing some filters</li>
            <li>Browsing all categories</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-text">
          {filters.query ? `Search Results for "${filters.query}"` : 'All Products'}
        </h2>
        <p className="text-text-light">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      {/* Products Grid */}
      <ClientProducts products={filteredProducts} extraClassname="" />
    </div>
  );
}