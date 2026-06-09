import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";

function NotificationsPage() {
  const [notifications, setNotifications] =
    useState([]);

  const [filter, setFilter] =
    useState("all");

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 2;

  useEffect(() => {
    getNotifications().then((data) =>
      setNotifications(data)
    );
  }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isRead: true }
          : item
      )
    );
  };

  const filtered =
    filter === "all"
      ? notifications
      : notifications.filter(
          (item) => item.type === filter
        );

  const totalPages = Math.ceil(
    filtered.length / itemsPerPage
  );

  const start =
    (currentPage - 1) * itemsPerPage;

  const currentItems = filtered.slice(
    start,
    start + itemsPerPage
  );

  return (
    <div className="container">
      <h1>Student Notifications</h1>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      {currentItems.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onMarkRead={markAsRead}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default NotificationsPage;