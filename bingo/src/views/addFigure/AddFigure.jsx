import React, { useEffect, useState } from "react";
import "./AddFigure.css";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { getModalities, postFigure } from "../../api";

const AddFigure = () => {
  const userContext = useContext(UserContext);
  //states
  const [loadingModality, setLoadingModality] = useState(true);
  const [modalities, setModalities] = useState();
  const [positionsArray, setPositionsArray] = useState([
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
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const [figureName, setFigureName] = useState();
  const [idFigure, setIdFigure] = useState(1);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    //GetModalities Fetching
    getModalities().then((modalitiesList) => {
      setModalities(modalitiesList.data);
      setLoadingModality(false);
    });
  }, [setLoadingModality]);

  //handlerBingoCardToggler
  const handleFigureToggle = (e, index) => {
    const newArray = [...positionsArray];
    newArray[index] = newArray[index] === 1 ? 0 : 1;
    setPositionsArray(newArray);
  };
  //Handle Bingo name
  const handleName = (e) => {
    setFigureName(e.target.value);
  };
  //handle SelectInput
  const handleSelectInput = (e) => {
    setIdFigure(e.target.value);
  };
  //Add Button
  const handleAddFigureButton = () => {
    //Post Figure petition
    postFigure(idFigure, figureName, positionsArray).then(() => {
      setCreated(true);
    });
  };

  if (created) {
    return <Redirect to="/figures" />;
  }
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

                <select
                  id="modality-select"
                  onClick={(e) => handleSelectInput(e)}
                >
                  {loadingModality
                    ? console.log("loading...")
                    : modalities.map((modality) => (
                        <option value={modality.id}>{modality.name}</option>
                      ))}
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
                    onChange={(e) => handleName(e)}
                  />
                </div>
                <div className="add-square">
                  {positionsArray.map((position, index) => (
                    <div
                      key={`${position}_${index}`}
                      className={position ? "square-blue" : "square-gray"}
                      //AQUI PARA CHAVON
                      //PARAAA
                      onClick={(e) => {
                        handleFigureToggle(e, index);
                      }}
                    ></div>
                  ))}
                </div>
                <div className="save-button">
                  <button onClick={(e) => handleAddFigureButton(e)}>
                    Guardar
                  </button>
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
