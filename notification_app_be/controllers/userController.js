const userService = require("../services/userService");
const Log = require("../logging_middleware/logger");

const getUsers = async (req, res) => {
  try {
    await Log(
      "backend",
      "info",
      "controller",
      "Fetching all users"
    );

    const users = userService.getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    await Log(
      "backend",
      "error",
      "controller",
      error.message
    );

    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = userService.getUserById(id);

    if (!user) {
      await Log(
        "backend",
        "warn",
        "controller",
        "User not found"
      );

      return res.status(404).json({
        message: "User not found"
      });
    }

    await Log(
      "backend",
      "info",
      "controller",
      `User ${id} fetched successfully`
    );

    res.status(200).json(user);

  } catch (error) {
    await Log(
      "backend",
      "error",
      "controller",
      error.message
    );

    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

module.exports = {
  getUsers,
  getUser
};