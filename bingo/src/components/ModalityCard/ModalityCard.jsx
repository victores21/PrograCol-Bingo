import React from "react";
import "./ModalityCard.css";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import SquareLoader from "react-spinners/SquareLoader";

const ModalityCard = ({ modalities, loadingModality }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-bottom: 5rem;
  `;
  if (loadingModality) {
    return (
      <div className="sweet-loading">
        <SquareLoader css={override} size={50} color={"#0071bd"} />
      </div>
    );
  }
  return (
    <>
      <div className="modality-list">
        <table>
          <tbody>
            <tr>
              <th>Nombre de Modalidad</th>
              <th>Oportunidad</th>
              <th>Cerrar al lanzar</th>
              <th>Acciones</th>
            </tr>
            {loadingModality
              ? console.log("Loading...")
              : modalities.map((modality) => (
                  <tr key={modality.id}>
                    <td>{modality.name}</td>
                    <td>{modality.opportunity}</td>
                    <td>{modality.closeAt}</td>
                    <td>
                      <Link to="/edit">
                        <i className="fas fa-pencil-alt"></i>
                      </Link>
                      <Link to="/delete/:id">
                        <i className="fas fa-times"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ModalityCard;
