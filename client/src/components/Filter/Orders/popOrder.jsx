import React, { useEffect} from "react";
import { useDispatch} from "react-redux";
import { orderByPopulation, setCurrentPage, setError } from "../../../redux/actions";
import "../../Filter/filters.css"

export default function PopOrder() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [dispatch]);

  function handleOrderByPop(e) {
    dispatch(setError({errorName: false}));
    dispatch(orderByPopulation(e.target.value));
    dispatch(setCurrentPage(1));
  }

  return (
    <div className="filter__container">
      <label>Order by Population</label>
      <select
        className="container__select-filter"
        onChange={(e) => {
          handleOrderByPop(e);
        }}
      >
        <option value="All" hidden>
          Choose
        </option>
        <option value="asc">Ascendant</option>
        <option value="desc">Descendant</option>
      </select>
    </div>
  );
}
