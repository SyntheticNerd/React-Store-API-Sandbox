import "./styles/styles.css";
import "./utils/utils";
import ProductArray from "./components/ProductArray";
import Catagories from "./components/Catagories";
import ProductPage from "./components/ProductPage";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import ModalClass from "./components/Modal";
import { Outlet } from "react-router-dom";

export default function App() {
  const [url, setUrl] = useState("");
  const [productPage, setProductPage] = useState("");
  const [showProduct, setShowProduct] = useState(false);
  function toggleProduct() {
    setShowProduct(!showProduct);
  }
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Catagories setUrl={setUrl} />
      {/* <Cart /> */}
      <ProductArray
        url={url}
        setProductPage={setProductPage}
        setShowProduct={setShowProduct}
      />
      {/* <Cart url="/carts/1" /> */}
      <ModalClass show={showProduct} onClose={toggleProduct}>
        <ProductPage onClose={toggleProduct} url={productPage} />
      </ModalClass>
    </div>
  );
}
