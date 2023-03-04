const { Router } = require("express");
const { getCountryById } = require("../../controllers/countries/controllerGetCountryById");

const { Activity } = require("../../db");

const router = Router();

// GET /countries/:id
router.get("/:id", async (req, res) => {

  let { id } = req.params;

  try {

    const result = await getCountryById(id.toUpperCase(), {
      include: [Activity],
    });

    res.status(200).send(result);

  } catch (error) {
    res.status(400).send(error.message);
  }
  
});

module.exports = router;
