import { useState } from "react";
import API from "../services/api";

function NotificationForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/notifications", {
        title,
        message,
        channel: "email"
      });

      alert("Notification Created");

      setTitle("");
      setMessage("");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <h2>Create Notification</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Notification Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Notification Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">
          Create Notification
        </button>
      </form>
    </div>
  );
}

export default NotificationForm;