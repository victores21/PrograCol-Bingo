import React, { useEffect, useState, useContext } from "react";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import "./FiguresList.css";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getFigures, getModalities } from "../../api";

const FiguresList = () => {
  const userContext = useContext(UserContext);
  const [figures, setFigures] = useState();
  const [modalities, setModalities] = useState();
  const [loadingFigure, setLoadingFigure] = useState(true);
  const [loadingModality, setLoadingModality] = useState(true);

  useEffect(() => {
    //First Tab (fetching the figure list)
    getFigures().then((figureList) => {
      setFigures(figureList.data);
      setLoadingFigure(false);
    });

    //Second Tab

    getModalities().then((modalitiesList) => {
      setModalities(modalitiesList.data);
      setLoadingModality(false);
    });
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
                                <div className="edit-card">
                                  <p>
                                    <Link to={`/figures/edit/${figureInfo.id}`}>
                                      <i className="fas fa-pencil-alt"></i>
                                    </Link>
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
