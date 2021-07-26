const express = require("express");
const router = express.Router();

const {getOrderbyId,createOrder,getAllOrders,getOrderStatus,updateStatus}=require("../controllers/order")
const { getUserbyId,pushOrderInPurchaseList, getUser } = require("../controllers/user");
const {isSignedIn,isAuthenticated,isAdmin  } = require("../controllers/auth");
const {updateProduct}=require("../controllers/product")

//params
router.param("userId",getUserbyId)
router.param("orderId",getOrderbyId)

//routes
router.post("/order/create/:userId",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateProduct,createOrder)

router.get("/order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders)

router.get("/order/status/:userId",isSignedIn,isAuthenticated,isAdmin,getOrderStatus)

router.put("/order/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus)
module.exports = router;
