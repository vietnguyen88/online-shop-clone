"use client";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { database as products, color, size, category } from "../db/database";
import { FilterContext } from "../context/FilterContext";

const ProductGrid = () => {
  const { gender } = useContext(FilterContext);
  //   const [gender, setGender] = useState("Men");
  const [filteredProducts, setFilteredProducts] = useState();
  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      gender !== "" ? product.gender === gender : product
    );
    setFilteredProducts(filteredProducts);
    // console.log(filteredProducts);
  }, [gender]);
  return (
    <div className="grid sm:w-5/6 grid-cols-auto-fill-160 gap-5  ">
      {filteredProducts?.map((product) => (
        <ProductCard key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
