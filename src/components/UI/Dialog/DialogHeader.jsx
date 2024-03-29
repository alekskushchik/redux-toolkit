import classes from "./styles.module.scss";
import CloseIcon from "@assets/icons/close.svg?react";

export const DialogHeader = ({ children, closeModal }) => {
  return (
    <div className={classes.modalHeader}>
      <span className={classes.modalTitle}>{children}</span>
      <CloseIcon className={classes.closeBtn} onClick={closeModal} />
    </div>
  );
};
