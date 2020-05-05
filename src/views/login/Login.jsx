import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import logo from "../../images/bingo-logo.png";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AuthLogin } from "../../api";

const Login = () => {
  //context
  const userContext = useContext(UserContext);
  console.log(userContext);
  //Form data hook
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    //Login Function
    AuthLogin(data.email, data.password).then((data) => {
      const token = data.Authorization;
      localStorage.setItem("Token", token);
      userContext.LoginHandler(token);
      console.log(data);
    });
  };

  //Hook that get the data and put it into the hook data
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  //If logged In go to Profile View
  if (userContext.loggedIn) {
    return (
      <>
        <Redirect to="/profile" />
      </>
    );
  }

  return (
    <div className="container-login">
      <div className="login-form-container">
        {/*Login Image*/}
        <div className="login-image">
          <img src={logo} alt="" />
        </div>
        {/*Login Form-*/}
        <div className="login-form">
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              type="text"
              name="email"
              id="text"
              placeholder="Correo"
              onChange={(e) => handleInputChange(e)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              onChange={(e) => handleInputChange(e)}
            />
            <button id="login-button">INICIAR SESIÓN</button>
            <p id="login-version">Version: 23 de Febrero 2020</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
