const { Router } = require("express");
const { addActivity } = require("../../controllers/activities/controllerPostActivity");

const router = Router();

// POST /activities
router.post("/", async (req, res) => {

  try {
    const newActivity = await addActivity(req.body);

    res.status(201).send(newActivity);

  } catch (error) {
    res.status(400).send(`${ERROR}addActivity --> ${e}`);
  }
  
});

module.exports = router;
