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
    // add product
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
    incrementProduct: (state, action) => {
      const incrementProductAdd = state.products.find(
        (product) => product._id === action.payload
      );
      if (
        incrementProductAdd &&
        incrementProductAdd.orderQuantity <= incrementProductAdd.stock
      ) {
        incrementProductAdd.orderQuantity += 1;
        return;
      }
    },
    decrementProduct: (state, action) => {
      const decrementProductAdd = state.products.find(
        (product) => product._id === action.payload
      );
      if (decrementProductAdd && decrementProductAdd.orderQuantity > 1) {
        decrementProductAdd.orderQuantity -= 1;
      }
      return;
    },
    removeProduct: (state, action) => {
      console.log(action.payload);
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    clearProduct: (state) => {
      state.products = [];
    },
  },
});
export const orderProductSelector = (state: RootState) => {
  return state.product.products;
};
export const subTotalSelector = (state: RootState) => {
  return state.product.products.reduce((acc, product) => {
    if (product.offerPrice) {
      return acc + product.offerPrice * product.orderQuantity;
    } else {
      return acc + product.price * product.orderQuantity;
    }
  }, 0);
};
export const {
  addProduct,
  clearProduct,
  incrementProduct,
  decrementProduct,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
