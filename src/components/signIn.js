import React from "react";
import "../index.css";
//import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <>
      <div className="wrapper">
        <header>Patient Portal</header>
        <section className = "signin-info">
          <p className = "header-p">Log in</p>
          <section>
            <form>
              <label>Email Address</label><br />
              <input type="email" placeholder ="Email" /><br />

              <label>Password</label><br />
              <input type="password" placeholder = "********" />
            </form>
            {/* <Link to="#"> Forgot Password?</Link> */}
            <button type="submit">Log in</button>
          </section>
          <aside>
            <hr />
            <p className = "new-here">I am new here</p>
            <p className = "create">Create Account</p>
          </aside>
        </section>
      </div>
    </>
  );
};
export default SignIn;
