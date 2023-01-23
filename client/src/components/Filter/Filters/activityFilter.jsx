import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivities,
  setCurrentPage,
  setError,
} from "../../../redux/actions";
import "../../Filter/filters.css"

export default function ActivityFilter({ setFilter }) {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [dispatch]);

  function handleFilterByActivities(e) {
    if (e.target.value !== "All") {
      dispatch(setError({ errorName: false }));
      setFilter(e.target.value);
      dispatch(setCurrentPage(1));
      dispatch(getActivities());
    }
    dispatch(getActivities());
  }

  return (
    <div className="filter__container">
      <label>Filter by Activities</label>
      <select
        className="container__select-filter"
        onClick={(e) => {
          handleFilterByActivities(e);
        }}
      >
        <option value="All" hidden>
          All
        </option>
        {allActivities?.map((a) => {
          return (
            <option key={a.id} value={a.name}>
              {a.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
