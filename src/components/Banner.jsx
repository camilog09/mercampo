import React from "react";
import styles from "../styles/Banner.module.css";

function Banner() {
  function Welcome() {
    alert("Bienvenido a Mercampo");
  }

  return (
    <>
      <div className={styles.Banner}>
        <div className={styles["content-banner"]}>
          <h1>Los mejores productos del campo</h1>
          <p>Los encuentras en Mercampo.<br/> Fresco y natural</p>
        </div>
        <div className={styles["cta-banner"]}>
          <button onClick={Welcome} className={styles["main-button"]}>
            Comprar ahora
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
