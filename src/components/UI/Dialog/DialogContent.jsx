import classes from "./styles.module.scss";

export const DialogContent = ({ children }) => {
  return <div className={classes.modalContent}>{children}</div>;
};
