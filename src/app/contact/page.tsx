import { Metadata } from "next";
import Link from "next/link";
import { Mail, Globe, Instagram, Phone, MessageSquare, Star, Package, Palette, Flame } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";

export const metadata: Metadata = {
  title: "Contact DivineLits - Custom Candles, Bulk Orders & Theme-Based Designs | Premium Handcrafted Candles",
  description: "Contact DivineLits for custom candle orders, bulk purchases, and theme-based designs. We create handcrafted candles of all sizes for weddings, events, and special occasions. Email: support@divinelits.com",
  keywords: "contact DivineLits, custom candles, bulk candle orders, theme-based candles, wedding candles, event candles, handcrafted candles, candle customization, small to large candles, premium candles, luxury candles, scented candles, candle wholesale, corporate gifts, personalized candles, custom labels, candle manufacturing",
  openGraph: {
    title: "Contact DivineLits - Custom Candles, Bulk Orders & Theme-Based Designs",
    description: "Get in touch with DivineLits for custom candle orders, bulk purchases, and theme-based designs. Handcrafted candles for every occasion.",
    type: "website",
    url: "https://divinelits.com/contact",
    images: [
      {
        url: "/main-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact DivineLits - Custom Candles and Bulk Orders",
      },
    ],
    siteName: "DivineLits",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DivineLits - Custom Candles & Bulk Orders",
    description: "Get in touch for custom candle orders, bulk purchases, and theme-based designs. Handcrafted premium candles.",
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
  alternates: {
    canonical: "https://divinelits.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <MetaTags
        title="Contact DivineLits - Custom Candles, Bulk Orders & Theme-Based Designs | Premium Handcrafted Candles"
        description="Contact DivineLits for custom candle orders, bulk purchases, and theme-based designs. We create handcrafted candles of all sizes for weddings, events, and special occasions. Email: support@divinelits.com"
        keywords="contact DivineLits, custom candles, bulk candle orders, theme-based candles, wedding candles, event candles, handcrafted candles, candle customization, small to large candles, premium candles, luxury candles, scented candles, candle wholesale, corporate gifts, personalized candles"
        image="/main-image.webp"
        url="/contact"
        type="website"
      />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "DivineLits",
              "url": "https://divinelits.com",
              "logo": "https://divinelits.com/logo-1.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-xxx-xxx-xxxx",
                "contactType": "customer service",
                "email": "support@divinelits.com",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.instagram.com/divinelits"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "description": "Premium handcrafted candles and custom candle manufacturing for special occasions, events, and bulk orders",
              "serviceArea": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Custom Candles",
                    "description": "Personalized candles with custom scents, colors, and labels"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Bulk Candle Orders",
                    "description": "Large quantity candle orders for events, weddings, and corporate gifts"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Theme-Based Candles",
                    "description": "Seasonal and themed candle collections for special occasions"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="pt-14 min-h-screen bg-gradient-to-br from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-bg">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
              Contact Us 
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Custom Candles & Bulk Orders</h2>
            <p className="text-xl md:text-2xl text-text-light mb-8 max-w-3xl mx-auto">
              We&apos;d love to hear from you! Whether you need custom candles, bulk orders, or have questions about our premium handcrafted products.
            </p>
          </div>
        </section>

        {/* Contact Information & Services */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-text mb-8">Contact DivineLits - Premium Candle Makers</h2>
                  
                  <div className="space-y-6" itemScope itemType="https://schema.org/ContactPoint">
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="bg-text text-white p-3 rounded-full">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text">Email Support for Custom Candle Orders</h3>
                        <Link 
                          href="mailto:support@divinelits.com"
                          className="text-text-light hover:text-text transition-colors"
                          itemProp="email"
                          title="Email DivineLits for custom candle orders and bulk purchases"
                        >
                          support@divinelits.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="bg-text text-white p-3 rounded-full">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text">Official DivineLits Website</h3>
                        <Link 
                          href="https://divinelits.com"
                          className="text-text-light hover:text-text transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          itemProp="url"
                          title="Visit DivineLits website for premium handcrafted candles"
                        >
                          divinelits.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-full">
                        <Instagram className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text">Follow DivineLits on Instagram</h3>
                        <Link 
                          href="https://www.instagram.com/divinelits"
                          className="text-text-light hover:text-text transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Follow DivineLits on Instagram for candle inspiration and updates"
                        >
                          @divinelits
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services & Specialties */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-text mb-8">DivineLits Custom Candle Services</h2>
                  
                  <div className="grid gap-6" itemScope itemType="https://schema.org/Service">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                          <Package className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text mb-2">Bulk Candle Orders - Wholesale Pricing</h3>
                          <p className="text-text-light">
                            Perfect for events, weddings, corporate gifts, retail stores, and special occasions. 
                            We offer competitive wholesale pricing for large quantity orders with full customization options including custom labels, scents, and packaging.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                          <Star className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text mb-2">Custom Handcrafted Candles</h3>
                          <p className="text-text-light">
                            Personalized premium candles with your choice of luxury scents, custom colors, personalized labels, and elegant packaging. 
                            Perfect for special occasions, gifts, and creating memorable experiences.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="bg-green-100 text-green-600 p-3 rounded-full">
                          <Palette className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text mb-2">Theme-Based Candle Collections</h3>
                          <p className="text-text-light">
                            Seasonal collections, holiday themes, wedding themes, and special occasion designs. 
                            We bring your creative vision to life with custom themed candle collections perfect for any celebration or event.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                          <Flame className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text mb-2">All Candle Sizes - Small to Large</h3>
                          <p className="text-text-light">
                            From small votive and tea light candles to large statement pillar candles. 
                            We craft candles in jars, pillars, custom shapes, and every size you need for any space or occasion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text mb-4">Contact DivineLits for Custom Candle Orders</h2>
              <p className="text-xl text-text-light">
                Ready to place a bulk order, request custom candles, or have questions? We&apos;re here to help with all your candle needs!
              </p>
            </div>

            <form className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-text focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-text focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-text focus:border-transparent transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-type" className="block text-sm font-medium text-text mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-text focus:border-transparent transition-colors"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="custom-order">Custom Order</option>
                    <option value="theme-based">Theme-Based Candles</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-text focus:border-transparent transition-colors"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-text focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us about your requirements, quantity needed, preferred timeline, or any specific details..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-text text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-text-light transition-colors duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text mb-4">Frequently Asked Questions About DivineLits Custom Candles</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm" itemScope itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold text-text mb-2" itemProp="name">What&apos;s the minimum order quantity for bulk candle orders?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-text-light" itemProp="text">
                    Our minimum bulk candle order is 50 pieces, but we can accommodate smaller custom orders depending on your specific requirements. We offer competitive wholesale pricing for larger quantities.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm" itemScope itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold text-text mb-2" itemProp="name">How long does it take to fulfill custom candle orders?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-text-light" itemProp="text">
                    Custom candle orders typically take 2-3 weeks to complete, depending on complexity and quantity. Rush orders may be available for an additional fee.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm" itemScope itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold text-text mb-2" itemProp="name">Do you offer samples for bulk candle orders?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-text-light" itemProp="text">
                    Yes! We provide samples for bulk candle orders so you can approve the quality, scent, and design before we proceed with the full order.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm" itemScope itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold text-text mb-2" itemProp="name">Can you create candles to match a specific theme or event?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-text-light" itemProp="text">
                    Absolutely! We specialize in theme-based candles for weddings, corporate events, holidays, and special occasions. Share your vision and we&apos;ll bring it to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}