import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <img src={logo} alt="" />
        <hr />
        <p className="footer-bottom">
          © 2025 Suborno Maksuda. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
