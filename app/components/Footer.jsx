import React from "react";
import { FireIcon } from "@heroicons/react/24/solid";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-800 px-5 py-7">
      <div className="flex gap-5 justify-center">
        <Link href={"/"}>
          <AtSymbolIcon className="h-5 stroke-slate-400" />
        </Link>
        <Link href={"/"}>
          <AtSymbolIcon className="h-5 stroke-slate-400" />
        </Link>
        <Link href={"/"}>
          <AtSymbolIcon className="h-5 stroke-slate-400" />
        </Link>
        <Link href={"/"}>
          <AtSymbolIcon className="h-5 stroke-slate-400" />
        </Link>
      </div>
      <p className="text-center text-xs mt-5">
        © 2020 Your Company, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
