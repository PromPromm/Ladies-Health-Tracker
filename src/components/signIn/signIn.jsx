import React from "react";
import  styles from "./signIn.module.css";
import { Link } from "react-router-dom";


const SignIn = () => {
  return (
      <section>
        <div className="container">
          <div className= {styles.wrapper}>
            <header>Patient Portal</header>
            <section className = {styles.info}>
              <p className = {styles.header}>Log in</p>
              <section>
                <form>
                  <div className="input-field">
                    <label>Email Address</label>
                    <input type="email" placeholder="you@email.com"/>
                  </div>
                  <div className="input-field">
                    <label>Password</label>
                    <input type="password" placeholder="********"/>
                  </div>
                </form>
                <button type="submit">Log in</button>
              </section>
              <aside>
                <div className={styles.box}>
                  <hr/>
                  <p className = {styles.new}>I am new here</p>
                  <hr/>
                </div>
                <Link to = '/signUp'>Create Account</Link>
              </aside>
            </section>
          </div>
        </div>
      </section>
  );
};
export default SignIn;
