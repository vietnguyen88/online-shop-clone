import Image from "next/image";
import React from "react";
import { database } from "../db/database";

const CardItem = ({ item }) => {
  const { name, url, price, img_url, desc } = item;
  return (
    <figure className=" w-40 hover:opacity-80 cursor-pointer">
      <Image
        className=" h-56 w-full object-cover rounded-sm"
        src={img_url}
        height={200}
        width={200}
        alt=""
      />
      <figcaption className=" border-none text-white text-center">
        <div className="flex justify-between text-xs">
          <h3 className="">{name}</h3>
          <p>{price}</p>
        </div>
        <p className="text-xs italic text-left">{desc}</p>
      </figcaption>
    </figure>
  );
};

const Feature = () => {
  return (
    <section className="m-5 relative rounded-3xl  bg-gradient-radial from-indigo-900 from-0% to-black to-70% h-full ">
      <h1 className="p-5 font-bold text-white text-center text-lg">
        Best Sellers
      </h1>
      <div className="text-white text-xs px-10 text-center ">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam aliqua proident excepteur commodo do ea.
      </div>
      <div className="px-2 py-7 flex flex-wrap gap-5 justify-center">
        {database.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Feature;
