const express = require("express");

const router = express.Router();
const paymentControllers = require("../controllers/payment-controller");





router.route("/verification").post(paymentControllers.verification);
router
  .route("/checkout")
  .post( paymentControllers.checkout)
router
  .route("/getkey")
  .get( paymentControllers.getkey)
 


module.exports = router;
