import React from "react";
import "./ModalityCard.css";
import { Link } from "react-router-dom";

const ModalityCard = ({ modalities, loadingModality }) => {
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
