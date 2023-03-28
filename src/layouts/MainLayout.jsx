import React from "react";

export const MainLayout = ({ children }) => {
  const mainLayoutStyles = {
    backgroundColor: "white",
    color: "black",
    minHeight: "100vh",
    height:"fit-content",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
  };
 
  return (
    <div style={mainLayoutStyles}>
      {children}
    </div>
  );
};
