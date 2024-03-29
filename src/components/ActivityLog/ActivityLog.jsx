import React from "react";
import classes from "./ActivityLog.module.scss";

export const ActivityLog = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={classes.activityLogMask}>
      <div className={classes.activityLog}>
        <div className={classes.activityLogHeader}>{title}</div>
        <div className={classes.activityLogContent}>
          <section className={classes.scoreTypesSection}>
            <div className={classes.scoreTypeItemContainer}>
              <select>
                <option>For Time</option>
                <option>For Load</option>
                <option>For Quality</option>
                <option>EMOM</option>
                <option>Tabata</option>
              </select>
            </div>
            <div className={classes.scoreTypeItemContainer}>
              <select>
                <option>For Time</option>
                <option>For Load</option>
                <option>For Quality</option>
                <option>EMOM</option>
                <option>Tabata</option>
              </select>
            </div>
          </section>
          <textarea />
        </div>
      </div>
    </div>
  );
};
