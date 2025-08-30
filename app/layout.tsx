import { CartProvider } from "./context/cart";
import { TogglerProvider } from "./context/toggler";
import "./globals.css";
import { Dancing_Script, Playfair_Display, Inter } from "next/font/google";

// Elegant cursive font for body text
const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
});

// Stylish serif font for headers
const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Clean sans-serif for UI elements
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Raouf Store",
  description:
    "eCommerce website that minimalistic and simple design lifestyle enthusiasts can buy from",
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
          <body className={`${dancingScript.variable} ${playfairDisplay.variable} ${inter.variable} font-dancing bg-primary-200 min-h-screen`}>{children}</body>
        </html>
      </CartProvider>
    </TogglerProvider>
  );
}
