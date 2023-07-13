import Carousels from "../Carousels/Carousels";
import styles from "./styles.module.css";
import Card from "../BooksCard";
import b1 from "./Media/book1.webp";
import b2 from "./Media/book2.webp";
import b3 from "./Media/book3.webp";
import b4 from "./Media/book4.webp";
import b5 from "./Media/book5.webp";

const HomeBody = () => {
  return (
    <div className={styles.container}>
      <Carousels />
      <div className={styles["now-trending"]}>Top 5 Trending</div>
      <div className={styles.collections}>
        <Card image={b1} name={"Naruto"} />
        <Card image={b2} name={"One Piece"} />
        <Card image={b3} name={"Demon Slayer"} />
        <Card image={b4} name={"My Hero Academia"} />
        <Card image={b5} name={"Spy x Family"} />
      </div>
    </div>
  );
};
export default HomeBody;
