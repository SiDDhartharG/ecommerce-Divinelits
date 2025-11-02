import { ProductPageWrapper, generateProductMetadata } from "@/components/products/ProductPageWrapper";

type Props = {
  params: {
    product_name: string;
  };
};

export async function generateMetadata({ params }: Props) {
  return await generateProductMetadata(params.product_name);
}

const StandaloneProductPage = async ({ params }: Props) => {
  return (
    <ProductPageWrapper
      productNameSlug={params.product_name}
      showCategoryInBreadcrumb={false}
    />
  );
};

export default StandaloneProductPage;