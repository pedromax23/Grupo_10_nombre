function authMiddleware (req, res, next) {
    // Verificamos si no hay un usuario logeado, de ser asi redireccionamos a la persona al login
    if ( !req.session.usuarioLogeado ) {
        return res.redirect('/user/notLogin')
    }
    next()
}

module.exports = authMiddleware;