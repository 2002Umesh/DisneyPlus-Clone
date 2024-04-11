require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const connectDb = require("./utils/db");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const paymentRoute = require("./router/payment-router");
const adminRoute = require("./router/admin-router");
const errorMiddleware = require("./middlewares/error-middleware.js");

//middleware
app.use((req, res, next) => {
  // Allow requests from any origin. You can restrict it to specific origins if needed.
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Allow credentials (like cookies) to be sent with the request
  res.setHeader("Access-Control-Allow-Credentials", "true");
  // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  // Allow specific headers
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Pass control to the next middleware
  next();
});
//handling cors policy and hosting
const corsOptions = {
  origin: [
    "https://disney-plus-clone-front.vercel.app",
    // "https://localhost:5173",
  ],
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

// app.use(function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://disney-plus-clone-front.vercel.app"
//   );
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/auth", authRoute);
// app.use("/api/form", contactRoute);

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

// app.get("/", (req, res) => {
//   res.status(200).send("welcome user to my server");
// });
// app.get("/about", (req, res) => {
//   res.status(200).send("welcome user to my about");
// });
const PORT = process.env.PORT || 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port : ${PORT}`);
  });
});
