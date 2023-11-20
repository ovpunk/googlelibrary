import { FC, useState } from "react";
import noImg from "../../assets/no-img.jpg";
import styles from "./book.module.scss";
import { BookModal } from "../BookModal";
import { TBook } from "../../types";
export const Book: FC<TBook> = (props) => {
  const {
    title,
    publishedDate,
    img,
    authors,
    publisher,
    previewLink,
    description,
  } = props;
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
  const shortenedTitle = (title: string) => {
    if (title && title.length > 14) {
      return title.slice(0, 14) + "...";
    }
    return title;
  };
  const shortedTitle = shortenedTitle(title);

  //форматирование даты
  const formatDate = (inputDate: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US", options);
  };

  const formattedDate = formatDate(publishedDate);

  return (
    <>
      {props && (
        <div className={styles.book} onClick={handleOpenModal}>
          <img src={img || noImg} className={styles.cover}></img>
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
            <img src={img || noImg} className={styles.cover}></img>
            <div className={styles.modal__top_info}>
              <h2>{title}</h2>
              <p>{authors ? authors.join(", ") : ""}</p>
              <p>
                {publisher ? publisher : "Not known"}, {formattedDate}
              </p>
              <a href={previewLink}>More</a>
            </div>
          </div>
          <p className={styles.modal__description}>{description}</p>
        </div>
      </BookModal>
    </>
  );
};
