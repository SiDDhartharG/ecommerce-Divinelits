import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="pt-14">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-bg">
        <div className="absolute inset-0 bg-bg/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6 leading-tight">
            Discover Perfect Candles and Gifts for Every Occasion
          </h1>
          <p className="text-xl md:text-2xl text-text-light mb-8 max-w-2xl mx-auto">
            Elegant candles and thoughtful gifts to light up your life.
          </p>
          <Link 
            href="/products"
            className="inline-block bg-text text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-text-light transition-colors duration-300 shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-text text-center mb-16">
            Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Luxury Candles */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/candle-1.png"
                  alt="Luxury Candles"
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Luxury Candles</h3>
                  <p className="text-primary/80">Premium handcrafted candles</p>
                </div>
              </div>
            </div>

            {/* Gift Sets */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/candle-2.png"
                  alt="Gift Sets"
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Gift Sets</h3>
                  <p className="text-primary/80">Curated collections for special moments</p>
                </div>
              </div>
            </div>

            {/* Seasonal Specials */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/candle-3.png"
                  alt="Seasonal Specials"
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Seasonal Specials</h3>
                  <p className="text-primary/80">Limited edition seasonal collections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-text mb-4">
            Get 15% off your next order
          </h2>
          <p className="text-xl text-text-light mb-8">
            Subscribe to our Newsletter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-light focus:border-primary focus:outline-none text-text placeholder-text-light"
            />
            <button className="bg-text text-white px-8 py-4 rounded-lg font-semibold hover:bg-text-light transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
