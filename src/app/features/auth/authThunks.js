import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../../services/authService";
import { updateProduct } from "../../../services/updateProduct";
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }) => {
    return await login(username, password);
  }
);

export const UpdateProduct = createAsyncThunk(
  "auth/updateProduct",
  async ({ id, updates }) => {
    return await updateProduct(id, updates);
  }
);
