import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";

// parsis
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartSlice);
export const makeStore = () => {
  return configureStore({
    reducer: { product: persistedReducer },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
