const { Country, Activity } = require("../../db");


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


module.exports = { getActivities };
