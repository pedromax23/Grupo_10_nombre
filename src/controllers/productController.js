//Creamos el objeto literal correspondiente al recurso Producto-Capa controlador 
const controller = {
    index: function(req, res) {
        res.render('productos')
    },
    crear: (req,res)=>{
        res.render('crearProducto');
    },
    editar: (req,res)=>{
        res.render("editarProducto");
    }
}

//Exportamos controller para requerirlo en productRouter.js
module.exports = controller;