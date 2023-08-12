import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"

const NavItem = ({ to, children }) => {
  return (
    <li className={styles["nav-item"]}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export default NavItem