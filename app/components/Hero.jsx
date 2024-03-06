import Image from "next/image";
import Link from "next/link";
import React from "react";

const hero_db = {
  heading: "New Arrivals are here",
  content:
    "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.",
  button_label: "Shop New Arrivals",
  url: "/products",
};

const Hero = () => {
  return (
    <section className=" bg-hero-img sm:h-[calc(100vh-5rem)] h-80  bg-no-repeat bg-center bg-cover">
      <div className="text-white flex flex-col justify-center items-center h-full backdrop-brightness-50 backdrop-blur-sm">
        <h1 className="text-4xl font-bold">{hero_db.heading}</h1>
        <p className="text-center my-5 sm:max-w-96">{hero_db.content}</p>
        <Link
          className="bg-white text-black px-3 py-2 rounded-md text-xs font-medium hover:opacity-90"
          href={hero_db.url}
        >
          {hero_db.button_label}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
