import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    category: "",
    searchName: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchName: (state, action) => {
      state.searchName = action.payload;
    },
    resetFilters: (state) => {
      state.category = "";
      state.searchName = "";
    },
  },
});

export const { setCategory, setSearchName, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
