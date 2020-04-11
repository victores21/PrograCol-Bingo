import React, { useContext, useState } from "react";
import "./AddFigure.css";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { IsLoggedIn } from "../../components/IsLoggedIn/IsLoggedIn";
const AddFigure = () => {
  const [active, setActive] = useState(false);
  const [positionsArray, setPositionsArray] = useState([
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
  ]);
  const handleFigureWinners = (e, array) => {
    // setPositionsArray([(positionsArray[index] = !positionsArray[index])]);
    console.log(e.target.value);
  };
  return (
    <>
      <div className="addFigures-container">
        {/*LeftNavbar */}
        <LeftNavbar />
        <div id="main">
          {/* <!--Top navbar--> */}
          <TopNavbar />

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
              {/*CARD */}
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
                  {positionsArray.map((position, index) => (
                    <div
                      key={`${position}_${index}`}
                      className={position ? "square-blue" : "square-gray"}
                      onClick={(e) => {
                        const newArray = [...positionsArray];
                        newArray[index] = newArray[index] === 1 ? 0 : 1;
                        setPositionsArray(newArray);
                      }}
                    >
                      {position}
                    </div>
                  ))}
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
