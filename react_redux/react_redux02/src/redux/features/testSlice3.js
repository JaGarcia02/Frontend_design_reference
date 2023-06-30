import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: "", token: "", message: "" };

export const testSlice3 = createSlice({
  name: "test3",
  initialState,
  reducers: {
    test3: (state, action) => {
      state.id = action.payload;
      state.token = action.payload;
      state.message = action.payload;
    },
  },
});

export const { test3 } = testSlice3.actions;
export default testSlice3.reducer;
