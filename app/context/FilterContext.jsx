"use client";
import React, { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [gender, setGender] = useState("");
  const [color, setColor] = useState([]);
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");

  return (
    <FilterContext.Provider value={{ gender, setGender }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
