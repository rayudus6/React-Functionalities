import React, { useState } from "react";
import PopUp from "./PopUp";

const PopUpParent = () => {
  const [popUpOpen, setPopupOpen] = useState(false);

  const handleClick = () => {
    setPopupOpen(true);
  };
  const handleClose = () => {
    setPopupOpen(false);
  };
  return (
    <div>
      <button onClick={handleClick}>Show PopUp</button>
      {popUpOpen && <PopUp onClose={handleClose} />}
    </div>
  );
};

export default PopUpParent;
