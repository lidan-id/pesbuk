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
      <div className={styles["beli-kiri"]}>
        <div>
          <img src={komik.image} />
        </div>
        <div className={styles.desc}>{komik.name}</div>
        <div className={styles.desc}>SomeOne</div>
        <div className={styles["baris-hitam"]}></div>
        <div className={styles.aut}>
          <div>Follow the author</div>
          <div className={styles.author}>
            <div className={styles["nama-aut"]}>
              <button className={styles["btn-aut"]}>follow</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["beli-tengah"]}>
        <div>
          <div className={styles["mid-atas"]}>
            <div className={styles.judul}>{komik.name}</div>
            <div className={styles["bwh-judul"]}>by SomeOne</div>
            <div className={styles.rating}>rating *****</div>
          </div>
          <div className={styles["isi-sinopsis"]}>
            <div className={styles["baris-hitam"]}></div>
            <div className={styles["mid-atas"]}>
              <div className={styles.sinop}>Sinopsis : </div>
              <div className={styles.sinopsis}>{komik.description}</div>
            </div>
            <div className={styles["baris-hitam"]}></div>
          </div>
          <div>
            <div className={styles["mid-atas"]}>
              <div>detail buku</div>
              <div className={styles["isi-info"]}>
                <div>Banyak halaman : {komik.pages}</div>
                <div>Tahun rilis : {komik.releaseYear}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["beli-kanan"]}>
        <div className={styles.kotak}>
          <div className={styles["desc-harga"]}>
            <div className={styles.harga}>
              <div className={styles.wkwk}>Harga Buku</div>
              <div className={styles.biaya}>Rp. 22.000</div>
            </div>
            <div className={styles.harga}>
              <div className={styles.wkwk}>ongkir</div>
              <div className={styles.biaya}>Rp. 70.000</div>
            </div>
            <div className={styles.harga}>
              <div className={styles.wkwk}>Biaya Jasa</div>
              <div className={styles.biaya}>Rp. 10.000</div>
            </div>
            <div className={styles["total-harga"]}>
              <div className={styles.wkwk}>Total Biaya</div>
              <div className={styles.biaya}>Rp. 102.000</div>
            </div>
          </div>
          <button className={styles["btn-beli"]}>Beli Sekarang</button>
        </div>
      </div>
    </div>
  );
};
export default BuyBody;
