//Capa controlador- Lógica de negocio
const controller = {
    index: function(req, res) {
        res.render('main/index')
    },
    crear: function(req,res){
        res.render('products/crearProducto');
    },
    editar: (req,res)=>{
        res.render('products/editarProducto');
    }

}

module.exports = controller;