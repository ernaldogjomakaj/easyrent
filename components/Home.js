import styles from "./Home.module.css";
import React from "react";

function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.mainDiv}>
        <div className={styles.div}>
          <input type='text' placeholder='Pick up Location' />
          <input type='date' placeholder='Pick up Date' />
          <input type='time' placeholder='Pick up Time' />
        </div>

        <div className={styles.div}>
          <input type='text' placeholder='Drop Off Location' />
          <input type='date' placeholder='Drop Off  Date' />
          <input type='time' placeholder='Drop Off Time' />
        </div>
        <div className={styles.div}>
          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
