const { Router } = require("express");
const { getActivities } = require("../../controllers/activities/controllerGetActivities");

const router = Router();

// GET /activities
router.get("/", async (req, res) => {
  let { name } = req.query;

  try {

    const result = await getActivities(name);

    res.status(200).send(result);

  } catch (error) {
    res.status(400).send(error.message);
  }
  
});

module.exports = router;
