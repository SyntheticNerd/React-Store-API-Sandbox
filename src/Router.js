import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cart from "./components/Cart";
import App from "./App";
import ProductArray from "./components/ProductArray";
import ProductPage from "./components/ProductPage";
import Checkout from "./components/Checkout";

export default function MyRouter() {
  const [url, setUrl] = useState("");
  const [catagory, setCatagory] = useState("");
  const [productPage, setProductPage] = useState("");
  const [showProduct, setShowProduct] = useState(false);
  function toggleProduct() {
    setShowProduct(!showProduct);
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App url={url} setUrl={setUrl} />}>
            {/* Use a slash to denote the home page */}
            <Route index element={<ProductArray />} />
            <Route path="cart" element={<Cart />} />
            <Route path="catagory/:catagoryId" element={<ProductArray />} />
            <Route path="products/:productId" element={<ProductPage />} />
            <Route path="checkout" element={<Checkout />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            {/* the '*' will match all strings that dont match route need 404 page */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}
