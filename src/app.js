const express = require('express');
const app = express();

// Configuración del puerto
const PORT = 8085;

// Middleware para interpretar JSON
app.use(express.json());

// Mensaje de inicio con los nombres y paralelos
const integrantes = [
    { nombre: "Nombre 1", paralelo: "Paralelo 1" },
    { nombre: "Nombre 2", paralelo: "Paralelo 2" }
];

app.get('/', (req, res) => {
    const mensaje = `Integrantes:\n${integrantes.map(int => `Nombre: ${int.nombre}, Paralelo: ${int.paralelo}`).join('\n')}`;
    console.log(mensaje);
    res.send(`<pre>${mensaje}</pre>`);
});

// Rutas
const routes = require('./routes');
app.use('/', routes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
