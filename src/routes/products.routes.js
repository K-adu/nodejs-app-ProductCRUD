const express = require('express')
const isAuthenticated = require('../middleware/auth')
const {createNewProduct,renderProducts,updateProduct} = require('../controller/products.controller')
const router = express.Router();

// New product
// router.get("/products/add", isAuthenticated, renderNoteForm);

router.post("/products/new-product",isAuthenticated, createNewProduct);

// // Get All products
router.get("/products", isAuthenticated, renderProducts);

// // Edit products
// router.get("/products/edit/:id", isAuthenticated, renderEditForm);

router.patch("/products/edit-product/:id", isAuthenticated, updateProduct);

// // Delete products
// router.delete("/products/delete/:id", isAuthenticated, deleteProducts);

module.exports = router
