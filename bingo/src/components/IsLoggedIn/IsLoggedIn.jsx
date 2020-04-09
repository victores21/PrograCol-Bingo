import React from "react";

export const IsLoggedIn = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};
