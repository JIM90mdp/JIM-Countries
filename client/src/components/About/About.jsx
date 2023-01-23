import React, { useState } from "react";
import { Link } from "react-router-dom";
import CSS3SVG from "../../assets/CSS3SVG";
import EmailSVG from "../../assets/emailSVG";
import ExpressSVG from "../../assets/expressSVG";
import GitHubSVG from "../../assets/GitHubSVG";
import HTMLSVG from "../../assets/htmlSVG";
import JavaScriptSVG from "../../assets/javaScriptSVG";
import LinkedinSVG from "../../assets/linkedinSVG";
import NodeJsSVG from "../../assets/nodeJsSVG";
import PostreSQLSVG from "../../assets/postgreSQLSVG";
import ReactSVG from "../../assets/reactSVG";
import ReduxSVG from "../../assets/reduxSVG";
import SequelizeSVG from "../../assets/sequelizeSVG";

import "../About/About.css";

export default function About() {
  const [state, setState] = useState("Project");

  const handleClick = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="about__container">
      <div className="about__site-nav">
        <Link to="/home" className="site-nav__link">
          <button> Go Back</button>
        </Link>
        <div className="site_about">
          <button
            value="Project"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {" "}
            About Project
          </button>

          <button
            value="Me"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {" "}
            About Me
          </button>
        </div>
      </div>

      {state === "Project" ? (
        <div className="about__project-article">
          <div>
            <div className="project-article__stack-section">
              <div className="stack-section__header-section">
                This website was created as an individual project of{" "}
                <span>
                  <a
                    href="https://www.soyhenry.com/"
                    rel="noreferrer"
                    target="_blank"
                    referencepolicy="no-referrer-when-downgrade"
                    className="site-nav__link"
                  >
                    SoyHenry
                  </a>
                </span>
                's Full-Stack Web Development bootcamp.
              </div>

              <div>
                <div className="stack-section__header-section">
                  {" "}
                  The purpose of J.I.M+'s Countries website is to provide
                  information about all countries in the world and create
                  activities, making the tourist trip planning easier.
                </div>
                <div className="stack-section__header-section">
                  The information is provided by RESTful Application Program
                  Interface{" "}
                  <span>
                    <a
                      href="https://restcountries.com/"
                      rel="noreferrer"
                      // _blanck => abre el link en otra pestaña!!
                      target="_blank"
                      referencepolicy="no-referrer-when-downgrade"
                      className="site-nav__link"
                    >
                      restcountries.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="project-article__stack-section">
              <div className="stack-section__title">General objetives </div>
              <div className="stack-section__subsection">
                <div className="subsection__list-container">
                  <ul className="list-container__list">
                    <li>
                      Affirm and connect the concepts learned in the bootcamp.
                    </li>
                    <li>
                      Use pure CSS, CSS Modules or Styled components. (Do not
                      use external libraries to apply styles to the
                      application.)
                    </li>
                    <li>
                      Do not use external API endpoints that already return
                      filtered or sorted results
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-article__stack-section">
              <div className="stack-section__title">
                Data Base{" "}
                <div className="stack-section__iconSVG">
                  <PostreSQLSVG /> <SequelizeSVG />
                </div>
              </div>
              <div className="stack-section__subsection">
                <div className="subsection__list-container">
                  <ul className="list-container__list">
                    <li>
                      Table Model for all countries. The database model should
                      have the following entities: ID, Name, Flag, Continent and
                      Capital City
                    </li>
                    <li>
                      Table model for all tourist activities. The database model
                      should have the following entities: ID, Name, Difficulty
                      level, Duration and Season.
                    </li>
                    <li>
                      Relations Table between "Countries" and "Activities"
                      Models with a "many-to-many" cardinality.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-article__stack-section">
              <div className="subsection__list-container">
                <div className="stack-section__title">
                  Back-End
                  <div className="stack-section__iconSVG">
                    <NodeJsSVG /> <ExpressSVG />
                  </div>
                </div>
                <div className="stack-section__subsection">
                  <div className="subsection__subtitle">Required routes</div>
                  <ul className="list-container__list">
                    <li>
                      GET request to obtain information from all countries from
                      the RESTful API and save it to the SQL database
                    </li>
                    <li>
                      GET request to obtain detailed information of a specific
                      country
                    </li>
                    <li>GET request to find countries by name</li>
                    <li>
                      POST request to create a new tourist activity and save it
                      in the database.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-article__stack-section">
              <div className="stack-section__title">
                Front-End
                <div className="stack-section__iconSVG">
                  <ReactSVG /> <ReduxSVG />
                </div>
              </div>

              <div className="stack-section__subsection">
                <div className="subsection__subtitle">Home page </div>
                <div className="subsection__list-container">
                  <ul className="list-container__list">
                    <li>
                      (Landing page) with a button to access Home (`Main route`)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="stack-section__subsection">
                <div className="subsection__subtitle">Main route </div>
                <div className="subsection__list-container">
                  <ul className="list-container__list">
                    <li>Search input to find countries by name</li>
                    <li>
                      Area where you will see the list of countries showing
                      flag, name, continent.
                    </li>
                    <li>
                      Buttons/Options to filter countries by continent and by
                      type of tourist activity
                    </li>
                    <li>
                      Buttons/Options to sort both ascending and descending
                      countries by alphabetical order and by amount of
                      population
                    </li>
                    <li>
                      Pagination showing 9 countries on the first page and then
                      10 countries per page.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="stack-section__subsection">
                <div className="subsection__subtitle">
                  Country Detail Route{" "}
                </div>
                <div className="subsection__list-container">
                  <ul className="list-container__list">
                    <li>
                      Show ID, Name, Capital City, Subregion, Area, Population,
                      Tourist Activities and its complete information
                    </li>
                  </ul>
                </div>
              </div>

              <div className="stack-section__subsection">
                <div className="subsection__subtitle">
                  Tourist activity creation route{" "}
                </div>
                <div className="subsection__list-container">
                  <ul className="list-container__list">
                    <li>
                      A JavaScript controlled form with the following fields:
                      Activity Name, Difficulty, Duration, Season
                    </li>
                    <li>
                      Possibility to select/add several countries simultaneously
                    </li>
                    <li>Submit Button</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-article__technologies">
              <div className="technologies__technology-container">
                <JavaScriptSVG />
                <div>JavaScript</div>
              </div>

              <div className="technologies__technology-container">
                <HTMLSVG />
                <div>HTML 5</div>
              </div>

              <div className="technologies__technology-container">
                <CSS3SVG />
                <div>CSS 3</div>
              </div>

              <div className="technologies__technology-container">
                <ReactSVG />
                <div>React</div>
              </div>

              <div className="technologies__technology-container">
                <ReduxSVG />
                <div>Redux</div>
              </div>

              <div className="technologies__technology-container">
                <NodeJsSVG />
                <div>NodeJs</div>
              </div>

              <div className="technologies__technology-container">
                <ExpressSVG />
                <div>Express</div>
              </div>

              <div className="technologies__technology-container">
                <PostreSQLSVG />
                <div>PostegreSQL</div>
              </div>

              <div className="technologies__technology-container">
                <SequelizeSVG />
                <div>Sequelize</div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      ) : (
        <div className="about__project-article">
          <div className="about__me-article">
            <div className="stack-section__title">About Me: </div>
            <div className="list-container__list">
              I’m Juan Ignacio Mascarenhas, a Full Stack Web Developer student.
            </div>
            <div className="list-container__list">
              From the beginning of this learning path my purpose is to enjoy
              and value the process while finding motivation with every
              accomplished goal.
            </div>
            <div className="list-container__list">
              I’m defined by the passion for what I do, the perseverance, the
              temperance to overcome difficult moments, the ambition to continue
              learning, the joy of team working and the strive for constant
              self-improvement.
            </div>
            <div className="list-container__list">
              I am a curious person, avid reader, cheerful and a voracious
              creative.
            </div>
            <cite className="list-container__list">
              {" "}
              <br/>
              “We will deprogram and reprogram the mind to receive the touch and the sound of each note we play. Leaving our negative history in the rearview mirror”. 
            </cite>
            <br/>
            <span>Kenny Werner (jazz pianist) – Effortless mastery</span>
            <div className="list-container__list">
              <p>Feel free to contact me on:</p>
            </div>

            <div className="me-article__contact-me">
              <div className="technologies__technology-container">
                <EmailSVG />
                <div>E-mail</div>
              </div>

              <div className="technologies__technology-container">
                <LinkedinSVG />
                <div className="in">LinkedIn</div>
              </div>

              <div className="technologies__technology-container">
                <GitHubSVG />
                <div>GitHub</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="footer"></div>
    </div>
  );
}
