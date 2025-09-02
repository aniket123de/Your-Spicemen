"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function ItemCard({
  img,
  images,
  name,
  price,
  slider,
  url,
}: {
  img: string;
  images?: { id: number; src: string }[];
  name: string;
  price: number;
  slider?: boolean;
  url: string;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isHovered && images && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 800); // Change image every 800ms
    } else {
      setCurrentImageIndex(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, images]);

  const currentImage = isHovered && images && images.length > 1 
    ? images[currentImageIndex]?.src || img 
    : img;
  return (
    <div className={slider ? "flex-none max-w-[15.75rem]" : ""}>
      <Link
        href={url}
        className={`border-2 border-[rgba(0,0,0,.205)] hover:border-black transition-all duration-300 ease-linear flex flex-col ${
          slider ? "gap-0 h-full justify-between" : "gap-8"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <Image
            src={currentImage}
            alt={name}
            width={1000}
            height={1000}
            className={`m-auto transition-all duration-500 ${slider ? "" : ""} ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
          
          {/* Image indicator dots */}
          {images && images.length > 1 && isHovered && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-black" : "bg-black/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="m-4 space-y-2">
          <h3 className="font-medium text-lg">{name}</h3>
          <h1 className="font-semibold text-xl">₹{price}</h1>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
