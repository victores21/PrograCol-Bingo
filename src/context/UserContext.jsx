import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });
  const [token, setToken] = useState(localStorage.getItem("Bearer Token"));

  const [loggedIn, setLoggedIn] = useState(false);

  const getUserData = (name, lastName) => {
    setUserData({
      name,
      lastName,
    });
  };

  //Funcion que rescata todo eso del login
  const LoginHandler = (token) => {
    setToken(token);
    setLoggedIn(true);
  };

  //Funcion para hacer logout
  const LogOutHandler = () => {
    setLoggedIn(false);
    setToken(null);
    localStorage.removeItem("Token");
  };

  return (
    <UserContext.Provider
      value={{
        LoginHandler,
        token,
        loggedIn,
        LogOutHandler,
        getUserData,
        userData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
