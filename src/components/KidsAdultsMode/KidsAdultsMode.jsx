import React, { useState } from "react";
import "./KidsAdultsMode.css";

const KidsAdultsMode = () => {
  const [isKids, setIsKids] = useState(true);

  const toggleMode = () => {
    setIsKids((prev) => !prev);
  };

  return (
    <div className="navbar-modes" onClick={toggleMode}>
      {isKids ? (
        <i className="bx bx-face-child"></i>
      ) : (
        <i className="bx bx-man"></i>
      )}
    </div>
  );
};

export default KidsAdultsMode;
