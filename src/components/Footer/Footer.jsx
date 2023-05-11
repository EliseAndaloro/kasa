
import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/logoFooter.png";

function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt="logo pied de page en noir" />
            <p>© 2022 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;