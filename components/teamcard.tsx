import React from "react";
import styles from "./teamcard.module.css"

export default function TeamCard(){
  return(
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <h3>Anthony K. S. Wortsem</h3>
        <p>Founder & CEO</p>
      </div>
    </div>
  );
};