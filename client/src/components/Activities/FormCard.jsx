import React from "react";
import { useDispatch } from "react-redux";
import { filterActivityCountries } from "../../redux/actions";
import "../Activities/FormCard.css"

export default function FormCard(props) {
  const dispatch = useDispatch();
  const { id, name, flag } = props;

  const handleClick = () => {
    dispatch(filterActivityCountries(id))
  };

  return (
    <div className="card-form-container">
      <img src={flag} alt={name} className="card-form_flag" />
      <div className="card-form-container__btn-name">
        <button onClick={handleClick} className="card-form-container__x-button">
          X
        </button>
        <div>{name}</div>
      </div>
    </div>
  );
}
