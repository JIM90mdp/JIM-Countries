const { Router } = require("express");

const router = Router();

const countriesRouter = require('./countries');
const activitiesRouter = require('./activities');

router.use('/countries', countriesRouter);
router.use('/activities', activitiesRouter); 


// router.post("/activities/bulk", async (req, res) => {
//   console.log(req.body);
//   try {
//     const data = req.body;
//     const newActivity = await Activity.bulkCreate(data);
//     res.status(201).send(newActivity);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

module.exports = router;
