import { useState, useEffect } from "react";
import axios from "axios";
import "./Location.css";

export default function Location() {
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetcCountry = async () => {
      try {
        const response = await axios.get(
          `https://location-selector.labs.crio.do/countries`
        );
        setCountryList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetcCountry();
  }, []);

  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await axios.get(
          `https://location-selector.labs.crio.do/country=${country}/states`
        );
        setStateList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    country && fetchState();
  }, [country]);

  useEffect(() => {
    const fetchCity = async () => {
      console.log("hi");

      try {
        const response = await axios.get(
          `https://location-selector.labs.crio.do/country=${country}/state=${state}/cities`
        );
        setCityList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    country && state && fetchCity();
  }, [country, state]);

  const handleChange = (e) => {
    if (e.target.name === "country") {
      setCountry(e.target.value);
      setState("");
      setCity("");
    } else if (e.target.name === "state") {
      setState(e.target.value);
      setCity("");
    } else if (e.target.name === "city") {
      setCity(e.target.value);
    }
  };

  return (
    <div className="location">
      <h1>Select Location</h1>
      <div className="select-bar">
        <select
          value={country}
          name="country"
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select Country</option>
          {countryList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          value={state}
          onChange={(e) => handleChange(e)}
          name="state"
          disabled={!country}
        >
          <option value="">Select State</option>
          {stateList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          value={city}
          name="city"
          onChange={(e) => handleChange(e)}
          disabled={!state || !country}
        >
          <option value="">Select City</option>
          {cityList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <p>
          {city && (
            <>
              You selected <span className="city">{city}</span>,{" "}
              <span className="state">{state}</span>,{" "}
              <span className="country">{country}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
