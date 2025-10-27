import Image from "next/image";

const QualityPromise = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/candle-2.png"
              alt="Premium DivineLits candle showing quality craftsmanship"
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-2xl opacity-20"></div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-text mb-8">
              Our Quality Promise
            </h2>
            <div className="space-y-6 text-lg text-text-light leading-relaxed">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>
                  <strong className="text-text">Premium Materials:</strong> We source only the finest eco-friendly wax, cotton wicks, and therapeutic-grade essential oils for exceptional quality.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>
                  <strong className="text-text">Handcrafted Excellence:</strong> Every candle is carefully hand-poured and inspected to ensure it meets our rigorous quality standards.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>
                  <strong className="text-text">Affordable Luxury:</strong> We believe everyone deserves access to premium candles, which is why we keep our prices fair without compromising on quality.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>
                  <strong className="text-text">Customer Satisfaction:</strong> Your happiness is our priority. We stand behind every product with our satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPromise;