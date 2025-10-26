"use client";

import { useState, useTransition, useCallback } from "react";
import { ProductDocument, VariantsDocument } from "@/types/types";
import { colorMapping } from "@/helpers/colorMapping";
import { addItem } from "@/app/(carts)/cart/action";
import { Loader } from "../common/Loader";
import { Session } from "next-auth";
import { toast } from "sonner";

interface AddToCartProps {
  product: ProductDocument;
  session: Session | null;
  selectedVariant: VariantsDocument | undefined;
  setSelectedVariant: (variant: VariantsDocument) => void;
}

export default function AddToCart({
  product,
  session,
  selectedVariant,
  setSelectedVariant,
}: AddToCartProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  // Calculate the final price (with discount if applicable)
  const finalPrice = product.discount 
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const handleAddToCart = useCallback(() => {
    if (!session) {
      toast.info(
        "You must be registered to be able to add a product to the cart."
      );
      return;
    }
    if (!selectedVariant?.priceId) {
      toast.info("You have to select a color to save the product.");
      return;
    }
    if (!selectedSize) {
      toast.info("You have to select a size to save the product.");
      return;
    }
    startTransition(() => {
      addItem(
        product.category,
        product._id,
        selectedSize,
        selectedVariant.priceId,
        finalPrice // Use the calculated final price instead of original price
      );
    });
  }, [session, selectedVariant, selectedSize, product, finalPrice, startTransition]);

  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div>
        <h3 className="text-sm font-medium text-text mb-3">Size</h3>
        <div className="grid grid-cols-4 gap-2">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              className={`flex items-center justify-center border border-border-light px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:border-primary ${
                selectedSize === size 
                  ? "bg-primary text-white border-primary" 
                  : "bg-bg-card text-text hover:bg-bg"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-medium text-text mb-3">Color</h3>
        <div className="flex gap-3 flex-wrap">
          {product.variants.map((variant, index) => (
            <button
              key={index}
              className={`relative w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                selectedVariant?.color === variant.color
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border-light hover:border-primary"
              }`}
              style={{ backgroundColor: colorMapping[variant.color] }}
              onClick={() => {
                setSelectedVariant(variant);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              title={`Color: ${variant.color}`}
            >
              {selectedVariant?.color === variant.color && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        type="submit"
        onClick={handleAddToCart}
        disabled={isPending}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <Loader height={20} width={20} />
            Adding to Cart...
          </>
        ) : (
          "Add To Cart"
        )}
      </button>
    </div>
  );
}
