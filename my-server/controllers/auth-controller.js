const User = require("../models/user-model");
const bcrypt = require("bcryptjs");



const home = async (req, res) => {
  try {
    res.status(200).send("welcome user to my server using router");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    // console.log(req.body);

    const { email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    //hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password,saltRound);
    // const userCreated = await User.create({ username, email, phone, password :hash_password});

    const userCreated = await User.create({
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json({ msg: "page not found" });
    next(error);
  }
};
const Delete = async (req, res) => {
  try {
    const { email } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      await User.deleteOne({ email });
      res.status(201).json({ msg: "email deleted" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    // console.log(userExist);
    if (!userExist) {
      res.status(400).json({ message: "Invalid Credentials" });
    }

    const user = await bcrypt.compare(password, userExist.password);
    // const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    // console.log(error);
    res.status(500).json({ msg: "internal server error" });
    // next(error);
  }
};

module.exports = { home, register, login, Delete };
