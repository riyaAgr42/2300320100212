const axios = require("axios");

const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyaXlhLjIzYjAxMDExMjVAYWJlcy5hYy5pbiIsImV4cCI6MTc4MDk4NTY2MiwiaWF0IjoxNzgwOTg0NzYyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzExZTg1MzItNjNhYS00YjBjLTllNGUtMjYyZTY3YjA3NTUyIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicml5YSBhZ3JhaGFyaSIsInN1YiI6IjFkNjJmMWY1LWMwYTYtNDA3My05NWM2LWU4YWQ0YTQ3ZDAwOSJ9LCJlbWFpbCI6InJpeWEuMjNiMDEwMTEyNUBhYmVzLmFjLmluIiwibmFtZSI6InJpeWEgYWdyYWhhcmkiLCJyb2xsTm8iOiIyMzAwMzIwMTAwMjEyIiwiYWNjZXNzQ29kZSI6ImNYdXFodCIsImNsaWVudElEIjoiMWQ2MmYxZjUtYzBhNi00MDczLTk1YzYtZThhZDRhNDdkMDA5IiwiY2xpZW50U2VjcmV0IjoiRkZoSGhxekJVR1JwTkJicyJ9.-YTGSCzl1mgHnpPhLQks0xnz951qjDr2DjCbzgOBdq4";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log("Log Sent:", response.data);
  } catch (error) {
    console.log("Logging Error:", error.response?.data || error.message);
  }
}

module.exports = Log;