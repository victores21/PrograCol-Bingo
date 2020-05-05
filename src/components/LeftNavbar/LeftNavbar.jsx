import React from "react";
import "./LeftNavbar.css";
import logo from "../../images/bingo-logo.png";
import { Link } from "react-router-dom";
const LeftNavbar = () => {
  const closeNavHandler = () => {
    document.getElementById("left-navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };
  return (
    <div className="left-navbar" id="left-navbar">
      <a
        href="javascript:void(0)"
        className="closebtn"
        onClick={() => closeNavHandler()}
      >
        &times;
      </a>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-links">
        <ul>
          <li id="super-admin-span">
            <span>Super Admin</span>
          </li>
          <li>
            <Link to="/profile">
              <i className="fas fa-address-book"></i>Mi Perfil
            </Link>
          </li>
          <li id="figures">
            <Link to="/figures">
              <i className="fas fa-th"></i>Figuras y Modalidades
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LeftNavbar;
