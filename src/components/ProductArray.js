import { useState, useEffect } from "react";
import { getProducts } from "../utils/utils";
import ProductCard from "./ProductCard";
import { ProductArrContainer } from "../styles/StyleComp";
import Catagories from "./Catagories";
import { useParams } from "react-router-dom";

export default function ProductArray() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(0);
  const [order, setOrder] = useState(1);
  const [type, setType] = useState(1);
  let params = useParams();
  useEffect(() => {
    params.catagoryId
      ? getProducts(`products/category/${params.catagoryId}`).then((res) => {
          setProducts(sortArray(res));
        })
      : getProducts().then((res) => {
          setProducts(sortArray(res));
        });
  }, [params.catagoryId, sort, order, type]);

  function sortArray(arr) {
    return sort
      ? order
        ? type
          ? arr.sort(function (a, b) {
              return a.price - b.price;
            })
          : arr.sort((a, b) => {
              let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
              if (fa < fb) {
                return -1;
              }
              if (fa > fb) {
                return 1;
              }
              return 0;
            })
        : type
        ? arr.sort(function (a, b) {
            return b.price - a.price;
          })
        : arr.sort((a, b) => {
            let fa = a.title.toLowerCase(),
              fb = b.title.toLowerCase();
            if (fa > fb) {
              return -1;
            }
            if (fa < fb) {
              return 1;
            }
            return 0;
          })
      : arr;
  }

  return (
    <>
      {!params.catagoryId && <Catagories />}
      <button onClick={() => setSort(!sort)}>{sort ? "On" : "Off"}</button>
      <button onClick={() => setType(!type)}>{type ? "Price" : "Title"}</button>
      <button onClick={() => setOrder(!order)}>{order ? "Asc" : "Desc"}</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductArrContainer>
          {products.length ? (
            products.map((data) => <ProductCard key={data.id} data={data} />)
          ) : (
            <></>
          )}
        </ProductArrContainer>
      </div>
    </>
  );
}
