const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized HTTP, Token not provided" });
    }
    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token from authMiddleware", jwtToken);

    try {
      const isVarified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
      const userData = await User.findOne({ email: isVarified.email }).select({
        password: 0,
      });
      const contactData = await Contact.findOne({ email: isVarified.email });
      console.log("from user model", userData);
      console.log("from user model", contactData);
      req.user = userData;
      req.token = token;
      req.userID = userData._id;
      
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized, Invalid token" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;
