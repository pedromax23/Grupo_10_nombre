const express = require ("express");
const app =express();
const path = require("path");
const override= require("method-override"); //para poder usar los metodos PUT y DELETE

//Configuracion
app.use(express.urlencoded({extended:false})); //para tomar los datos del formulario
app.use(express.json()); //para tomar los datos del formulario
app.use(override("_method")) //para poder usar los metodos PUT y DELETE



// Archvos estaticos
app.use(express.static(path.resolve(__dirname, "../public")));

// Iniciando el servidor
app.listen(3030, () => console.log("Servidor corriendo en el puerto: http://localhost:3030/"));

// Configurando EJS
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "views"));

// Main Ruta
const mainRuoter = require("./routes/mainRouter");
app.use('/', mainRuoter);

// Product Ruta
const productRouter = require("./routes/productRouter");
app.use('/productos', productRouter);

// Users Ruta
const usersRouter = require("./routes/usersRouter");
app.use('/user', usersRouter)