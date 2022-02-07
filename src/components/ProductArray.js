import { useState, useEffect } from "react";
import { getProducts } from "../utils/utils";
import ProductCard from "./ProductCard";
import { ProductArrContainer } from "../styles/StyleComp";

export default function ProductArray({ url, setProductPage, setShowProduct }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(url).then((res) => {
      setProducts(res);
    });
  }, [url]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ProductArrContainer>
        {products.length &&
          products.map((data) => (
            <>
              {/* <CartProductCard key={data.id} data={data} /> */}
              <ProductCard
                key={data.id}
                data={data}
                setProductPage={setProductPage}
                setShowProduct={setShowProduct}
              />
            </>
          ))}
      </ProductArrContainer>
    </div>
  );
}
