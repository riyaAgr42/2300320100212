import NotificationForm from "./components/NotificationForm";
import NotificationList from "./components/NotificationList";

function App() {
  return (
    <div className="container">
      <h1>Notification Management System</h1>

      <NotificationForm />

      <NotificationList />
    </div>
  );
}

export default App;