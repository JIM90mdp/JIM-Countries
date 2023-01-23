import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_BY_ID,
  FILTER_BY_CONTINENT,
  FILTER_ACTIVITIES,
  FILTER_ACTIVITIES_BY_NAME,
  A_Z_ORDER,
  POP_ORDER,
  SET_LOADING,
  SET_ERROR,
  SET_CURRENT_PAGE,
  GET_ACTIVITY_COUNTRIES,
  CLEAR_ACTIVITY_COUNTRIES,
  FILTER_ACTIVITY_COUNTRIES,
  RESPONSIVE_BURGER,
} from "../actions";

const initialState = {
  allCountries: [],
  countries: [],
  activities: [],
  details: [],
  loading: true,
  error: {},
  page: 1,
  activityState: false,
  activityCountries: [],
  burger: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        countries: payload,
        loading: false,
      };

    case FILTER_BY_CONTINENT:
      let countryFiltered = [...state.allCountries];
      const filterByContinent = countryFiltered.filter(
        (c) => c.region === payload
      );
      return {
        ...state,
        countries: filterByContinent,
        loading: false,
      };

    case FILTER_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };

    case FILTER_ACTIVITIES_BY_NAME:
      let activityFiltered = [...state.allCountries];
      activityFiltered = activityFiltered.filter((c) => {
        const activities = c.activities.filter((a) => {
          return a.name === payload;
        });
        return activities.length && activities;
      });
      return {
        ...state,
        countries: activityFiltered,
      };

    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        details: payload,
      };

    case A_Z_ORDER:
      console.log("/reducer - a-z-order");
      let azOrderFiltered = [...state.countries];
      if (payload === "All") {
        return {
          ...state,
          countries: azOrderFiltered,
        };
      }
      if (payload === "asc") {
        console.log("/reducer - a-z-order / asc");
        azOrderFiltered.sort(function (a, b) {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      } else {
        console.log("/reducer - a-z-order / desc");
        azOrderFiltered.sort(function (a, b) {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      }
      return {
        ...state,
        countries: azOrderFiltered,
      };

    case POP_ORDER:
      let popOrderFiltered = [...state.countries];
      if (payload === "All") {
        return {
          ...state,
          countries: [...state.allCountries],
        };
      }
      if (payload === "asc") {
        popOrderFiltered.sort(function (a, b) {
          if (a.population < b.population) return 1;
          if (a.population > b.population) return -1;
          return 0;
        });
      } else {
        popOrderFiltered.sort(function (a, b) {
          if (a.population > b.population) return 1;
          if (a.population < b.population) return -1;
          return 0;
        });
      }
      return {
        ...state,
        countries: popOrderFiltered,
      };

    case GET_COUNTRY_BY_NAME:
      if (payload.length === 0) {
        return {
          ...state,
          error: { errorName: true },
        };
      }
      return {
        ...state,
        countries: payload,
        error: { errorName: false },
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    case GET_ACTIVITY_COUNTRIES:
      return {
        ...state,
        activityCountries: [...state.activityCountries, payload],
      };

    case FILTER_ACTIVITY_COUNTRIES:
      const filtering = [
        ...state.activityCountries.filter((c) => c !== payload),
      ];
      return {
        ...state,
        activityCountries: filtering,
      };

    case CLEAR_ACTIVITY_COUNTRIES:
      return {
        ...state,
        activityCountries: [],
      };

    case RESPONSIVE_BURGER:
      return {
        ...state,
        burger: [payload],
      };

    default:
      return state;
  }
};

export default rootReducer;
