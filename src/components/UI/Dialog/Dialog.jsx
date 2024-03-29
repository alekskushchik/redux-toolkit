import { useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./styles.module.scss";

export const DialogModal = ({ children, isOpen, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={classes.modalMask} onClick={closeModal}>
      <dialog className={classes.modal} onClick={(e) => e.stopPropagation()} open>
        {children}
      </dialog>
    </div>,
    document.body
  );
};
