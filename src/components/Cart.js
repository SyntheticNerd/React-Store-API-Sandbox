import { useState, useEffect } from "react";
import { getProducts } from "../utils/utils";
import CartProductCard from "./CartProductCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart({ url }) {
  const [products, setProducts] = useState([]);
  const { cartArr } = useContext(CartContext);
  useEffect(() => {});
  return (
    <>
      {cartArr.length ? (
        cartArr.map((product) => (
          <>
            <CartProductCard
              productId={product.productId}
              quantity={product.quantity}
            />
          </>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
//This was a challenge i started my solution with nested promises and came
//to the conclusion that each components should handle its own content loading
