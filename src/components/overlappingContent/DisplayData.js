import React from "react";
import styles from "./styles.module.css";

const DisplayData = ({ data }) => {
  let key = 0;
  const getKey = () => key++;

  return (
    <div className={styles.dataContainer}>
      <div className={styles.subHeader}>
        <h2 className={styles.subHeading}>
          We have generated 1,023 slogans for “cozy”
        </h2>
        <button
          className={styles.download}
          onClick={(event) => event.preventDefault()}
        >
          Download All
        </button>
      </div>
      <div className={styles.gridLayout}>
        {data.map((text) => {
          return (
            <div className={styles.gridElement} key={getKey()}>
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { DisplayData };
