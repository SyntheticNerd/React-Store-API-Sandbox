import { useState, useEffect } from "react";
import { getProducts } from "../utils/utils";
import ProductCard from "./ProductCard";

import {
  ProductArrContainer,
  Thumbnail,
  SmallContainer,
  ProductTitleShort,
  PriceTag
} from "../styles/StyleComp";

export default function ProductArray({ url, setProductPage, setShowProduct }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(url).then((res) => {
      setProducts(res);
    });
  }, [url]);

  return (
    <>
      <p>Products</p>
      <ProductArrContainer>
        {products.length &&
          products.map((data) => (
            <ProductCard
              key={data.id}
              data={data}
              setProductPage={setProductPage}
              setShowProduct={setShowProduct}
            />
          ))}
      </ProductArrContainer>
    </>
  );
}
