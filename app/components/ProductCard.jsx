"use client";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { increase } from "../redux/cartSlice";

const ProductCard = ({ item }) => {
  const { name, img_url, description, price, id } = item;
  const dispatch = useDispatch();
  return (
    <Link href={`/products/${id}`}>
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
          <div className="flex justify-between my-2 ">
            <h3 className="truncate">{name}</h3>
            <p>${price}</p>
          </div>

          <button
            className="bg-slate-200 w-full py-1 rounded-sm hover:opacity-80"
            onClick={() => dispatch(increase())}
          >
            Add to bag
          </button>
        </figcaption>
      </figure>
    </Link>
  );
};

export default ProductCard;
