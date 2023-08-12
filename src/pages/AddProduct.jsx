import React from "react";
import ProductForm from "../components/ProductForm";
import ProductTable from "../containers/ProductTable";

import styles from "../styles/AddProduct.module.css";

export function AddProduct() {
  return (
    <div className={styles.dashboard}>
      <div className={styles["left-column"]}>
        <ProductForm />
      </div>
      <div className={styles["right-column"]}>
        <ProductTable />
      </div>
    </div>
  );
}
