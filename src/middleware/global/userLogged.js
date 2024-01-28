const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/users.json');
const fs = require('fs')

// Funcion asyncronica
async function userLoggedMiddleware(req, res, next) {    
    res.locals.estaLogeado = false; // Establece el valor false dentro de (res.locals.estaLogeado)
    
    if(req.session.usuarioLogeado) {
        res.locals.estaLogeado = true
    }
    
    let emailCokie = req.cookies.userEmail; // En la variable (emailCokie) se guarda el valor de la cokie antes almacenada
    
    try {
        // Si existe una cokie almacenada...
        if (emailCokie) {
            const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
            // Buscamos el usuario logeado
            let usuarioALogear = users.find(usuario => usuario.email === emailCokie) 
            
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
