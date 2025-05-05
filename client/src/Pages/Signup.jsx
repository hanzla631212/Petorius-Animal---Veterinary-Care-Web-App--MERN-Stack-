import React from 'react';
import './Signup.css';
import founder3 from "../assets/download.png";
function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign up</h2>
        <form>
          <input type="text" placeholder="John Doe" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat your password" />
          <div className="input-wrapper">
  {/* <label className="terms">
    <input type="checkbox" />
    <span>I agree all statements in <a href="#">Terms of service</a></span>
  </label> */}
</div>

          <button type="submit">Register</button>
        </form>
      </div>
      <div className="signup-image">
        <img src= {founder3} alt="desk illustration" />
        <p className="already-member">I am already member</p>
      </div>
    </div>
  );
}

export default Signup;
