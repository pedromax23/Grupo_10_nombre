const express = require ("express");
const app = express();
const path = require("path");
const override= require("method-override"); //para poder usar los metodos PUT y DELETE
const session = require('express-session'); // Requerimos express-session
const cookies = require('cookie-parser'); // Requerimos cookie-parser
const userExist = require('./middleware/global/userExist.js') // Verifica si hay un usuario logeado anteriormente
const error404Middleware= require('../src/middleware/global/error404Middleware.js');

const cors = require('cors')
app.use(cors())

// Configurando EJS ()
app.set('views', path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, "../public"))); // Archivos estaticos

//Configuracion
app.use(express.urlencoded({extended:false})); //para tomar los datos del formulario
app.use(express.json()); //para tomar los datos del formulario
app.use(override("_method")) //para poder usar los metodos PUT y DELETE

// Configuracion de Session
app.use(session({
    secret: "Mensaje secreto",
    resave: false,
    saveUninitialized: true
}));

app.use(cookies()); // Para usar las cokies
app.use(userExist)

const mainRuoter = require("./routes/mainRouter");// Main Ruta
const productRouter = require("./routes/productRouter");// Product Ruta
const usersRouter = require("./routes/usersRouter");// Users Ruta
app.use('/', mainRuoter);
app.use('/productos', productRouter);
app.use('/user', usersRouter)

// API
const usersRouterAPI = require("./routes/api/usersApi");
const productsApi = require("./routes/api/productsApi.js");
app.use('/api/users', usersRouterAPI)
app.use('/api/products', productsApi)

//Es el Middleware que se ejecuta al final de todos.
app.use(error404Middleware);
// Iniciando el servidor
app.listen(3030, () => console.log("Servidor corriendo en el puerto: http://localhost:3030/"));