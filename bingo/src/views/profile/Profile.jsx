import React from "react";
import "./Profile.css";
import avatar from "../../images/avatar.svg";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
  return (
    <div className="profile-container">
      {/*LeftNavbar */}
      <LeftNavbar />
      <div id="main">
        {/*TopNavbar */}
        <TopNavbar />
        {/* <!--User Info--> */}
        <div className="user-info">
          <div className="back-button">
            <button>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
          {/* <!--Container user--> */}
          <div className="user-info-container">
            {/* <!--Container's left side--> */}
            <div className="user-info-left">
              <ul>
                <li>
                  <div className="content-user-x">
                    <div className="icon">
                      <i className="fas fa-user-alt"></i>
                    </div>
                    <div className="text-as">
                      <div className="name-title">
                        <p>Nombre</p>
                      </div>
                      <div className="name">
                        <p className="user-info-title">Superadmin</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="content-user-x">
                    <div className="icon">
                      <i className="fas fa-user-friends"></i>
                    </div>
                    <div className="text-as">
                      <div className="name-title">
                        <p>Apellidos</p>
                      </div>
                      <div className="name">
                        <p className="user-info-title">Michael</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="content-user-x">
                    <div className="icon">
                      <i className="fas fa-chevron-left"></i>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="text-as">
                      <div className="name-title">
                        <p>Nombre de usuario</p>
                      </div>
                      <div className="name">
                        <p className="user-info-title">Superadmin</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="content-user-x">
                    <div className="icon">
                      <i className="fas fa-couch"></i>
                    </div>
                    <div className="text-as">
                      <div className="name-title">
                        <p>Rol</p>
                      </div>
                      <div className="name">
                        <p className="user-info-title">Superadmin</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="content-user-x">
                    <div className="icon">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div className="text-as">
                      <div className="name-title">
                        <p>Fecha de creacion</p>
                      </div>
                      <div className="name">
                        <p className="user-info-title">9 jul. 2019</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!--Container's right side--> */}
            <div className="user-info-right">
              <div className="user-avatar">
                <img src={avatar} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* <!--Footer--> */}
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
