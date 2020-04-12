import React, { useContext } from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const NotFound = () => {
  const userContext = useContext(UserContext);
  console.log(userContext.token);
  return (
    <div className="container-404">
      <div className="content">
        <h1>404</h1>
        <p className="tracking-in-expand">SORRY, WE CAN'T FIND THAT PAGE</p>
        <button>
          <Link to={userContext.loggedIn === true ? "/profile" : "/"}>
            Back Homepage
          </Link>
        </button>
      </div>
    </div>
  );
};
export default NotFound;
