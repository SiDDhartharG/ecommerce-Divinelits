# Product Page Routes with Slug-Based URLs

This document explains the new product page routes with clean, SEO-friendly slug-based URLs.

## New URL Structure

### 1. Category-specific Product Page
- **URL Pattern**: `/category/[category-slug]/product/[product-name-slug]`
- **Example**: `/category/candles/product/Lavender-Scented-Candle`

### 2. Standalone Product Page
- **URL Pattern**: `/product/[product-name-slug]`
- **Example**: `/product/Lavender-Scented-Candle`

### 3. Category Page
- **URL Pattern**: `/category/[category-slug]`
- **Example**: `/category/candles`, `/category/gift-box`

## Slug Format

### Product Names
- **Original**: "Lavender Scented Candle"
- **Slug**: "Lavender-Scented-Candle"
- **Rules**: Spaces become dashes, special characters removed

### Category Names
- **Original**: "gift box"
- **Slug**: "gift-box"
- **Rules**: Lowercase, spaces become dashes

## How It Works

### Slug Conversion Functions
```typescript
// Convert to slug
nameToSlug("Lavender Scented Candle") // → "Lavender-Scented-Candle"
categoryToSlug("gift box") // → "gift-box"

// Convert from slug
slugToName("Lavender-Scented-Candle") // → "Lavender Scented Candle"
slugToCategory("gift-box") // → "gift box"
```

### Database Query
```typescript
export const getProductByName = async (productNameSlug: string) => {
  const productName = slugToName(productNameSlug);
  const product = await Product.findOne({ 
    name: { $regex: new RegExp(`^${productName}$`, 'i') },
    status: ProductStatus.VISIBLE 
  });
  return product;
};
```

## URL Examples

### Beautiful, SEO-Friendly URLs:
```
✅ /category/candles/product/Vanilla-Scented-Candle
✅ /category/gift-box/product/Birthday-Special-Set
✅ /product/Personalized-Wedding-Gift
✅ /category/named-gift
```

### Old URL-Encoded Format (Replaced):
```
❌ /category/candles/product/Vanilla%20Scented%20Candle
❌ /category/gift%20box/product/Birthday%20Special%20Set
```

## Features

- ✅ **Clean URLs**: Dashes instead of %20 encoding
- ✅ **SEO-optimized**: Search engine friendly
- ✅ **User-friendly**: Readable and shareable URLs
- ✅ **Consistent**: Same format across all routes
- ✅ **Case-insensitive**: Database matching works regardless of case
- ✅ **Special character handling**: Removes/converts problematic characters
- ✅ **Reversible**: Can convert slugs back to original names

## Usage in Components

```typescript
import { nameToSlug, categoryToSlug } from "@/libs/slugs";

// For category-specific product link
<Link href={`/category/${categoryToSlug(category)}/product/${nameToSlug(productName)}`}>
  {productName}
</Link>

// For standalone product link  
<Link href={`/product/${nameToSlug(productName)}`}>
  {productName}
</Link>

// For category link
<Link href={`/category/${categoryToSlug(category)}`}>
  {categoryName}
</Link>
```

## Benefits

1. **Better SEO**: Search engines prefer clean URLs
2. **User Experience**: URLs are readable and professional
3. **Social Sharing**: Clean URLs look better when shared
4. **Analytics**: Easier to track and analyze URL patterns
5. **Maintainability**: Consistent URL structure across the site