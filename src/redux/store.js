import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/products/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
