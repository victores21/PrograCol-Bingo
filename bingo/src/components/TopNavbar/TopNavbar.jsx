import React from "react";
import "./TopNavbar.css";

const TopNavbar = () => {
  //Open LeftNavbarHandler
  const openNavHandler = () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      console.log("Hello");
      document.getElementById("left-navbar").style.width = "100%";
      document.getElementById("main").style.marginLeft = "0";
    } else {
      document.getElementById("left-navbar").style.width = "300px";
      document.getElementById("main").style.marginLeft = "300px";
    }
  };
  const mobileMenuOpen = () => {
    document.getElementById("gmDropdown").classList.toggle("show");
  };

  return (
    <div className="top-navbar">
      <div className="hamburguer">
        <i className="fas fa-bars openbtn" onClick={() => openNavHandler()}></i>
      </div>
      <div className="title-top-navbar">
        <p>Sala Verano 22</p>
      </div>
      <div className="user-icon">
        {/* <!--Dropdown--> */}
        <div className="simplemenu">
          <i className="fas fa-user-alt" onClick={() => mobileMenuOpen()}></i>
          <ul id="gmDropdown" className="dropdown-content">
            <li id="dropdown-name">Superadmin, Michael</li>
            <hr />
            <li>
              <a href="#home">
                <i className="fas fa-id-badge"></i> Perfil
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="fas fa-sign-out-alt"></i> Cerrar Sesion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
