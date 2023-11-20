import { FC, ReactNode, useRef } from "react";
import styles from "./bookmodal.module.scss";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

interface IModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  openContent: boolean;
  setOpenContent: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

export const BookModal: FC<IModalProps> = ({
  active,
  setActive,
  openContent,
  setOpenContent,
  children,
}) => {
  const nodeRef = useRef(null);
  const handleCloseModal = () => {
    setOpenContent(false);
    setActive(false);
    document.body.classList.remove("bodyModalOpen");
  };

  return (
    <CSSTransition
      in={active}
      timeout={400}
      nodeRef={nodeRef}
      classNames={{
        enter: styles["modal-enter"],
        enterActive: styles["modal-enter-active"],
        exit: styles["modal-exit"],
        exitActive: styles["modal-exit-active"],
      }}
      unmountOnExit
    >
      <div ref={nodeRef} className={styles.modal} onClick={handleCloseModal}>
        <div
          className={
            active && openContent
              ? classNames(styles.content_active, styles.content)
              : styles.content
          }
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            onClick={handleCloseModal}
            className={styles.close}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="#000"
            />
          </svg>
          <div className={styles.children}>{children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};
