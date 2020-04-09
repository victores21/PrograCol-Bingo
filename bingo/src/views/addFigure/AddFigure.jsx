import React, { useContext } from "react";
import "./AddFigure.css";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { TokenContext } from "../../context/TokenContext";
import { IsLoggedIn } from "../../components/IsLoggedIn/IsLoggedIn";
const AddFigure = () => {
  const { token } = useContext(TokenContext);

  return (
    <>
      <div className="addFigures-container">
        {/*LeftNavbar */}
        <LeftNavbar />
        <div id="main">
          {/* <!--Top navbar--> */}
          <TopNavbar />
          {console.log(token)}

          {/* <!--Main Content--> */}
          <div className="addFigure">
            <div className="add-figure-info">
              {/* <!--Back Button--> */}
              <div className="back-button">
                <Link to="/figures">
                  <button>
                    <i className="fas fa-arrow-left"></i>
                  </button>
                </Link>
              </div>
              {/* <!--Select Modality--> */}
              <div className="select-modality">
                <label htmlFor="modality-label">Elegir Modalidad</label>

                <select id="modality-select">
                  <option value="volvo">LINEAL</option>
                  <option value="saab">LLENO</option>
                  <option value="opel">LLENO SEGUNDA</option>
                  <option value="audi">FIGURA</option>
                  <option value="audi">MEDIO LLENO</option>
                  <option value="audi">T Y T AL REVES</option>
                </select>
              </div>
              {/* <!--Title--> */}
              <div className="card-title-add">
                <p>Añadir nueva</p>
                <p>figura</p>
              </div>
              {/* <!--Card--> */}
              <div className="card-add">
                <div className="add-figure-title">
                  <input
                    type="text"
                    name="add-title"
                    id="add-title"
                    placeholder="Nombre de figura"
                  />
                </div>
                <div className="add-square">
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
                <div className="save-button">
                  <button>Guardar</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Footer--> */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AddFigure;
