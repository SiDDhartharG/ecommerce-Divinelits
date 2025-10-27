const OurValues = () => {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-text text-center mb-16">
          What Makes Us Different
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Eco-Friendly */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text mb-4">Eco-Friendly Wax</h3>
            <p className="text-text-light">
              We use only sustainable, eco-friendly wax that&apos;s safe for you and the environment. Our commitment to the planet is unwavering.
            </p>
          </div>

          {/* Essential Oils */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text mb-4">Essential Oil Infused</h3>
            <p className="text-text-light">
              Each candle is carefully infused with premium essential oils, creating authentic, therapeutic-grade aromatherapy experiences.
            </p>
          </div>

          {/* Aromatherapy */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text mb-4">Aromatherapy Benefits</h3>
            <p className="text-text-light">
              Designed with wellness in mind, our candles promote relaxation, stress relief, and emotional well-being through carefully selected scents.
            </p>
          </div>

          {/* Long Burning */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text mb-4">Extended Burn Time</h3>
            <p className="text-text-light">
              Premium ingredients and expert craftsmanship ensure our candles burn longer, giving you exceptional value and extended enjoyment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;