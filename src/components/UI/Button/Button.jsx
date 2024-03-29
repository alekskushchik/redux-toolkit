import classes from "./styles.module.scss";
import classNames from "classnames";

export const Button = ({ children, buttonType = "primary", buttonSize = "medium", onClick, ...props }) => {
  return (
    <button
      className={classNames(classes.btn, classes[`btn--${buttonType}`], classes[`btn--${buttonSize}`])}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
