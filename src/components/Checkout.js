import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cartArr, cartQtty, total } = useContext(CartContext);
  useEffect(() => {
    console.log(cartArr);
  });

  return (
    <>
      <h1> Checkout</h1>
    </>
  );
}
