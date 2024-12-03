const express = require("express");
const router = express.Router({mergeParams:true}); // Call Router to create an instance
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuther} = require("../middleware.js");
 
const reviewController = require("../controllers/reviews.js")

//review post review route

router.post("/",validateReview,isLoggedIn, wrapAsync(
    reviewController.createReview));
  
  //Delete Review Route
  router.delete("/:reviewId",isLoggedIn,isReviewAuther, wrapAsync(
    reviewController.destroyReview));
  

  module.exports = router;