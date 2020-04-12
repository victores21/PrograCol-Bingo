import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import "./EditFigure.css";
import { useParams, Redirect } from "react-router-dom";

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
  useEffect(() => {
    //Get the figure
    const getFigureById = async () => {
      var bearerToken = userContext.token;
      var token = localStorage.getItem("Token");
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: token,
          "Content-type": "application/json",
        },
      };

      const req = await fetch(
        `http://staging.bingored.co:8080/gameweb-0.0.1-SNAPSHOT/figure/${id}`,
        requestOptions
      );
      const res = await req.json();
      setPositionsArray(res.data.positionsWinner);
      setFigure(res.data);
      setLoadingFigure(false);
      setFigureName(res.data.name);
    };
    getFigureById();
  }, [loadingFigure]);
  console.log("Figura por ID", figure);

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
  const handleEdit = () => {
    //EDIT THE FIGURE
    const editFigure = async () => {
      try {
        var token = localStorage.getItem("Token");
        console.log("PositionArray from editFigureHandler", positionsArray);
        var raw = JSON.stringify({
          id: id,
          figureName: figureName,
          idFigureGroup: idFigureModality,
          positions: positionsArray,
        });
        var requestOptions = {
          method: "PUT",
          body: raw,
          redirect: "follow",
          withCredentials: true,
          credentials: "include",
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        };
        const req = await fetch(
          `http://staging.bingored.co:8080/gameweb-0.0.1-SNAPSHOT/figure/${id}`,
          requestOptions
        );
        const res = await req.json();
        setEdited(true);
        console.log("res", res);
        console.log("raw", raw);
      } catch (error) {
        console.log(error);
      }
    };
    editFigure();
  };
  console.log("Array from positions", positionsArray);
  console.log("ID IS", id);
  if (edited) {
    return <Redirect to="/figures" />;
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
                <button>
                  <i className="fas fa-arrow-left"></i>
                </button>
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
                        >
                          {(position, index)}
                        </div>
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
