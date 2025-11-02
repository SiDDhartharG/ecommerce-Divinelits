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

const ProductCategoryMetadata = {
  [ProductCategory.CANDLES]: {
    title: "Illuminate Your Space with Premium Candles",
    description: "Handcrafted luxury candles for every mood and occasion",
    image: "/candle-1.png",
    backgroundImage: "/candle-1.png",
    metaDescription: "Shop premium luxury candles at DivineLits. Handcrafted with finest ingredients, perfect for creating a warm atmosphere. Free shipping on orders over $50.",
    keywords: "luxury candles, premium candles, handcrafted candles, scented candles, home fragrance, candle collection"
  },
  [ProductCategory.GIFT_BOX]: {
    title: "Perfect Gifts for Every Occasion",
    description: "Curated collections that express your love and care",
    image: "/gift-1.png",
    backgroundImage: "/gift-1.png",
    metaDescription: "Beautiful gift sets and curated collections at DivineLits. Perfect for birthdays, anniversaries, and special occasions. Express shipping available.",
    keywords: "gift sets, curated gifts, gift boxes, special occasion gifts, birthday gifts, anniversary gifts"
  },
  [ProductCategory.NAMED_GIFT]: {
    title: "Personalized Gifts That Tell Your Story",
    description: "Custom engravings and personal touches for unforgettable moments",
    image: "/candle-3.png",
    backgroundImage: "/candle-3.png",
    metaDescription: "Personalized named gifts at DivineLits. Custom engravings and personal messages make every gift unique. Create memorable moments with our personalized collection.",
    keywords: "personalized gifts, custom gifts, named gifts, engraved gifts, custom messages, unique gifts"
  }
};

module.exports = {
  ProductStatus,
  ProductCategory,
  ProductCategoryMetadata
};