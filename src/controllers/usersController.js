const path = require("path"); 
const fs = require("fs"); 
const usersFilePath = path.join(__dirname, '../data/users.json');
const bcrypt = require('bcryptjs');

const controller = {
    login: function(req, res) {
        res.render('users/login')
    },
    procesarlogin: function(req, res) {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let usuarioALogear = users.find(usuario => usuario.nombreUsuario === req.body.nombre_usuario)

        //Comparamos el texto plano en la contraseña del login con la contraseña encriptada.
        let check= bcrypt.compareSync(req.body.clave, usuarioALogear.password);
        
        if(usuarioALogear) {
            if(check) {
                delete usuarioALogear.password;
                req.session.usuarioLogeado = usuarioALogear;
                
                if(req.body.recordame) {
                    res.cookie('userEmail', usuarioALogear.email, {maxAge: 1000 * 60 * 60 * 60 * 60})
                }
                res.locals.logeado = true;

                return res.redirect('/')
            } else {
                res.send('Contraseña erronea')
            }
        } else {
            res.send('Usuario no encontrado')
        }

    },
    register: function(req, res) {
        res.render('users/register')
    },
    procesarRegister: function(req, res) {

        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        //const bcrypt= require('bcryptjs');
        
        // Calculamos el ID de cada usuario || En caso de que sea el primer usuario el ID sera 1
        let id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

        let passEncriptada = bcrypt.hashSync(req.body.password,10);

        // Creamos el Objeto literal (nuevoUsuario) con la informacion que recibimos en el (req)
        let nuevoUsuario = {
            id: id, 
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nombreUsuario: req.body.nombreUsuario,
            email: req.body.email,
            password: passEncriptada,
            fechaNacimiento: req.body.fechaNacimiento,
            domicilio: req.body.domicilio, 
            comment: req.body.comment,
            img:  req.file ? req.file.filename : 'no-image-user.jpg',
        }
    
        users.push(nuevoUsuario); // Agregamos el Objeto Literal al array de usuarios

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "), 'utf-8'); // Agregamos los cambios al archivo .JSON

        res.redirect('/user/login')
    },
    profile: function(req, res) {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let usuarioLogeado = users.find(usuario => usuario.email === req.session.usuarioLogeado.email)

        res.render('users/userProfile', {'user' : usuarioLogeado})
    },
    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie('userEmail')
        return res.redirect('/')
    },
    cambiarContraseña: function(req, res) {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let usuarioId = users.find(usuario => usuario.id === (parseInt(req.params.id)))

        res.render('users/cambiarPassword', {usuario: usuarioId})
    },
    actualizarPassword: function(req, res) {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let usuarioId = users.find(usuario => usuario.id === (parseInt(req.params.id)))

        if(bcrypt.compareSync(req.body.contraseña, usuarioId.password)) {
            let nuevaContraseña = bcrypt.hashSync(req.body.nuevaContraseña, 12)

            usuarioId.password = nuevaContraseña

            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "), 'utf-8');
            req.session.destroy();
            res.clearCookie('userEmail')
    
            res.redirect('/user/login')
        } else {
            res.send('Contraseña erroñea')
        }


    },
    notLogin: (req, res) => {
        res.render('users/notLogin')
    },
}

module.exports = controller;