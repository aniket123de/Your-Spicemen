import { CartProvider } from "./context/cart";
import { TogglerProvider } from "./context/toggler";
import "./globals.css";
import { Dancing_Script, Cormorant_Garamond, Inter } from "next/font/google";

// Elegant cursive font for body text
const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
});

// Elegant serif font for headers
const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-elegant",
});

// Clean sans-serif for UI elements
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Your Spicemen - Premium Indian Masalas & Authentic Tea Collection",
  description:
    "Discover the finest authentic Indian masalas and premium tea blends at Your Spicemen. From aromatic garam masala to Kashmiri lal mirch, Darjeeling tea to heritage chai blends. Handpicked spices and tea leaves sourced directly from Indian farms for authentic flavors in your kitchen.",
  keywords: "Indian masala, authentic spices, premium tea, garam masala, turmeric powder, kashmiri red chili, darjeeling tea, chai blend, organic spices, herbal tea, traditional masala, spice store online",
  author: "Your Spicemen",
  robots: "index, follow",
  openGraph: {
    title: "Your Spicemen - Premium Indian Masalas & Authentic Tea Collection",
    description: "Handpicked Indian masalas and premium tea blends. Authentic flavors delivered to your doorstep.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TogglerProvider>
      <CartProvider>
        <html lang="en" className="scroll-smooth">
          <body className={`${dancingScript.variable} ${cormorantGaramond.variable} ${inter.variable} font-dancing bg-primary-200 min-h-screen`}>{children}</body>
        </html>
      </CartProvider>
    </TogglerProvider>
  );
}
