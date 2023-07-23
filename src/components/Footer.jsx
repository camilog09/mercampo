import React, { useContext } from "react";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

import facebook from "../assets/icons/FacebookLogo.svg";
import instagram from "../assets/icons/InstagramLogo.svg";
import twitter from "../assets/icons/twitter.svg";
import logoBlanco from "../assets/logoMercampoBlancoNegativo.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.Content}>
          <div className={styles["logo-footer"]}>
            <img src={logoBlanco} />
          </div>
          <div className={styles["social-footer"]}>
            <ul>
              <li>
                <img src={facebook} />
              </li>
              <li>
                <img src={instagram} />
              </li>
              <li>
                <img src={twitter} />
              </li>
            </ul>
          </div>
          <div className={styles["nav-footer"]}>
            <div className={styles["nav-column-footer"]}>
              <h4>Sobre Mercampo</h4>
              <ul>
                <li>
                  <Link href="/">Nosotros</Link>
                </li>
                <li>
                  <Link href="/">Trabaja con nosotros</Link>
                </li>
              </ul>
            </div>
            <div className={styles["nav-column-footer"]}>
              <h4>Información</h4>
              <ul>
                <li>
                  <Link href="/">Legal y privacidad</Link>
                </li>
                <li>
                  <Link href="/">Centro de ayuda</Link>
                </li>
                <li>
                  <Link href="/">Contáctanos</Link>
                </li>
              </ul>
            </div>
            <div className={styles["nav-column-footer"]}>
              <h4>Contáctanos</h4>
              <ul>
                <li>
                  <Link href="/">Tel: 6018662180</Link>
                </li>
                <li>
                  <Link href="/">
                    Correo electrónico:
                    <br />
                    info@mercampo.com
                  </Link>
                </li>
                <li>
                  <Link href="/">Contáctanos</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
