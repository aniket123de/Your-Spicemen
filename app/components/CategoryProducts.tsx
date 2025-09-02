import React from "react";
import { products } from "../data/data";
import ItemCard from "./ItemCard";

function CategoryProducts({ category }: { category: string }) {
  return (
    <section id="category-products">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {Array.isArray(products)
          ? category !== "all"
            ? products
                .filter((data) => data.category === category)
                .map((data) => (
                  <ItemCard
                    key={data.id}
                    img={data.img.display}
                    images={data.img.details}
                    name={data.name}
                    price={data.price}
                    url={data.url}
                  />
                ))
            : products.map((data) => (
                <ItemCard
                  key={data.id}
                  img={data.img.display}
                  images={data.img.details}
                  name={data.name}
                  price={data.price}
                  url={data.url}
                />
              ))
          : null}
      </div>
    </section>
  );
}

export default CategoryProducts;
