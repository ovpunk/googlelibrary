import { FC, useEffect, useState } from "react";
import styles from "./header.module.scss";
import { booksFetch } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { setBookList, setFlag } from "../../redux/slices/booksSlice";
import { useAppDispatch } from "../../hooks";
import { TBook } from "../../types";
export const Header: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  type TResponce = {
    id: string;
    volumeInfo: {
      imageLinks: {
        thumbnail: string;
      };
      authors: string[];
      description: string;
      previewLink: string;
      publisher: string;
      publishedDate: string;
      title: string;
    };
  };
  const { data, error, refetch } = useQuery({
    queryKey: ["getBooks"],
    queryFn: async () => {
      const res = await booksFetch(value);
      if (res.ok) {
        const responce = await res.json();
        setValue("");
        const books = responce.items;
        const booksForRedux: TBook[] = [];
        if (Array.isArray(books) && books.length) {
          books.forEach((el: TResponce) => {
            const book: TBook = {
              id: el.id,
              title: el.volumeInfo.title,
              img: el.volumeInfo.imageLinks?.thumbnail,
              authors: el.volumeInfo.authors,
              publishedDate: el.volumeInfo.publishedDate,
              publisher: el.volumeInfo.publisher,
              previewLink: el.volumeInfo.previewLink,
              description: el.volumeInfo.description,
            };
            booksForRedux.push(book);
          });
          dispatch(setBookList(booksForRedux));
        } else {
          dispatch(setFlag(true));
        }
        return books;
      } else {
        return [];
      }
    },
    enabled: false,
  });

  useEffect(() => {
    const headerHeight = document.querySelector("header")!.offsetHeight;
    window.scrollBy({
      top: headerHeight,
      left: 0,
      behavior: "smooth",
    });
  }, [data, error]);

  const handleFormSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    refetch();
    dispatch(setFlag(false));
  };

  return (
    <header className={styles.header}>
      <p className={styles.description}>
        A room without books is like a body without a soul
      </p>
      <div className={styles.header__inner}>
        <h1 className={styles.title}>Find Your Book</h1>
        <form className={styles.form}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleFormSubmit(e as any);
              }
            }}
          />
          <button type="submit" onClick={handleFormSubmit}>
            <svg
              className={styles.search_svg}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
};
