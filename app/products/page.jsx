// "use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { prisma } from "@/prisma/prisma";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../lib/utils";
import Dropdown from "../components/Dropdown";

import { database as products, color, size, category } from "../db/database";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";
import FilterContextProvider from "../context/FilterContext";

const Page = async () => {
  // const products = await prisma.product.findMany();
  // const products = await getProducts();

  return (
    <section className="my-10 mx-5 p-5 border-[1px] rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Products</h1>
      <div className="sm:flex gap-5">
        <FilterContextProvider>
          <FilterSidebar />
          <ProductGrid />
        </FilterContextProvider>
      </div>
    </section>
  );
};

export default Page;
