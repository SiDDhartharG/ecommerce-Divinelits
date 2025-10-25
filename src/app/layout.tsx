import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Providers from "./Providers";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { getTotalItems } from "./(carts)/cart/action";
import { getTotalWishlist } from "./(carts)/wishlist/action";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "DivineLits - Custom Gifts & Candles",
  description: "Discover our elegant collection of custom gifts and premium candles. Handcrafted with love, designed for special moments. DivineLits brings warmth and sophistication to your home.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOptions);
  const totalItemsCart = await getTotalItems(session);
  const totalItemsWishlists = await getTotalWishlist();

  return (
    <html lang="en">
      <Providers>
        <body className={GeistSans.className}>
          <Navbar
            session={session}
            totalItemsCart={totalItemsCart}
            totalWishlists={totalItemsWishlists?.items.length}
          />
          <main className="pointer-events-auto">
            {children}
            <Toaster position="top-right" />
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
