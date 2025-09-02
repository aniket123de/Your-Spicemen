"use client";

import React from "react";
import Image from "next/image";

function Ribbon() {
  return (
    <section className="relative h-18 sm:h-32 lg:h-48 -mt-8 mb-8 z-10">
      <div className="fixed left-0 right-0 w-full h-24 sm:h-32 lg:h-48 z-10" style={{ position: 'absolute', width: '100vw', left: '50%', transform: 'translateX(-50%)' }}>
        <Image
          src="/images/Ribbon.png"
          alt="Decorative Ribbon"
          fill
          className="object-cover object-center w-full h-full scale-90 sm:scale-100"
          priority
        />
      </div>
    </section>
  );
}

export default Ribbon;
