import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { burgerState } from "../../redux/actions";
import "../Menu/Menu.css";

export default function Menu(props) {
  const dispatch = useDispatch();
  const handleClick = (e) => {};

  return (
    <div className="menu__container">
      <div className="menu__site-nav">
        <Link to="/home" className="link">
          <button
            value="Go Back"
            className="menu__site-nav__btn"
            onClick={(e) => handleClick(e)}
          >
            {" "}
            Go Back
          </button>
        </Link>
      </div>
      <div className="menu__links-container">
        <Link to="/about" className="links-container__link">
          <button className="links-container__btn">About</button>
        </Link>
        <Link to="/" className="links-container__link">
          <button className="links-container__btn">JIM+'s Landing</button>
        </Link>
      </div>
    </div>
  );
}
