import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import UserReducer from "./features/userSlice";
import ThemeReducer from "./features/themeSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    theme: ThemeReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/**
 * Important notes for this tutorial
    - import configureStore and Provider
    - in the folder of userSlice.js you can create your custom slice
 */
