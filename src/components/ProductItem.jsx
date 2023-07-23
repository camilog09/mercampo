import React, { useContext } from "react";
import styles from "../styles/ProductItem.module.css";
import AppContext from "../context/AppContext";

import addToCartImage from "../assets/icons/Plus.svg"


const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log("in cart: ", state.cart.includes(item));
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <img
        src={product?.images[0]}
        width={240}
        height={240}
        alt={product?.title}
      />
      <div className={styles["product-info"]}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure
          className={styles["more-clickable-area"]}
          onClick={() => handleClick(product)}
          aria-hidden="true"
        >
          {state.cart.includes(product) ? (
            <img
              className={(styles.disabled, styles["add-to-cart-btn"])}
              src={addToCartImage}
              alt="added to cart"
            />
          ) : (
            <img
              className={(styles["add-to-cart-btn"], styles.pointer)}
              src={addToCartImage}
              alt="add to cart"
            />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
