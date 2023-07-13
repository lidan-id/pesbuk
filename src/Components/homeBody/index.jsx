import styles from "./styles.module.css";
import b1 from "./Media/book1.webp";
import b2 from "./Media/book2.webp";
import b3 from "./Media/book3.webp";
import b4 from "./Media/book4.webp";
import b5 from "./Media/book5.webp";
import b6 from "./Media/book6.webp";
import b7 from "./Media/book7.webp";
import b8 from "./Media/book8.webp";
import b9 from "./Media/book9.webp";
import ba from "./Media/bookA.webp";
const homeBody = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.isi}>PESBUK's TOP COLLECTION</div>
        <div className={styles.bungkus}>
          <div className={styles.galeri}>
            <div className={styles.koleksi}>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b1} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b2} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b3} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b4} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b5} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b6} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b7} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b8} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b9} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={ba} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b1} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b2} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b3} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b4} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b5} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b6} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b7} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b8} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={b9} />
              </div>
              <div className={styles.buku}>
                <img className={styles.imgBooks} src={ba} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default homeBody;
