import styles from "./styles.module.css";
import { useNavigate, Outlet } from "react-router-dom";
import i1 from "./Media/ikon1.png";
import i2 from "./Media/ikon2.png";
import i3 from "./Media/ikon3.png";
import i4 from "./Media/ikon4.png";
import i5 from "./Media/ikon5.png";
import i6 from "./Media/ikon6.png";
import i7 from "./Media/ikon7.png";
import i8 from "./Media/ikon8.png";
import i9 from "./Media/ikon9.png";
import { KOMIK } from "../homeBody/index.jsx";
import { useState } from "react";
const BooksCategory = (props) => {
  return (
    <>
      <div className={styles.kartu}>
        <div className={styles.depan}>
          <img className={styles.ikon} src={props.ikon} alt="" />
          {props.nama}
        </div>
        <div className={styles.balik}>
          <div className={styles.namagenre}>{props.nama}</div>
          <div className={styles.deskripsi}>
            Jelajah semua genre dari koleksi Pesbuk yang lengkap dari seluruh
            dunia.
          </div>
          <div className={styles.beli}>Go!</div>
        </div>
      </div>
    </>
  );
};
const Books = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => {
          navigate(`/books/${encodeURI(props.nama)}`);
        }}
        className={styles.sinopsis}
      >
        <div className={styles.cover}>
          <img className={styles.gambar} src={props.img} />
        </div>
        <div className={styles.infobuku}>
          <div className={styles.judulbuku}>{props.nama}</div>
          <div className={styles.subtitle}>J.K. Rowling</div>
        </div>
        <div className={styles.keterangan}>
          <div className={styles.text}>{props.des}</div>
          <div className={styles.tombolbeli}>
            <div className={styles.beli}>Buy</div>
          </div>
        </div>
      </div>
    </>
  );
};
const Recommendation = (props) => {
  return (
    <>
      <div className={styles.rekomendasi}>
        <div className={styles.koleksi}>~{props.title}~</div>
        <div className={styles.pisah}> </div>
        <div className={styles.beli}>More</div>
      </div>
    </>
  );
};
const BooksBody = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.perpustakaan}>
        <div className={styles.koleksi}>CATEGORY</div>
        <div className={styles.wrapper}>
          <BooksCategory ikon={i1} nama={"ALL CATEGORY"} />
          <BooksCategory ikon={i2} nama={"COMEDY"} />
          <BooksCategory ikon={i3} nama={"FANTASY"} />
          <BooksCategory ikon={i4} nama={"DRAMA"} />
          <BooksCategory ikon={i5} nama={"HORROR"} />
          <BooksCategory ikon={i6} nama={"MYSTERY"} />
          <BooksCategory ikon={i7} nama={"NON-FICTION"} />
          <BooksCategory ikon={i8} nama={"COMIC"} />
          <BooksCategory ikon={i9} nama={"PHOTOBOOKS"} />
        </div>

        <Recommendation title={"YOU MIGHT LIKE"} />
        <div className={styles.container}>
          {KOMIK.map((item, index) => (
            <Books
              img={item.image}
              nama={item.name}
              des={item.description}
              key={index.toString()}
              index={index}
            />
          ))}
        </div>
        <Recommendation title={"CLASSIC COLLECTION"} />
        <div className={styles.container}>
          {KOMIK.map((item, index) => (
            <Books
              img={item.image}
              nama={item.name}
              des={item.description}
              key={index.toString()}
              index={index}
            />
          ))}
        </div>
        <Recommendation title={"HIDDEN GEM COLLECTION"} />
        <div className={styles.container}>
          {KOMIK.map((item, index) => (
            <Books
              img={item.image}
              nama={item.name}
              des={item.description}
              key={index.toString()}
              index={index}
            />
          ))}
        </div>
        <div className={styles.viewContainer}>
          <div
            onClick={() => {
              setShow(!show);
              show ? navigate("/books/allbooks") : navigate("/books");
            }}
            className={styles.viewAll}
          >
            View All
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default BooksBody;
export { Books, Recommendation };
