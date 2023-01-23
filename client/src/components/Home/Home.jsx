import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  orderByPopulation,
  setCurrentPage,
  setError,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import CountryCard from "../Countries/CountryCard";
import SiteNav from "../SiteNav/SiteNav";
import Filters from "../Filter/filters";
import CreateActivity from "../Activities/CreateActivity";
import ErrorMessage from "../Errors/ErrorMessage";
import FormCard from "../Activities/FormCard";
import Loading from "../Loading/Loading";

import "../Home/Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const currentPage = useSelector((state) => state.page);
  const loading = useSelector((state) => state.loading);
  const allErrors = useSelector((state) => state.error);
  const activityCountries = useSelector((state) => state.activityCountries);

  const [pageSize] = useState(10);

  const indexOfLastCountry = currentPage === 1 ? 9 : currentPage * pageSize - 1; // inicia en 8
  const indexOfFirstCountry =
    currentPage === 1 ? 0 : indexOfLastCountry - pageSize; // 0
  const currentCountries = allCountries?.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  useEffect(() => {
    console.log("/Home - useEffect");
    dispatch(getCountries());
    dispatch(orderByPopulation("All"));
    dispatch(setCurrentPage(1));
  }, [dispatch]);

  const handleCountryButton = (e) => {
    console.log("/Home - handleCountryButton");
    dispatch(setError({ errorName: false }));
    dispatch(getCountries());
    dispatch(setCurrentPage(1));
  };

  const handleClearSetError = () => {
    dispatch(setError({ errorName: false }));
  };

  return (
    <div className="home__container">
      <div className="home__siteNav">
        <SiteNav />
      </div>
      <div className="home__columns">
        <div className="columns__left-column">
          <div className="left-column__btn-container">
            <button
              onClick={(e) => {
                handleCountryButton(e);
              }}
            >
              Show all Countries
            </button>
          </div>
          <div className="left-column__create_activity_container">
            <CreateActivity />
          </div>
        </div>
        <div className="columns__right-column">
          <Filters />
          <div className="right-column__cards-container">
            {loading ? (
              <Loading />
            ) : allErrors.errorName ? (
              <div
                key="errorName"
                className="cards-container__error-message"
                onChange={() => {
                  handleClearSetError();
                }}
              >
                {" "}
                <ErrorMessage />{" "}
              </div>
            ) : activityCountries.length > 0 ? (
              <div className="cards-container__form-card-container">
                {allCountries &&
                  allCountries
                    .filter((c) => activityCountries.includes(c.id))
                    .map((c) => {
                      return (
                        <div key={c.id}>
                          <FormCard
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            flag={c.flag}
                          />
                        </div>
                      );
                    })}
              </div>
            ) : (
              currentCountries?.map((c) => {
                return (
                  <div
                    key={c.name}
                    className="cards-container__card"
                    value={c.id}
                  >
                    <Link to={`/countries/${c.id}`}>
                      <CountryCard
                        name={c.name}
                        flag={c.flag}
                        continent={c.continent}
                        value={c.id}
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </div>
          <div className="right-column__pagination">
            <Pagination
              pageSize={pageSize}
              allCountries={allCountries?.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
