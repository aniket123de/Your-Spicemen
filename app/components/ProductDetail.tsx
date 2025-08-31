"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useCartContext } from "../context/cart";
import { useTogglerContext } from "../context/toggler";

function ProductDetail({
  images,
  name,
  description,
  price,
  texture,
  weight,
  size,
}: {
  images: {
    id: number;
    src: string;
  }[];
  name: string;
  description: string;
  price: number;
  texture: string;
  weight: string;
  size: string;
}) {
  const { cart, setCart } = useCartContext();
  const { setCartOpen } = useTogglerContext();
  const [amount, setAmount] = useState(1);
  const [bigImage, setBigImage] = useState(images[0].src);

  return (
    <section id="product-detail">
      <div className="mt-36 space-y-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <div className="w-80 h-80 lg:w-full lg:h-[28rem] m-auto">
              <Image
                src={bigImage}
                alt={name}
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
            <div className="flex justify-center gap-4">
              {images.map((data) => (
                <button
                  key={data.id}
                  onClick={() => setBigImage(data.src)}
                  className={`w-16 h-16 lg:w-20 lg:h-20 border-4 rounded ${
                    bigImage === data.src ? "border-black" : "border-[#e5e5e5]"
                  }`}
                >
                  <Image
                    src={data.src}
                    alt={name}
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="p-6 lg:p-12 bg-primary-300 space-y-8 lg:space-y-16">
            <div className="space-y-8">
              <h1 className="text-3xl font-bold font-playfair">{name}</h1>
              <p className="text-lg lg:text-xl font-dancing">{description}</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4">
              <div>
                <p className="font-semibold text-2xl font-playfair">Quantity</p>
              </div>
              <div className="flex justify-center text-3xl font-semibold">
                <button
                  onClick={() => (amount > 1 ? setAmount(amount - 1) : null)}
                  className="bg-primary-50 w-14 h-14 flex items-center justify-center border-t border-l border-b border-black hover:bg-transparent transition-all duration-300 ease-linear"
                >
                  -
                </button>
                <p className="w-14 h-14 flex items-center justify-center border border-black text-center">
                  {amount}
                </p>
                <button
                  onClick={() => setAmount(amount + 1)}
                  className="bg-primary-50 w-14 h-14 flex items-center justify-center border-t border-r border-b border-black hover:bg-transparent transition-all duration-300 ease-linear"
                >
                  +
                </button>
              </div>
              <div>
                <p className="font-semibold text-2xl">₹{price}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-semibold text-xl">
              <button
                onClick={() => {
                  if (!cart.find((data) => data.product === name)) {
                    setCart([
                      ...cart,
                      {
                        product: name,
                        img: images[0].src,
                        price: price,
                        amount: amount,
                      },
                    ]);
                  } else {
                    const newCart = cart.map((data) => {
                      return data.product === name
                        ? { ...data, amount: data.amount + amount }
                        : data;
                    });
                    setCart(newCart);
                  }
                  setCartOpen(true);
                }}
                className="border-2 border-black p-3 transition-all duration-300 ease-linear hover:bg-black hover:text-white font-inter font-semibold tracking-wider"
              >
                ADD TO CART
              </button>
              <button className="border-2 border-[#b6002c] bg-[#b6002c] text-white p-3 transition-all duration-300 ease-linear hover:bg-transparent hover:text-[#b6002c] font-inter font-semibold tracking-wider">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-primary-300 p-4">
            <h1 className="text-[1.35rem] font-semibold font-playfair">Texture:</h1>
            <p className="text-lg font-dancing">{texture}</p>
          </div>
          <div className="bg-primary-300 p-4">
            <h1 className="text-[1.35rem] font-semibold font-playfair">Weight:</h1>
            <p className="text-lg font-dancing">{weight}</p>
          </div>
          <div className="bg-primary-300 p-4">
            <h1 className="text-[1.35rem] font-semibold font-playfair">Size:</h1>
            <p className="text-lg font-dancing">{size}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
