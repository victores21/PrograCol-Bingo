import React from "react";
import "./FigureCard.css";
import { Link } from "react-router-dom";

const FigureCard = ({ figures, loadingFigure }) => {
  return (
    <>
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
                              positionWinner ? "square-blue" : "square-gray"
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
    </>
  );
};

export default FigureCard;
