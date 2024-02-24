const path = require("path"); 
const fs = require("fs"); 
const usersFilePath = path.join(__dirname, '../data/users.json');
const bcrypt = require('bcryptjs');

const db = require('../database/models')
const sequelize = db.sequelize;

const User = db.User;
const User_category = db.User_category;

const controller = {
    login: function(req, res) {
        res.render('users/login')
    },
    loginPOST: async function(req, res) {
        try {
            const usuarioALogear = await User.findAll({
                where: {
                    user_name: req.body.user_name
                }
            })
            console.log(usuarioALogear)

            //Comparamos el texto plano en la contraseña del login con la contraseña encriptada.
            let check= bcrypt.compareSync(req.body.clave, usuarioALogear[0].password);

            if(usuarioALogear) {
                if(check) {
                    delete usuarioALogear.password;
                    req.session.usuarioLogeado = usuarioALogear;
                    
                    if(req.body.recordame) {
                        res.cookie('userEmail', usuarioALogear.email, {maxAge: 1000 * 60 * 60 * 60 * 60})
                    }
                    res.locals.logeado = true;
                    
                } else {
                    res.send('Contraseña erronea')
                }
            } else {
                res.send('Usuario no encontrado')
            }

            return res.redirect('/')
        } catch(error) {
            res.send(error)
        }
    },
    register: function(req, res) {

        res.render('users/register')

    },
    registerPOST: async function(req, res) {
        try {

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

            const userCreate = await User.create(nuevoUsuario);

            res.redirect('/user/login')
        } catch(error) {
            res.send(error)
        }
    },
    perfil: function(req, res) {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let usuarioLogeado = users.find(usuario => usuario.email === req.session.usuarioLogeado.email)

        res.render('users/userProfile', {'user' : usuarioLogeado})
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