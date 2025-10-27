// Shared constants for TypeScript files
// This ensures consistency between JS and TS enums

export enum ProductStatus {
  VISIBLE = "VISIBLE",
  DELETED = "DELETED",
  HIDE = "HIDE"
}

export enum ProductCategory {
  CANDLES = "candles",
  GIFT_BOX = "gift box",
  NAMED_GIFT = "named gift"
}

// Export the values as objects too for easier usage
export const PRODUCT_STATUS_VALUES = Object.values(ProductStatus);
export const PRODUCT_CATEGORY_VALUES = Object.values(ProductCategory);