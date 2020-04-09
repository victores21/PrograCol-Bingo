import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [username, setUsername] = useState("03");
  const [password, setPassword] = useState("1234");
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    console.log("Submit", e.target.value);
    e.preventDefault();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const validateUser = async () => {
      var raw = `{\n	\"username\": \"${username}\",\n	\"password\": \"${password}\"\n}`;

      var requestOptions = {
        method: "POST",
        body: raw,
        redirect: "follow",
      };

      const req = await fetch(
        "http://186.147.125.7:8080/user-0.0.1-SNAPSHOT/auth",
        requestOptions
      );
      const res = await req.json();
      setToken(res.Authorization);
      setLoading(false);
    };
    //Profile
    if (token !== undefined) {
      const getProfile = async () => {
        var bearer = token;
        console.log("Bearer from function token", bearer);
        var requestOptions = {
          method: "GET",
          redirect: "follow",
          withCredentials: true,
          credentials: "include",
          headers: {
            Authorization: bearer,
            "Content-type": "application/json",
          },
        };

        const req = await fetch(
          "http://186.147.125.7:8080/user-0.0.1-SNAPSHOT/myprofile",
          requestOptions
        );
        const res = await req.json();
        console.log(await res);
      };
      getProfile();
    }

    //GetAllpaged
    const getAllPaged = async () => {
      var bearer = token;
      console.log("Bearer from function GetAllPaged", bearer);
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearer,
          "Content-type": "application/json",
        },
      };

      const req = await fetch(
        "http://186.147.125.7:8080/game-0.0.1-SNAPSHOT/figure/paged?size=20&page=0",
        requestOptions
      );
      const res = await req.json();
      console.log(res);
    };

    getAllPaged();

    validateUser();
  }, [loading]);
  console.log(token);
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => handleUsernameChange(e)}
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => handlePasswordChange(e)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
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
