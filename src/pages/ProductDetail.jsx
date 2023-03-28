import React from "react";
import { useParams } from "react-router-dom";
import { CartButtons } from "../components";
import { ProductsData } from "../json";

export const ProductDetail = () => {
  const { productId } = useParams();
  const producto = ProductsData.find((p) => p.id === productId);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div
      className="detalle-producto"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        {producto.nombre}
      </h1>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="img-fluid"
        style={{ maxWidth: "100%", marginBottom: "20px" }}
      />
      <p style={{ marginBottom: "20px" }}>{producto.descripcion}</p>
      <span
        className="precio"
        style={{ fontSize: "20px", fontWeight: "bold", color: "darkgreen" }}
      >
        USD $ {producto.precio}
      </span>
      <CartButtons />
    </div>
  );
};
