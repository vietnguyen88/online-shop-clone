import Image from "next/image";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

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

  return (
    <figure className="flex py-5">
      <div className="h-52 w-44">
        <Image
          className="w-full h-full object-cover"
          src={img_url}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <figcaption className="flex justify-between w-full px-5">
        <div>
          <p>{name}</p>
          <p>size {name}</p>
          <p>{price}</p>
        </div>
        <div>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <XMarkIcon className="h-5" />
        </div>
      </figcaption>
    </figure>
  );
};

const page = () => {
  return (
    <section className="my-10 mx-5 p-5 border-[1px] rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>
      <div className="sm:flex">
        <div className="sm:w-4/6 divide-y-[1px] divide-gray-200 p-5 ">
          {database.map((product) => (
            <CardItem key={product.id} item={product} />
          ))}
        </div>
        <div className="bg-slate-200 rounded-md sm:w-2/6 p-5 ">
          <h4 className="font-semibold">Order Summary</h4>
          <div className=" divide-y-[1px] divide-gray-300  text-xs">
            <div className="py-2 flex justify-between">
              <span>Sub-total:</span>
              <span>$99</span>
            </div>
            <div className="py-2 flex justify-between">
              <span>Shipping estimate:</span>
              <span>$99</span>
            </div>
            <div className="py-2 flex justify-between">
              <span>Tax estimate:</span> <span>$99</span>
            </div>
            <div className="py-2 flex justify-between">
              <span>Order total:</span> <span>$99</span>
            </div>
          </div>
          <button
            className=" mt-2 p-2 rounded-md text-white  text-xs bg-blue-800 w-full   "
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
