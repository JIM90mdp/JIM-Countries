import React from "react";
import { Link } from "react-router-dom";
import clip from "../../assets/PIA10120_anno.mp4";

import "../LandingPage/LandingPage.css"


export default function LandingPage() {
  return (
    <div className="landing__container">
      <video autoPlay loop muted  className="landing-container__video">
        <source src={clip} type="video/mp4" />
        <source src={clip} type="video/ogg" />
      </video>
      <div className="landing-container__welcome">
        <h1> WELCOME</h1>
        <Link to="/home" className="landing-container__link">
          <button> Start </button>
        </Link>
      </div>
    </div>
  );
}
