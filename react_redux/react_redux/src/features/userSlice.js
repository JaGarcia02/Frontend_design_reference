import { createSlice } from "@reduxjs/toolkit";

// const initialStateValue =  { name: "", age: 0, email: "" }

export const userSlice = createSlice({
  name: "user", // <-- you can modify this
  initialState: { value: { name: "", age: 0, email: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = { name: "", age: 0, email: "" };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

/*
    you can make any name all you want for creating the userSlice

     - initialState is the initial value of your data that will be passed on.

    in the redcers you are passing the state and the action for the output you are
    giving in the payload of the action.

*/
