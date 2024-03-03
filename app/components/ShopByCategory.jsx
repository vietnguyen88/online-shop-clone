import Image from "next/image";
import React from "react";
// import hero from "@/public/images/";

const database = [
  {
    id: 1,
    title: "New Arrivals",
    url: "/",
    img_url:
      "https://images.unsplash.com/photo-1585832622886-272fb3a927e0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Productivity",
    url: "/",
    img_url:
      "https://images.unsplash.com/photo-1585832622886-272fb3a927e0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Workspace",
    url: "/",
    img_url:
      "https://images.unsplash.com/photo-1585832622886-272fb3a927e0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Accessories",
    url: "/",
    img_url:
      "https://images.unsplash.com/photo-1585832622886-272fb3a927e0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Sale",
    url: "/",
    img_url:
      "https://images.unsplash.com/photo-1585832622886-272fb3a927e0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const CardItem = ({ db }) => {
  const { title, url, img_url } = db;
  return (
    <figure className="group w-32 h-44  relative cursor-pointer  ">
      <Image
        className="h-full w-full object-cover rounded-md group-hover:brightness-50"
        src={img_url}
        width={200}
        height={400}
        alt=""
      />
      <figcaption className="absolute bottom-0 left-1/2 text-base -translate-x-1/2 font-bold opacity-0 text-white group-hover:opacity-100 group-hover:bottom-5 transition-all ease-in-out duration-500">
        {title}
      </figcaption>
    </figure>
  );
};

const ShopByCategory = () => {
  return (
    <div className="max-w-2xl sm:mx-auto">
      <h1 className="p-5 font-bold text-lg">Shop By Category</h1>
      <div className="grid gap-2 grid-flow-col sm:overflow-x-hidden overflow-x-scroll justify-items-center px-2 pb-2 ">
        {database &&
          database.map((db) => <CardItem className="" key={db.id} db={db} />)}
      </div>
    </div>
  );
};

export default ShopByCategory;
