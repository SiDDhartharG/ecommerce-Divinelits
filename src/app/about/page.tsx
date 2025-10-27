import Image from "next/image";
import Link from "next/link";
import MetaTags from "@/components/seo/MetaTags";
import OurValues from "@/components/about/OurValues";
import QualityPromise from "@/components/about/QualityPromise";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - DivineLits | Our Story & Passion for Premium Candles",
  description: "Learn about DivineLits - creative artisans crafting eco-friendly candles with essential oils, aromatherapy benefits, and premium ingredients. Discover our passion for bringing peace, happiness, and satisfaction through affordable luxury candles.",
  keywords: "about DivineLits, eco-friendly candles, essential oil candles, aromatherapy candles, premium candles, handcrafted candles, sustainable candles, long burning candles",
  openGraph: {
    title: "About Us - DivineLits | Our Story & Passion for Premium Candles",
    description: "Learn about DivineLits - creative artisans crafting eco-friendly candles with essential oils and aromatherapy benefits at affordable prices.",
    type: "website",
    url: "https://divinelits.com/about",
    images: [
      {
        url: "/main-image.webp",
        width: 1200,
        height: 630,
        alt: "DivineLits - About Our Premium Candle Craftsmanship",
      },
    ],
    siteName: "DivineLits",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - DivineLits | Our Story & Passion",
    description: "Learn about DivineLits - creative artisans crafting eco-friendly candles with essential oils and aromatherapy benefits.",
    images: ["/main-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const AboutPage = () => {
  return (
    <>
      <MetaTags
        title="About Us - DivineLits | Our Story & Passion for Premium Candles"
        description="Learn about DivineLits - creative artisans crafting eco-friendly candles with essential oils, aromatherapy benefits, and premium ingredients. Discover our passion for bringing peace, happiness, and satisfaction through affordable luxury candles."
        keywords="about DivineLits, eco-friendly candles, essential oil candles, aromatherapy candles, premium candles, handcrafted candles, sustainable candles, long burning candles"
        image="/main-image.webp"
        url="/about"
        type="website"
      />
      
      <div className="pt-14">
        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-text mb-8">
                  Our Creative Journey
                </h2>
                <div className="space-y-6 text-lg text-text-light leading-relaxed">
                  <p>
                    We are a team of creative people who believe in chasing our passion and transforming it into something meaningful. At DivineLits, we don&apos;t just make candles – we craft experiences that bring joy, tranquility, and satisfaction to your everyday moments.
                  </p>
                  <p>
                    Our mission is simple yet profound: to create products that give you peace, happiness, and the deep satisfaction of a good purchase at an affordable price. Every candle we make is a testament to our commitment to quality, sustainability, and your well-being.
                  </p>
                  <p>
                    We believe that luxury shouldn&apos;t be expensive, and quality shouldn&apos;t be compromised. That&apos;s why we&apos;ve dedicated ourselves to perfecting the art of candle-making, ensuring every product meets our high standards while remaining accessible to everyone.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/candle-1.png"
                  alt="DivineLits artisans crafting premium candles"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full blur-2xl opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <OurValues />

        {/* Quality Promise Section */}
        <QualityPromise />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-bg">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-text mb-8">
              Why Choose DivineLits?
            </h2>
            <p className="text-xl text-text-light mb-12 leading-relaxed">
              We&apos;re not just another candle company. We&apos;re passionate creators dedicated to enhancing your life through thoughtfully crafted products that deliver on our promise of quality, sustainability, and affordability.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-text mb-4">Peace of Mind</h3>
                <p className="text-text-light">
                  Our aromatherapy-infused candles are designed to create a peaceful atmosphere, helping you unwind and find tranquility in your daily life.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-text mb-4">Pure Happiness</h3>
                <p className="text-text-light">
                  The joy of lighting a perfectly crafted candle, watching the gentle flame dance, and breathing in therapeutic scents – that&apos;s the happiness we deliver.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-text mb-4">Complete Satisfaction</h3>
                <p className="text-text-light">
                  From our premium ingredients to our extended burn times and affordable prices, every aspect is designed to exceed your expectations.
                </p>
              </div>
            </div>
            <Link 
              href="/candles"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              Experience DivineLits Today
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-text mb-8">
              Get in Touch
            </h2>
            <p className="text-xl text-text-light mb-8 leading-relaxed">
              Have questions about our products or want to learn more about our story? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block bg-text text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg"
              >
                Contact Us
              </Link>
              <Link 
                href="/candles"
                className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;