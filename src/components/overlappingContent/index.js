import styles from "./styles.module.css";
import { Form } from "./Form.js";
import { DisplayData } from "./DisplayData";
import arrow from "assets/rightArrow.svg";

const OverlappingContent = () => {
  const data = [
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "Review the facts cool is the best.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Free slogan maker</h1>
        <div className={styles.description}>
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </div>
        <Form />
        <div className={styles.divider}></div>
        <DisplayData data={data} />
        <div className={styles.divider}></div>
        <div className={styles.paginationWrapper}>
          <button className={styles.next}>
            Next
            <img src={arrow} alt="arrow" />
          </button>
          <div className={styles.pages}>
            {[1, 2, 3, 21].map((number, index) => {
              if (index < 3)
                return (
                  <div className={styles.pageNumber} key={index}>
                    {number}
                  </div>
                );
              return (
                <>
                  <div className={styles.pageNumber}>...</div>
                  <div className={styles.pageNumber}>{number}</div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlappingContent;
