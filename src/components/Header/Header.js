import React from "react";
import logo from "../../assets/images/Header.png";
import "./Header.css";

export const Header = () => {
        return(
            <header class="header">
                <img class="header-img" src={logo} />
            </header>
        );
}

export default Header;