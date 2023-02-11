import React from "react";
import  styles from "./signUp.module.css";
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <section>
        <div className="container">
          <div className= {styles.wrapper}>
            <header className={styles.title}>Patient Portal</header>
            <section className = {styles.info}>
              <p className = {styles.header}>Create Account</p>
              <section>
                <form>
                  <div className={styles.inputField}>
                    <label>Full Name</label>
                    <input type="text" placeholder="Full name"/>
                  </div>
                  <div className={styles.inputField}>
                    <label>Email Address</label>
                    <input type="email" placeholder="you@email.com"/>
                  </div>
                  <div className={styles.inputField}>
                    <label>Date Of Birth</label>
                    <input type="number" placeholder="mm/dd/yy"/>
                  </div>
                  <div className={styles.inputField}>
                    <label>Password</label>
                    <input type="password" placeholder="********"/>
                  </div>
                  <div className={styles.inputField}>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="********"/>
                  </div>
                </form>
                <button type="submit">Sign Up</button>
              </section>
              <aside>
                <div>
                  <p>Already have an account?
                    <Link to = '/signIn'>Log in</Link>
                  </p>
                </div>
              </aside>
            </section>
          </div>
        </div>
      </section>
  );
};
export default SignUp;
