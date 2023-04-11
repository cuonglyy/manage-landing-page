import React from "react";
import styles from "./Features.module.css";
import appStyles from "../../../App.module.css";

const Features = () => {
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.featuresLeft}>
        <h2 className={styles.header}>What's different about Manage?</h2>
        <p className={appStyles.description}>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className={styles.featuresRight}>
        
      </div>
    </section>
  );
};

export default Features;
