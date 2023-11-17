import { useState } from "react";
import noImg from "../../assets/no-img.jpg";
import styles from "./book.module.scss";
import { BookModal } from "../BookModal";
export const Book = (book) => {
  const [active, setActive] = useState(false);
  const [openContent, setOpenContent] = useState(false);

  //откртыие модального окна
  const handleOpenModal = () => {
    document.body.classList.add("bodyModalOpen");
    setTimeout(() => {
      setOpenContent(true);
    }, 100);
    setActive(true);
  };

  //сокращение названия книги
  const shortenedTitle = (title) => {
    if (title.length > 14) {
      return title.slice(0, 14) + "...";
    }
    return title;
  };
  const shortedTitle = shortenedTitle(book.book.volumeInfo.title);

  //форматирование даты
  const formatDate = (inputDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US", options);
  };
  const formattedDate = formatDate(book.book.volumeInfo.publishedDate);

  return (
    <>
      {book && (
        <div className={styles.book} onClick={handleOpenModal}>
          <img
            src={book.book.volumeInfo?.imageLinks?.thumbnail || noImg}
            className={styles.cover}
          ></img>
          <h2 className={styles.title}>{shortedTitle}</h2>
        </div>
      )}
      <BookModal
        active={active}
        setActive={setActive}
        openContent={openContent}
        setOpenContent={setOpenContent}
      >
        <div className={styles.modal__content}>
          <div className={styles.modal__content_top}>
            <img
              src={book.book.volumeInfo?.imageLinks?.thumbnail || noImg}
              className={styles.cover}
            ></img>
            <div className={styles.modal__top_info}>
              <h2>{book.book.volumeInfo.title}</h2>
              <p>
                {book.book.volumeInfo.authors
                  ? book.book.volumeInfo.authors.join(", ")
                  : ""}
              </p>
              <p>
                {book.book.volumeInfo.publisher
                  ? book.book.volumeInfo.publisher
                  : "Not known"}
                , {formattedDate}
              </p>
              <a href={book.book.volumeInfo.previewLink}>More</a>
            </div>
          </div>
          <p className={styles.modal__description}>
            {book.book.volumeInfo.description}
          </p>
        </div>
      </BookModal>
    </>
  );
};
