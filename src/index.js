import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import App from "./App";
import MyRouter from "./Router";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <MyRouter />
    </CartProvider>
  </StrictMode>,
  rootElement
);
