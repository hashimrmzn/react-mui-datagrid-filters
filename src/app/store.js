import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./features/products/productsSlice";
import filtersReducer from "./features/filters/filtersSlice";
import authReducer from "./features/auth/authSlice";
export const store = configureStore({
  reducer: {
     products: productsReducer,
     filters: filtersReducer,
     auth:authReducer
  },
})