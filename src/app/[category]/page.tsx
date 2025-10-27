import { Products } from "@/components/products/Products";
import { getCategoryProducts } from "../actions";
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";
import { Suspense } from "react";
import MetaTags from "@/components/seo/MetaTags";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

type Props = {
  params: {
    category: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const decodedCategory = decodeURIComponent(params.category);
  const capitalizedCategory = capitalizeFirstLetter(decodedCategory);

  return {
    title: `${capitalizedCategory} Collection - Premium Quality | DivineLits`,
    description: `Discover our exquisite ${capitalizedCategory.toLowerCase()} collection at DivineLits. Premium quality products with fast shipping and excellent customer service.`,
    keywords: `${capitalizedCategory}, DivineLits, premium ${decodedCategory}, buy ${decodedCategory} online, quality ${decodedCategory}`,
    openGraph: {
      title: `${capitalizedCategory} Collection - Premium Quality`,
      description: `Discover our exquisite ${capitalizedCategory.toLowerCase()} collection at DivineLits.`,
      type: 'website',
      images: [
        {
          url: '/logo-1.png',
          width: 800,
          height: 600,
          alt: `${capitalizedCategory} Collection at DivineLits`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${capitalizedCategory} Collection - Premium Quality`,
      description: `Discover our exquisite ${capitalizedCategory.toLowerCase()} collection at DivineLits.`,
    },
  };
}

const CategoryPage = async ({ params }: Props) => {
  return (
    <section className="pt-14">
      <Suspense
        fallback={<ProductSkeleton extraClassname="" numberProducts={6} />}
      >
        <CategoryProducts category={params.category} />
      </Suspense>
    </section>
  );
};

const CategoryProducts = async ({ category }: { category: string }) => {
  const products = await getCategoryProducts(category);
  const decodedCategory = decodeURIComponent(category);
  
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const capitalizedCategory = capitalizeFirstLetter(decodedCategory);

  // Create breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: capitalizedCategory }
  ];

  return (
    <>
      <MetaTags
        title={`${capitalizedCategory} Collection - Premium Quality | DivineLits`}
        description={`Discover our exquisite ${capitalizedCategory.toLowerCase()} collection at DivineLits. Premium quality products with fast shipping and excellent customer service.`}
        keywords={`${capitalizedCategory}, DivineLits, premium ${decodedCategory}, buy ${decodedCategory} online, quality ${decodedCategory}`}
        url={`/${encodeURIComponent(decodedCategory)}`}
      />
      
      <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      
      <div className="category-header mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {capitalizedCategory} Collection
        </h1>
        <p className="text-lg text-gray-600">
          Discover our premium {capitalizedCategory.toLowerCase()} collection with {products.length} products
        </p>
      </div>
      
      <Products products={products} extraClassname="" />
    </>
  );
};

export default CategoryPage;
