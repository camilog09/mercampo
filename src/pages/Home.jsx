import React from "react";
import styles from "../styles/Home.module.css"

export function Home() {
  return (
    <>
      <div className={styles.Contain}>
        <div className={styles.Banner}>
          <h1>Los mejores productos del Campo</h1>
          <button className={styles["main-button"]}>Comprar ahora</button>
        </div>
      </div>
    </>
  );
}
