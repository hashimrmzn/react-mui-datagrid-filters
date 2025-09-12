import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../../services/authService";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }) => {
    return await login(username, password);
  }
);
