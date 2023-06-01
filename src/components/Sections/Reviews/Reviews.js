import React from "react";
import styles from "./Reviews.module.css";
import appStyles from "../../../App.module.css";
import ali from "../../../assets/images/avatar-ali.png";
import anisha from "../../../assets/images/avatar-anisha.png";
import richard from "../../../assets/images/avatar-richard.png";
import shanai from "../../../assets/images/avatar-shanai.png";
import Button from "../../Button/Button";

const Reviews = () => {
  return (
    <section className={styles.reviewContainer}>
      <h2 className={styles.header}>What they've said</h2>
      <ul className={styles.sliderContainer}>
        <li className={styles.sliderItem}>
          <img src={anisha} alt="Anisha" />
          <h3 className={styles.name}>Anisha Li</h3>
          <p className={appStyles.description}>
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </li>
        <li className={styles.sliderItem}>
          <img src={ali} alt="Ali" />
          <h3 className={styles.name}>Ali Bravo</h3>
          <p className={appStyles.description}>
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </li>
        <li className={styles.sliderItem}>
          <img src={richard} alt="Richard" />
          <h3 className={styles.name}>Richard Watts</h3>
          <p className={appStyles.description}>
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!”
          </p>
        </li>
        <li className={styles.sliderItem}>
          <img src={shanai} alt="Shanai" />
          <h3 className={styles.name}>Shanai Gough</h3>
          <p className={appStyles.description}>
            “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.”
          </p>
        </li>
      </ul>
      <Button name="Get Started" type="orange" />
    </section>
  );
};

export default Reviews;
