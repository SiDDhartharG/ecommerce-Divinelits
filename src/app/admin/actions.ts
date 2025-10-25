"use server";

import { connectDB } from "@/libs/mongodb";
import { Product } from "@/models/Products";
import { ProductDocument, ProductStatus, ProductCategory } from "@/types/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { redirect } from "next/navigation";
import { isAdminEmail } from "@/config/admin";

// Helper function to check if user is admin
async function checkAdminAccess() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/login");
  }

  // Check if the user email is in the admin list
  if (!isAdminEmail(session.user.email!)) {
    redirect("/");
  }

  return session;
}

// Get all products for admin (including hidden/deleted)
export const getAllProductsForAdmin = async () => {
  try {
    await checkAdminAccess();
    await connectDB();

    const products = await Product.find().sort({ createdAt: -1 });
    return products;
  } catch (error) {
    console.error("Error getting products for admin:", error);
    throw new Error("Failed to fetch products");
  }
};

// Get single product for admin
export const getProductForAdmin = async (id: string) => {
  try {
    await checkAdminAccess();
    await connectDB();

    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.error("Error getting product for admin:", error);
    throw new Error("Failed to fetch product");
  }
};

// Create new product
export const createProduct = async (formData: FormData) => {
  try {
    await checkAdminAccess();
    await connectDB();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const category = formData.get("category") as string;
    const status = formData.get("status") as ProductStatus;
    const sizes = JSON.parse(formData.get("sizes") as string);
    const images = JSON.parse(formData.get("images") as string);
    const variants = JSON.parse(formData.get("variants") as string);

    const product = new Product({
      name,
      description,
      price,
      category,
      status: status || ProductStatus.HIDE,
      sizes,
      image: images,
      variants,
    });

    await product.save();
    return { success: true, productId: product._id.toString() };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, error: "Failed to create product" };
  }
};

// Update product
export const updateProduct = async (id: string, formData: FormData) => {
  try {
    await checkAdminAccess();
    await connectDB();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const category = formData.get("category") as string;
    const status = formData.get("status") as ProductStatus;
    const sizes = JSON.parse(formData.get("sizes") as string);
    const images = JSON.parse(formData.get("images") as string);
    const variants = JSON.parse(formData.get("variants") as string);

    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        category,
        status,
        sizes,
        image: images,
        variants,
      },
      { new: true }
    );

    if (!product) {
      return { success: false, error: "Product not found" };
    }

    return { success: true, product };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, error: "Failed to update product" };
  }
};

// Delete product (soft delete by setting status to DELETED)
export const deleteProduct = async (id: string) => {
  try {
    await checkAdminAccess();
    await connectDB();

    const product = await Product.findByIdAndUpdate(
      id,
      { status: ProductStatus.DELETED },
      { new: true }
    );

    if (!product) {
      return { success: false, error: "Product not found" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: "Failed to delete product" };
  }
};

// Get available categories
export const getCategories = () => {
  return Object.values(ProductCategory);
};

// Get available statuses
export const getStatuses = () => {
  return Object.values(ProductStatus);
};
