const express = require("express");
const router = express.Router();


const {getProductById,createProduct,getProduct,photo,removeProduct,updateProduct,getAllProducts,getAllUniqueCategories}=require("../controllers/product")
const { getUserbyId } = require("../controllers/user");
const {isSignedIn,isAuthenticated,isAdmin  } = require("../controllers/auth");


//param
router.param("userId",getUserbyId);
router.param("productId",getProductById)
//routes
router.post("/product/create/:userId"
,isSignedIn,isAuthenticated,isAdmin,createProduct)

router.get("/product/:productId",getProduct)
router.get("/product/photo/:productId",photo)

router.get("/products", getAllProducts);
router.get("/products/categories", getAllUniqueCategories);

router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,removeProduct)
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct)

module.exports = router;
