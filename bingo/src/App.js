import React, { useContext } from "react";
import "./App.css";
import FiguresList from "./views/figuresList/FiguresList";
import Login from "./views/login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./views/profile/Profile";
import AddFigure from "./views/addFigure/AddFigure";
/* import TokenContextProvider from "./context/TokenContext";
import { TokenContext } from "./context/TokenContext"; */
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <TokenContextProvider> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/figures" component={FiguresList} />
          <Route exact path="/figures/add" component={AddFigure} />
          <Route path="*" component={NotFound} />
          {/* </TokenContextProvider> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
