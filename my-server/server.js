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
//handling cors policy and hosting
const corsOptions = {
  origin: [
    "https://disney-plus-clone-front.vercel.app",
    "https://localhost:5173",
  ],
  method: "GET,POST,PUT,DELETE,PATCH,HEAD",
  Credentials: true,
};
app.use(cors(corsOptions));

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
const PORT = "https://disney-plus-clone-back.vercel.app" | 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port : ${PORT}`);
  });
});
