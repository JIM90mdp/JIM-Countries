const { Router } = require('express');

const getCountries = require('./routeGetCountries');
const getCountrie = require('./routeGetCountrie');

const router = Router();

const path = '/';

router.use(path, getCountries);
router.use(path, getCountrie);

module.exports = router;