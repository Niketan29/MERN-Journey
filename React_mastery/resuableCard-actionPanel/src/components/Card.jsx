import React from "react";

const Card = ({ children }) => {
  const cardStyle = {
    border: "2px solid #333",
    borderRadius: "12px",
    padding: "24px",
    margin: "20px auto",
    maxWidth: "400px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };
  return (
    <div className="card" style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
