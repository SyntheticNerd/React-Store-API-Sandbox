import { useState, useEffect, useContext } from "react";
import { getProducts } from "../utils/utils";
import StarReviews from "./StarReviews";
import CartBtn from "./CartBtn";
import {
  Thumbnail,
  SmallContainer,
  ProductTitleShort,
  PriceTag,
  CardCartBtn
} from "../styles/StyleComp";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ data, setProductPage, setShowProduct }) {
  const { addItem } = useContext(CartContext);
  let onClick = (id) => {
    setProductPage(`products/${id}`);
    setShowProduct(true);
  };
  return (
    <>
      <SmallContainer>
        <div
          id="clickBox"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            transform: "translate(-16px, -16px)"
          }}
          onClick={() => onClick(data.id)}
        ></div>
        <CardCartBtn onClick={() => addItem(data.id, 1)}>
          <CartBtn />
        </CardCartBtn>
        <Thumbnail url={data.image} />
        <ProductTitleShort>{data.title}</ProductTitleShort>
        <PriceTag>{`$${data.price.toFixed(2)}`}</PriceTag>
        <StarReviews rating={data.rating} />
      </SmallContainer>
    </>
  );
}
