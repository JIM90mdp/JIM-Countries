import React from "react";
import "../Countries/CountryCard.css";

export default function CountryCard({ name, flag, continent, id }) {
  return (
    
      <div className="country-card__container">
        <div className="country-card__name-container">
          <div className="name-container__name">{name.toUpperCase()}</div>
        </div>
        <img src={flag} alt="img not found" className="country-card__flag" />
        <div className="country-card__continent-container">
          <h5 className="continent-container__continent">{continent}</h5>
        </div>
      </div>
    
  );
}
