import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { generateNumber } from "../Actions/numbersActions";

const NumberForm = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value > 0) {
      const num = {
        id: Number(new Date()),
        value: JSON.parse(value),
      };
      dispatch(generateNumber(num));
      setValue("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" value={value} onChange={handleChange} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default NumberForm;
