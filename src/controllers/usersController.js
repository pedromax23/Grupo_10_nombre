const { validationResult } = require('express-validator');
const db = require('../database/models')
const sequelize = db.sequelize;

const bcrypt = require('bcryptjs');

const User = db.User;
const User_category = db.User_category;

const controller = {
    login: function(req, res) {
        res.render('users/login')
    },

    loginPOST: async function(req, res) {
        
        let errors = validationResult(req) // Validamos los errores del formulario
        try {
            if(!errors.errors.length > 0) {
                const usuarioALogear = await User.findAll({
                    where: {
                        user_name: req.body.name
                    }
                })

                let check= bcrypt.compareSync(req.body.password, usuarioALogear[0].password);
                if(usuarioALogear) {
                    if(check) {
                        delete usuarioALogear.password;
                        req.session.usuarioLogeado = usuarioALogear[0];
                        res.locals.logeado = true;
                        
                        if(req.body.recordame) {
                            res.cookie('userEmail', usuarioALogear[0].email, {maxAge: 1000 * 60 * 60 * 60 * 60})
                        }
                    } else {
                        return res.render("users/login", {errors: {password: {msg: 'Contraseña incorrecta'}}, old:req.body})
                    }
                }

                return res.redirect('/')
            } else {
                return res.render("users/login", {errors: errors.mapped(), old:req.body})
            }
        } catch(error) {
            res.send(error)
        }
    },

    register: function(req, res) {
        res.render('users/register')
    },

    registerPOST: async function(req, res) {
        let errors = validationResult(req) // Validamos los errores del formulario
        try {
            if (!errors.errors.length > 0) {
                // Encriptamos la contraseña
                let passEncriptada = bcrypt.hashSync(req.body.password,10);

                let nuevoUsuario = {
                    name: req.body.name,
                    last_name: req.body.last_name,
                    user_name: req.body.user_name,
                    email: req.body.email,
                    password: passEncriptada,
                    birth_date: req.body.birth_date,
                    address: req.body.address, 
                    comment: req.body.comment,
                    img:  req.file ? req.file.filename : 'no-image-user.jpg',
                }

                // Creamos el usuario en MySQL
                const userCreate = await User.create(nuevoUsuario);
                res.redirect('/user/login')
            } else {
                res.render ("users/register", {errors: errors.mapped(), old:req.body}) //redireccionamos si hay errores en el formulario
            }
        } catch(error) {
            res.send(error)
        }
    },

    perfil: async function(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.session.usuarioLogeado.email
                }
            })

            res.render('users/userProfile', {user});
        } catch(error) {
            res.send(error)
        }
    },

    deslogeo: function(req, res) {
        req.session.destroy();
        res.clearCookie('userEmail')
        return res.redirect('/')
    },

    cambiarContraseña: async function(req, res) {
        try {
            const usuario = await User.findByPk(req.params.id);
            if (!usuario) {
                return res.status(404).send("Usuario no encontrado"); 
            }

            res.render('users/cambiarPassword', {usuario: usuario})
        }
        catch(error) {
            res.send(error)
        }
    },

    cambiarContraseñaPOST: async function(req, res) {
        try {
            const usuario = await User.findByPk(req.params.id);
            console.log(usuario)
            if (!usuario) {
                return res.status(404).send("Usuario no encontrado"); 
            };

            if(bcrypt.compareSync(req.body.contraseña, usuario.password)) {

                let nuevaContraseña = bcrypt.hashSync(req.body.nuevaContraseña, 12)
                await usuario.update({password: nuevaContraseña});
                req.session.destroy();
                res.clearCookie('userEmail')
                res.redirect('/user/login')

            } else {

                res.send('Contraseña erroñea')

            };
        }
        catch(error) {
            res.send(error)
        }
    },

    notLogin: (req, res) => {
        res.render('users/notLogin')
    },
}

module.exports = controller;