import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";
export const Card = ({ producto }) => {
  return (
    <div className="card">
      <Link to={`/peliculas/${producto.id}`} className="card-link">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <div className="d-flex justify-content-between align-items-center"></div>
      </div>
    </div>
  );
};
