import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer, // <-- you can set any naming convention calling your authReducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;

/*
This store file is the first step to setup redux.

Created a file authSlice and that will set the userInfo in the localstorage,
its like a middleware checker.

Created a file apiSlice, this will be the middleware four our frontend and backend.

*/
