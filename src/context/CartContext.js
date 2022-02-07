import React, { useState } from "react";
import { getProducts } from "../utils/utils";

const CartContext = React.createContext([]);
CartContext.displayName = "CartValues";

const CartProvider = ({ children }) => {
  const [cartArr, setCartArr] = useState([]);
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [cartQtty, setCartQtty] = useState(0);

  function saveToSession() {
    // not for production use
    sessionStorage.setItem(user, cartArr);
  }
  async function loadArr(url) {
    let _cart = await getProducts(url);
    setCartArr(_cart.products);
    setUser(_cart.userId);
    setDate(_cart.date);
  }
  function addItem(productId, quantity) {
    let index = cartArr.findIndex((obj) => {
      return obj.productId === productId;
    });
    if (index + 1) {
      let _arr = cartArr;
      _arr[index].quantity++;
      setCartQtty(cartQtty + 1);
    } else {
      setCartQtty(cartQtty + 1);
      setCartArr([
        ...cartArr,
        {
          productId: productId,
          quantity: quantity
        }
      ]);
    }
  }
  function removeItem(productId) {
    let index = cartArr.findIndex((obj) => {
      return obj.productId === productId;
    });
    setCartQtty(cartQtty - cartArr[index].quantity);
    setCartArr(
      cartArr.filter((n) => {
        return n.productId !== productId;
      })
    );
  }
  function updateQtty(productId, quantity) {
    let index = cartArr.findIndex((obj) => {
      return obj.productId === productId;
    });
    let _arr = cartArr;
    let _qtty = cartQtty;
    _qtty -= _arr[index].quantity;
    _arr[index].quantity = quantity;
    _qtty += quantity;
    setCartArr(_arr);
    setCartQtty(_qtty);
  }

  return (
    <CartContext.Provider
      value={{
        setCartArr,
        cartArr,
        loadArr,
        addItem,
        cartQtty,
        removeItem,
        updateQtty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
