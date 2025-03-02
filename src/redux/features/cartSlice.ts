import { TProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface TCartProduct extends TProduct {
  orderQuantity: number;
}

interface TInitialState {
  products: TCartProduct[];
}

const initialState: TInitialState = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productAdd = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (productAdd) {
        productAdd.orderQuantity += 1;
        return;
      }
      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
  },
});
export const orderProductSelector = (state: RootState) => {
  return state.product.products;
};
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
