const express = require("express");
const router = express.Router();

const productsApi = require("../../controllers/api/productsApi");

router.get('/', productsApi.products)

router.get('/variedades', productsApi.variedades)

router.get('/buscador', productsApi.findProducts)

router.get('/:id', productsApi.findOneProduct)



module.exports = router;