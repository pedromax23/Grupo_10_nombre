const db = require('../../database/models')
const User = db.User;

// Funcion asyncronica
async function userLoggedMiddleware(req, res, next) {    
    res.locals.estaLogeado = false; // Establece el valor false dentro de (res.locals.estaLogeado)
    
    if(req.session.usuarioLogeado) {
        res.locals.estaLogeado = true;
        res.locals.usuarioLogeado = req.session.usuarioLogeado;
    }
    
    let emailCokie = req.cookies.userEmail; // En la variable (emailCokie) se guarda el valor de la cokie antes almacenada
    
    try {
        // Si existe una cokie almacenada...
        if (emailCokie) {

            const user = await User.findAll({
                where: {
                    email: emailCokie
                }
            })

            let usuarioALogear = user[0]
            // Si existe el usuario logeado guradamos sus datos en el session y en locals
            if (usuarioALogear) {
                req.session.usuarioLogeado = usuarioALogear;
                res.locals.estaLogeado = true;
                res.locals.usuarioLogeado = req.session.usuarioLogeado;
            }
        }
    } catch (error) {
        console.error('Error en userLoggedMiddleware:', error);
        return res.status(500).send('Error en la consulta a la base de datos');
    }

    next();
}

module.exports = userLoggedMiddleware;
