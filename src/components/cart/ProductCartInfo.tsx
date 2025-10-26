"use client";

import { useCallback } from "react";
import { EnrichedProducts } from "@/types/types";
import { addItem, delOneItem } from "@/app/(carts)/cart/action";

const ProductCartInfo = ({ product }: { product: EnrichedProducts }) => {
  const {
    productId,
    size,
    variantId,
    category,
    price,
    quantity,
    purchased,
    color,
  } = product;

  const handleAddItem = useCallback(() => {
    addItem(category, productId, size, variantId, price);
  }, [category, productId, size, variantId, price]);

  const handleDelItem = useCallback(() => {
    delOneItem(productId, size, variantId);
  }, [productId, size, variantId]);

  const quantityButtons = useCallback(() => {
    if (purchased) {
      return (
        <div className="text-sm font-medium">
          ₹{quantity ? (price * quantity).toFixed(2) : price}
        </div>
      );
    } else {
      return (
        <div className="flex bg-white border border-border-light rounded-lg overflow-hidden shadow-sm">
          <button
            className="flex items-center justify-center w-10 h-10 p-2 text-text hover:bg-primary hover:text-white transition-all duration-200 border-r border-border-light"
            onClick={handleDelItem}
          >
            <svg
              data-test="geist-icon"
              height="14"
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width="14"
              style={{ color: "currentColor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 7.25H2.75H13.25H14V8.75H13.25H2.75H2V7.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <span className="flex items-center justify-center w-12 h-10 text-sm font-medium bg-card text-text border-r border-border-light">
            {quantity}
          </span>
          <button
            className="flex items-center justify-center w-10 h-10 p-2 text-text hover:bg-primary hover:text-white transition-all duration-200"
            onClick={handleAddItem}
          >
            <svg
              data-test="geist-icon"
              height="14"
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width="14"
              style={{ color: "currentColor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.75 1.75V1H7.25V1.75V6.75H2.25H1.5V8.25H2.25H7.25V13.25V14H8.75V13.25V8.25H13.75H14.5V6.75H13.75H8.75V1.75Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      );
    }
  }, [purchased, quantity, price, handleAddItem, handleDelItem]);

  return (
    <>
      <div className="flex sm:hidden items-center justify-between">
        <div className="flex">
          <div className="text-sm pr-2.5 border-r border-border-light text-text-light">{size}</div>
          <div className="text-sm pl-2.5 text-text-light">{color}</div>
        </div>
        {quantityButtons()}
      </div>
      <div className="items-center justify-between hidden sm:flex">
        {quantityButtons()}
        <div className="flex">
          <div className="text-sm pr-2.5 border-r border-border-light text-text-light">{size}</div>
          <div className="text-sm pl-2.5 text-text-light">{color}</div>
        </div>
      </div>
    </>
  );
};

export default ProductCartInfo;
