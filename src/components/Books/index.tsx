import { Book } from "../Book/index";
import styles from "./books.module.scss";
import { FC } from "react";
import { useAppSelector } from "../../hooks";
export const Books: FC = () => {
  const state = useAppSelector((state) => state.bookList.books);
  console.log("state", state);
  return (
    <>
      {state === undefined ? (
        <p className={styles.error}>Not Found</p>
      ) : (
        <div className={styles.books}>
          {state.map((book) => {
            return <Book {...book} key={book.id} />;
          })}
        </div>
      )}
    </>
  );
};
