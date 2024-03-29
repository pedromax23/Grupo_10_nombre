function validarUsuario (req, res, next) {
    if(req.session.usuarioLogeado.category_id == 2) {
        
        res.redirect('/user/profile')
    }

    next()
}

module.exports = validarUsuario;