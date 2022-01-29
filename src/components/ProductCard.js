import { useState, useEffect } from "react";
import { getProducts } from "../utils/utils";
import StarReviews from "./StarReviews";
import {
  Thumbnail,
  SmallContainer,
  ProductTitleShort,
  PriceTag
} from "../styles/StyleComp";

export default function ProductCard({ data, setProductPage, setShowProduct }) {
  let onClick = (id) => {
    setProductPage(`products/${id}`);
    setShowProduct(true);
  };
  return (
    <>
      <SmallContainer onClick={() => onClick(data.id)}>
        <Thumbnail url={data.image} />
        <ProductTitleShort>{data.title}</ProductTitleShort>
        <PriceTag>{`$${data.price.toFixed(2)}`}</PriceTag>
        <StarReviews rating={data.rating} />
      </SmallContainer>
    </>
  );
}
