import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });
  const [token, setToken] = useState(localStorage.getItem("Bearer Token"));

  const [loggedIn, setLoggedIn] = useState(false);

  const LoginHandler = (token, name, lastName) => {
    setToken(token);
    setLoggedIn(true);
    localStorage.setItem("Bearer Token", token);
    setUserData({
      name,
      lastName,
    });
  };
  const LogOutHandler = () => {
    localStorage.removeItem("Bearer Token");
    setLoggedIn(false);
    setToken(null);
  };

  return (
    <UserContext.Provider
      value={{ LoginHandler, token, loggedIn, LogOutHandler, userData }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
