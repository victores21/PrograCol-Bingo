import React, { useEffect, useState } from "react";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import "./FiguresList.css";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const FiguresList = () => {
  const userContext = useContext(UserContext);
  const [figures, setFigures] = useState();
  const [modalities, setModalities] = useState();
  const [loadingFigure, setLoadingFigure] = useState(true);
  const [loadingModality, setLoadingModality] = useState(true);

  useEffect(() => {
    //First Tab
    const getFigures = async () => {
      var bearerToken = userContext.token;
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearerToken,
          "Content-type": "application/json",
        },
      };

      const req = await fetch(
        "http://staging.bingored.co:8080/gameweb-0.0.1-SNAPSHOT/figure",
        requestOptions
      );
      const res = await req.json();
      console.log("Lista de figuras", res);
      setFigures(res.data);
      setLoadingFigure(false);
    };

    //Second Tab
    const getModalities = async () => {
      var bearerToken = userContext.token;
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearerToken,
          "Content-type": "application/json",
        },
      };

      const req = await fetch(
        "http://staging.bingored.co:8080/gameweb-0.0.1-SNAPSHOT/groupfigure",
        requestOptions
      );
      const res = await req.json();
      setModalities(res.data);
      setLoadingModality(false);
      console.log("Modality", res);
    };

    /*     //Delete Method
    const deleteFigure =async ()=>{
      var bearerToken = localStorage.getItem("Bearer Token");
      var requestOptions = {
        method: "DELETE",
        redirect: "follow",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearerToken,
          "Content-type": "application/json",
        },
      };
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const req = await fetch("http://186.147.125.7:8080/game-0.0.1-SNAPSHOT/figure/:id", requestOptions)
      const res = await req.json();
      console.log(res);
    } */
    getFigures();
    getModalities();
  }, []);

  return (
    <div className="allFigures-container">
      {/*Left Navbar */}
      <LeftNavbar />
      <div id="main">
        {/* <!--Top navbar--> */}
        <TopNavbar />

        {/* <!--Main Content--> */}

        <div className="all-figures-container">
          <div className="all-figure-info">
            <Tabs>
              <TabList>
                <Tab>
                  <p>Lista con Figuras</p>
                </Tab>
                <Tab>Lista con Modalidades</Tab>
              </TabList>
              {/* <!--Add new figure button--> */}
              <div className="add-figure-button">
                <Link to="/figures/add">
                  <button>+</button>
                </Link>
              </div>
              <TabPanels>
                {/*First Tab (Lista con figuras tab) */}
                <TabPanel>
                  {/* <!--All figures list--> */}
                  <div className="figures">
                    <ul>
                      {/* AllFigures card*/}
                      {loadingFigure
                        ? console.log("Loading...")
                        : figures.map((figureInfo) => (
                            <li key={figureInfo.id}>
                              <div className="figure-card">
                                <div className="card-title">
                                  <p>{figureInfo.name}</p>
                                </div>
                                <div className="close-card">
                                  <p>
                                    <Link to="/delete">X</Link>
                                  </p>
                                </div>
                                <div className="figure-square-card">
                                  {figureInfo.positionsWinner.map(
                                    (positionWinner, index) => (
                                      <div
                                        key={index}
                                        className={
                                          positionWinner
                                            ? "square-blue"
                                            : "square-gray"
                                        }
                                      ></div>
                                    )
                                  )}
                                </div>
                              </div>
                            </li>
                          ))}
                    </ul>
                  </div>
                </TabPanel>

                {/*Second Tab (Lista con modalidades) */}
                <TabPanel>
                  <div className="modality-list">
                    <table>
                      <tbody>
                        <tr>
                          <th>Nombre de Modalidad</th>
                          <th>Oportunidad</th>
                          <th>Cerrar al lanzar</th>
                          <th>Acciones</th>
                        </tr>
                        {loadingModality
                          ? console.log("Loading...")
                          : modalities.map((modality) => (
                              <tr key={modality.id}>
                                <td>{modality.name}</td>
                                <td>{modality.opportunity}</td>
                                <td>{modality.closeAt}</td>
                                <td>
                                  <Link to="/edit">
                                    <i className="fas fa-pencil-alt"></i>
                                  </Link>
                                  <Link to="/delete/:id">
                                    <i className="fas fa-times"></i>
                                  </Link>
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
            {/* <!--Header--> */}
          </div>
        </div>

        {/* <!--Footer--> */}
        <Footer />
      </div>
    </div>
  );
};

export default FiguresList;
