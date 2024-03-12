import { prisma } from "@/prisma/prisma";
import { useRouter } from "next/navigation";

export const getProducts = async () => {
  return await prisma.product.findMany();
};

export const getProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  return product;
};
