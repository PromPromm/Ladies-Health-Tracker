import React from "react";
import styles from "./services.module.css"
import  logo  from "../../assets/logo.jpg"
import  Logo  from "../../assets/Logo.png"
import  Bis  from "../../assets/Bis.jpg"
import  Mar  from "../../assets/Mar.png"
import  Ife  from "../../assets/Ife.png"
import  Nurse from "../../assets/Nurse.jpg"
import { Icon } from '@iconify/react';


const Services = () => {
  return (
    <section>
      <div className={styles.services}>
        <header className={styles.title}>Services</header>
        <p>We offer total women's health services and you access all these from the comfort of your home.</p>
        <div  className={styles.subSections}>
          <div className={styles.subContent}>
            <div className={styles.top}>
              <img src={ logo } alt="lady" />
              <h3>Sexual Health</h3>
            </div>
            <p>We provide discreet & confidential screening, specialist advice, treatment and ongoing support for STDs</p>
          </div>
          <div className={styles.subContent}>
            <div className={styles.top}>
              <img src={ logo } alt="lady" />
              <h3>Family Planning</h3>
            </div>
            <p>We are experts in all areas of contraception and family planning advice. From natural family planning through to coil and implant fitting or removal.</p>
          </div>
          <div className={styles.subContent}>
            <div className={styles.top}>
              <img src={ logo } alt="lady" />
              <h3>Menopause</h3>
            </div>
            <p>Many women suffer unpleasant or distressing symptoms. Our menopause specialists are experts in both conventional HRT.</p>
          </div>
          <div className={styles.subContent}>
            <div className={styles.top}>
              <img src={ logo } alt="lady" />
              <h3>Menstrual Health</h3>
            </div>
            <p>Expert care and treatments for menstrual pain, guidance in cycle tracking.</p>
          </div>
          <div className={styles.subContent}>
            <div className={styles.top}>
              <img src={ logo } alt="lady" />
              <h3>Rejuvenation</h3>
            </div>
            <p>Your body holds the key to your own rejuvenation. Learn how to control it with our latest treatments.</p>
          </div>
          <div className={styles.subContent}>
            <div className={styles.top}>
              <img src={ logo } alt="lady" />
              <h3>Nutrition</h3>
            </div>
            <p>We can assist you to adapt your diet to achieve optimal health benefits at all stages of your life.</p>
          </div>
          <div className={styles.subContent}>
            <div className={styles.top}>
              <img src={ logo } alt="lady" />
              <h3>Obstetrics</h3>
            </div>
            <p>All the care and service you need during your pregnancy - Antenatal and postnatal services.</p>
          </div>
          <div className={styles.subContent}>
            <div className={styles.top}>
              <img src={ logo } alt="lady" />
              <h3>Infertility</h3>
            </div>
            <p>Expert care and treatments to increase your chances of getting pregnant.</p>
          </div>
          <div className={styles.subContent}>
            <div className={styles.top}>
              <img src={ logo } alt="lady" />
              <h3>Cancer Screening</h3>
            </div>
            <p>Early detection saves lives. We assist in screening for breast and cervical cancers, refer for adequate care & treatment</p>
          </div>
        </div>
        <div className={styles.about_Section2_container}>
          <h3>How Lady's Health Clinic Works</h3>
          <div className={styles.about_Section2_content}>
            <div className={styles.about_mini}>
              <div className={styles.miniIcon}><Icon icon="ri:nurse-line" /></div>
              <p className={styles.p_title}>Book A Consultant</p>
              <p>Schedule an appointment with our specialists
                 and consultants at your convenience.</p>
            </div>
            <div className={styles.about_mini}>
              <div className={styles.miniIcon}><Icon icon="teenyicons:headset-outline" /></div>
              <p className={styles.p_title}>Connect via Teams</p>
              <p>Speak with your chosen consultant via Microsoft Teams for a consultation session.</p>
            </div>
            <div className={styles.about_mini}>
              <div className={styles.miniIcon}><Icon icon="uil:stethoscope" /></div>
              <p className={styles.p_title}>Stay healthy!</p>
              <p>Get treated, pick up prescriptions from partner pharmacies 
                nationwide, and screening from partner labs.</p>
            </div>
          </div>
        </div>
        <div className={styles.about_Section2_container}>
          <h3>Real People, Real Stories</h3>
          <div className={styles.about_Section2_content}>
            <div className={styles.about_icon}><Icon icon="mdi:chevron-left" /></div>
            <div className={styles.stories}>
              <div><img src={ Bis } alt="lady" /></div>
              <p className={styles.p_title}>Bisola, 32</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor est erat 
                sed amet in adipiscing felis. Cursus a praesent semper</p>
            </div>
            <div className={styles.stories}>
              <div><img src={ Mar } alt="lady" /></div>
              <p className={styles.p_title}>Maryam, 29</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor est erat sed amet in adipiscing felis. Cursus a praesent semper</p>
            </div>
            <div className={styles.stories}>
              <div><img src={ Ife } alt="lady" /></div>
              <p className={styles.p_title}>Ifeyinwa, 30</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor est erat sed amet in adipiscing felis. Cursus a praesent semper</p>
            </div>
            <div><Icon icon="mdi:chevron-right" /></div>
          </div>
        </div>
        <div className={styles.pricing}>
          <h3>Our Pricing Plans</h3>
          <p>Choose a package that fits you</p>
          <div className={styles.plans}>
            <div className={styles.basic}>
              <p>Basic Plan</p>
              <p><Icon icon="mdi:naira" />10, 000</p>
              <p>Cost is inclusive of consultation fee and medical bill</p>
              <p><Icon icon="material-symbols:check" />30 minutes consultation</p>
              <p><Icon icon="material-symbols:check" />1 video call schedule</p>
              <p><Icon icon="material-symbols:check" />Phone calls follow up</p>
              <p><Icon icon="material-symbols:check" />Once weekly follow up</p>              <button className={styles.navButton}>Book Appointment</button>
            </div>
            <div className={styles.basic}>
              <p>Mega Plan</p>
              <p><Icon icon="mdi:naira" />40, 000</p>
              <p>Cost is inclusive of consultation fee and medical bill</p>
              <p><Icon icon="material-symbols:check" />2 hours consultation</p>
              <p><Icon icon="material-symbols:check" />4 video calls schedule</p>
              <p><Icon icon="material-symbols:check" />Phone calls follow up</p>
              <p><Icon icon="material-symbols:check" />Twice monthly follow up</p>
              <p><Icon icon="material-symbols:check" />Tests and screening</p>
              <button className={styles.navButton}>Book Appointment</button>
            </div>
          </div>
        </div>
        <div className={styles.actionCall}>
          <div className={styles.action}>
            <p>Schedule your appointment at Lady's health Clinic today!</p>
            <button className={styles.actionCall_Button}>Book Appointment</button>
          </div>
          <div><img src={ Nurse } alt="lady" /></div>
        </div>
      </div>
      <footer>
        <div className={styles.contacts}>
          {/* <div> */}
            <p>Contact</p>
            <p><Icon icon="ic:sharp-mail-outline" />info@ladyhealthclinic.com</p>
            <p><Icon icon="ic:baseline-phone" /> +234 7010714965</p>
          </div>
          <div className={styles.copy}><Icon icon="fa6-regular:copyright" /> Copyright 2023</div>
          <div>
          <div><img src={ Logo } alt="logo" /></div>
            <div className={styles.socials}>
              <Icon icon="uiw:facebook" />
              <Icon icon="teenyicons:instagram-solid" />
              <Icon icon="bi:twitter" />
            </div>
          </div>
        {/* </div> */}
      </footer>
    </section>
  )
}

export default Services;