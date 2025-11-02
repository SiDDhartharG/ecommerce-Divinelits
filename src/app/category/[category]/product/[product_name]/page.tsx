import { ProductPageWrapper, generateProductMetadata } from "@/components/products/ProductPageWrapper";

type Props = {
  params: {
    category: string;
    product_name: string;
  };
};

export async function generateMetadata({ params }: Props) {
  return await generateProductMetadata(params.product_name);
}

const CategoryProductPage = async ({ params }: Props) => {
  return (
    <ProductPageWrapper
      productNameSlug={params.product_name}
      categorySlug={params.category}
      showCategoryInBreadcrumb={true}
    />
  );
};

export default CategoryProductPage;