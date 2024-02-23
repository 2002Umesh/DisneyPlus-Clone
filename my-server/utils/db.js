const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/node_admin";
const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

// const URI =
//   "mongodb+srv://cruiz:u826062#@cluster0.1efinw2.mongodb.net/node_admin?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to database");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDB;
