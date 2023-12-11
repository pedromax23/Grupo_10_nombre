const express = require ("express"); 
const app =express();
const path = require("path");

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

// Login Ruta
const loginRouter = require("./routes/loginRouter")
app.use('/login', loginRouter)

// Carrito de compras Ruta
const carritoRouter = require("./routes/carritoRouter")
app.use('/carrito-de-compras', carritoRouter)



app.post("/login", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/register.ejs"))/* hace que el button enviar del login me lleve a la pagina ppal o index */
});