// Shared constants that can be used by both TypeScript and JavaScript files
// Keep in sync with src/types/types.ts

const ProductStatus = {
  VISIBLE: "VISIBLE",
  DELETED: "DELETED",
  HIDE: "HIDE"
};

const ProductCategory = {
  CANDLES: "candles",
  GIFT_BOX: "gift box",
  NAMED_GIFT: "named gift"
};

module.exports = {
  ProductStatus,
  ProductCategory
};