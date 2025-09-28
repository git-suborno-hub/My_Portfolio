import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-450px";
  };

  return (
    <div className="navbar">
      <a href="#home" onClick={() => setMenu("home")}>
        <img src={logo} alt="logo" className="logo" />
      </a>
      <i class="fa-solid fa-bars nav-mob-open" onClick={openMenu}></i>

      {/* Menu */}
      <ul className="nav-menu" ref={menuRef}>
        <i class="fa-solid fa-xmark nav-mob-close" onClick={closeMenu}></i>
        <li>
          <a
            href="#home"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active-link" : ""}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setMenu("about")}
            className={menu === "about" ? "active-link" : ""}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#my-skills"
            onClick={() => setMenu("my-skills")}
            className={menu === "my-skills" ? "active-link" : ""}
          >
            My Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setMenu("projects")}
            className={menu === "projects" ? "active-link" : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active-link" : ""}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Connect button */}
      <div className="nav-connect">
        <a href="#contact" onClick={() => setMenu("contact")}>Connect With Me</a>
      </div>
    </div>
  );
};

export default Navbar;
