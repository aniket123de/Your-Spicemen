"use client";

import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section id="about-us" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Side */}
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/Aboutus.jpg"
              alt="Your Spicemen - Premium Spices and Tea"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-1 bg-amber-500"></div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 font-playfair leading-tight">
              Your Trusted
              <span className="block text-amber-800">Spice Partner</span>
            </h2>
          </div>

          <div className="space-y-6 text-amber-800 leading-relaxed">
            <p className="text-lg">
              At <strong className="text-amber-900">Your Spicemen</strong>, we believe that authentic flavors tell stories. 
              For generations, we have been curating the finest spices and tea blends, sourced directly from 
              the pristine gardens and farms across India.
            </p>
            
            <p>
              Our journey began with a simple mission: to bring the authentic taste of traditional Indian 
              spices and premium tea blends to kitchens around the world. Each product in our collection 
              is handpicked, carefully processed, and packed with love to preserve its natural aroma and flavor.
            </p>

            <p>
              From the aromatic hills of Darjeeling to the spice gardens of Kerala, we work directly with 
              local farmers and growers, ensuring fair trade practices while maintaining the highest quality 
              standards. Every blend tells a story of tradition, craftsmanship, and passion.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Premium Quality</h4>
                <p className="text-sm text-amber-700">Handpicked and carefully processed spices</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Authentic Sourcing</h4>
                <p className="text-sm text-amber-700">Direct from farms and gardens across India</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Traditional Methods</h4>
                <p className="text-sm text-amber-700">Time-honored processing techniques</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Fair Trade</h4>
                <p className="text-sm text-amber-700">Supporting local farmers and communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
