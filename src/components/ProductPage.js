import { useState, useEffect } from "react";
import { getProducts } from "../utils/utils";
import StarReviews from "./StarReviews";
import {
  Thumbnail,
  SmallContainer,
  ProductTitleShort,
  PriceTag
} from "../styles/StyleComp";

export default function ProductPage({ url }) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProducts(url).then((res) => {
      setProduct(res);
    });
  }, [url]);
  return (
    <>
      {product.title && (
        <>
          <Thumbnail url={product.image} style={{ height: "30%" }} />
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
          {/* <p>{product.image}</p> */}
          <PriceTag>{`${product.price.toFixed(2)}`}</PriceTag>
        </>
      )}

      {/* <ProductTitleShort>{product.title}</ProductTitleShort> */}

      {/* <StarReviews rating={product.rating} /> */}
    </>
  );
}
