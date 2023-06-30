import { configureStore } from "@reduxjs/toolkit";
import TestSlice from "../features/testSlice";
import TestSlice2 from "../features/test2";
import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    test: TestSlice,
    auth: TestSlice2,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
