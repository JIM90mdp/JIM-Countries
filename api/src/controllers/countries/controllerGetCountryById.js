const { Country, Activity } = require("../../db");

const getCountryById = async (id) => {

  try {

    return await Country.findByPk(id.toUpperCase(), {
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season", "startDate"],
        through: {
          attributes: [],
        },
      },
    });

  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getCountryById };
