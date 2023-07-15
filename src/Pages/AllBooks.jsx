import { Books, Recommendation } from "../Components/booksBody/index.jsx";
import { KOMIK } from "../Components/homeBody/index.jsx";
import styles from "../Components/booksBody/styles.module.css";
const AllBooks = () => {
  return (
    <div className={styles.viewPerpustakaan}>
      <div className={styles.viewAllContainer}>
        <Recommendation title={"ALL BOOKS"} />
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
      </div>
    </div>
  );
};
export default AllBooks;
