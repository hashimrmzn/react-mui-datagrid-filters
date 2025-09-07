import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/axiosInstance";


export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/products");
      return res.data.products;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching products");
    }
  }
);


export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category, { rejectWithValue }) => {
    try {
      if (!category) {
        const res = await axiosInstance.get("/products");
        return res.data.products;
      }
      const res = await axiosInstance.get(`/products/category/${category}`);
      return res.data.products;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching category");
    }
  }
);


export const searchProducts = createAsyncThunk(
  "products/search",
  async (query, { rejectWithValue }) => {
    try {
      if (!query) {
        const res = await axiosInstance.get("/products");
        return res.data.products;
      }
      const res = await axiosInstance.get(`/products/search?q=${query}`);
      return res.data.products;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error searching products");
    }
  }
);


export const fetchFilteredProducts = createAsyncThunk(
  "products/fetchFiltered",
  async ({ category, query }, { rejectWithValue }) => {
    try {
      if (category) {
        const res = await axiosInstance.get(`/products/category/${category}`);
        let products = res.data.products;
        if (query) {
          products = products.filter((p) =>
            p.title.toLowerCase().includes(query.toLowerCase())
          );
        }
        return products;
      }

      if (query) {
        const res = await axiosInstance.get(`/products/search?q=${query}`);
        return res.data.products;
      }

      const res = await axiosInstance.get("/products");
      return res.data.products;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error filtering products");
    }
  }
);
