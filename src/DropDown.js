import { useState } from "react";
import data from "./data";

export default function DropDown() {
  const [year, setYear] = useState("");

  const years = new Set(data.map((items) => items.year));
  const filterYears = [...years];

  const filterData = data.filter((item) => {
    return item.year === year;
  });
  return (
    <div>
      <h1>Holidays List</h1>
      <select onChange={(e) => setYear(e.target.value)}>
        <option value={year}>Choose</option>
        {filterYears.map((year, i) => {
          return (
            <option value={year} key={i}>
              {year}
            </option>
          );
        })}
      </select>
      <ul>
        {filterData.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
fdfggbgvwee;
