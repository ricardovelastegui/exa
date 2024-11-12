const express = require('express');
const router = express.Router();

const coloresRoutes = require('./colores');
const animalesRoutes = require('./animales');

router.use('/colores', coloresRoutes);
router.use('/animales', animalesRoutes);

module.exports = router;
