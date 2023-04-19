import React from "react";
import styles from "./Reviews.module.css";
import appStyles from "../../../App.module.css";
import ali from "../../../assets/images/avatar-ali.png";
import anisha from "../../../assets/images/avatar-anisha.png";
import richard from "../../../assets/images/avatar-richard.png";
import shanai from "../../../assets/images/avatar-shanai.png";

const Reviews = () => {
  return (
    <section className={styles.reviewContainer}>
      <h2 className={styles.header}>What they've said</h2>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <div className={styles.sliderItem}>
            <img src={anisha} alt="Anisha" />
            <h3 className={styles.name}>Anisha Li</h3>
          </div>
          <div className={styles.sliderItem}>
            <img src={ali} alt="Ali" />
            <h3 className={styles.name}>Ali Bravo</h3>
          </div>
          <div className={styles.sliderItem}>
            <img src={richard} alt="Richard" />
            <h3 className={styles.name}>Richard Watts</h3>
          </div>
          <div className={styles.sliderItem}>
            <img src={shanai} alt="Shanai" />
            <h3 className={styles.name}>Shanai Gough</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
