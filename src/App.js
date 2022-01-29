import "./styles/styles.css";
import "./utils/utils";
import ProductArray from "./components/ProductArray";
import Catagories from "./components/Catagories";
import ProductPage from "./components/ProductPage";
import { useState, useEffect } from "react";
import ModalClass from "./components/Modal";

export default function App() {
  const [url, setUrl] = useState("");
  const [productPage, setProductPage] = useState("");
  const [showProduct, setShowProduct] = useState(false);
  function toggleProduct() {
    setShowProduct(!showProduct);
  }
  return (
    <div className="App">
      <Catagories setUrl={setUrl} />
      <ProductArray
        url={url}
        setProductPage={setProductPage}
        setShowProduct={setShowProduct}
      />
      <ModalClass show={showProduct} onClose={toggleProduct}>
        <ProductPage onClose={toggleProduct} url={productPage} />
      </ModalClass>
    </div>
  );
}
