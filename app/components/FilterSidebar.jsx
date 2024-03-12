"use client";
import React, { useContext } from "react";
import Dropdown from "../components/Dropdown";
import { database as products, color, size, category } from "../db/database";
import { FilterContext } from "../context/FilterContext";

const FilterSidebar = () => {
  const { setGender } = useContext(FilterContext);
  return (
    <div className="p-2 h-fit rounded-lg sm:w-1/6">
      <div className="divide-y ">
        <div className=" py-2 cursor-pointer" onClick={() => setGender("Women")}>
          Women
        </div>
        <div className=" py-2 cursor-pointer" onClick={() => setGender("Men")}>
          Men
        </div>
        <div className=" py-2">
          <Dropdown name="Color" datasets={color} />
        </div>
        <div className=" py-2">
          <Dropdown name="Size" datasets={size} />
        </div>
        <div className=" py-2">
          <Dropdown name="Categoty" datasets={category} />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
