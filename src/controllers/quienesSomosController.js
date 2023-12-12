//Creamos el objeto literal correspondiente al recurso Quienes sOMOS-Capa controlador 
const controller = {
    index: function(req, res) {
        res.render('main/quienes-somos');
    }

}

//Exportamos controller para requerirlo en quienesSomosRouter.js
module.exports = controller;