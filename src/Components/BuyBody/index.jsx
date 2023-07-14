import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { KOMIK as ALL_KOMIK } from "../homeBody";

const BuyBody = () => {
  const { buyId } = useParams();

  const realId = decodeURI(buyId);
  const komik = ALL_KOMIK.find((item) => {
    return item.name === realId;
  });

  return (
    <div className={styles.container}>
      <div>{komik.name}</div>
    </div>
  );
};
export default BuyBody;
