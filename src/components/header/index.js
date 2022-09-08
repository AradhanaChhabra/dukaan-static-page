import logo from "assets/dukaan-logo.svg";
import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="this is a logo" className={styles.logo}></img>
      <div className={styles.buttonsContainer}>
        <button className={styles.signIn}>Sign In</button>
        <button className={styles.forPC}>Dukaan for PC</button>
      </div>
    </div>
  );
};

export default Header;
