const { Router } = require('express');

const postActivity = require('./routePostActivity');
const getActivities = require('./routeGetActivities');

const router = Router();

const path = '/';

router.use(path, getActivities);
router.use(path, postActivity);

module.exports = router;