"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-visible mt-16 sm:mt-20 lg:mt-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-start h-full pt-8 sm:pt-12 lg:pt-16 xl:pt-20 pb-8">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6 lg:pr-8 text-center lg:text-left order-1 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-elegant leading-tight" style={{ color: '#775636' }}>
              Your
              <span className="block" style={{ color: '#775636' }}>
                Spicemen
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed" style={{ color: '#775636' }}>
              Premium Authentic Spices & Traditional Tea Blends
            </p>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0" style={{ color: '#775636' }}>
              Discover the finest collection of handpicked spices and artisanal tea blends, 
              sourced directly from the best gardens and farms across India.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/categories/all"
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center min-w-[180px] sm:min-w-[200px]"
                style={{ backgroundColor: '#775636' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a412a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#775636'}
              >
                Explore Products
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/about"
                className="border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center min-w-[180px] sm:min-w-[200px]"
                style={{ borderColor: '#775636', color: '#775636' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#775636';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#775636';
                }}
              >
                Our Story
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative flex items-center justify-center order-2 lg:order-2 lg:pl-8 -mt-4 sm:-mt-6 lg:-mt-8">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
              {/* Elegant rectangular hero image frame */}
              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl bg-brown p-1.5 sm:p-2 transform transition-all duration-500">
                <div className="relative overflow-hidden rounded-lg lg:rounded-xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="Premium Spices and Tea Collection"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Elegant overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
