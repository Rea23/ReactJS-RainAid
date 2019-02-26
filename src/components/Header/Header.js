import React from "react";
import logo from "../../assets/images/Header.png";

export const Header = () => {
        return(
            <header className="header">
                <img className="header-img" src={logo} />
            </header>
        );
}

export default Header;