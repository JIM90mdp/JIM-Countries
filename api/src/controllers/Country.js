const { default: axios } = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const PATH = "https://restcountries.com/v3/";

// let filteredCountries = await countriesList.filter((c) =>
//   c.name
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .toLowerCase()
//     .includes(
//       name
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .toLowerCase()
//     )
// );

const diacriticsOff = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036fÅ]/g, "");
};
const getCountries = async () => {
  try {
    let apiData = await axios.get("https://restcountries.com/v3/all");
    apiData = apiData.data.map((c) =>
      Country.findOrCreate({
        where: {
          id: c.cca3 ? c.cca3 : "Nid",
          name: diacriticsOff(c.name.common),
          flag: c.flags[1] ? c.flags[1] : "No flag",
          continent: c.continents[0],
          region: c.region ? c.region : c.continent[0],
          capital: c.capital ? c.capital[0] : c.name.common,
          subregion: c.subregion ? c.subregion : c.region,
          area: c.area ? c.area : "No area",
          population: c.population ? c.population : 000,
        },
      })
    );
    return apiData;
  } catch (error) {
    console.error(error.message);
  }
};

const getCountryByName = async (name) => {
  console.log(`name = ${name}`);
  try {
    let response;
    if (name) {
      response = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: ["countryId", "activityId"],
          },
        },
      });
    } else {
      response = await Country.findAll({
        // incluimos a la hora de mostrar datos lo siguiente:
        include: {
          // nested associated model's
          model: Activity,
          // only show tha name attributes
          attributes: ["name"],
          // If you don't want the nested grant field at all, use attributes: []:
          through: {
            attributes: ["countryId", "activityId"],
          },
        },
      });
    }
    // if (response.length == 0) throw new Error(`getCountryByName ${name} not found`)
    return response.map((c) => {
      return {
        // la función busca en la BDD, donde las propiedades ya están definidas por el modelo.
        id: c.id,
        name: c.name,
        continent: c.continent,
        region: c.region,
        flag: c.flag,
        population: c.population,
        activities: c.activities,
      };
    });
  } catch (error) {
    console.error(`el nombre => ${name},arroja error => ${error.message}`);
  }
};

const getCountryByID = async (id) => {
  try {
    return await Country.findByPk(id.toUpperCase(), {
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getCountries,
  getCountryByName,
  getCountryByID,
};
