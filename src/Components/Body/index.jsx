import styles from "./styles.module.css";
const Body = () => {
  return (
    <>
      <div className={styles["body-1"]}>
        <div className={styles.left}>
          <div className={styles["left-text"]}>
            Buy and sell your books at the best price
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
