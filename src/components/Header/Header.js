import React from "react";
import logo from "../../assets/images/Header.png";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/">
      <header class="header">
        <img class="header-img" src={logo} alt="RainAid" />
      </header>
    </Link>
  );
};

export default Header;
