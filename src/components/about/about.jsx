import React from 'react';
import styles from './about.module.css'
import { Icon } from '@iconify/react';

const About = () => {
  return (
    <section>
      <div className={styles.About}>
        <header className={styles.head}>About Us</header>
        <div className={styles.sections}>
          <div className={styles.leftSegment}>
            <p><Icon icon="mdi:clock-time-three-outline" /> Open 24/7</p>
            <p><Icon icon="ic:sharp-mail-outline" /> info@ladyhealthclinic.com</p>
            <p><Icon icon="ic:baseline-phone" /> +2347010714965</p>
          </div>
          <div className={styles.rightSegment}>
          <p>As women, our health can change constantly; from what we eat, to how we sleep, changes in our monthly cycle, mood swings and cravings.That’s why Lady’s Health Clinic exists. We’re ONLY staffed by female consultants, and our minimum appointment is 30minutes. We can refer and prescribe if necessary but most of all we can advise.
          We offer total women's health services and you access all these from the comfort of your home.</p>
          <button className={styles.navButton}>Request an Appointment now <Icon icon="ph:arrow-right-duotone" /> </button>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default About;