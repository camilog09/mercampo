import {React, useState} from "react";
import NavItem from "../components/NavItem";
import styles from "../styles/Navbar.module.css"

function Navbar() {

  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/productos">Gestionar productos</NavItem>
      </ul>
    </nav>
  );
}

export default Navbar;
