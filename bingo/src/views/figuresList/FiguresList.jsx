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
import FigureCard from "../../components/FigureCard/FigureCard";
import ModalityCard from "../../components/ModalityCard/ModalityCard";

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
                  <FigureCard figures={figures} loadingFigure={loadingFigure} />
                </TabPanel>

                {/*Second Tab (Lista con modalidades) */}
                <TabPanel>
                  <ModalityCard
                    modalities={modalities}
                    loadingModality={loadingModality}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>

        {/* <!--Footer--> */}
        <Footer />
      </div>
    </div>
  );
};

export default FiguresList;
