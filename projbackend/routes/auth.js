var express = require('express')
var router = express.Router();
const { check, validationResult } = require('express-validator');
const {signout,signup,signin,isSignedIn}=require("../controllers/auth.js")


router.post('/signup',[
    check('name').isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('email').isEmail(),
    check('password').isLength({ min: 3 }).withMessage('must be at least 3 chars long'),
],signup)

router.post('/signin',[
    check('email').isEmail(),
    check('password').isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
],signin)

router.get("/signout",signout)

router.get("/issignedin",isSignedIn,(req,res)=>{
    res.json(req.auth)
})

module.exports=router;  