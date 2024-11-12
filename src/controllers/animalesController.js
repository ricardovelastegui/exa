// JSON para almacenar los animales mientras el servidor está activo
let animalesData = {
    domesticos: [],
    salvajes: []
};

// Función para procesar la petición POST de "animales"
function procesarAnimales(req, res) {
    const { tipo, animal, color } = req.body;

    if (!tipo || !animal || !color) {
        return res.status(400).json({ error: "Faltan parámetros en la petición" });
    }

    const animales = tipo === 'domesticos' ? animalesData.domesticos : animalesData.salvajes;

    // Verificar si el animal ya existe
    if (animales.find(a => a.animal === animal)) {
        return res.status(400).json({ error: "El animal ya está registrado" });
    }

    // Agregar el animal si aún no hay 5
    if (animales.length < 5) {
        animales.push({ animal, color });
        console.log(animalesData); // Mostrar el objeto completo en consola
        res.status(201).json(animalesData);
    } else {
        res.status(400).json({ error: "Ya se han registrado 5 animales de este tipo" });
    }
}

// Función para obtener animales según el tipo
function obtenerAnimales(tipo) {
    return tipo === 'domesticos' ? animalesData.domesticos : animalesData.salvajes;
}
function obtenerColorAnimal(tipo, animal) {
    const animales = tipo === 'domesticos' ? animalesData.domesticos : animalesData.salvajes;
    const animalEncontrado = animales.find(a => a.animal.toLowerCase() === animal.toLowerCase());
    return animalEncontrado ? animalEncontrado.color : null;
}

module.exports = { procesarAnimales, obtenerAnimales,obtenerColorAnimal };
