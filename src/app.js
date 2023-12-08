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
app.use('/', productRouter);


app.get("/quienes-somos", (req, res) => res.sendFile(path.join(__dirname, "./views/quienes-somos.html")));

app.post("/login", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/register.html"))/* hace que el button enviar del login me lleve a la pagina ppal o index */
});


/* que el boton registar del login me lleve a register.html */

app.get("/carrito-de-compras", (req, res) => res.sendFile(path.join(__dirname, "./views/carrito-de-compras.html")))
app.get("/como-comprar", (req, res) => res.sendFile(path.join(__dirname, "./views/como-comprar.html")))
app.get("/contacto", (req, res) => res.sendFile(path.join(__dirname, "./views/contacto.html")))
app.get("/hace-tu-pedido", (req, res) => res.sendFile(path.join(__dirname, "./views/hace-tu-pedido.html")))
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "./views/login.html")))
app.get("/politica-devolucion", (req, res) => res.sendFile(path.join(__dirname, "./views/politica-devolucion.html")))

app.get("/preguntas", (req, res) => res.sendFile(path.join(__dirname, "./views/preguntas.html")))

app.get("/productos", (req, res) => res.sendFile(path.join(__dirname, "./views/productos.html")))
app.get("/terminos", (req, res) => res.sendFile(path.join(__dirname, "./views/terminos.html")))