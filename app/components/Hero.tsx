"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden mt-20 lg:mt-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-full pt-16 lg:pt-20">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:pr-8">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-elegant leading-tight text-amber-900">
              Your
              <span className="block text-amber-700">
                Spicemen
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-amber-800">
              Premium Authentic Spices & Traditional Tea Blends
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed text-amber-700 max-w-lg">
              Discover the finest collection of handpicked spices and artisanal tea blends, 
              sourced directly from the best gardens and farms across India.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/categories/all"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center min-w-[200px]"
              >
                Explore Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/about"
                className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center min-w-[200px]"
              >
                Our Story
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative lg:pl-8 flex items-start justify-center h-full pt-8">
            <div className="relative w-full max-w-lg -mt-20">
              {/* Main hero image - rotated 250 degrees and zoomed */}
              <div className="relative transition-transform duration-500 scale-125" style={{ transform: 'rotate(220deg) scale(1.25)' }}>
                <Image
                  src="/images/hero.png"
                  alt="Premium Spices and Tea Collection"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Additional decorative elements */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
