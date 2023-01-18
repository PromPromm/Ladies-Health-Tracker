import React from "react";
//import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <header>Patient Portal</header>
      <section>
        <p>Log In</p>
        <section>
          <form>
            <label>First name:</label>
            <input type="text" id="fname" name="fname" />

            <label>Last name:</label>
            <input type="text" id="lname" name="lname" />

            <label>Email:</label>
            <input type="text" id="email" name="email" />

            <label>Password:</label>
            <input type="text" id="passwaord" name="password" />
          </form>
        </section>
      </section>
    </>
  );
};
export default SignUp;
