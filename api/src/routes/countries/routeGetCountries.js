const { Router } = require("express");

const { Country } = require("../../db");
const { getCountries } = require("../../controllers/countries/controllerGetCountries");
const { getCountryByName } = require("../../controllers/countries/controllerGetCountryByName");

const router = Router();

// GET /countries
router.get("/", async (req, res) => {

  let { name } = req.query;

  try {

    const bdd = await Country.count();

    if (!bdd) await getCountries();

    const result = await getCountryByName(name);

    res.status(200).send(result);

  } catch (error) {
    res.status(400).send(error.message);
  }
  
});

module.exports = router;
