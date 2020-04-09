import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FiguresList from "./views/figuresList/FiguresList";
import Login from "./views/login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./views/profile/Profile";
import AddFigure from "./views/addFigure/AddFigure";

function App() {
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
