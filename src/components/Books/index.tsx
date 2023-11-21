import { Book } from "../Book/index";
import styles from "./books.module.scss";
import { FC } from "react";
import { useAppSelector } from "../../hooks";
export const Books: FC = () => {
  const state = useAppSelector((state) => state.bookList.books);
  const flag = useAppSelector((state) => state.bookList.flag);
  return (
    <>
      {state && !flag ? (
        <div className={styles.books}>
          {state.map((book) => {
            return <Book {...book} key={book.id} />;
          })}
        </div>
      ) : (
        <p className={styles.error}>Not Found</p>
      )}
    </>
  );
};
