import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MyOrder.module.css";
import AppContext from '../context/AppContext';

import OrderItem from '../components/OrderItem';

function MyOrder() {
  const { state } = useContext(AppContext);
  return (
    <aside className={styles.MyOrder}>
      <div className="title-container">
        {/* <Image src={flechita} alt="arrow" /> */}
        <p className="title">My order</p>
      </div>
      <div className={styles["my-order-content"]}>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>$0</p>
        </div>
        <Link className={styles["primary-button"]} href="/checkout">
          Checkout
        </Link>
      </div>
    </aside>
  );
}

export default MyOrder;
