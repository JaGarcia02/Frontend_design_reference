import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: "", message: "" };

export const testSlice2 = createSlice({
  name: "test2",
  initialState,
  reducers: {
    test2: (state, action) => {
      state.id = action.payload;
      state.message = action.payload;
    },
  },
});

export const { test2 } = testSlice2.actions;
export default testSlice2.reducer;
