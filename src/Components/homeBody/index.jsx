import Carousels from "../Carousels/Carousels";
import styles from "./styles.module.css";
import Card from "../BooksCard";
import PromotionsCard from "../Promotions";
import b1 from "./Media/book1.webp";
import b2 from "./Media/book2.webp";
import b3 from "./Media/book3.webp";
import b4 from "./Media/book4.webp";
import b5 from "./Media/book5.webp";
import img1 from "./Media/image.jpg";
import img2 from "./Media/kobo-ebook-winter-read-image.jpg";
import img3 from "./Media/promotion-image_a.jpg";
import { useState } from "react";

const KOMIK = [
  {
    name: "Naruto",
    description:
      "Naruto (ナルト) adalah sebuah serial manga karya Masashi Kishimoto yang diadaptasi menjadi serial anime. Manga Naruto bercerita seputar kehidupan tokoh utamanya, Naruto Uzumaki, seorang ninja yang hiperaktif, periang, dan ambisius yang ingin mewujudkan keinginannya untuk mendapatkan gelar Hokage,",
    image: b1,
  },
  {
    name: "One Piece",
    description:
      "One Piece (Jepang: ワンピース, Hepburn: Wan Pīsu) adalah sebuah seri manga Jepang yang ditulis dan diilustrasikan oleh Eiichiro Oda. Manga ini telah dimuat di majalah Weekly Shōnen Jump milik Shueisha sejak tanggal 22 Juli 1997, dan telah dibundel menjadi 105 volume tankōbon hingga Maret 2023. Ceritanya mengisahkan petualangan Monkey D. Luffy.",
    image: b2,
  },
  {
    name: "Demon Slayer",
    description:
      'Kimetsu no Yaiba (Jepang: 鬼滅の刃, terj. har. "Korps Pembasmi Iblis"[4]), yang diterbitkan di Indonesia dengan judul Demon Slayer: Kimetsu no Yaiba, adalah sebuah seri manga Jepang yang ditulis dan diilustrasikan oleh Koyoharu Gotōge. Ceritanya mengisahkan tentang Tanjiro Kamado, seorang anak laki-laki yang menjadi pembasmi iblis .',
    image: b3,
  },
  {
    name: "My Hero Academia",
    description:
      "Boku no Hero Academia (Jepang: 僕のヒーローアカデミア, Hepburn: Boku no Hīrō Akademia), yang diterbitkan di Indonesia dengan judul My Hero Academia, adalah sebuah seri manga shōnen Jepang bertema pahlawan super yang ditulis dan diilustrasikan oleh Kōhei Horikoshi. Manga ini mulai dimuat dalam majalah Weekly Shōnen Jump sejak bulan Juli 2014.",
    image: b4,
  },
  {
    name: "Spy x Family",
    description:
      "Spy x Family (Jepang: スパイファミリー) adalah sebuah seri manga web shōnen Jepang yang ditulis dan diilustrasikan oleh Tatsuya Endō (遠藤達哉). Manga ini mulai dimuat pada platform Shōnen Jump+ milik Shueisha sejak tanggal 25 Maret 2019, dan telah dibundel menjadi sebelas volume tankōbon.",
    image: b5,
  },
];
const promo = [
  {
    image: img1,
    text: "Best of the Year So Far\nYour Chance to win",
  },
  {
    image: img2,
    text: "Winter Reads\nGreate eBooks to cosy up With",
  },
  {
    image: img3,
    text: "Get Free Shipping\nAdd this title and get FREE SHIPPING on your\n whole order",
  },
];
const HomeBody = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <div className={styles.container}>
      <Carousels />
      <div>
        <div className={styles["now-trending"]}>Top 5 Trending</div>
        <div className={styles.collections}>
          {KOMIK.map((item, index) => (
            <Card
              image={item.image}
              name={item.name}
              index={index}
              description={item.description}
              selected={selectedIndex === index}
              toggleDescription={() => {
                if (index === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(index);
                }
              }}
              key={index.toString()}
            />
          ))}
        </div>
      </div>
      <div className={styles["now-trending"]}>Current Promotions</div>
      <div className={styles.pcard}>
        {promo.map((item) => (
          <PromotionsCard image={item.image} text={item.text} />
        ))}
      </div>
    </div>
  );
};
export default HomeBody;
export { KOMIK };
