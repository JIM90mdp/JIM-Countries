const { default: axios } = require("axios");
const { Country } = require("../../db");

const PATH = "https://restcountries.com/v3/all";

const diacriticsOff = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036fÅ]/g, "");
};

const getCountries = async () => {

  try {

    let apiData = await axios.get(PATH);

    apiData = apiData.data.map((c) =>
      Country.findOrCreate({
        where: {
          id: c.cca3,
          name: diacriticsOff(c.name.common),
          flag: c.flags[1] ? c.flags[1] : "No flag",
          continent: c.continents[0],
          region: c.region ? c.region : c.continent[0],
          capital: c.capital ? c.capital[0] : c.name.common,
          subregion: c.subregion ? c.subregion : c.region,
          area: c.area,
          population: c.population,
        },
      })
    );
    
    return apiData;

  } catch (error) {
    console.error(error.message);
  }

};

module.exports = { getCountries };
