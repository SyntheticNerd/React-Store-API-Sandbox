import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            {/* Use a slash to denote the home page */}
            <Route path="cart" element={<Cart />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            {/* the '*' will match all strings that dont match route need 404 page */}
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  </StrictMode>,
  rootElement
);
