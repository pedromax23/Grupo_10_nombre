const path = require("path"); 
const fs = require("fs"); 
const usersFilePath = path.join(__dirname, '../data/users.json');

const controller = {
    login: function(req, res) {
        res.render('users/login')
    },
    procesarlogin: function(req, res) {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let usuarioALogear = users.find(usuario => usuario.nombreUsuario === req.body.nombre_usuario)

        if(usuarioALogear) {
            if(usuarioALogear.password === req.body.clave) {
                delete usuarioALogear.password;
                req.session.usuarioLogeado = usuarioALogear;

                if(req.body.recordame) {
                    res.cookie('userEmail', usuarioALogear.email, {maxAge: 1000 * 60 * 60 * 60 * 60})
                }

                return res.redirect('/')
            } else {
                res.send('Contraseña erroñea')
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
        
        // Calculamos el ID de cada usuario || En caso de que sea el primer usuario el ID sera 1
        let id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

        // Creamos el Objeto literal (nuevoUsuario) con la informacion que recibimos en el (req)
        let nuevoUsuario = {
            id: id, 
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nombreUsuario: req.body.nombreUsuario,
            email: req.body.email,
            password: req.body.password,
            fechaNacimiento: req.body.fechaNacimiento,
            domicilio: req.body.domicilio, 
            comment: req.body.comment
        }
    
        users.push(nuevoUsuario); // Agregamos el Objeto Literal al array de usuarios

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "), 'utf-8'); // Agregamos los cambios al archivo .JSON

        res.redirect('/')
    }
}

module.exports = controller;