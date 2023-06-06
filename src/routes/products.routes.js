const express = require('express')
const isAuthenticated = require('../middleware/auth')
const createNewProduct = require('../controller/products.controller')
const router = express.Router();

// New product
// router.get("/products/add", isAuthenticated, renderNoteForm);

router.post("/products/new-note", createNewProduct);

// Get All products
router.get("/products", isAuthenticated, renderproducts);

// Edit products
router.get("/products/edit/:id", isAuthenticated, renderEditForm);

router.put("/products/edit-note/:id", isAuthenticated, updateProduct);

// Delete products
router.delete("/products/delete/:id", isAuthenticated, deleteProducts);

module.exports = router
