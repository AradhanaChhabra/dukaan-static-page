import styles from "./footer.module.css";
import logo from "assets/dukaan-logo.svg";
import indFlag from "assets/india.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.table}>
        <img src={logo} alt="logo" className={styles.logo}></img>
        <div className={styles.footerContent}>
          <div>
            <div>Contact</div>
            <div>FAQ's</div>
          </div>
          <div>
            <div>Tutorials</div>
            <div>Blog</div>
          </div>
          <div>
            <div>Privacy</div>
            <div>Banned Items</div>
          </div>
          <div>
            <div>About</div>
            <div>
              <div>Jobs</div>
              <div>3</div>
            </div>
          </div>
          <div>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Linkedin</div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bottomContent}>
        <div>Dukaan 2020, All rights reserved</div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "5px" }}>
          <div>Made in</div>
          <img src={indFlag} alt="flag" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
