function validarUsuario (req, res, next) {
    if(req.session.usuarioLogeado.category_id == 3) {
        res.redirect('/user/profile')
    }

    next()
}

module.exports = validarUsuario;