const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const getCountryByName = async (name) => {

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
          include: {
            model: Activity,
            attributes: ["name"],
            through: {
              attributes: ["countryId", "activityId"],
            },
          },
        });
      }

      return response.map((c) => {
        return {
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

  module.exports = { getCountryByName };
  