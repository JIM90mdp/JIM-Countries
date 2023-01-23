import React from "react";
import { useDispatch } from "react-redux";
import {
  orderAlphabetically,
  setCurrentPage,
  setError,
} from "../../../redux/actions";
import "../../Filter/filters.css";

export default function AZOrder() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("/azOrder -> useEffect")
  //   dispatch(setCurrentPage(1));
  // }, [dispatch]);

  function handleOrderByName(e) {
    console.log("/azOrder -> handleOrderByName");
    dispatch(orderAlphabetically(e.target.value));
    dispatch(setError({ errorName: false }));
    dispatch(setCurrentPage(1));
  }

  return (
    <div className="filter__container">
      <label>Order Alphabetically</label>
      <select
        className="container__select-filter"
        onChange={(e) => {
          handleOrderByName(e);
        }}
      >
        <option value="All" hidden>
          Choose
        </option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </div>
  );
}
