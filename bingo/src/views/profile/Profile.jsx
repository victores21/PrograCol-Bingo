import React, { useState, useEffect } from "react";
import "./Profile.css";
import avatar from "../../images/avatar.svg";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProfile = async () => {
      var bearerToken = localStorage.getItem("Bearer Token");
      //Getting the token
      console.log("Bearer from function token", bearerToken);
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearerToken,
          "Content-type": "application/json",
        },
      };

      const req = await fetch(
        "http://186.147.125.7:8080/user-0.0.1-SNAPSHOT/myprofile",
        requestOptions
      );
      const res = await req.json();
      setUser(res.data);
      setLoading(false);
    };
    getProfile();
  }, []);
  console.log(user);
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
            <Link to="/figures">
              <button>
                <i className="fas fa-arrow-left"></i>
              </button>
            </Link>
          </div>
          {/* <!--Container user--> */}
          <div className="user-info-container">
            {/* <!--Container's left side--> */}
            <div className="user-info-left">
              <ul>
                {loading ? (
                  <>
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
                            <p className="user-info-title">...</p>
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
                            <p className="user-info-title">...</p>
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
                            <p className="user-info-title">...</p>
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
                            <p className="user-info-title">...</p>
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
                            <p className="user-info-title">...</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    {" "}
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
                            <p className="user-info-title">{user.names}</p>
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
                            <p className="user-info-title">{user.lastNames}</p>
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
                            <p className="user-info-title">{user.username}</p>
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
                            <p className="user-info-title">
                              {user.rolDTO.name}
                            </p>
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
                            <p className="user-info-title">{user.createdAt}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </>
                )}
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
