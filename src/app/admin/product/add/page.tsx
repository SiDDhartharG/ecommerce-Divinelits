"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "../../actions";
import { ProductCategory, ProductStatus } from "@/types/types";

export default function AddProductPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [variants, setVariants] = useState([
    { priceId: "", color: "", images: [""] }
  ]);
  const [sizes, setSizes] = useState([""]);
  const [images, setImages] = useState([""]);

  const addVariant = () => {
    setVariants([...variants, { priceId: "", color: "", images: [""] }]);
  };

  const removeVariant = (index: number) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const updateVariant = (index: number, field: string, value: string) => {
    const updated = [...variants];
    if (field === "images") {
      updated[index].images = value.split(",").map(img => img.trim());
    } else {
      updated[index] = { ...updated[index], [field]: value };
    }
    setVariants(updated);
  };

  const addSize = () => {
    setSizes([...sizes, ""]);
  };

  const removeSize = (index: number) => {
    setSizes(sizes.filter((_, i) => i !== index));
  };

  const updateSize = (index: number, value: string) => {
    const updated = [...sizes];
    updated[index] = value;
    setSizes(updated);
  };

  const addImage = () => {
    setImages([...images, ""]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const updateImage = (index: number, value: string) => {
    const updated = [...images];
    updated[index] = value;
    setImages(updated);
  };

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    
    // Add dynamic data to form data
    formData.append("sizes", JSON.stringify(sizes.filter(size => size.trim())));
    formData.append("images", JSON.stringify(images.filter(img => img.trim())));
    formData.append("variants", JSON.stringify(variants.filter(v => v.color.trim() && v.priceId.trim())));

    const result = await createProduct(formData);
    
    if (result.success) {
      router.push("/admin");
    } else {
      alert("Error creating product: " + result.error);
    }
    
    setIsSubmitting(false);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
        <p className="text-gray-600 mt-2">
          Create a new product for your inventory
        </p>
      </div>

      <div className="bg-white shadow rounded-lg">
        <form onSubmit={async (e) => {
          e.preventDefault();
          debugger
          const formData = new FormData(e.currentTarget);
          await handleSubmit(formData);
        }} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price *
              </label>
              <input
                type="number"
                name="price"
                id="price"
                step="0.01"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category *
              </label>
              <select
                name="category"
                id="category"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a category</option>
                {Object.values(ProductCategory).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status *
              </label>
              <select
                name="status"
                id="status"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {Object.values(ProductStatus).map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description *
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Sizes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sizes *
            </label>
            {sizes.map((size, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={size}
                  onChange={(e) => updateSize(index, e.target.value)}
                  placeholder="Size (e.g., Small, Medium, Large)"
                  className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {sizes.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSize(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addSize}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              + Add Size
            </button>
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Images *
            </label>
            {images.map((image, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="url"
                  value={image}
                  onChange={(e) => updateImage(index, e.target.value)}
                  placeholder="Image URL"
                  className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addImage}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              + Add Image
            </button>
          </div>

          {/* Variants */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Variants *
            </label>
            {variants.map((variant, index) => (
              <div key={index} className="border border-gray-200 rounded-md p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Variant {index + 1}</h4>
                  {variants.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeVariant(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove Variant
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Price ID *
                    </label>
                    <input
                      type="text"
                      value={variant.priceId}
                      onChange={(e) => updateVariant(index, "priceId", e.target.value)}
                      placeholder="Stripe price ID"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Color *
                    </label>
                    <input
                      type="text"
                      value={variant.color}
                      onChange={(e) => updateVariant(index, "color", e.target.value)}
                      placeholder="Color name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Variant Images *
                  </label>
                  <input
                    type="text"
                    value={variant.images.join(", ")}
                    onChange={(e) => updateVariant(index, "images", e.target.value)}
                    placeholder="Comma-separated image URLs"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addVariant}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              + Add Variant
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push("/admin")}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Creating..." : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

