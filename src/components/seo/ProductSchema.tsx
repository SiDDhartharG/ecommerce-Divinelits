import Head from 'next/head';

interface ProductSchemaProps {
  product: {
    id: string;
    name: string;
    description: string;
    images: string[];
    price: number;
    currency?: string;
    sku?: string;
    brand?: string;
    category?: string;
    inStock?: boolean;
    rating?: {
      value: number;
      count: number;
    };
    reviews?: any[];
  };
  url?: string;
}

const ProductSchema: React.FC<ProductSchemaProps> = ({ product, url }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://divinelits.com';
  const productUrl = url || `${baseUrl}/product/${product.id}`;
  
  const schema: any = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.images?.map(img => 
      img.startsWith('http') ? img : `${baseUrl}${img}`
    ) || [],
    "sku": product.sku || product.id,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "DivineLits"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "url": productUrl,
      "priceCurrency": product.currency || "USD",
      "price": product.price.toString(),
      "availability": product.inStock !== false 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "DivineLits"
      }
    }
  };

  // Add aggregate rating if available
  if (product.rating && product.rating.count > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": product.rating.value.toString(),
      "reviewCount": product.rating.count.toString(),
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  // Add reviews if available
  if (product.reviews && product.reviews.length > 0) {
    schema.review = product.reviews.slice(0, 5).map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating?.toString() || "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": review.author || "Customer"
      },
      "reviewBody": review.comment || review.review || "",
      "datePublished": review.createdAt || review.date
    }));
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema, null, 2)
        }}
      />
    </Head>
  );
};

export default ProductSchema;