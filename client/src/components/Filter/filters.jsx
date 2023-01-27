import React, { useEffect, useState } from "react";
import AZOrder from "./Orders/azOrder";
import PopOrder from "./Orders/popOrder";
import ContinentFilter from "./Filters/continentFilter";
import ActivityFilter from "./Filters/activityFilter";
import { useDispatch } from "react-redux";
import { getActivitiesByName, setCurrentPage } from "../../redux/actions";

import "../Filter/filters.css";

export default function Filters() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState();
  const [hiddenState, setHiddenState] = useState(true);

  useEffect(() => {
    dispatch(getActivitiesByName(filter));
    dispatch(setCurrentPage(1));
  }, [dispatch, filter]);

  const handleButton = () => {
    setHiddenState(!hiddenState);
  };

  const hiddenClass = hiddenState ? "filters-container__filters-visible" : "filters-container__filters-hidden";
  return (
    <div className="filters__container">
      <button
        className="filters-container__hidden-content"
        onClick={() => {
          handleButton();
        }}
      >
        {" "}
        Filters{" "}
      </button>
      <div className={`${hiddenClass}`}>
        <AZOrder />

        <PopOrder />

        <ContinentFilter />

        <ActivityFilter setFilter={setFilter} />
      </div>
    </div>
  );
}
