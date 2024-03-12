"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

export default function Dropdown({ datasets, name }) {
  const [open, setOpen] = useState(true);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center w-full justify-between">
            <span className="">{name}</span>
            <ChevronRightIcon
              className={`w-5 ${open ? "rotate-90 transform" : ""}`}
            />
          </Disclosure.Button>
          <Disclosure.Panel>
            {datasets.map((data, i) => (
              <li key={i} className="list-none">
                <input className="mr-2" type="checkbox" id="red" value="Red" />
                <label htmlFor="red">{data}</label>
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
