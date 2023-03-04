import React from "react";
import { Link } from "react-router-dom";
import clip from "../../assets/PIA10120_anno.mp4";

import "../LandingPage/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing__container">
      <video autoPlay loop muted className="landing-container__video">
        <source src={clip} type="video/mp4" />
        <source src={clip} type="video/ogg" />
      </video>
      <div className="landing-container__welcome">
        <h1> Welcome to JIM's Countries </h1>
        <h2>
          {" "}
          Your ultimate source of information about every country in the world!{" "}
        </h2>
        <div className="container__welcome-start-btn">
          <span> So why wait? </span>
          <Link to="/home" className="landing-container__link">
            <button> Start </button>
          </Link>
          <h3>
            Start your journey today and discover the amazing world of JIM's
            Countries!{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}
