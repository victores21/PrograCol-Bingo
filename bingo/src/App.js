import React, { useContext } from "react";
import "./App.css";
import FiguresList from "./views/figuresList/FiguresList";
import Login from "./views/login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./views/profile/Profile";
import AddFigure from "./views/addFigure/AddFigure";
import TokenContextProvider from "./context/TokenContext";
import NotFound from "./components/NotFound/NotFound";
import { IsLoggedIn } from "./components/IsLoggedIn/IsLoggedIn";
import UserContextProvider, { UserContext } from "./context/UserContext";

function App() {
  const userContext = useContext(UserContext);
  /*   const isLoggedIn = () => {
    if (localStorage.getItem("Bearer Token")) {
      return true;
    } else {
      return false;
    }
  };
  if (!isLoggedIn()) {
    return <Login />;
  } */
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/figures" component={FiguresList} />
          <Route exact path="/figures/add" component={AddFigure} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
