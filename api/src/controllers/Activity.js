const { Country, Activity, country_activity } = require("../db");
const { Op } = require("sequelize");

const addActivity = async (dataQuery) => {
  try {
    const { name, difficulty, duration, season, countryId } = dataQuery;
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      countryId
    });
    // Seteamos la actividad por medio del siguiente método que viene de haber establecido la relación entre las tablas
    // Métodos setCountry y addCountry  
    // utilizamos add, ya que puede tener varias actividades.
    // si solo pudiera tener una actividad, utilizaríamos el método setCountry
    await newActivity.addCountry(countryId);
    return await Activity.findByPk(newActivity.id, {
      include: {
        model: Country,
        attributes: ["name", "flag"],
        through: {
          attributes: ["countryId", "activityId"],
        },
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

const getActivities = async (name) => {
  try {
    let result;
    if (name) {
      result = await Activity.findAll({
        where: { name: name },
        include: Country,
      });
      return result;
    } else {
      result = await Activity.findAll({
        order: ["id"],
        include: {
          model: Country,
          attributes: ["name", "flag"],
          through: {
            attributes: ["countryId", "activityId"],
          },
        },
      });
    }
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  addActivity,
  getActivities,
};
