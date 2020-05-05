import React from "react";
import "./FigureCard.css";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import SquareLoader from "react-spinners/SquareLoader";

const FigureCard = ({ figures, loadingFigure }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-bottom: 5rem;
  `;
  if (loadingFigure) {
    return (
      <div className="sweet-loading">
        <SquareLoader css={override} size={50} color={"#0071bd"} />
      </div>
    );
  }
  return (
    <>
      <div className="figures">
        <ul>
          {/* AllFigures card*/}
          {figures.map((figureInfo) => (
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
                  {figureInfo.positionsWinner.map((positionWinner, index) => (
                    <div
                      key={index}
                      className={positionWinner ? "square-blue" : "square-gray"}
                    ></div>
                  ))}
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
