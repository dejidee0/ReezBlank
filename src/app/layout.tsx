import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "../providers/CartProvider";
import { WishlistProvider } from "../providers/WishlistProvider";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export const metadata: Metadata = {
  title: "REEZBLANK - Nigerian Fashion E-commerce",
  description:
    "Celebrate Nigerian fashion with premium quality clothing that represents our culture and modern style. Shop men's, women's, kids fashion and accessories.",
  keywords:
    "Nigerian fashion, African clothing, Ankara, fashion ecommerce, clothing brand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
