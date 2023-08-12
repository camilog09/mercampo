import React from "react";
import styles from "../styles/Home.module.css";
import ProductList from "../containers/ProductList"
import Banner from "../components/Banner";
import ProductForm from "../components/ProductForm";


export function Home() {

   return (
    <>
      <div className={styles.Contain}>
        <Banner/>
        <h2>La mejor selección del campo para tu mesa</h2>
        <ProductList/>
      </div>
    </>
  );
}
