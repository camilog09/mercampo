import React, { useContext } from "react";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

import logo from "../assets/logomercampo.svg";
import shoppingCart from "../assets/icons/shopping-cart.svg";
import userCircle from "../assets/icons/userCircle.svg";
import menu from "../assets/icons/menu.svg";

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.Nav}>
        <div className={styles["navbar-left"]}>
          <img src={menu} alt="menu" className={styles.menu} />
          <Link href="/">
            <img src={logo} alt="logo" className={styles["nav-logo"]} />
          </Link>
          <input
            type="text"
            placeholder="Buscar..."
            className={styles["nav-search"]}
          />
          <ul>
            <li
              className={styles["navbar-shopping-cart"]}
              onClick={() => toggleOrder()}
              aria-hidden="true"
            >
              <img
                className={(styles["more-clickable-area"], styles.pointer)}
                src={shoppingCart}
                alt="shopping cart"
              />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
            <li
              className={styles.pointer}
              onClick={() => toggleOrder()}
              aria-hidden="true"
            >
              <img
                className={(styles.pointer)}
                src={userCircle}
                alt="shopping cart"
              />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        <div className={styles["navbar-center"]}>
          
        </div>
        <div className={styles["navbar-right"]}>
          
        </div>
      </nav>
      {/* <nav className={styles.Nav}>
        <img src={menu} alt="menu" className={styles.menu} />
        <div className={styles["navbar-left"]}>
          <Link href="/">
            <img src={logo} alt="logo" className={styles["nav-logo"]} />
          </Link>
          <ul>
            <li>
              <Link href="/">Info</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles["navbar-right"]}>
          <ul>
            <li
              className={
                (styles["more-clickable-area"],
                styles["navbar-email"],
                styles.pointer)
              }
              onClick={() => toggleMenu()}
              aria-hidden="true"
            >
              platzi@example.com
            </li>
            <li
              className={styles["navbar-shopping-cart"]}
              onClick={() => toggleOrder()}
              aria-hidden="true"
            >
              <img
                className={(styles["more-clickable-area"], styles.pointer)}
                src={shoppingCart}
                alt="shopping cart"
              />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />} */}
    </>
  );
};

export default Header;
