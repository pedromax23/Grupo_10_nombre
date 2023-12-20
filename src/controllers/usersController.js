const path = require("path"); 
const fs = require("fs"); 
const productsFilePath = path.join(__dirname, '../data/users.json');

const controller = {
    login: function(req, res) {
        res.render('users/login')
    },
    register: function(req, res) {
        res.render('users/register')
    }

}

module.exports = controller;