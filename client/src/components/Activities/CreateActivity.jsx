import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  clearActivityCountries,
  getCountries,
  postActivity,
  setActivityCountries,
} from "../../redux/actions";
import "../Activities/CreateActivity.css";

export default function CreateActivity() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  // const allErrors = useSelector((state)=> state.error)

  const seasons = ["summer", "autumn", "winter", "spring", "all year"];

  const [errorState, setErrorState] = useState({
    error: false,
  });

  const [hiddenState, setHiddenState] = useState(false);

  const [activityForm, setActivityForm] = useState({
    name: "",
    difficulty: 1,
    duration: 1,
    season: "",
    countryId: [],
    startDate: null,
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch, activityForm]);

  function handleChange(e) {
    setActivityForm({
      ...activityForm,
      [e.target.name]: e.target.value,
    });
    setErrorState({
      ...errorState,
      error: false,
      seasonError: false,
    });
  }

  const handleName = (e) => {
    const regExName = /^[a-z\s]*$/gi.test(e.target.value);
    if (regExName) {
      if (activityForm.name.length < 2 || activityForm.name.length > 29) {
        setErrorState({
          ...errorState,
          error: true,
          lengthError: true,
        });
        setActivityForm({
          ...activityForm,
          name: e.target.value,
        });
      } else {
        setErrorState({
          ...errorState,
          error: false,
          lengthError: false,
        });
        setActivityForm({
          ...activityForm,
          name: e.target.value,
        });
      }
    } else {
      setErrorState({
        ...errorState,
        error: true,
        nameError: true,
      });
    }
  };

  const handleCountries = (e) => {
    if (e.target.value !== "Select Countries") {
      if (!activityForm.countryId?.includes(e.target.value)) {
        setActivityForm({
          ...activityForm,
          countryId: [...activityForm.countryId, e.target.value],
        });
        dispatch(setActivityCountries(e.target.value));
        setErrorState({
          ...errorState,
          error: false,
          countryError: false,
        });
      } else {
        let country =
          allCountries &&
          allCountries
            .filter((c) => c.id === e.target.value)
            .map((c) => c.name);
        alert(`${country} has already been selected.`);
      }
    }
  };

  const handleClearActivity = () => {
    setActivityForm({
      name: "",
      difficulty: 1,
      duration: 1,
      season: "",
      countryId: [],
      startDate: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      activityForm.name.length >= 3 &&
      activityForm.name.length <= 30 &&
      activityForm.season !== "" &&
      activityForm.countryId.length
    ) {
      e.preventDefault();
      dispatch(postActivity(activityForm));
      handleClearActivity();
      dispatch(clearActivityCountries());
      alert(`Activity ${activityForm.name} successfully created`);
    } else {
      const validateSeason = activityForm.season === "";
      const validateCountries = activityForm.countryId.length;

      validateSeason && validateCountries
        ? setErrorState({
            ...errorState,
            error: true,
            lengthError: true,
            seasonError: true,
            countryError: true,
          })
        : validateCountries
        ? setErrorState({
            ...errorState,
            error: true,
            countryError: true,
          })
        : validateSeason
        ? setErrorState({
            ...errorState,
            error: true,
            seasonError: true,
            countryError: true,
          })
        : setErrorState({
            ...errorState,
            error: true,
            lengthError: true,
          });
    }
  };

  const handleButton = () => {
    setHiddenState(!hiddenState);
  };

  const hiddenClass = hiddenState ? "activity-container__activity-form" : "filters-container__activity-hidden";

  return (
    <div className="activity-container">
      <button
        className="activity-container__create-button"
        onClick={() => {
          handleButton();
        }}
      >
        Crate Activity
      </button>
      <form
        className={`${hiddenClass}`}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="activity-container__name-div activity-container__parameters">
          <label>Name: </label>
          <input
            className="parameters__input-select"
            type="text"
            value={activityForm.name}
            name="name"
            onChange={handleName}
            autoComplete="off"
          />
          <div>
            {errorState.nameError && (
              <div className="activity-container__error">
                Activity name can only contain letters and white spaces
              </div>
            )}
            {errorState.lengthError && (
              <div className="activity-container__error">
                Activity name must contain between 3 and 30 characters
              </div>
            )}
          </div>
        </div>
        <div className="activity-container__difficulty-div activity-container__parameters">
          <label>Difficulty: </label>
          <input
            className="difficulty_div"
            type="range"
            min={1}
            max={5}
            step={1}
            value={activityForm.difficulty}
            name="difficulty"
            onChange={handleChange}
          />
          <div>{activityForm.difficulty}</div>
        </div>
        <div className="activity-container__duration-div activity-container__parameters">
          <label>Duration: </label>
          <input
            className="parameters__input-select"
            type="number"
            value={activityForm.duration}
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="activity-container__season-div activity-container__parameters">
          <label>Season: </label>
          <select
            className="parameters__input-select"
            id=""
            name="season"
            onChange={handleChange}
            value={activityForm.season}
          >
            <option hidden>Select season</option>
            {seasons.map((s) => {
              return (
                <option key={s} id={s}>
                  {s}
                </option>
              );
            })}
          </select>
          {errorState.seasonError && (
            <div className="activity-container__error">
              You must choose a season
            </div>
          )}
        </div>
        <div className="activity-container__season-div activity-container__parameters">
          <label> Start Date: </label>
          <input
            className="parameters__input-select"
            type="date"
            id=""
            name="startDate"
            onChange={handleChange}
            value={activityForm.startDate}
            autoComplete="off"
            />
          
        </div>
        <div className="activity-container__countries-div activity-container__parameters">
          <label>Countries </label>
          <select
            className="parameters__input-select"
            id="countryId"
            onChange={(e) => handleCountries(e)}
          >
            <option hidden>Select Countries</option>
            {allCountries &&
              allCountries
                .sort((a, b) => (a.name < b.name ? -1 : 1))
                .map((c) => {
                  return (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  );
                })}
          </select>
          {errorState.countryError && (
            <div className="activity-container__error">
              You must choose a country
            </div>
          )}
        </div>
        <div className="activity-container__buttons-div activity-container__parameters">
          <input
            className="buttons-div__btn"
            id="reset"
            type="reset"
            value="Reset"
            onChange={handleClearActivity}
          />
          <button type="submit" className="buttons-div__btn">
            Create Activity
          </button>
        </div>
      </form>
    </div>
  );
}
