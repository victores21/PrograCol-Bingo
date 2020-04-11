import React, { useState, useEffect } from "react";
import "./Login.css";
import logo from "../../images/bingo-logo.png";
import { Redirect } from "react-router-dom";

const Login = () => {
  //Form data hook
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [LoggedIn, setLoggedIn] = useState(false);
  const [Token, setToken] = useState();

  //Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const AuthLogin = async () => {
      try {
        //Query
        var raw = `{\n	\"username\": \"${data.email}\",\n	\"password\": \"${data.password}\"\n}`;

        //Header
        var requestOptions = {
          method: "POST",
          body: raw,
          redirect: "follow",
          withCredentials: true,
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
        };

        //Fetching URL
        const req = await fetch(
          "http://staging.bingored.co:8080/userweb-0.0.1-SNAPSHOT/auth",
          requestOptions
        );
        const res = await req.json();
        console.log(await "Res", res);
        //Token Const
        console.log(res);
        setToken(res.Authorization);
        setLoggedIn(true);

        //Putting the Token in Localstorage
        localStorage.setItem("Bearer Token", res.Authorization);
      } catch (error) {
        console.log(error);
        setLoggedIn(false);
      }
    };
    AuthLogin();
  };

  //Hook that get the data and put it into the hook data
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  //If logged In go to Profile View
  if (LoggedIn || localStorage.getItem("Bearer Token")) {
    return <Redirect to="/profile" />;
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
