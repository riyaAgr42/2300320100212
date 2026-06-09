const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.send("Notification System Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});