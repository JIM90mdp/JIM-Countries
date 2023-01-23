import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  countriesFilterByContinent,
  setCurrentPage,
  setError,
} from "../../../redux/actions";
import "../../Filter/filters.css"

export default function ContinentFilter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(1));
    setCurrentPage(1)
  }, [dispatch]);

  function handleFilterByContinent(e) {
    if (e.target.value !== "All") {
      dispatch(setError({ errorName: false }));
      dispatch(countriesFilterByContinent(e.target.value));
      dispatch(setCurrentPage(1));
      setCurrentPage(1)
    }
    dispatch(setCurrentPage(1));
    setCurrentPage(1)
  }

  return (
    <div className="filter__container">
      <label>Filter by Continent</label>
      <select
        className="container__select-filter"
        onChange={(e) => {
          handleFilterByContinent(e);
        }}
      >
        <option value="All" hidden>
          All
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
