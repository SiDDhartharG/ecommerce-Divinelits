import { SingleProduct } from "@/components/products/SingleProduct";
import { Products } from "@/components/products/Products";
import { getProduct, getRandomProducts } from "@/app/actions";
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

type Props = {
  params: {
    id: string;
  };
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export async function generateMetadata({ params }: Props) {
  const product: ProductDocument = await getProduct(params.id);
  const capitalizedName = capitalizeFirstLetter(product.name);

  return {
    title: `${capitalizedName} - Premium ${product.category} | DivineLits`,
    description: `${product.description.substring(0, 160)}${product.description.length > 160 ? '...' : ''}`,
    keywords: `${product.name}, ${product.category}, DivineLits, buy online, premium quality`,
    openGraph: {
      title: `${capitalizedName} - Premium ${product.category}`,
      description: product.description,
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
      description: product.description,
      images: product.image?.[0] || '/logo-1.png',
    },
  };
}

const ProductPage = async ({ params }: Props) => (
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
      <AllProducts id={params.id} />
    </Suspense>
  </section>
);

const AllProducts = async ({ id }: { id: string }) => {
  const session: Session | null = await getServerSession(authOptions);
  const product: ProductDocument = await getProduct(id);
  const randomProducts = await getRandomProducts(id);
  const productJSON = JSON.stringify(product);

  // Create breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: capitalizeFirstLetter(product.category), url: `/${encodeURIComponent(product.category)}` },
    { name: product.name }
  ];

  // Transform product data for schema
  const schemaProduct = {
    id: product._id?.toString() || id,
    name: product.name,
    description: product.description,
    images: product.image || [],
    price: product.price * (1 - (product.discount || 0) / 100),
    currency: 'USD',
    sku: product._id?.toString() || id,
    brand: 'DivineLits',
    category: product.category,
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
        description={product.description}
        keywords={`${product.name}, ${product.category}, DivineLits, buy online, premium quality`}
        image={product.image?.[0] || '/logo-1.png'}
        url={`/${encodeURIComponent(product.category)}/${id}`}
        type="product"
      />
      
      <ProductSchema 
        product={schemaProduct}
        url={`/${encodeURIComponent(product.category)}/${id}`}
      />
      
      <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      
      <SingleProduct product={productJSON} session={session} />

      <h2 className="mt-24 mb-5 text-xl font-bold sm:text-2xl">
        YOU MIGHT ALSO LIKE...
      </h2>

      <Products products={randomProducts} extraClassname={"colums-mobile"} />
    </>
  );
};

export default ProductPage;
