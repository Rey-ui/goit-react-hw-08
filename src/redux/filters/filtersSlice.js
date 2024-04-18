import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../initialState";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: INITIAL_STATE.filters.name,
  },
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setNameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
