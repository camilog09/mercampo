import React, { useEffect, useState } from "react";
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import styles from '../styles/ProductList.module.css';
import { supabase } from "../supabase/supabase.config";

// const API = 'https://api.escuelajs.co/api/v1/products';

async function fetchProducts() {
  try {
    const { data, error } = await supabase.from('Products').select('*');
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

function ProductList() {
  // const products = useGetProducts(API);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const productsData = await fetchProducts();
      setProducts(productsData);
    }
    getProducts();
  }, []);
  
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
