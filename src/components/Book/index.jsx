import noImg from "../../assets/no-img.jpg";
import styles from "./book.module.scss";
export const Book = (book) => {
  console.log(book);
  const shortenedTitle = (title) => {
    if (title.length > 14) {
      return title.slice(0, 14) + "...";
    }
    return title;
  };
  const shortedTitle = shortenedTitle(book.book.volumeInfo.title);

  return (
    <>
      {book && (
        <div className={styles.book}>
          <img
            src={book.book.volumeInfo?.imageLinks?.thumbnail || noImg}
            className={styles.cover}
          ></img>
          <h2 className={styles.title}>{shortedTitle}</h2>
        </div>
      )}
    </>
  );
};
