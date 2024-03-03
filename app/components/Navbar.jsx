"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FireIcon } from "@heroicons/react/24/solid";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    id: 1,
    title: "Women",
    href: "/",
  },
  {
    id: 2,

    title: "Men",
    href: "/",
  },
  {
    id: 3,

    title: "Contact",
    href: "/",
  },
  {
    id: 4,
    title: "About Us",
    href: "/",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div>
        <div className=" h-8 text-white text-xs bg-gray-800 flex justify-between">
          <div className="flex-1 items-center flex">
            <select className="bg-transparent" defaultValue={"AUD"}>
              <option className="bg-gray-800" value="CAD">
                CAD
              </option>
              <option className="bg-gray-800" value="AUD">
                AUD
              </option>
              <option className="bg-gray-800" value="USD">
                USD
              </option>
            </select>
          </div>
          {/* <div className="flex h-8"> */}
          <div className=" hover:bg-slate-600 flex items-center px-2">
            <Link href={"/"} className=" ">
              Sign in
            </Link>
          </div>
          <div className=" hover:bg-slate-600 flex items-center px-2">
            <Link href={"/"}>Create an account</Link>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="bg-gray-700 flex items-center h-12 justify-between  text-white px-2">
        <Link href={"/"}>
          <FireIcon className="h-8 fill-orange-600" />
        </Link>

        {/* Non Mobile Menu */}
        <div className="gap-2 font-serif sm:flex h-12 items-center hidden">
          {navigation.map((nav) => (
            <div
              className="h-full hover:bg-slate-600  flex items-center"
              key={nav.id}
            >
              <Link
                // key={nav.id}
                href={nav.href}
                className="p-2"
              >
                <span className="">{nav.title}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-2 text-xs items-center">
          <Link href={"/"}>Search</Link>
          <Link href={"/"}>Help</Link>
          <ShoppingCartIcon className="h-5" />
          {isOpen ? (
            <XMarkIcon
              className="h-5 sm:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Bars3Icon
              className="h-5 sm:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-gray-700 text-white sm:hidden ">
          {navigation.map((nav) => (
            <Link
              key={nav.id}
              href={nav.href}
              className="hover:bg-slate-400  block p-2"
            >
              <span className="ml-5">{nav.title}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
