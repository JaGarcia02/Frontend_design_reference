import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./contexts/Ecomerce/ProductContext";
import SidebarProvider from "./contexts/Ecomerce/SidebarContext";
import CartProvider from "./contexts/Ecomerce/CartContext";
CartProvider;

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);

// https://www.youtube.com/watch?v=CQG11Ys7UgA&ab_channel=ThatSwedishDrummer 56:06 / 2:05:27

// https://www.youtube.com/watch?v=Yh8c9prVPN0&ab_channel=ThatSwedishDrummer

// https://www.youtube.com/watch?v=iKCyy6zzL4Y&ab_channel=ThatSwedishDrummer

// https://www.youtube.com/watch?v=caWIyBvvyMU&ab_channel=ThatSwedishDrummer
