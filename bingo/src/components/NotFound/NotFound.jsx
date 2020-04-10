import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="container-404">
      <div class="content">
        <h1>404</h1>
        <p className="tracking-in-expand">SORRY, WE CAN'T FIND THAT PAGE</p>
        <button>
          <Link to="/">Back Homepage</Link>
        </button>
      </div>
    </div>
  );
};
export default NotFound;
