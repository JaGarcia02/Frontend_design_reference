import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  middware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;

/*
This store file is the first step to setup redux

*/
