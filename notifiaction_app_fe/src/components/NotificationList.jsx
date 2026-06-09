import { useEffect, useState } from "react";
import API from "../services/api";

function NotificationList() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await API.get("/notifications");
      setNotifications(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <h2>All Notifications</h2>

      {notifications.map((item) => (
        <div className="notification" key={item.id}>
          <h3>{item.title}</h3>

          <p>{item.message}</p>

          <span>{item.status}</span>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default NotificationList;