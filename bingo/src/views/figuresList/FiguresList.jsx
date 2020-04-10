import React, { useEffect, useState } from "react";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import "./FiguresList.css";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import { Link } from "react-router-dom";
import { IsLoggedIn } from "../../components/IsLoggedIn/IsLoggedIn";

const FiguresList = () => {
  const [figures, setFigures] = useState();
  const [modalities, setModalities] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //First Tab
    const getFigures = async () => {
      var bearerToken = localStorage.getItem("Bearer Token");
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
        "http://186.147.125.7:8080/game-0.0.1-SNAPSHOT/figure",
        requestOptions
      );
      const res = await req.json();
      console.log(res);
      setFigures(res.data);
      setLoading(false);
    };

    //Second Tab
    const getModalities = async () => {
      var bearerToken = localStorage.getItem("Bearer Token");
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
        "http://186.147.125.7:8080/game-0.0.1-SNAPSHOT/groupfigure",
        requestOptions
      );
      const res = await req.json();
      setModalities(res.data);
    };
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
                      {loading
                        ? console.log("Loading...")
                        : figures.map((figureInfo) => (
                            <li key={figureInfo.id}>
                              <div className="figure-card">
                                <div className="card-title">
                                  <p>{figureInfo.name}</p>
                                </div>
                                <div className="close-card">
                                  <p>X</p>
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
                    {loading ? "..." : console.log(modalities)}
                    <table>
                      <tbody>
                        <tr>
                          <th>Nombre de Modalidad</th>
                          <th>Oportunidad</th>
                          <th>Cerrar al lanzar</th>
                          <th>Acciones</th>
                        </tr>
                        {loading
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
