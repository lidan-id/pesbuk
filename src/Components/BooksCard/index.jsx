import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Description = ({ description }) => {
  return (
    <div className={styles["des-container"]}>
      <div className={styles["des-text"]}>{description}</div>
    </div>
  );
};
const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          onClick={() => {
            navigate("/books");
          }}
          className={styles.books}
          src={props.image}
          alt=""
        />
        <div className={styles.title}>{props.name}</div>
        <div
          onClick={() => {
            props.toggleDescription();
          }}
          className={styles.des}
        >
          Description
        </div>
      </div>
      {props.selected && <Description description={props.description} />}
    </div>
  );
};
export default Card;
