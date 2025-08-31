"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { RiShoppingCartLine, RiMenu3Fill } from "react-icons/ri";
import { useTogglerContext } from "../context/toggler";
import { useCartContext } from "../context/cart";
import { navItems } from "../data/data";

function Header() {
  const { setMobileNavbar, setCartOpen } = useTogglerContext();
  const { cart } = useCartContext();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onPageScroll = () => {
      headerRef.current!.style.height =
        window.pageYOffset > 20 ? "5rem" : "7.5rem";
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 bg-white z-50 shadow-lg border-b border-gray-100 flex items-center transition-all duration-300 ease-linear h-[7.5rem]"
      ref={headerRef}
    >
      <div className="flex items-center justify-between px-6 py-2 max-w-screen-xl w-full m-auto h-full">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden rounded-xl p-3 transition-all duration-500">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={160}
                height={80}
                priority
                className="max-h-16 w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {Array.isArray(navItems)
            ? navItems.map((data, index) => (
                <Link
                  key={data.id}
                  href={data.url}
                  className="relative group px-6 py-3 text-lg font-playfair font-semibold tracking-wide text-[#775636] hover:text-amber-700 transition-all duration-500 rounded-xl overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 uppercase transition-all duration-300 group-hover:tracking-wider">
                    {data.category}
                  </span>
                  
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-amber-100 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-center rounded-xl"></div>
                  
                  {/* Bottom border animation */}
                  <div className="absolute bottom-1 left-1/2 w-0 h-1 bg-amber-500 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-500 rounded-full"></div>
                </Link>
              ))
            : null}
        </nav>

        {/* Action Items */}
        <div className="flex items-center gap-4 text-2xl text-[#775636]">
          {/* Cart Button */}
          <div className="relative group">
            <button 
              onClick={() => setCartOpen(true)}
              className="relative p-4 rounded-2xl bg-amber-50 hover:bg-amber-100 shadow-lg hover:shadow-xl border border-amber-200 hover:border-amber-300 transition-all duration-500 transform hover:scale-110 lg:bg-amber-50 lg:hover:bg-amber-100 lg:shadow-lg lg:hover:shadow-xl lg:border lg:border-amber-200 lg:hover:border-amber-300 lg:rounded-2xl sm:bg-transparent sm:hover:bg-transparent sm:shadow-none sm:hover:shadow-none sm:border-none sm:hover:border-none sm:rounded-none"
            >
              <RiShoppingCartLine className="text-[#775636] group-hover:text-amber-700 transition-all duration-300 transform group-hover:scale-110" />
              
              {cart.length > 0 ? (
                <span className="absolute -top-2 -right-2 bg-red-600 w-7 h-7 rounded-full text-white flex items-center justify-center text-sm font-bold shadow-xl animate-bounce border-3 border-white transform hover:scale-110 transition-transform duration-300">
                  {cart.length}
                </span>
              ) : null}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileNavbar(true)}
              className="p-4 bg-transparent hover:bg-transparent shadow-none hover:shadow-none border-none hover:border-none rounded-none transition-all duration-500 transform hover:scale-110 group"
            >
              <RiMenu3Fill className="text-[#775636] group-hover:text-amber-700 transition-all duration-300 transform group-hover:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
