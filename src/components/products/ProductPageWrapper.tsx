import { SingleProduct } from "@/components/products/SingleProduct";
import { Products } from "@/components/products/Products";
import { getProductByName, getRandomProducts } from "@/app/actions";
import { ProductDocument } from "@/types/types";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/auth";
import { Session } from "next-auth";
import { Suspense } from "react";
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";
import SingleProductSkeleton from "@/components/skeletons/SingleProductSkeleton";
import MetaTags from "@/components/seo/MetaTags";
import ProductSchema from "@/components/seo/ProductSchema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { notFound } from "next/navigation";
import { slugToName, slugToCategory, nameToSlug, categoryToSlug } from "@/libs/slugs";

type ProductPageWrapperProps = {
  productNameSlug: string;
  categorySlug?: string; // Optional category slug for breadcrumbs
  showCategoryInBreadcrumb?: boolean;
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export async function generateProductMetadata(productNameSlug: string) {
  try {
    const product: ProductDocument = await getProductByName(productNameSlug);
    
    if (!product || !product.name) {
      return {
        title: "Product Not Found - DivineLits",
        description: "The requested product could not be found.",
      };
    }
    
    const capitalizedName = capitalizeFirstLetter(product.name);

    return {
      title: `${capitalizedName} - Premium ${product.category} | DivineLits`,
      description: `${product.description?.substring(0, 160) || ''}${(product.description?.length || 0) > 160 ? '...' : ''}`,
      keywords: `${product.name}, ${product.category}, DivineLits, buy online, premium quality`,
      openGraph: {
        title: `${capitalizedName} - Premium ${product.category}`,
        description: product.description || '',
        images: product.image?.map(img => ({
          url: img.startsWith('http') ? img : `${process.env.NEXT_PUBLIC_BASE_URL || 'https://divinelits.com'}${img}`,
          width: 800,
          height: 600,
          alt: product.name,
        })) || [],
        type: 'website',
        siteName: 'DivineLits',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${capitalizedName} - Premium ${product.category}`,
        description: product.description || '',
        images: product.image?.[0] || '/logo-1.png',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: "Product Not Found - DivineLits",
      description: "The requested product could not be found.",
    };
  }
}

export const ProductPageWrapper = ({ 
  productNameSlug, 
  categorySlug, 
  showCategoryInBreadcrumb = true 
}: ProductPageWrapperProps) => (
  <section className="pt-14">
    <Suspense
      fallback={
        <div>
          <SingleProductSkeleton />
          <h2 className="mt-24 mb-5 text-xl font-bold sm:text-2xl">
            YOU MIGHT ALSO LIKE...
          </h2>
          <ProductSkeleton
            extraClassname={"colums-mobile"}
            numberProducts={6}
          />
        </div>
      }
    >
      <ProductContent 
        productNameSlug={productNameSlug}
        categorySlug={categorySlug}
        showCategoryInBreadcrumb={showCategoryInBreadcrumb}
      />
    </Suspense>
  </section>
);

const ProductContent = async ({ 
  productNameSlug, 
  categorySlug, 
  showCategoryInBreadcrumb 
}: ProductPageWrapperProps) => {
  try {
    const session: Session | null = await getServerSession(authOptions);
    const product: ProductDocument = await getProductByName(productNameSlug);
    
    // Check if product exists
    if (!product || !product.name) {
      notFound();
    }
    
    const randomProducts = await getRandomProducts(product._id?.toString() || '');
    const productJSON = JSON.stringify(product);

    // Convert category slug back to category name if provided
    const categoryName = categorySlug ? slugToCategory(categorySlug) : product.category;

    // Create breadcrumb items based on whether to show category
    const breadcrumbItems = showCategoryInBreadcrumb && categoryName ? [
      { name: 'Home', url: '/' },
      { 
        name: capitalizeFirstLetter(categoryName), 
        url: `/category/${categorySlug || categoryToSlug(product.category || '')}` 
      },
      { name: product.name }
    ] : [
      { name: 'Home', url: '/' },
      { name: product.name }
    ];

    // Determine the current URL based on the route structure
    const currentUrl = categorySlug 
      ? `/category/${categorySlug}/product/${productNameSlug}`
      : `/product/${productNameSlug}`;

    // Transform product data for schema
    const schemaProduct = {
      id: product._id?.toString() || productNameSlug,
      name: product.name,
      description: product.description || '',
      images: product.image || [],
      price: product.price * (1 - (product.discount || 0) / 100),
      currency: 'USD',
      sku: product._id?.toString() || productNameSlug,
      brand: 'DivineLits',
      category: product.category || '',
      inStock: product.status === 'VISIBLE',
      rating: {
        value: 4.5, // You can calculate this from reviews if available
        count: 0    // You can get this from reviews if available
      }
    };

    return (
      <>
        <MetaTags
          title={`${capitalizeFirstLetter(product.name)} - Premium ${product.category} | DivineLits`}
          description={product.description || ''}
          keywords={`${product.name}, ${product.category}, DivineLits, buy online, premium quality`}
          image={product.image?.[0] || '/logo-1.png'}
          url={currentUrl}
          type="product"
        />
        
        <ProductSchema 
          product={schemaProduct}
          url={currentUrl}
        />
        
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        
        <SingleProduct product={productJSON} session={session} />

        <h2 className="mt-24 mb-5 text-xl font-bold sm:text-2xl">
          YOU MIGHT ALSO LIKE...
        </h2>

        <Products products={randomProducts} extraClassname={"colums-mobile"} />
      </>
    );
  } catch (error) {
    console.error('Error loading product:', error);
    notFound();
  }
};

export default ProductPageWrapper;