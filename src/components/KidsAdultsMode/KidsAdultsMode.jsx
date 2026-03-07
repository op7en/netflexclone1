import React, { useState } from "react";
import "./KidsAdultsMode.css";

const KidsAdultsMode = () => {
<<<<<<< HEAD
  const [isKids, setIsKids] = useState(true); // по умолчанию детский режим

  const toggleMode = () => {
    setIsKids(prev => !prev);
=======
  const [isKids, setIsKids] = useState(true);

  const toggleMode = () => {
    setIsKids((prev) => !prev);
>>>>>>> temp_branch
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
