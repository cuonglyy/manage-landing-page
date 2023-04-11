import React from "react";
import styles from "./Heading.module.css";
import Button from "../../Button/Button";
import appStyles from "../../../App.module.css";
import hero from "../../../assets/illustration-intro.svg";
const Heading = () => {
  return (
    <section className={styles.headingContainer}>
      <div className={styles.headingLeft}>
        <h1 className={styles.header}>
          Bring everyone together to build better products.
        </h1>
        <p className={`${appStyles.description} ${styles.description}`}>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button name="Get Started" type="orange" />
      </div>
      <img
        className={styles.headingRight}
        src={hero}
        alt="Customizable dashboard depicting total and daily increase towards company goals"
      ></img>
    </section>
  );
};

export default Heading;
