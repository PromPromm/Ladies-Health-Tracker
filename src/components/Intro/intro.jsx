import React from "react";
import styles from "./intro.module.css"
import  girls  from "../../assets/girls.svg"


const Introduction = () => {
  return (
    <main className={styles.container}>
      <div className={styles.mainContent}>
        <div>
          <div>
            <p className={styles.left1}>Taking Care of Today's Lady, <span> Cos Your Health Matters.</span></p>
            <p className={styles.left2}>At Lady's Health Clinic we believe in making a difference
              to the lives of women all over the world in everything we do.
            </p>
          </div>
          <button className={styles.navButton}>Book Appointment</button>
        </div>
        <div className={styles.mainImage}>
          <img src={ girls } alt="girls" className={styles.img} />
        </div>
      </div>
    </main>
  )
} 

export default Introduction;