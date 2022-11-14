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
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" />

            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" />

            <label for="email">Email:</label>
            <input type="text" id="email" name="email" />

            <label for="password">Password:</label>
            <input type="text" id="passwaord" name="password" />
          </form>
        </section>
      </section>
    </>
  );
};
export default SignUp;
