//Si la pagina no existe devolvera un error 404
//y adicionalmente, renderizará la vista que hayamos preparado
//para ese escenario.
function error404Middleware(req, res){
    res.status(404).render('products/404-page'); //Valida acá si la pagina existe ? Se utiliza con ejs el render solamente ?
}                                     

module.exports= error404Middleware;