import bookShelfLogo from "./shelf-logo.png";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignUp() {
  document.title = "Sign Up";
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="box">
      <div className="imageContainer">
        <img src={bookShelfLogo} alt="logo" className="image" />
      </div>
      <h2>Registration</h2>
      <p className="message">For both staff and students</p>
      <form>
        <label>
          Reg No.
          <input
            type="text"
            name="regNo"
            id="regNo"
            placeholder="College Reg. No."
          />
        </label>
        <label>
          College Email ID
          <input
            type="email"
            name="collegeEmail"
            id="collegeEmail"
            placeholder="username@collegename.ac.in"
          />
        </label>
        <label className="label-icon">
          Password
          <input
            className="password-input"
            id="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <div className="eye-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </label>

        <label className="label-icon">
          Confirm Password
          <input
            className="password-input"
            id="password"
            placeholder="Confirm Password"
            type={showPassword ? "text" : "password"}
          />
          <div className="eye-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </label>
        <div className="remember_forget">
          <div className="checkbox">
            <input type="checkbox" name="remember" />
            <span>Remember me</span>
          </div>
          <a href="/">Forget Password?</a>
        </div>
        <input type="submit" value="Sign In" className="button" />
        <div className="user_options">
          <p>
            New user? <a href="#">Register Here</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
