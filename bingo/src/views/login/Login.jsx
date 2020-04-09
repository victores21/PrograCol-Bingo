import React from "react";
import "./Login.css";
import logo from "../../images/bingo-logo.png";
const Login = () => {
  return (
    <div className="container-login">
      <div className="login-form-container">
        {/*Login Image*/}
        <div className="login-image">
          <img src={logo} alt="" />
        </div>
        {/*Login Form-*/}
        <div className="login-form">
          <form action="#">
            <input type="email" name="email" id="email" placeholder="Correo" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
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
