import React from "react";

const PopUp = ({ onClose }) => {
  const handleClickOutSide = (event) => {
    console.log(event.target.classList);
    if (event.target.classList.contains("popup")) {
      onClose();
    }
  };
  return (
    <div className="popup" onClick={handleClickOutSide}>
      <div className="popup-Contnet">
        <h3>PopUp content</h3>
        <p>Thisis a Sample</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
