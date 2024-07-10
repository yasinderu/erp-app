import React from "react";
import Styles from "./login.module.css";

const Login = () => {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.titleContainer}>
        <div>Login</div>
      </div>
      <br />
      <div className={Styles.inputContainer}>
        <input
          placeholder="Enter your email here"
          className={Styles.inputBox}
        />
      </div>
      <br />
      <div className={Styles.inputContainer}>
        <input
          placeholder="Enter your password here"
          className={Styles.inputBox}
        />
      </div>
      <br />
      <div className={Styles.inputContainer}>
        <input className={Styles.inputButton} type="button" value={"Log in"} />
      </div>
    </div>
  );
};

export default Login;
