import { useState, useEffect } from "react";
import { getProducts } from "../utils/utils";
import StarReviews from "./StarReviews";

import {
  ProductArrContainer,
  Thumbnail,
  SmallContainer,
  ProductTitleShort,
  PriceTag
} from "../styles/StyleComp";

export default function ProductArray() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <p>Products</p>
      <ProductArrContainer>
        {products.length &&
          products.map((data) => (
            <>
              <SmallContainer>
                <Thumbnail url={data.image} />
                <ProductTitleShort>{data.title}</ProductTitleShort>
                <PriceTag>{`$${data.price.toFixed(2)}`}</PriceTag>
                <StarReviews rating={data.rating} />
              </SmallContainer>
            </>
          ))}
      </ProductArrContainer>
    </>
  );
}
