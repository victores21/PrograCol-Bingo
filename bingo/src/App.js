import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FiguresList from "./views/figuresList/FiguresList";

function App() {
  return <FiguresList />;
}

export default App;
/* var raw = '{\n	"username": "01",\n	"password": "1234"\n}';

      var requestOptions = {
        method: "POST",
        body: raw,
        redirect: "follow",
      };
      const req = await fetch(
        "http://186.147.125.7:8080/user-0.0.1-SNAPSHOT/auth",
        requestOptions
      );
      const res = await req.json(); */
/* var requestOptions = {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1aWQiOjEsInN1YiI6IjAxIiwiaXNzIjoiYmluZ28tdXNlciIsImV4cCI6MTU4NjMxMzM3NiwiaWF0IjoxNTg2MjQxMzc2LCJyb2wiOjN9.VdqDV4QEFAz-dc1mxojB0nkbqAMsIAdO6AYUPBt1vgVipmI6-FrveyVAG145NI7Fn9zb_47-ZDusgLtcz1-AFQ",
        }),
        redirect: "follow",
      };

      fetch(
        "http://186.147.125.7:8080/user-0.0.1-SNAPSHOT/groupfigure",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error)); */
/*       const res = await req.json();
      setData(res); */
