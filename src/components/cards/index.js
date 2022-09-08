import styles from "./cards.module.css";

const Cards = ({ data }) => {
  let key = 0;
  const getKey = () => key++;

  return (
    <div className={styles.cards}>
      {data.map((obj) => {
        return (
          <div className={styles.unitCard} key={getKey()}>
            <div className={styles.cardWrapper}>
              <div className={styles.icons}>
                <obj.icon />
              </div>
              <div className={styles.headingWrapper}>
                <div className={styles.heading}>{obj.heading}</div>
                <div className={styles.subHeading}>{obj.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
