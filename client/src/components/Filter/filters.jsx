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

  useEffect(() => {
    dispatch(getActivitiesByName(filter));
    dispatch(setCurrentPage(1));
  }, [dispatch, filter]);

  return (
    <div className="filters__container">
      <AZOrder />

      <PopOrder />

      <ContinentFilter />

      <ActivityFilter setFilter={setFilter} />
    </div>
  );
}
