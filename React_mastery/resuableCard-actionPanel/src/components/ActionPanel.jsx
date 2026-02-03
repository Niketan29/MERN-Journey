import React from "react";

const ActionPanel = ({ children }) => {
  const panelStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px",
    paddingTop: "15px",
    borderTop: "1px solid #ddd",
  };
  return (
    <div className="actionPanel" style={panelStyle}>
      {children}
    </div>
  );
};

export default ActionPanel;
