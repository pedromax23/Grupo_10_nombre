const path = require("path"); 
const fs = require("fs"); 
const usersFilePath = path.join(__dirname, '../data/users.json');

const controller = {
    login: function(req, res) {
        res.render('users/login')
    },
    register: function(req, res) {
        res.render('users/register')
    },
    procesarRegister: function(req, res) {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        
        let id = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Si aun no se registro ningun usuario en el JSON el id va a ser 1

        // Completamos el usuario con los datos que ingreso
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
    
        users.push(nuevoUsuario);

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "), 'utf-8');

        res.redirect('/')
    }
}

module.exports = controller;