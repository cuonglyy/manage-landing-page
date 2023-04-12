import React from "react";
import styles from "./Features.module.css";
import appStyles from "../../../App.module.css";

const Features = () => {
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.featuresLeft}>
        <h2 className={styles.header}>What's different about Manage?</h2>
        <p className={`${appStyles.description} ${styles.description}`}>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className={styles.featuresRight}>
        <div className={styles.feature}>
          <p className={styles.num}></p>
          <h3 className={styles.feature__header}>
            Track company-wide progress
          </h3>
          <p
            className={`${appStyles.description} ${styles.feature__description}`}
          >
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className={styles.feature}>
          <p className={styles.num}></p>
          <h3 className={styles.feature__header}>Advanced built-in reports</h3>
          <p
            className={`${appStyles.description} ${styles.feature__description}`}
          >
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className={styles.feature}>
          <p className={styles.num}></p>
          <h3 className={styles.feature__header}>
            Everything you need in one place
          </h3>
          <p
            className={`${appStyles.description} ${styles.feature__description}`}
          >
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
