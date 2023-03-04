const { Country, Activity } = require("../../db");

const addActivity = async (dataQuery) => {
  try {

    const { name, difficulty, duration, season, countryId, startDate } = dataQuery;

    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      countryId,
      startDate
    });

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

module.exports = {
  addActivity,
};
