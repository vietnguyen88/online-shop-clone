"use client";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { increase } from "../redux/cartSlice";
import Link from "next/link";
import { database } from "../db/database";

const CardItem = ({ item }) => {
  const { name, url, img_url, desc, price, slug } = item;
  const dispatch = useDispatch();
  return (
    <Link href={`/products/${slug}`}>
      <figure className="">
        <div className="h-64">
          <Image
            className="w-full h-full object-cover"
            src={img_url}
            width={200}
            height={200}
            alt=""
          />
        </div>
        <figcaption className="text-xs ">
          <div className="flex justify-between ">
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
          <p className="text-slate-400">{desc}</p>
          <button
            className="bg-slate-200 w-full py-1 rounded-sm hover:opacity-80"
            onClick={() => dispatch(increase())}
          >
            Add to bag
          </button>
        </figcaption>
      </figure>
    </Link>
  );
};

const page = () => {
  return (
    <section className="my-10 mx-5 p-5 border-[1px] rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Products</h1>
      <div className="grid grid-cols-auto-fill-160 gap-5 ">
        {database.map((product) => (
          <CardItem key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
};

export default page;
