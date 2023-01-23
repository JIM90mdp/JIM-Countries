import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";
export const FILTER_ACTIVITIES_BY_NAME = "FILTER_ACTIVITIES_BY_NAME";
export const A_Z_ORDER = "A_Z_ORDER";
export const POP_ORDER = "POP_ORDER ";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_LOADING = "SET_LOADING"
export const SET_ERROR = "SET_ERROR";
export const GET_ACTIVITY_COUNTRIES = "GET_ACTIVITY_COUNTRIES";
export const CLEAR_ACTIVITY_COUNTRIES = "CLEAR_ACTIVITY_COUNTRIES";
export const FILTER_ACTIVITY_COUNTRIES = "FILTER_ACTIVITY_COUNTRIES";
export const RESPONSIVE_BURGER = "RESPONSIVE_BURGER";

export function getCountries() {
  console.log("/actions - getCountries")
  return async function (dispatch) {
    try {
      const countries = await axios.get("/countries");
      return dispatch({
        type: GET_COUNTRIES,
        payload: countries.data,
      });
    } catch (error) {
      console.error(`Get Countries Error => ${error}`);
      dispatch({
        type: SET_ERROR,
        payload: { nameError: true },
      });
    }
  };
}

export function getCountryByName(name) {
  return async function (dispatch) {
    try {
      const country = await axios.get(
        `/countries?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: country.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: { nameError: true },
      });
      console.error(`Get Country By Name Error => ${error}`);
    }
  };
}

export function getCountryById(id) {
 return async function (dispatch) {
    try {
      const country = await axios.get(`/countries/${id}`);
          return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: country.data,
      });
    } catch (error) {
      console.error(`Get Country By Id Error => ${error}`);
    }
  };
}

export function countriesFilterByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      const activities = await axios.get("/activities");
      return dispatch({
        type: FILTER_ACTIVITIES,
        payload: activities.data,
      });
    } catch (error) {
      console.error(`Get activities Error => ${error}`);
    }
  };
}

export function postActivity(payload) {
  return async function (dispatch) {
    try {
      const activity = await axios.post(
        "/activities",
        payload
      );
      return activity;
    } catch (error) {
      console.error(`Post activities Error => ${error}`);
    }
  };
}

export function getActivitiesByName(payload) {
  return {
    type: FILTER_ACTIVITIES_BY_NAME,
    payload,
  };
}

export function orderAlphabetically(payload) {
  console.log("/actions - orderAlphabetically")
  return {
    type: A_Z_ORDER,
    payload,
  };
}

export function orderByPopulation(payload) {
  console.log("/actions - orderByPopulation")
  return {
    type: POP_ORDER,
    payload,
  };
}

export function setCurrentPage(payload) {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload,
  };
}

export function setActivityCountries(payload) {
  return {
    type: GET_ACTIVITY_COUNTRIES,
    payload
  }
}

export function clearActivityCountries() {
  return {
    type: CLEAR_ACTIVITY_COUNTRIES,
  }
}

export function filterActivityCountries(payload){
  return {
    type: FILTER_ACTIVITY_COUNTRIES,
    payload
  }
}

export function burgerState(payload){
  return {
    type: RESPONSIVE_BURGER,
    payload
  }
}