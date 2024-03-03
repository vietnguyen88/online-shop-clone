"use client";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { increase } from "../redux/cartSlice";

const database = [
  {
    id: 1,
    name: "Purse",
    url: "/",
    price: "$200",
    img_url:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "White and Black",
  },
  {
    id: 2,
    name: "Purse",
    url: "/",
    price: "$200",
    img_url:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "White and Black",
  },
  {
    id: 3,
    name: "Purse",
    url: "/",
    price: "$200",
    img_url:
      "https://images.unsplash.com/photo-1612902456551-333ac5afa26e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "White and Black",
  },
  {
    id: 4,
    name: "Purse",
    url: "/",
    price: "$200",
    img_url:
      "https://images.unsplash.com/photo-1585488433862-b692398b2bfa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "White and Black",
  },
  {
    id: 5,
    name: "Purse",
    url: "/",
    price: "$200",
    img_url:
      "https://images.unsplash.com/photo-1585488574812-4860e867b31f?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "White and Black",
  },
];

const CardItem = ({ item }) => {
  const { name, url, img_url, desc, price } = item;
  const dispatch = useDispatch();
  return (
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
