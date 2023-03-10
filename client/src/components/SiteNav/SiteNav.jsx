import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import BurgerBtn from "../BurgerButton/BurgerBtn";
import { useDispatch } from "react-redux";
import { burgerState } from "../../redux/actions";

import "../SiteNav/SiteNav.css";

export default function SiteNav() {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="site-nav__container">
      <Link to="/" className="site-nav__link">
        <button>JIM+'s Landing</button>
      </Link>
      <SearchBar />
      <Link to="/about" className="site-nav__link">
        <button>About</button>
      </Link>
      <div className="site-nav__burger">
        <BurgerBtn clicked={clicked} handleClick={handleClick} />
      </div>
    </div>
  );
}
