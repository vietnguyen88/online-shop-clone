import React from "react";

const Newsletter = () => {
  return (
    <section className="sm:w-3/4 max-w-2xl sm:mx-auto p-5 m-5 border-2 rounded-lg">
      <h1 className="text-2xl font-bold ">
        Want product news and updates? Sign up for our newsletter.
      </h1>
      <div className="my-5 flex gap-2">
        <input
          className="border-2 focus:outline-none focus:border-blue-800 rounded-md px-2 text-xs w-full h-8  "
          type="email"
          placeholder="Enter your email"
        ></input>
        <button
          className=" px-2 rounded-md text-blue-800 border-2   hover:bg-blue-800 hover:text-white text-xs border-blue-800   "
          type="button"
        >
          <span className="">Subcribe</span>
        </button>
      </div>
      <p className="text-xs">
        We care about your data. Read our privacy policy.
      </p>
    </section>
  );
};

export default Newsletter;
