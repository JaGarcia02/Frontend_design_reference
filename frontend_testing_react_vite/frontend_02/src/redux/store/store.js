import { configureStore } from "@reduxjs/toolkit";
import user_reducer from "../features/user/user_slice";

export const store = configureStore({
  reducer: {
    user: user_reducer,
  },
  devTools: true,
});

export default store;
