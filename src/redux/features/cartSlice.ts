"use client";
import { TProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface TCartProduct extends TProduct {
  orderQuantity: number;
}

interface TInitialState {
  products: TCartProduct[];
  city: string;
  shippingAddress: string;
}

const initialState: TInitialState = {
  products: [],
  city: "",
  shippingAddress: "",
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

    // payment
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
    updateCity: (state, action) => {
      state.city = action.payload;
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    clearProduct: (state) => {
      state.products = [];
    },
  },
});
// products
export const orderProductSelector = (state: RootState) => {
  return state.product.products;
};
export const orderSelector = (state: RootState) => {
  return {
    products: state.product.products.map((product) => ({
      product: product._id,
      quantity: product.orderQuantity,
      color: "White",
    })),
    shippingAddress: `${state.product.shippingAddress} - ${state.product.city}`,
    paymentMethod: "Online",
  };
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
// sipping cost
export const sippingCost = (state: RootState) => {
  if (
    state.product.city === "Dhaka" &&
    state.product.city &&
    state.product.products.length > 0
  ) {
    return 60;
  } else if (
    state.product.city !== "Dhaka" &&
    state.product.city &&
    state.product.products.length > 0
  ) {
    return 120;
  } else {
    return 0;
  }
};

// city
export const citySelector = (state: RootState) => {
  return state.product.city;
};
//   address
export const shippingAddressSelector = (state: RootState) => {
  return state.product.shippingAddress;
};
export const {
  addProduct,
  clearProduct,
  incrementProduct,
  decrementProduct,
  removeProduct,
  updateShippingAddress,
  updateCity,
} = cartSlice.actions;
export default cartSlice.reducer;
