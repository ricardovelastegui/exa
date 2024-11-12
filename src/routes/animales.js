const express = require('express');
const router = express.Router();
const { procesarAnimales, obtenerAnimales, obtenerColorAnimal } = require('../controllers/animalesController');

// Ruta POST para agregar animales
router.post('/', procesarAnimales);

// Rutas GET para mostrar todos los animales salvajes o domésticos
router.get('/salvajes', (req, res) => {
    const animales = obtenerAnimales('salvajes');
    res.json(animales);
});

router.get('/domesticos', (req, res) => {
    const animales = obtenerAnimales('domesticos');
    res.json(animales);
});

// Ruta GET para obtener el color de un animal específico en salvajes
router.get('/salvajes/:animal', (req, res) => {
    const { animal } = req.params;
    const color = obtenerColorAnimal('salvajes', animal);
    if (color) {
        res.json({color });
    } else {
        res.status(404).json({ error: "Animal no encontrado" });
    }
});

// Ruta GET para obtener el color de un animal específico en domésticos
router.get('/domesticos/:animal', (req, res) => {
    const { animal } = req.params;
    const color = obtenerColorAnimal('domesticos', animal);
    if (color) {
        res.json({color });
    } else {
        res.status(404).json({ error: "Animal no encontrado" });
    }
});

module.exports = router;
