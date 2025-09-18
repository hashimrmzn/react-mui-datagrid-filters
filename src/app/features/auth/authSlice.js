import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunks";
import {
  saveAuthToLocalStorage,
  loadAuthFromLocalStorage,
  clearAuthFromLocalStorage,
} from "./authHelpers";

const initialState =
  loadAuthFromLocalStorage() || {
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    items: [], 
  };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    setProducts: (state, action) => {
      state.items = action.payload;
    },

    updateItem: (state, action) => {
      const updated = action.payload;
      const index = state.items.findIndex((p) => p.id === updated.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updated };
      }
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.error = null;
      state.items = []; 
      clearAuthFromLocalStorage();
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;

        saveAuthToLocalStorage({
          user: state.user,
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
          isAuthenticated: true,
        });
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
      });
  },
});

export const { updateTokens, setProducts, updateItem, logout } =
  authSlice.actions;
export default authSlice.reducer;
