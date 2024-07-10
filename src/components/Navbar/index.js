import React from "react";
import Styles from "./index.module.css";

const Navbar = () => {
  return (
    <header className={Styles.topNav}>
      <a href="#home" className={Styles.home}>
        HOME
      </a>
      <ul>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#about">PRICING</a>
        </li>
        <li>
          <a href="#about">CONTACT</a>
        </li>
        <li>
          <a href="/login">
            <button>LOGIN</button>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
