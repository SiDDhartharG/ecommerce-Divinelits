"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const linkStyles = "text-text-light text-sm transition duration-300 ease hover:text-primary";
  const liStyles = "mb-3";
  const headingStyles = "text-primary font-semibold mb-6 text-lg";

  return (
    <footer className="bg-text border-t border-light">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-2.png"
                alt="DivineLits Logo"
                width={180}
                height={180}
                className="rounded-lg"
              />
            </div>
            <p className="text-text-light text-sm mb-6 leading-relaxed">
              Premium handcrafted candles and custom gifts that bring warmth and elegance to every moment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-light text-sm">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:support@divinelits.com" className="hover:text-primary transition-colors">
                  support@divinelits.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-light text-sm">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029C10.792 13.807 10.304 14 10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029z" clipRule="evenodd"/>
                </svg>
                <span>divinelits.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className={headingStyles}>Products</h3>
            <ul>
              <li className={liStyles}>
                <Link href="/candles" className={linkStyles}>
                  Premium Candles
                </Link>
              </li>
              <li className={liStyles}>
                <Link href="/custom-gifts" className={linkStyles}>
                  Custom Gifts
                </Link>
              </li>
              <li className={liStyles}>
                <Link href="/home-decor" className={linkStyles}>
                  Home Decor
                </Link>
              </li>
              <li className={liStyles}>
                <Link href="/seasonal" className={linkStyles}>
                  Seasonal Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className={headingStyles}>Customer Care</h3>
            <ul>
              <li className={liStyles}>
                <Link href="/shipping" className={linkStyles}>
                  Shipping & Delivery
                </Link>
              </li>
              <li className={liStyles}>
                <Link href="/returns" className={linkStyles}>
                  Returns & Exchanges
                </Link>
              </li>
              <li className={liStyles}>
                <Link href="/care-instructions" className={linkStyles}>
                  Candle Care Guide
                </Link>
              </li>
              <li className={liStyles}>
                <Link href="/custom-orders" className={linkStyles}>
                  Custom Orders
                </Link>
              </li>
              <li className={liStyles}>
                <Link href="/faq" className={linkStyles}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Social */}
          <div>
            <h3 className={headingStyles}>About DivineLits</h3>
            <ul className="mb-8">
              <li className={liStyles}>
                <Link href="/about" className={linkStyles}>
                  Our Story
                </Link>
              </li>
              <li className={liStyles}>
                <Link href="/contact" className={linkStyles}>
                  Contact Us
                </Link>
              </li>
            </ul>
            
            {/* Social Media */}
            <div>
              <h4 className="text-bg-card font-medium mb-4">Follow Us</h4>
              <Link
                href="https://www.instagram.com/divinelits"
                target="_blank"
                title="DivineLits Instagram"
                className="inline-flex items-center gap-2 text-text-light hover:text-primary transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-light text-sm">
              © 2024 DivineLits. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-text-light hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-light hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
