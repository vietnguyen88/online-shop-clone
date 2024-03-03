import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart_number: 0,
  },
  reducers: {
    increase: (state) => {
      state.cart_number += 1;
    },
  },
});

export const { increase } = cartSlice.actions;

export default cartSlice.reducer;
