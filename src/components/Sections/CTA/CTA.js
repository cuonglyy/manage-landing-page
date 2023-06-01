import React from "react";
import styles from "./CTA.module.css";
import Button from "../../Button/Button"

const CTA = () => {
  return (
    <section className={styles.ctaContainer}>
      <h2 className="header">Simplify how your team works today.</h2>
      <Button name='Get Started' type='white'/>
    </section>
  );
};

export default CTA;
