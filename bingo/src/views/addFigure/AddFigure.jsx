import React from "react";
import "./AddFigure.css";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
const AddFigure = () => {
  return (
    <>
      <div class="addFigures-container">
        {/*LeftNavbar */}
        <LeftNavbar />
        <div id="main">
          {/* <!--Top navbar--> */}
          <TopNavbar />

          {/* <!--Main Content--> */}
          <div class="addFigure">
            <div class="add-figure-info">
              {/* <!--Back Button--> */}
              <div class="back-button">
                <Link to="/figures">
                  <button>
                    <i class="fas fa-arrow-left"></i>
                  </button>
                </Link>
              </div>
              {/* <!--Select Modality--> */}
              <div class="select-modality">
                <label for="modality-label">Elegir Modalidad</label>

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
              <div class="card-title-add">
                <p>Añadir nueva</p>
                <p>figura</p>
              </div>
              {/* <!--Card--> */}
              <div class="card-add">
                <div class="add-figure-title">
                  <input
                    type="text"
                    name="add-title"
                    id="add-title"
                    placeholder="Nombre de figura"
                  />
                </div>
                <div class="add-square">
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
                <div class="save-button">
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
