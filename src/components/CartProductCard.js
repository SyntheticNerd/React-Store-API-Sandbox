import { useState, useEffect, useContext } from "react";
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
import { CartContext } from "../context/CartContext";

export default function CartProductCard({ productId, quantity }) {
  const [newQuantity, setQuantity] = useState(quantity ? quantity : 1);
  const [data, setData] = useState([]);
  const { updateQtty } = useContext(CartContext);

  useEffect(() => {
    updateQtty(productId, newQuantity);
    async function loadArr() {
      let product = await getProducts(`/products/${productId}`);
      setData(product);
    }
    loadArr();
  }, [productId, newQuantity, updateQtty]);
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

          <QuantityPicker quantity={newQuantity} setQuantity={setQuantity} />
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
