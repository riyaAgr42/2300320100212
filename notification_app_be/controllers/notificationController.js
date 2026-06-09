const notificationService = require("../services/notificationService");
const Log = require("../logging_middleware/logger");

const getNotifications = async (req, res) => {
  try {
    await Log(
      "backend",
      "info",
      "controller",
      "Fetching notifications"
    );

    const notifications =
      notificationService.getAllNotifications();

    res.status(200).json(notifications);

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

const createNotification = async (req, res) => {
  try {

    const { title, message, channel } = req.body;

    if (!title || !message || !channel) {

      await Log(
        "backend",
        "warn",
        "controller",
        "Missing required fields"
      );

      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const notification = {
      id: Date.now(),
      title,
      message,
      channel,
      status: "Pending"
    };

    notificationService.createNotification(
      notification
    );

    await Log(
      "backend",
      "info",
      "controller",
      "Notification created successfully"
    );

    res.status(201).json(notification);

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
  getNotifications,
  createNotification
};