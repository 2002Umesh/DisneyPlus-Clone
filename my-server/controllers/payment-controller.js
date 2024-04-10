const razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();
const Payment = require("../models/payment-model");


const instance = new razorpay({
  key_id: process.env.KEY,
  key_secret: process.env.SECRET,
});

const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log(order);
  res.status(200).json({
    success: true,
    order,
  });
};

const verification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedsgnature = crypto
    .createHmac("sha256", process.env.SECRET)
    .update(body.toString())
    .digest("hex");
  const isauth = expectedsgnature === razorpay_signature;
  if (isauth) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    res.redirect(`http://localhost:5173/?reference=${razorpay_payment_id}`);
  } else {
    res.status(400).json({ success: false });
  }
};

const getkey = async (req, res) => {
  return res.status(200).json({ key: process.env.KEY });
};


module.exports = { checkout,verification,getkey};