import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import "./EditFigure.css";
import { useParams, Redirect, Link } from "react-router-dom";
import { getFigureById, editFigure } from "../../api";
import { css } from "@emotion/core";
import SquareLoader from "react-spinners/SquareLoader";

const EditFigure = () => {
  const userContext = useContext(UserContext);
  const { id } = useParams(); //FigureId
  const [figure, setFigure] = useState();
  const [loadingFigure, setLoadingFigure] = useState(true);
  const [positionsArray, setPositionsArray] = useState();
  const [figureName, setFigureName] = useState();
  const [idFigureModality, setIdFigureModality] = useState(1);
  const [edited, setEdited] = useState(false);
  const idNumber = parseInt(id);
  //Loading component css
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-bottom: 5rem;
  `;
  useEffect(() => {
    //Get the figure by Id
    getFigureById(idNumber).then((figureInfo) => {
      setPositionsArray(figureInfo.data.positionsWinner);
      setFigure(figureInfo.data);
      setLoadingFigure(false);
      setFigureName(figureInfo.data.name);
    });
  }, [loadingFigure]);

  //handlers
  const handleFigureToggle = (e, index) => {
    const newArray = [...positionsArray];
    newArray[index] = newArray[index] === true ? false : true;
    setPositionsArray(newArray);
  };
  const handleName = (e) => {
    setFigureName(e.target.value);
  };

  //handle SelectInput
  const handleSelectInput = (e) => {
    setIdFigureModality(e.target.value);
  };
  console.log("PositionArray is:", positionsArray);
  //Edit handler
  const handleEdit = () => {
    //EDIT THE FIGURE
    editFigure(idNumber, figureName, idFigureModality, positionsArray).then(
      (response) => {
        setEdited(true);
      }
    );
  };
  console.log("Array from positions", positionsArray);
  console.log("ID IS", id);
  if (edited) {
    return <Redirect to="/figures" />;
  }

  if (loadingFigure) {
    return (
      <div className="sweet-loading">
        <SquareLoader css={override} size={50} color={"#0071bd"} />
      </div>
    );
  }
  return (
    <>
      <div className="editFigures-container">
        {/*LeftNavbar */}
        <LeftNavbar />
        <div id="main">
          {/*Top Navbar */}
          <TopNavbar />

          {/* <!--Main Content--> */}
          <div className="editFigure">
            <div className="edit-figure-info">
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
                  {loadingFigure ? (
                    console.log("loading...")
                  ) : (
                    <option value={figure.groupFigureId.id}>
                      {figure.groupFigureId.name}
                    </option>
                  )}
                </select>
              </div>
              {/* <!--Title--> */}
              <div className="card-title-edit">
                <p>Editar la figura</p>
              </div>
              {/* <!--Card--> */}
              <div className="card-edit">
                <div className="edit-figure-title">
                  <input
                    type="text"
                    name="edit-title"
                    id="edit-title"
                    placeholder="Nombre de figura"
                    value={loadingFigure ? "Default" : figureName}
                    onChange={(e) => handleName(e)}
                  />
                </div>
                <div className="edit-square">
                  {loadingFigure
                    ? "..."
                    : positionsArray.map((position, index) => (
                        <div
                          key={`${position}_${index}`}
                          className={position ? "square-blue" : "square-gray"}
                          onClick={(e) => {
                            handleFigureToggle(e, index);
                          }}
                        ></div>
                      ))}
                </div>
                <div className="edit-button">
                  <button onClick={(e) => handleEdit(e)}>Editar</button>
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

export default EditFigure;
