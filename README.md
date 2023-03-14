# **COUNTRIES WEB**

![countries-home](/client/src/assets/JIM-Countries.png)

## About the Web

Hi everyone! This website was created as an individual project of **`SoyHenry's`** Full-Stack Web Development bootcamp.

The purpose of JIM's Countries website is to provide information about all countries in the world and create activities, making the tourist trip planning easier.

The information is provided by RESTful Application Program Interface restcountries.com

## General objetives

Affirm and connect the concepts learned in the bootcamp.
Use pure CSS, CSS Modules or Styled components. (Do not use external libraries to apply styles to the application.)
Do not use external API endpoints that already return filtered or sorted results

## Data Base

![Sequelize](https://img.shields.io/badge/-Sequelize-696969?style=flat&logo=Sequelize)   ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-696969?style=flat&logo=postgreSQL&logoColor=blue) 

Table Model for all countries. The database model should have the following entities: ID, Name, Flag, Continent and Capital City
Table model for all tourist activities. The database model should have the following entities: ID, Name, Difficulty level, Duration and Season.
Relations Table between "Countries" and "Activities" Models with a "many-to-many" cardinality.

## Back-End

![Node.js](https://img.shields.io/badge/-Node.js-696969?style=flat&logo=node.js) ![Express](https://img.shields.io/badge/-Express-696969?style=flat&logo=express) 

**`Required routes`**

GET request to obtain information from all countries from the RESTful API and save it to the SQL database
GET request to obtain detailed information of a specific country
GET request to find countries by name
POST request to create a new tourist activity and save it in the database.

## Front-End

![React](https://img.shields.io/badge/-React-696969?style=flat&logo=react)  ![Redux](https://img.shields.io/badge/-Redux-696969?style=flat&logo=redux)  

**`Home page`**

(Landing page) with a button to access Home (`Main route`)

**`Main route`**

Search input to find countries by name
Area where you will see the list of countries showing flag, name, continent.
Buttons/Options to filter countries by continent and by type of tourist activity
Buttons/Options to sort both ascending and descending countries by alphabetical order and by amount of population
Pagination showing 9 countries on the first page and then 10 countries per page.

**`Country Detail Route`**

Show ID, Name, Capital City, Subregion, Area, Population, Tourist Activities and its complete information

**`Tourist activity creation route`**

A JavaScript controlled form with the following fields: Activity Name, Difficulty, Duration, Season
Possibility to select/add several countries simultaneously
Submit Button

## Technologies Used:

![JavaScript](https://img.shields.io/badge/-JavaScript-696969?style=flat&logo=javascript)  
![React](https://img.shields.io/badge/-React-696969?style=flat&logo=react)  
![Redux](https://img.shields.io/badge/-Redux-696969?style=flat&logo=redux)  
![HTML5](https://img.shields.io/badge/-HTML5-696969?style=flat&logo=HTML5)  
![CSS](https://img.shields.io/badge/-CSS-696969?style=flat&logo=CSS3&logoColor=1572B6)  
![Node.js](https://img.shields.io/badge/-Node.js-696969?style=flat&logo=node.js)  
![Express](https://img.shields.io/badge/-Express-696969?style=flat&logo=express)  
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-696969?style=flat&logo=postgreSQL&logoColor=blue)  
![Sequelize](https://img.shields.io/badge/-Sequelize-696969?style=flat&logo=Sequelize)  
![Vercel](https://img.shields.io/badge/-Vercel-696969?style=flat&logo=Vercel)  
 ![Git](https://img.shields.io/badge/-Git-696969?style=flat&logo=git)  
 ![GitHub](https://img.shields.io/badge/-GitHub-696969?style=flat&logo=github)  
 ![VS](https://img.shields.io/badge/-Visual_Studio_Code-696969?style=flat&logo=visual%20studio&logoColor=blue)

This link will take you to the web page: **[JIM's Countries App](https://jim-countries-vbeb.vercel.app/ "JIM's Countries App")**, _let me know your comments and suggestions!_

<h3> 🤝🏻 &nbsp;Connect with me through: </h3>

<p align="center">
<a href="https://www.linkedin.com/in/mascarenhas-developer/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Juan%20Ignacio%20Mascarenhas-blue?style=flat-square&logo=linkedin"></a>
<a href="mailto:juanignaciomascarenhas@gmail.com"><img alt="Outlook" src="https://img.shields.io/badge/MS-Outlook-blue?style=flat-square&logo=microsoft-outlook&logoColor=white"></a>
</p>

⭐️ Link to my GitHub profile: [JIM90mdp](https://github.com/JIM90mdp)
