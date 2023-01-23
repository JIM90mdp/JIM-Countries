import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryByName,
  setCurrentPage,
  setError,
} from "../../redux/actions";
import { BsSearch } from "react-icons/bs";

import "../SearchBar/searchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [state, setState] = useState({
    name: "",
    errorName: false,
  });

  function handleInputChange(e) {
    if (/^[a-z\s]*$/gi.test(e.target.value)) {
      setState({ name: e.target.value, error: false });
    } else setState({ ...state, errorName: true });
  }

  const handleSubmit = (e) => {
    dispatch(getCountryByName(state.name));
    if (countries) {
      return (
        setState({ name: e.target.value, errorName: false }),
        dispatch(setCurrentPage(1))
      );
    } else {
      return (
        setState({ ...state, errorName: true }),
        dispatch(setCurrentPage(1)),
        dispatch(setError({ errorName: true }))
      );
    }
  };

  return (
    <div className="search-bar__container">
      <BsSearch className="search-bar__icon" />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
        value={state.name}
        autoComplete="off"
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
}
