import React from "react";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import "./FiguresList.css";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import { Link } from "react-router-dom";

const FiguresList = () => {
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
                      <li>
                        <div className="figure-card">
                          <div className="card-title">
                            <p>Horizontal-1</p>
                          </div>
                          <div className="close-card">
                            <p>X</p>
                          </div>
                          <div className="figure-square-card">
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                          </div>
                        </div>
                      </li>
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
                        <tr>
                          <td>LINEAL</td>
                          <td>1</td>
                          <td>1</td>
                          <td>
                            <Link to="/edit">
                              <i className="fas fa-pencil-alt"></i>
                            </Link>
                            <Link to="/delete/:id">
                              <i className="fas fa-times"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>LLENO</td>
                          <td>1</td>
                          <td>1</td>
                          <td>
                            <Link to="/">
                              <i className="fas fa-pencil-alt"></i>
                            </Link>
                            <Link to="/">
                              <i className="fas fa-times"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>LLENO SEGUNDA</td>
                          <td>1</td>
                          <td>1</td>
                          <td>
                            <Link to="/">
                              <i className="fas fa-pencil-alt"></i>
                            </Link>
                            <Link to="/">
                              <i className="fas fa-times"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>FIGURA</td>
                          <td>1</td>
                          <td>1</td>
                          <td>
                            <Link to="/">
                              <i className="fas fa-pencil-alt"></i>
                            </Link>
                            <Link to="/">
                              <i className="fas fa-times"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>MEDIO LLENO</td>
                          <td>1</td>
                          <td>1</td>
                          <td>
                            <Link to="/">
                              <i className="fas fa-pencil-alt"></i>
                            </Link>
                            <Link to="/">
                              <i className="fas fa-times"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>T Y T AL REVES</td>
                          <td>1</td>
                          <td>1</td>
                          <td>
                            <Link to="/">
                              <i className="fas fa-pencil-alt"></i>
                            </Link>
                            <Link to="/">
                              <i className="fas fa-times"></i>
                            </Link>
                          </td>
                        </tr>
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
