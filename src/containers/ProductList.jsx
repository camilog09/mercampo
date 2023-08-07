import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import styles from "../styles/ProductList.module.css";
import { supabase } from "../supabase/supabase.config";
import { useGetProducts } from "../hooks/useGetProducts";


function ProductList() {

  const { products, getProducts } = useGetProducts();

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <section className={styles["main-container"]}>
      <div className={styles.ProductList}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
