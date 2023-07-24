import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const isCanvasPage = location.pathname === '/login';
  return (
    <>
      {!isCanvasPage && <Header />}
      <div className={styles.Layout}>{children}</div>
      {!isCanvasPage && <Footer />}
    </>
  );
};

export default Layout;
