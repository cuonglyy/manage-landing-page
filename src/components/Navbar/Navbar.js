import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img src={logo} alt="Manage"></img>
      </a>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="/">Pricing</a>
        </li>
        <li className={styles.link}>
          <a href="/">Product</a>
        </li>
        <li className={styles.link}>
          <a href="/">About Us</a>
        </li>
        <li className={styles.link}>
          <a href="/">Careers</a>
        </li>
        <li className={styles.link}>
          <a href="/">Community</a>
        </li>
      </ul>
      <Button name="Get Started" type="orange" />
    </nav>
  );
};

export default Navbar;
