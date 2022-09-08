import React from "react";
import styles from "./styles.module.css";
import cross from "assets/cross.svg";

const Form = () => {
  return (
    <form className={styles.formContainer}>
      <label for="word" className={styles.label}>
        Word for your slogan
      </label>
      <div className={styles.inputContainer}>
        <input
          type="search"
          id="word"
          className={styles.input}
          defaultValue="cozy"
        />
        <img src={cross} alt="cross" className={styles.cross}></img>
      </div>
      <button
        className={styles.submit}
        onClick={(event) => event.preventDefault()}
      >
        Generate slogans
      </button>
    </form>
  );
};

export { Form };
