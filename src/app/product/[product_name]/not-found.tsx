import Link from "next/link";
import Image from "next/image";
import MetaTags from "@/components/seo/MetaTags";

export default function ProductNotFound() {
  return (
    <>
      <MetaTags
        title="Product Not Found | DivineLits"
        description="The requested product could not be found. Explore our available products and find the perfect items for you."
        keywords="product not found, DivineLits, candles, gifts"
        url="/product/not-found"
      />
      
      <div className="pt-14 min-h-screen bg-bg flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-6">
          {/* Error Image */}
          <div className="mb-8">
            <Image
              src="/logo-1.png"
              alt="DivineLits Logo"
              width={120}
              height={120}
              className="mx-auto opacity-50"
            />
          </div>
          
          {/* Error Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Product Not Found
          </h1>
          <p className="text-xl text-text-light mb-8 leading-relaxed">
            Sorry, the product you&apos;re looking for doesn&apos;t exist or may have been removed.
            Let&apos;s help you find something amazing!
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="bg-text text-white px-8 py-3 rounded-lg font-semibold hover:bg-text-light transition-colors duration-300 inline-block"
            >
              Go Home
            </Link>
            <Link
              href="/category/candles"
              className="bg-white text-text border-2 border-border px-8 py-3 rounded-lg font-semibold hover:bg-bg transition-colors duration-300 inline-block"
            >
              Browse Candles
            </Link>
          </div>
          
          {/* Suggestion Links */}
          <div className="grid md:grid-cols-3 gap-4 max-w-lg mx-auto">
            <Link href="/category/candles" className="text-primary hover:text-primary-dark font-medium">
              Luxury Candles
            </Link>
            <Link href="/category/gift%20box" className="text-primary hover:text-primary-dark font-medium">
              Gift Sets
            </Link>
            <Link href="/category/named%20gift" className="text-primary hover:text-primary-dark font-medium">
              Named Gifts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}