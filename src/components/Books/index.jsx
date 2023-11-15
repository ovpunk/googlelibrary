import { useSelector } from "react-redux";
import { Book } from "../Book/index";
import styles from "./books.module.scss";
export const Books = () => {
  const state = useSelector((state) => state.bookList.books);
  return (
    <div className={styles.books}>
      {state.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};
