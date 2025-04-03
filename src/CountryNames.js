import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://countriesnow.space/api/v0.1/countries/states";

export default function CountryNames() {
  const [inputValue, setInputValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    const countriesData = async () => {
      try {
        const res = await axios.get(BASE_URL);
        const result = res.data;
        setCountries(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    countriesData();
  }, []);
  const handleFilter = (country) => {
    const fiiterData = searchData.find((value) => {
      return value.iso3 === country.iso3;
    });
    // console.log(fiiterData);
    setNames(fiiterData.states);
  };
  const handleChnage = (e) => {
    const data = e.target.value;
    setInputValue(data);
  };
  const searchData = countries.filter((value) => {
    return (
      value.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      value.iso3.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
  return (
    <div className="country_names_container">
      {/* <div id="a1">
        <div id="a2">
          <div id="a3"></div>
        </div>
      </div> */}
      <div className="country_names">
        <h3>Country Names</h3>
        <input onChange={handleChnage} value={inputValue} />
        <ul>
          {searchData.map((country, i) => {
            return (
              <li key={i} onClick={() => handleFilter(country)}>
                {country.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="state_names">
        <h3>State Names</h3>
        <ul>
          {names.length === 0 ? (
            <p>States Are Empty in this Country</p>
          ) : (
            names.map((value, i) => {
              return <li key={i}>{value.name}</li>;
            })
          )}
        </ul>
      </div>
    </div>
  );
}
