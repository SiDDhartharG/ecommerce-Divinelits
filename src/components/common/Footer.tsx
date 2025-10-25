"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  const linkStyles = "text-sm transition duration-300 ease hover:text-primary hover:underline hover:underline-offset-4";
  const liStyles = "text-text-light my-2";
  const headingStyles = "text-primary font-semibold mb-4 text-base";

  return (
    <footer className="px-6 py-24 border-t border-solid pointer-events-auto bg-text border-light">
      <nav className="flex flex-wrap justify-around gap-5 mx-auto max-w-screen-2xl">
        <div className="flex flex-col items-center justify-center w-full max-w-xs gap-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <svg
                  data-testid="geist-icon"
                  height="20"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="20"
                  className="text-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 1L16 15H0L8 1Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span className="text-xl font-bold text-primary">
                DivineLits
              </span>
            </div>
            <p className="text-text-light text-sm text-center max-w-xs">
              Custom Gifts & Candles
            </p>
            <span className="flex items-center text-sm text-text-light">
              © 2024 DivineLits. All rights reserved.
            </span>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              target="_blank"
              title="DivineLits Instagram"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            >
              <svg
                data-testid="geist-icon"
                height="20"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="20"
                className="text-primary"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-2-6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              title="DivineLits Facebook"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            >
              <svg
                data-testid="geist-icon"
                height="20"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="20"
                className="text-primary"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-2-6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              title="DivineLits Pinterest"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            >
              <svg
                data-testid="geist-icon"
                height="20"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="20"
                className="text-primary"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-2-6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-xs">
          <h2 className={headingStyles}>Products</h2>
          <ul className="grid grid-cols-1">
            <li className={liStyles}>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/candles`}
                className={linkStyles}
              >
                Premium Candles
              </Link>
            </li>
            <li className={liStyles}>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/custom-gifts`}
                className={linkStyles}
              >
                Custom Gifts
              </Link>
            </li>
            <li className={liStyles}>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/home-decor`}
                className={linkStyles}
              >
                Home Decor
              </Link>
            </li>
            <li className={liStyles}>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/seasonal`}
                className={linkStyles}
              >
                Seasonal Collection
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full max-w-xs">
          <h2 className={headingStyles}>Customer Care</h2>
          <ul className="grid grid-cols-1">
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
        <div className="w-full max-w-xs">
          <h2 className={headingStyles}>About DivineLits</h2>
          <ul className="grid grid-cols-1">
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
        </div>
      </nav>
    </footer>
  );
};
