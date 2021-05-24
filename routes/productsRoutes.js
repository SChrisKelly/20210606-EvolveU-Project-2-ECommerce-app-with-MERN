const express = require("express")
var router = express.Router()
const {getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview, getTopProducts} = require("../controller/productController")
const {protect, admin} = require ("../middleware/authMiddleware")


// @desc Fetch all prodcuts 
router.get('/', getProducts);
router.get("/top", getTopProducts)
router.post('/:id/reviews', protect, createProductReview)
router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProduct);
router.post("/", protect, admin, createProduct)
router.put("/:id", protect, admin, updateProduct)


module.exports = router