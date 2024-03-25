const express = require("express");
const router = express.Router();

const productsApi = require("../../controllers/api/productsApi");

router.get('/', productsApi.products)

router.get('/:id', productsApi.findProduct)

module.exports = router;