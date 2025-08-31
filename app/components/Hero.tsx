"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden mt-20 lg:mt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg.jpg"
          alt="Premium Spices and Tea Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair leading-tight text-white">
            Your
            <span className="block text-white">
              Spicemen
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light leading-relaxed text-white">
            Premium Authentic Spices & Traditional Tea Blends
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-white">
            Discover the finest collection of handpicked spices and artisanal tea blends, 
            sourced directly from the best gardens and farms across India.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/categories/all"
              className="bg-gradient-to-r from-amber-100 to-amber-200 hover:from-amber-200 hover:to-amber-300 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 min-w-[200px] justify-center"
            >
              Explore Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <Link
              href="/about"
              className="bg-gradient-to-r from-stone-200 to-stone-300 hover:from-stone-300 hover:to-stone-400 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 min-w-[200px] justify-center flex items-center gap-2"
            >
              Our Story
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
