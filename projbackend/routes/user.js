var express = require('express')
var router = express.Router();

const {getUserbyId,getUser,updateUser}=require("../controllers/user.js")
const {isSignedIn,isAuthenticated,isAdmin}=require("../controllers/auth.js")

router.param("userId",getUserbyId);

router.get("/user/:userId",isSignedIn,isAuthenticated,getUser)

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

module.exports=router;