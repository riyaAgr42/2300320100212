const notifications = require("../data/notifications");

const getAllNotifications = () => {
  return notifications;
};

const createNotification = (notification) => {
  notifications.push(notification);
  return notification;
};

module.exports = {
  getAllNotifications,
  createNotification
};