const express = require('express');
const router = express.Router();

// Ruta GET de ejemplo para colores
router.get('/', (req, res) => {
    res.send("Ruta GET para colores");
});

// Ruta POST de ejemplo para colores
router.post('/', (req, res) => {
    res.send("Ruta POST para colores");
});

module.exports = router;
