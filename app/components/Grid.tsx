"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Grid data with masala and tea images
const gridData = [
  {
    id: 1,
    text: "Premium Spice Collection",
    img: "/images/Masala Images/CHAAT MASALA/CHAAT MASALA_1.jpg",
    url: "/categories/masala",
  },
  {
    id: 2,
    text: "Authentic Tea Blends",
    img: "/images/Tea Images/HOUSE CHAI CLASSIC/HOUSE CHAI CLASSIC_1.jpg",
    url: "/categories/tea",
  },
  {
    id: 3,
    text: "Traditional Masalas",
    img: "/images/Masala Images/PURE GARAM MASALA/1.jpg",
    url: "/categories/masala",
  },
  {
    id: 4,
    text: "Himalayan Tea Garden",
    img: "/images/Tea Images/IMPERIAL FIRST FLUSH/IMPERIAL FIRST FLUSH_1.jpg",
    url: "/categories/tea",
  },
];

function Grid() {
  return (
    <section id="product-grid" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-playfair">Explore Our Premium Collections</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Authentic spices and traditional tea blends, handpicked from the finest gardens and farms across India.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {Array.isArray(gridData)
          ? gridData.map((data) => (
              <div 
                key={data.id} 
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <Link href={data.url} className="block h-full">
                  <div className="relative h-64 md:h-80 lg:h-96">
                    <Image
                      src={data.img}
                      alt={data.text}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-end p-6 z-10">
                      <div className="text-white w-full">
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 font-playfair leading-tight">
                          {data.text}
                        </h3>
                        <div className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform translate-y-2 group-hover:translate-y-0">
                          <span className="mr-2 font-medium">Explore Collection</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="w-12 h-1 bg-amber-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          : null}
      </div>
    </section>
  );
}

export default Grid;
