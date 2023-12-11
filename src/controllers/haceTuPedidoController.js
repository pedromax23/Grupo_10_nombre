//Creamos el objeto literal correspondiente al recurso Hace tu pedido-Capa controlador 
const controller = {
    index: function(req, res) {
        res.render('hace-tu-pedido');
    }

}

//Exportamos controller para requerirlo en haceTuPedidoRouter.js
module.exports = controller;