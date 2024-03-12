// "use client";
import React from "react";
import { prisma } from "@/prisma/prisma";

const createProduct = async () => {
  "use server";

  //   await prisma.product.create({
  //     data: {
  //       name: "test",
  //       price: 70,
  //       img_url: "test",
  //       desc: "test",
  //       slug: "test",
  //     },
  //   });

  const data = await prisma.product.findMany();

  console.log(data);
};

const page = async () => {
  return (
    <div>
      dashboard
      <div>
        <button onClick={createProduct} className="bg-violet-500">
          Create a product
        </button>
      </div>
    </div>
  );
};

export default page;
