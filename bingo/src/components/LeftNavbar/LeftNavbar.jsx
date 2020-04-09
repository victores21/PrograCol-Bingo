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
    <div class="left-navbar" id="left-navbar">
      <a
        href="javascript:void(0)"
        class="closebtn"
        onClick={() => closeNavHandler()}
      >
        &times;
      </a>
      <div class="logo">
        <img src={logo} alt="" />
      </div>
      <div class="navbar-links">
        <ul>
          <li id="super-admin-span">
            <a href="">
              <span>Super Admin</span>
            </a>
          </li>
          <li>
            <Link to="/profile">
              <i class="fas fa-address-book"></i>Mi Perfil
            </Link>
          </li>
          <li id="figures">
            <Link to="/figures">
              <i class="fas fa-th"></i>Figuras y Modalidades
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LeftNavbar;
