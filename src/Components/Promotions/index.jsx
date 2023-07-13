import styles from "./styles.module.css";

const PromotionsCard = ({ image, text }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={image} alt="" />
      <div className={styles.text}>{text}</div>
      <div className={`${styles.botText} ${styles.text}`}>
        Go Get it Right NOW 😁
      </div>
    </div>
  );
};
export default PromotionsCard;
