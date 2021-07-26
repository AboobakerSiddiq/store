const express = require("express");
const router = express.Router();

const { getCategoryById, createCategory,getCategory,getAllCategory,updateCategory,removeCategory } = require("../controllers/category");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserbyId } = require("../controllers/user");

//params
router.param("userId", getUserbyId);
router.param("categoryId", getCategoryById);

//real routes
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);

router.get("/category/:categoryId",getCategory)

router.get("/categories",getAllCategory)

//update
router.put( "/category/:categoryId/:userId",
isSignedIn,
isAuthenticated,
isAdmin,
updateCategory)

//delete
router.delete("/category/:categoryId/:userId",
isSignedIn,
isAuthenticated,
isAdmin,
removeCategory)

module.exports = router;
