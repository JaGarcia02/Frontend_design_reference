import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";

// This will be the CSS of this whole app (you can modify all of the attributes of the components)
const theme = createTheme({
  palette: {
    primary: {
      main: "#CCC",
    },
    secondary: {
      main: orange[500],
    },
    myCustomColor: {
      main: red[400],
      superDark: red[800],
      superLight: red[100],
    },
  },
  typography: {
    myVariant: {
      fontSize: "6rem",
      color: orange[500],
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
