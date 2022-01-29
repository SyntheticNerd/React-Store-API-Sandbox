import { useState, useEffect } from "react";
import { getProducts } from "../utils/utils";
import StarReviews from "./StarReviews";

export default function ProductPage({ url }) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProducts(url).then((res) => {
      setProduct(res);
    });
  }, [url]);
  return (
    <>
      <p></p>
    </>
  );
}
