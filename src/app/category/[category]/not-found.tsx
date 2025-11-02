import Link from "next/link";
import Image from "next/image";
import MetaTags from "@/components/seo/MetaTags";

export default function CategoryNotFound() {
  return (
    <>
      <MetaTags
        title="Category Not Found | DivineLits"
        description="The requested category could not be found. Explore our available categories and find the perfect products for you."
        keywords="category not found, DivineLits, product categories, candles, gifts"
        url="/category/not-found"
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
            Category Not Found
          </h1>
          <p className="text-xl text-text-light mb-8 leading-relaxed">
            Sorry, the category you&apos;re looking for doesn&apos;t exist. 
            Let&apos;s help you find what you&apos;re looking for!
          </p>
          
          {/* Available Categories */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-text mb-6">
              Explore Our Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Candles */}
              <Link href="/category/candles" className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/candle-1.png"
                    alt="Luxury Candles"
                    width={200}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-text">Luxury Candles</h3>
                    <p className="text-sm text-text-light">Premium handcrafted candles</p>
                  </div>
                </div>
              </Link>
              
              {/* Gift Sets */}
              <Link href="/category/gift%20box" className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/gift-1.png"
                    alt="Gift Sets"
                    width={200}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-text">Gift Sets</h3>
                    <p className="text-sm text-text-light">Curated collections</p>
                  </div>
                </div>
              </Link>
              
              {/* Named Gifts */}
              <Link href="/category/named%20gift" className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/candle-3.png"
                    alt="Named Gifts"
                    width={200}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-text">Named Gifts</h3>
                    <p className="text-sm text-text-light">Personalized touches</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-text text-white px-8 py-3 rounded-lg font-semibold hover:bg-text-light transition-colors duration-300 inline-block"
            >
              Go Home
            </Link>
            <Link
              href="/search"
              className="bg-white text-text border-2 border-border px-8 py-3 rounded-lg font-semibold hover:bg-bg transition-colors duration-300 inline-block"
            >
              Search Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}