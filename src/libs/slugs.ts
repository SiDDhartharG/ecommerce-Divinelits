/**
 * Utility functions for converting product names to URL-friendly slugs and back
 */

/**
 * Convert a product name to a URL-friendly slug
 * Example: "Lavender Scented Candle" -> "Lavender-Scented-Candle"
 */
export function nameToSlug(name: string): string {
  return name
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^\w\-]/g, '') // Remove special characters except dashes
    .replace(/-+/g, '-') // Replace multiple dashes with single dash
    .replace(/^-|-$/g, ''); // Remove leading/trailing dashes
}

/**
 * Convert a URL slug back to a product name
 * Example: "Lavender-Scented-Candle" -> "Lavender Scented Candle"
 */
export function slugToName(slug: string): string {
  return decodeURIComponent(slug)
    .replace(/-/g, ' ') // Replace dashes with spaces
    .trim();
}

/**
 * Convert category name to URL-friendly slug
 * Example: "gift box" -> "gift-box"
 */
export function categoryToSlug(category: string): string {
  return category
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Convert category slug back to category name
 * Example: "gift-box" -> "gift box"
 */
export function slugToCategory(slug: string): string {
  return decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .toLowerCase()
    .trim();
}