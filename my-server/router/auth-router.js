const express = require("express");

const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validator");

const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
// router.get("/", (req, res) => {
//   res.status(200).send("welcome user to my server using router");
// });

router.route("/").get(authControllers.home);
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register)
  .delete(authControllers.Delete);
router
  .route("/login")
  .post(validate(loginSchema),authControllers.login)


module.exports = router;
