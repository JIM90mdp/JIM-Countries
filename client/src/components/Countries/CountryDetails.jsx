import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountryById } from "../../redux/actions";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "../Countries/CountryDetails.css";

export default function CountryDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  function formatNumber(num) {
    return parseInt(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  const details = useSelector((state) => state.details);
  const {
    name,
    flag,
    continent,
    region,
    capital,
    subregion,
    area,
    population,
    activities,
  } = details;

  return (
    <div className="details__container">
      <div className="details__siteNav">
        <Link to="/home" className="details__link">
          <button> Go Back</button>
        </Link>
      </div>
      <div className="details__card-container">
        <div className="card-container__flag-name-container">
          <img src={flag} alt={name} />
          <span> {name}</span>
        </div>
        <div className="card-container__data">
          <span> Continent: {continent}</span>
          <span> Region: {region}</span>
          <span> Capital: {capital}</span>
          <span> Subregion: {subregion}</span>
          <span>
            {" "}
            Area: {area} km<sup>2</sup>
          </span>
          {/* <span> Population: {population}</span> */}
          <span> Population: {formatNumber(population)}</span>
        </div>
        <div className="card-container__activities-container">
          <span>Activities</span>
          <div>
            {activities?.map((a) => {
              return (
                <div key={a.id} className="activities-container__activity-card-container">
                  <div className="activity-card-container__props-container" key="123213123">
                    <div className="props-container__key-prop" key="33">
                      Name Activity:{" "}
                    </div>
                    <div className="props-container__value-prop" key="33ss3">
                      {" "}
                      {a.name}
                    </div>
                  </div>

                  <div className="activity-card-container__props-container" key="121113">
                    <div className="props-container__key-prop" key="3333">
                      Difficulty:
                    </div>
                    <div className="props-container__value-prop" key="3ss333">
                      {a.difficulty === 1
                        ? "Very Easy"
                        : a.difficulty === 2
                        ? "Easy"
                        : a.difficulty === 3
                        ? "Normal"
                        : a.difficulty === 4
                        ? "Hard"
                        : "Very Hard"}
                    </div>
                  </div>

                  <div className="activity-card-container__props-container" key="1232222">
                    <div className="props-container__key-prop" key="1555523">
                      Duration:
                    </div>
                    <div className="props-container__value-prop" key="2222">
                      {a.duration} {a.duration === 1 ? "hour" : "hours"}
                    </div>
                  </div>

                  <div className="activity-card-container__props-container" key="133323">
                    <div className="props-container__key-prop" key="144423">
                      Season:
                    </div>
                    <div className="props-container__value-prop" key="124443">
                      {a.season[0].toUpperCase() +
                        a.season.slice(1).toLowerCase()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
