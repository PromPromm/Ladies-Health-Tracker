import React from "react";
import  styles from "./nav.module.css";
import  Logo  from "../../assets/Logo.png"
// import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header>
      <div className={styles.navWrapper}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
              <img src={ Logo } alt="Ladies-Health-Clinic"/>
          </div>
          <ul className={styles.navLists}>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Patient Portal</li>
          </ul>
          <button className={styles.navButton}>Book Appointment</button>
        </nav>
      </div>
    </header>


  )}

  export default Navbar;