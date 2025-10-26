"use client";

import { ProductImages } from "@/components/products/ProductImages";
import { ProductDocument, VariantsDocument } from "@/types/types";
import { Session } from "next-auth";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AddToCart from "../cart/AddToCart";

interface SingleProduct {
  product: string;
  session: Session | null;
}

export const SingleProduct = ({ product, session }: SingleProduct) => {
  const productPlainObject: ProductDocument = JSON.parse(product);
  const [selectedVariant, setSelectedVariant] = useState<VariantsDocument>(
    productPlainObject.variants[0]
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  // Calculate discounted price
  const originalPrice = productPlainObject.price;
  const discount = productPlainObject.discount || 0;
  const discountedPrice = originalPrice - (originalPrice * discount) / 100;
  const hasDiscount = discount > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="w-full">
          <ProductImages
            name={productPlainObject.name}
            selectedVariant={selectedVariant}
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:sticky lg:top-8 lg:self-start">
          <div className="bg-bg-card border border-border-light rounded-lg shadow-sm overflow-hidden">
            {/* Product Info Section */}
            <div className="p-6 border-b border-border-light">
              <h1 className="text-2xl lg:text-3xl font-bold text-text mb-4">
                {productPlainObject.name}
              </h1>
              
              {/* Price Section */}
              <div className="mb-6">
                {hasDiscount ? (
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-3xl font-bold">
                       ₹{discountedPrice.toFixed(0)}
                    </span>
                    <span className="text-sm text-text-light line-through">
                      ₹{originalPrice}
                    </span>
                    <span className="bg-error/10 text-error text-sm font-semibold px-3 py-1 rounded-full">
                      -{discount}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-text">
                    ₹{originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="text-text-light leading-relaxed">
                <p>{productPlainObject.description}</p>
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="p-6 bg-bg">
              <AddToCart
                session={session}
                product={productPlainObject}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
              />
            </div>
          </div>

          {/* Additional Product Details */}
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details" className="border-border-light">
                <AccordionTrigger className="text-left text-text hover:text-primary">
                  Product Details
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-sm text-text-light">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-text">Category:</span>
                      <span className="capitalize">{productPlainObject.category}</span>
                    </div>
                    {productPlainObject.sizes && productPlainObject.sizes.length > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-text">Available Sizes:</span>
                        <span>{productPlainObject.sizes.join(", ")}</span>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="shipping" className="border-border-light">
                <AccordionTrigger className="text-left text-text hover:text-primary">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-sm text-text-light">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-success rounded-full flex-shrink-0"></span>
                      <span>Free shipping on orders over ₹200</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                      <span>Standard delivery: 3-5 business days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span>30-day return policy (delivery charges will be deducted in case of return)</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
