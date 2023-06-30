import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: "" };

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    test: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { test } = testSlice.actions;
export default testSlice.reducer;
