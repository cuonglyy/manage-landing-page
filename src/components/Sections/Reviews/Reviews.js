import React from "react";
import styles from "./Reviews.module.css";
import appStyles from "../../../App.module.css";

const Reviews = () => {
  return (
    <section className={styles.reviewContainer}>
      <h2 className={styles.header}>What they've said</h2>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <div className={styles.sliderItem}></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
