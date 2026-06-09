function NotificationCard({ notification, onMarkRead }) {
  return (
    <div className="card">
      <h3>{notification.type.toUpperCase()}</h3>

      <p>{notification.message}</p>

      <p>
        Status:
        {notification.isRead ? " Read" : " Unread"}
      </p>

      {!notification.isRead && (
        <button
          onClick={() => onMarkRead(notification.id)}
        >
          Mark as Read
        </button>
      )}
    </div>
  );
}

export default NotificationCard;