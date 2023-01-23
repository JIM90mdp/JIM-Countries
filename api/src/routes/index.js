const { Router } = require("express");
const {
  getCountries,
  getCountryByName,
  getCountryByID,
} = require("../controllers/Country");
const { addActivity, getActivities } = require("../controllers/Activity");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity } = require("../db");

const ERROR = "Error @ controllers/";

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// function que va a estar encargada de llamar una sola vez a la ruta de la API
// con la info que recuperas la inyectas en la bDD -- > getCountries()
// desde las rutas consultar a la bdd.

// ---- GET /countries ----

router.get("/countries", async (req, res) => {
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

router.get("/countries/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const result = await getCountryByID(id.toUpperCase(), {
      include: [Activity],
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// ---- GET /activities ----

router.get("/activities", async (req, res) => {
  let { name } = req.query;
  try {
    const result = await getActivities(name);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// --- POST ---

router.post("/activities", async (req, res) => {
  console.log(req.body);
  try {
    // const { name, difficulty, duration, season } = req.body;
    const newActivity = await addActivity(req.body);
    res.status(201).send(newActivity);
  } catch (error) {
    res.status(400).send(`${ERROR}addActivity --> ${e}`);
  }
});

router.post("/activities/bulk", async (req, res) => {
  console.log(req.body);
  try {
    const data = req.body;
    const newActivity = await Activity.bulkCreate(data);
    res.status(201).send(newActivity);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
