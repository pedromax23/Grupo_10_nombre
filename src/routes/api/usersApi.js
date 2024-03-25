const express = require("express");
const router = express.Router();

const usersControllerAPI = require("../../controllers/api/usersControllerAPI");

router.get('/', usersControllerAPI.allUsers)

router.get('/:id', usersControllerAPI.findUser)

module.exports = router;