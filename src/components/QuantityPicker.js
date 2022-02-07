import { useState, useContext } from "react";
import { IncBtn, QuantityField } from "../styles/StyleComp";
import { CartContext } from "../context/CartContext";

export default function QuantityPicker({ productId, quantity }) {
  const { updateQtty } = useContext(CartContext);
  let increment = () => {
    updateQtty(productId, quantity + 1);
  };
  let decrement = () => {
    quantity > 1 && updateQtty(productId, quantity - 1);
  };
  return (
    <div style={{ margin: "0px 0px 0px auto" }}>
      <IncBtn onClick={increment}>↑</IncBtn>
      <QuantityField
        type="text"
        value={quantity}
        onChange={(e) =>
          updateQtty(
            productId,
            Number(e.currentTarget.value) ? Number(e.currentTarget.value) : ""
          )
        }
        style={{}}
      />
      <IncBtn onClick={decrement}>↓</IncBtn>
    </div>
  );
}
