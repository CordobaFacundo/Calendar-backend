//Iniciamos con npm run dev que activa nodemon

const express = require('express');
require('dotenv').config(); //Cargar las variables de entorno desde el archivo .env





//Crear el servidor de express
const app = express();

//Directorio público
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
//CRUD de eventos


//Escuchar peticiones HTTP
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});