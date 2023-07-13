import { useState } from "react";
import styles from "./styles.module.css";
const Description = ({ desShow, name }) => {
  let objectDes = {
    "Naruto ": "Naruto",
    "Onepiece ": "Onepiece",
    "Demon Slayer": "Demon Slayer",
    "My Hero Academia": "My Hero Academia",
    "Spy x Family": "Spy x Family",
  };

  if (desShow && name === "Naruto") {
    return (
      <div className={styles["des-container"]}>
        <div className={styles["des-text"]}>
          Naruto (ナルト) adalah sebuah serial manga karya Masashi Kishimoto
          yang diadaptasi menjadi serial anime. Manga Naruto bercerita seputar
          kehidupan tokoh utamanya, Naruto Uzumaki, seorang ninja yang
          hiperaktif, periang, dan ambisius yang ingin mewujudkan keinginannya
          untuk mendapatkan gelar Hokage,
        </div>
      </div>
    );
  } else if (desShow && name === "One Piece") {
    return (
      <div className={styles["des-container"]}>
        <div className={styles["des-text"]}>
          One Piece (Jepang: ワンピース, Hepburn: Wan Pīsu) adalah sebuah seri
          manga Jepang yang ditulis dan diilustrasikan oleh Eiichiro Oda. Manga
          ini telah dimuat di majalah Weekly Shōnen Jump milik Shueisha sejak
          tanggal 22 Juli 1997, dan telah dibundel menjadi 105 volume tankōbon
          hingga Maret 2023. Ceritanya mengisahkan petualangan Monkey D. Luffy,
          seorang anak laki-laki yang memiliki kemampuan tubuh elastis
        </div>
      </div>
    );
  } else if (desShow && name === "Demon Slayer") {
    return (
      <div className={styles["des-container"]}>
        <div className={styles["des-text"]}>
          Kimetsu no Yaiba (Jepang: 鬼滅の刃, terj. har. "Korps Pembasmi
          Iblis"[4]), yang diterbitkan di Indonesia dengan judul Demon Slayer:
          Kimetsu no Yaiba, adalah sebuah seri manga Jepang yang ditulis dan
          diilustrasikan oleh Koyoharu Gotōge. Ceritanya mengisahkan tentang
          Tanjiro Kamado, seorang anak laki-laki yang menjadi pembasmi iblis
          setelah keluarganya dibantai oleh iblis dan adik perempuannya yang
          bernama Nezuko diubah menjadi iblis.
        </div>
      </div>
    );
  } else if (desShow && name === "My Hero Academia") {
    return (
      <div className={styles["des-container"]}>
        <div className={styles["des-text"]}>
          Boku no Hero Academia (Jepang: 僕のヒーローアカデミア, Hepburn: Boku
          no Hīrō Akademia), yang diterbitkan di Indonesia dengan judul My Hero
          Academia, adalah sebuah seri manga shōnen Jepang bertema pahlawan
          super yang ditulis dan diilustrasikan oleh Kōhei Horikoshi. Manga ini
          mulai dimuat dalam majalah Weekly Shōnen Jump sejak bulan Juli 2014,
          dan telah dibundel menjadi 37 volume tankōbon hingga bulan Februari
          2023. Ceritanya mengisahkan tentang Izuku Midoriya (nama pahlawan
          Deku).
        </div>
      </div>
    );
  } else if (desShow && name === "Spy x Family") {
    return (
      <div className={styles["des-container"]}>
        <div className={styles["des-text"]}>
          Spy x Family (Jepang: スパイファミリー) adalah sebuah seri manga web
          shōnen Jepang yang ditulis dan diilustrasikan oleh Tatsuya Endō
          (遠藤達哉). Manga ini mulai dimuat pada platform Shōnen Jump+ milik
          Shueisha sejak tanggal 25 Maret 2019, dan telah dibundel menjadi
          sebelas volume tankōbon.
        </div>
      </div>
    );
  }
};
const Card = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img className={styles.books} src={props.image} alt="" />
        <div className={styles.title}>{props.name}</div>
        <div
          onClick={() => {
            setShow(!show);
          }}
          className={styles.des}
        >
          Description
        </div>
      </div>
      <Description desShow={show} name={props.name} />
    </div>
  );
};
export default Card;
