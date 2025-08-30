import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-16">
      <div className="bg-primary-800 py-16 px-20 flex items-center justify-center">
        <div className="w-full space-y-6">
          <h1 className="text-3xl font-bold text-white text-center font-playfair">
            Spice & Tea Newsletter
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-center gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="text-lg text-center px-1 py-1 lg:px-2 lg:text-left lg:w-60 font-dancing"
            />
            <button className="bg-primary-400 text-lg px-1 py-1 lg:px-2 font-playfair font-semibold">
              Subscribe for Recipes
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primary-900 p-8 flex justify-center flex-wrap gap-6 text-white text-lg font-dancing">
        <Link href="/" className="hover:underline">
          About Our Spices
        </Link>
        <Link href="/" className="hover:underline">
          Tea Gardens
        </Link>
        <Link href="/" className="hover:underline">
          Recipes & Tips
        </Link>
        <Link href="/" className="hover:underline">
          Bulk Orders
        </Link>
        <Link href="/" className="hover:underline">
          Quality Promise
        </Link>
        <Link href="/" className="hover:underline">
          Contact Us
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
