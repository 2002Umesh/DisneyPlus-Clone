const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ msg: "no user found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    // res.status(404).json({msg:"server error"})
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;

    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    next(error);
  }
};
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await User.findOne({ _id: id }, { password: 0 });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ msg: "no contact found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    // res.status(404).json({msg:"server error"})
    next(error);
  }
};
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const { message } = req.body;
    // await Contact.deleteOne({ _id: id });
    await Contact.deleteOne({ message, _id: id });
    return res.status(200).json({ msg: "contact deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
};
