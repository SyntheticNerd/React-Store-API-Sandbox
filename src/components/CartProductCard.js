import { useState, useEffect } from "react";
import { getProducts } from "../utils/utils";
import {
  CartCardContainer,
  Thumbnail,
  ProductTitleCart,
  CartImg,
  PriceTagSm,
  PriceTagMd,
  PriceContainer
} from "../styles/StyleComp";
import QuantityPicker from "./QuantityPicker";
import DeleteBtn from "./DeleteBtn";

export default function CartProductCard({ productId, quantity }) {
  const [newQuantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    setQuantity(quantity);
    async function loadArr() {
      let product = await getProducts(`/products/${productId}`);
      setData(product);
    }
    loadArr();
  }, [productId, quantity]);
  return (
    <>
      {data.price && (
        <CartCardContainer>
          <DeleteBtn productId={productId} />
          <div
            style={{
              width: "4em",
              marginLeft: "8px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <CartImg src={data.image} alt="No image" />
          </div>
          <ProductTitleCart style={{ WebkitLineClamp: "1" }}>
            {data.title}
          </ProductTitleCart>

          <QuantityPicker productId={productId} quantity={quantity} />
          <PriceContainer>
            <PriceTagSm>{`$${data.price.toFixed(2)}`}</PriceTagSm>
            <PriceTagMd>{`$${(data.price * newQuantity).toFixed(
              2
            )}`}</PriceTagMd>
          </PriceContainer>
        </CartCardContainer>
      )}
    </>
  );
}
