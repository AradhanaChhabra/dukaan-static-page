import styles from "./tiles.module.css";

function Tiles({ data }) {
  let key = 0;
  const getKey = () => key++;

  return (
    <div className={styles.tilesWrapper}>
      <div className={styles.heading}>Try our other free products</div>
      <div className={styles.tiles}>
        {data.map((obj) => {
          return (
            <div className={styles.unitTile} key={getKey()}>
              <div className={styles.img}>
                <img src={obj.image} alt="tiles" />
              </div>
              <div className={styles.contentWrapper}>
                <div className={styles.subHeading}>{obj.subHeading}</div>
                <div className={styles.content}>{obj.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tiles;
