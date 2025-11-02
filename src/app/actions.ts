"use server";

import { connectDB } from "@/libs/mongodb";
import { Product } from "@/models/Products";
import { EnrichedProducts, ProductStatus } from "@/types/types";
import { slugToName } from "@/libs/slugs";

export const getAllProducts = async () => {
  try {
    await connectDB();

    const products: EnrichedProducts[] = await Product.find({ status: ProductStatus.VISIBLE });
    return products;
  } catch (error) {
    console.error("Error getting products:", error);
    throw new Error("Failed to fetch category products");
  }
};

export const getCategoryProducts = async (category: string) => {
  try {
    await connectDB();

const products: EnrichedProducts[] = await Product.find({category, status: ProductStatus.VISIBLE });
    return products;
  } catch (error) {
    console.error("Error getting products:", error);
    throw new Error("Failed to fetch category products");
  }
};

export const getRandomProducts = async (productId: string) => {
  const shuffleArray = (array: EnrichedProducts[]) => {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  try {
    await connectDB();

    const allProducts: EnrichedProducts[] = await Product.find({ status: ProductStatus.VISIBLE });
    const shuffledProducts = shuffleArray(allProducts);
    const randomProducts = shuffledProducts
      .filter((product) => product._id.toString() !== productId)
      .slice(0, 6);
    return randomProducts;
  } catch (error) {
    console.error("Error getting products:", error);
    throw new Error("Failed to fetch random products");
  }
};

export const getProduct = async (_id: string) => {
  try {
    await connectDB();

    const product = await Product.findOne({ _id, status: ProductStatus.VISIBLE });
    return product;
  } catch (error) {
    console.error("Error getting product:", error);
  }
};

export const getProductByName = async (productNameSlug: string) => {
  try {
    await connectDB();

    // Convert slug back to product name
    const productName = slugToName(productNameSlug);
    const product = await Product.findOne({ 
      name: { $regex: new RegExp(`^${productName}$`, 'i') }, // Case-insensitive exact match
      status: ProductStatus.VISIBLE 
    });
    return product;
  } catch (error) {
    console.error("Error getting product by name:", error);
    throw new Error("Failed to fetch product");
  }
};
