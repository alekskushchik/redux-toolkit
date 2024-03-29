import classes from "./styles.module.scss";

export const DialogFooter = ({ children }) => {
  return <div className={classes.modalFooter}>{children}</div>;
};
