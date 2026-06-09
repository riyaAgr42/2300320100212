import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

const notifications = [
  {
    id: 1,
    type: "placement",
    message: "TCS Hiring Drive",
    isRead: false,
  },
  {
    id: 2,
    type: "result",
    message: "Semester Result Published",
    isRead: false,
  },
  {
    id: 3,
    type: "event",
    message: "Hackathon Registration Open",
    isRead: true,
  },
  {
    id: 4,
    type: "placement",
    message: "Infosys Hiring Drive",
    isRead: false,
  },
];

export const getNotifications = () => {
  return Promise.resolve(notifications);
};

export default API;