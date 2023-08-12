import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import styles from "../styles/ProductList.module.css";
import { useGetProducts } from "../hooks/useGetProducts";


function ProductList() {

  const { products, getProducts, loading } = useGetProducts();

  useEffect(() => {
    getProducts();
  }, [])

  function renderProducts() {
    if (loading) {
      return <p>Loading...</p>
    } else if (products.lenght == 0) {
      return <p>No products found</p>;
    } else {
      return (
        <section className={styles["main-container"]}>
        <div className={styles.ProductList}>
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </section>
      )
    }
  }

  return (
    <div>{renderProducts()}</div>
  );
}

export default ProductList;
