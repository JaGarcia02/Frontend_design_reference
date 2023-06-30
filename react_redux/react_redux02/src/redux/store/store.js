import { configureStore } from "@reduxjs/toolkit";
import TestSlice from "../features/testSlice";
import TestSlice2 from "../features/test2";
import TestSlice3 from "../features/testSlice3";
import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    test: TestSlice,
    auth: TestSlice2,
    randomShit: TestSlice3,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
