import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.Layout}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
