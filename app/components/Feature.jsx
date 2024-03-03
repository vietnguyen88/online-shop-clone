import Image from "next/image";
import React from "react";

const CardItem = () => {
  return (
    <figure className=" w-40  ">
      <Image
        className=" h-56 w-full object-cover rounded-sm"
        src="https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height={200}
        width={200}
        alt=""
      />
      <figcaption className="  border-none  text-white text-center">
        <div className="flex justify-between text-xs">
          <h3 className="">iPhone</h3>
          <p>$200</p>
        </div>
        <p className="text-xs italic text-left">3 colors available</p>
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
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </section>
  );
};

export default Feature;
