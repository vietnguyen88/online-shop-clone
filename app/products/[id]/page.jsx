"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
// import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { database } from "@/app/db/database";
import { prisma } from "@/prisma/prisma";
import { getProductById } from "@/app/lib/utils";

const Page = ({ params }) => {
  // const product = await getProductById(params.id);
  const rating = 2.9;
  const [product, setProduct] = useState(() =>
    database.find((product) => product.id.toString() === params.id)
  );

  return (
    <section className="my-10 mx-5 p-5 border-[1px] rounded-lg sm:flex">
      <div className="sm:w-1/2 p-5">
        <Image
          src={product && product.img_url}
          height={200}
          width={200}
          alt=""
          className="w-full"
        />
      </div>

      <div className="sm:w-1/2 p-5">
        <ul className="flex justify-between font-medium">
          <li className="">{product?.name}</li>
          <li>${product?.price}</li>
        </ul>

        <ul className="my-5">
          <li className="flex gap-2 items-center ">
            <span>{rating}</span>
            <div className="flex gap-x-1">
              {[...Array(5)].map((star, i) => {
                if (i < rating) {
                  return <StarIcon key={i} className="h-4 fill-yellow-300" />;
                } else {
                  return <StarIcon key={i} className="h-4 fill-gray-300" />;
                }
              })}
            </div>

            <Link href={"/"}>see all reviews</Link>
          </li>
        </ul>
        {product?.color && (
          <ul className="flex gap-2 flex-wrap my-2">
            {product?.color.map((c, i) => (
              <li key={i}>
                <input
                  type="radio"
                  name="color"
                  id={c}
                  value={c}
                  className="peer hidden"
                />
                <label
                  htmlFor={c}
                  style={{ backgroundColor: `${c}` }}
                  className={` h-7 w-7 bg-${c}-300 block rounded-full
                  }  peer-checked:outline peer-checked:outline-blue-400 peer-checked:outline-offset-2 `}
                ></label>
              </li>
            ))}
          </ul>
        )}
        {product?.size && (
          <ul className="flex gap-2 py-2 flex-wrap my-2">
            {product?.size.map((s, i) => (
              <li key={i} className="min-w-20 ">
                <input
                  type="radio"
                  id={s}
                  name="option"
                  value={s}
                  className="hidden peer"
                />
                <label
                  htmlFor={s}
                  className="block cursor-pointer select-none border-[1px] rounded-md p-2 text-center peer-checked:bg-blue-500 peer-checked:outline-blue-500 peer-checked:outline peer-checked:outline-offset-2 peer-checked:outline-2 peer-checked:font-bold peer-checked:text-white"
                >
                  {s}
                </label>
              </li>
            ))}
          </ul>
        )}
        <div>
          <button className="bg-blue-500 w-full text-white px-3 py-2 rounded-md text-xs font-medium hover:opacity-90">
            Add to cart
          </button>
        </div>
        <div className=" text-xs my-5 divide-y-2">
          <div>
            <h5 className="font-medium mb-2">Description</h5>
            <p className="leading-relaxed">{product?.desc}</p>
          </div>
          <div className="pt-5 mt-5">
            <h5 className="font-medium mb-2">Fabric & Care</h5>
            {/* <p className="leading-relaxed"> */}
            <ul className="list-disc px-5 py-2">
              <li>Only the best materials</li>
              <li>Ethically and locally made</li>
              <li>Pre-washed and pre-shrunk</li>
              <li>Machine wash cold with similar colors</li>
            </ul>
            {/* </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
