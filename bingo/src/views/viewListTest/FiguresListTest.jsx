import React from "react";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import "./FiguresListTest.css";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";

const FiguresList = () => {
  return (
    <div class="allFigures-container">
      {/*Left Navbar */}
      <LeftNavbar />
      <div id="main">
        {/* <!--Top navbar--> */}
        <TopNavbar />

        {/* <!--Main Content--> */}

        <div class="all-figures-container">
          <div class="all-figure-info">
            <Tabs>
              <TabList>
                <Tab>
                  <p>Lista con Figuras</p>
                </Tab>
                <Tab>Lista con Modalidades</Tab>
              </TabList>
              {/* <!--Add new figure button--> */}
              <div class="add-figure-button">
                <button>+</button>
              </div>
              <TabPanels>
                {/*First Tab (Lista con figuras tab) */}
                <TabPanel>
                  {/* <!--All figures list--> */}
                  <div class="figures">
                    <ul>
                      <li>
                        <div class="figure-card">
                          <div class="card-title">
                            <p>Horizontal-1</p>
                          </div>
                          <div class="close-card">
                            <p>X</p>
                          </div>
                          <div class="figure-square-card">
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="figure-card">
                          <div class="card-title">
                            <p>Horizontal-1</p>
                          </div>
                          <div class="close-card">
                            <p>X</p>
                          </div>
                          <div class="figure-square-card">
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="figure-card">
                          <div class="card-title">
                            <p>Horizontal-1</p>
                          </div>
                          <div class="close-card">
                            <p>X</p>
                          </div>
                          <div class="figure-square-card">
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="figure-card">
                          <div class="card-title">
                            <p>Horizontal-1</p>
                          </div>
                          <div class="close-card">
                            <p>X</p>
                          </div>
                          <div class="figure-square-card">
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="figure-card">
                          <div class="card-title">
                            <p>Horizontal-1</p>
                          </div>
                          <div class="close-card">
                            <p>X</p>
                          </div>
                          <div class="figure-square-card">
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="figure-card">
                          <div class="card-title">
                            <p>Horizontal-1</p>
                          </div>
                          <div class="close-card">
                            <p>X</p>
                          </div>
                          <div class="figure-square-card">
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
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
                          <a href="">
                            <i class="fas fa-pencil-alt"></i>
                          </a>
                          <a href="">
                            <i class="fas fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>LLENO</td>
                        <td>1</td>
                        <td>1</td>
                        <td>
                          <a href="">
                            <i class="fas fa-pencil-alt"></i>
                          </a>
                          <a href="">
                            <i class="fas fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>LLENO SEGUNDA</td>
                        <td>1</td>
                        <td>1</td>
                        <td>
                          <a href="">
                            <i class="fas fa-pencil-alt"></i>
                          </a>
                          <a href="">
                            <i class="fas fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>FIGURA</td>
                        <td>1</td>
                        <td>1</td>
                        <td>
                          <a href="">
                            <i class="fas fa-pencil-alt"></i>
                          </a>
                          <a href="">
                            <i class="fas fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>MEDIO LLENO</td>
                        <td>1</td>
                        <td>1</td>
                        <td>
                          <a href="">
                            <i class="fas fa-pencil-alt"></i>
                          </a>
                          <a href="">
                            <i class="fas fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>T Y T AL REVES</td>
                        <td>1</td>
                        <td>1</td>
                        <td>
                          <a href="">
                            <i class="fas fa-pencil-alt"></i>
                          </a>
                          <a href="">
                            <i class="fas fa-times"></i>
                          </a>
                        </td>
                      </tr>
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
