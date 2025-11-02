import { Products } from "@/components/products/Products";
import { getCategoryProducts } from "../../actions";
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";
import { Suspense } from "react";
import MetaTags from "@/components/seo/MetaTags";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { ProductCategory, ProductCategoryMetadata, CategoryMetadata } from "@/constants/index";
import Image from "next/image";
import { notFound } from "next/navigation";
import { slugToCategory } from "@/libs/slugs";

type Props = {
  params: {
    category: string;
  };
};

// Helper function to check if category is valid
function isValidCategory(category: string): category is ProductCategory {
  return Object.values(ProductCategory).includes(category as ProductCategory);
}

// Helper function to get category metadata
function getCategoryMetadata(categorySlug: string): CategoryMetadata | null {
  const categoryName = slugToCategory(categorySlug);
  if (isValidCategory(categoryName)) {
    return ProductCategoryMetadata[categoryName];
  }
  return null;
}

export async function generateMetadata({ params }: Props) {
  const categoryName = slugToCategory(params.category);
  const metadata = getCategoryMetadata(params.category);
  
  if (!metadata) {
    return {
      title: "Category Not Found - DivineLits",
      description: "The requested category could not be found.",
    };
  }

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const capitalizedCategory = capitalizeFirstLetter(categoryName);

  return {
    title: `${metadata.title} | DivineLits`,
    description: metadata.metaDescription,
    keywords: metadata.keywords,
    openGraph: {
      title: `${metadata.title} - Premium Quality`,
      description: metadata.description,
      type: 'website',
      images: [
        {
          url: metadata.image,
          width: 800,
          height: 600,
          alt: `${capitalizedCategory} Collection at DivineLits`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${metadata.title} - Premium Quality`,
      description: metadata.description,
    },
  };
}

const CategoryPage = async ({ params }: Props) => {
  const metadata = getCategoryMetadata(params.category);
  
  if (!metadata) {
    notFound();
  }

  return (
    <section className="pt-14">
      <Suspense
        fallback={<ProductSkeleton extraClassname="" numberProducts={6} />}
      >
        <CategoryProducts category={params.category} metadata={metadata} />
      </Suspense>
    </section>
  );
};

const CategoryProducts = async ({ 
  category, 
  metadata 
}: { 
  category: string; 
  metadata: CategoryMetadata;
}) => {
  const categoryName = slugToCategory(category);
  const products = await getCategoryProducts(categoryName);
  
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const capitalizedCategory = capitalizeFirstLetter(categoryName);

  // Create breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: capitalizedCategory }
  ];
  
  return (
    <>
      <MetaTags
        title={`${metadata.title} | DivineLits`}
        description={metadata.metaDescription}
        keywords={metadata.keywords}
        url={`/category/${category}`}
        image={metadata.image}
      />
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-bg overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={metadata.backgroundImage}
            alt={metadata.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/80 to-bg/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
            {metadata.title}
          </h1>
          <p className="text-xl md:text-2xl text-text-light mb-8 max-w-2xl mx-auto">
            {metadata.description}
          </p>
          <p className="text-13 hidden mb-8 text-text-light max-w-1xl mx-auto leading-relaxed">
              {metadata.metaDescription}
          </p>
          <div className="bg-white/90 backdrop-blur-sm px-6 py-6 rounded-lg inline-block">
            <p className="text-text font-medium">
              {products.length} Products Available
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="bg-bg py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-text">
              All {capitalizedCategory}
            </h3>
          </div>
          
          {products.length > 0 ? (
            <Products products={products} extraClassname="" />
          ) : (
            <div className="text-center py-16">
              <div className="mb-6">
                <Image
                  src={metadata.image}
                  alt="No products"
                  width={200}
                  height={200}
                  className="mx-auto opacity-50"
                />
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">
                No Products Available
              </h3>
              <p className="text-text-light mb-8">
                We&apos;re currently working on adding products to this category. Please check back soon!
              </p>
              <a
                href="/"
                className="inline-block bg-text text-white px-8 py-3 rounded-lg font-semibold hover:bg-text-light transition-colors duration-300"
              >
                Continue Shopping
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
