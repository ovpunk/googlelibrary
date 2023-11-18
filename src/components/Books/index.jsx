import { useSelector } from "react-redux";
import { Book } from "../Book/index";
import styles from "./books.module.scss";
export const Books = () => {
  const state = useSelector((state) => state.bookList.books);
  return (
    <>
      {state === undefined ? (
        <p className={styles.error}>Not Found</p>
      ) : (
        <div className={styles.books}>
          {state.map((book) => {
            return <Book key={book.id} book={book} />;
          })}
        </div>
      )}
    </>
  );
};
