var Users = require("../../models/users.model");

module.exports.index = async (req, res) => {
  const users = await Users.find();

  res.json(users);
};

module.exports.register = async (req, res) => {
  try {
    const user = await Users.create({
      name: "Duc",
      email: "duc2000cb@gmail.com",
      password: "1234567890",
      image: "",
    });
    res.status(200).json({ message: "Create a new user" });
  } catch (error) {
    res.status(400).json({ message: "Create failure" });
  }
};
