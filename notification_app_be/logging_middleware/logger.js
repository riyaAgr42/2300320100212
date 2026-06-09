const axios = require("axios");

const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyaXlhLjIzYjAxMDExMjVAYWJlcy5hYy5pbiIsImV4cCI6MTc4MDk4NzE0MCwiaWF0IjoxNzgwOTg2MjQwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZDc4YWM4NTctYzVjYi00NmU3LWE5NmUtYzJiZDlkYTVhMmQwIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicml5YSBhZ3JhaGFyaSIsInN1YiI6IjFkNjJmMWY1LWMwYTYtNDA3My05NWM2LWU4YWQ0YTQ3ZDAwOSJ9LCJlbWFpbCI6InJpeWEuMjNiMDEwMTEyNUBhYmVzLmFjLmluIiwibmFtZSI6InJpeWEgYWdyYWhhcmkiLCJyb2xsTm8iOiIyMzAwMzIwMTAwMjEyIiwiYWNjZXNzQ29kZSI6ImNYdXFodCIsImNsaWVudElEIjoiMWQ2MmYxZjUtYzBhNi00MDczLTk1YzYtZThhZDRhNDdkMDA5IiwiY2xpZW50U2VjcmV0IjoiRkZoSGhxekJVR1JwTkJicyJ9.IbXuiDCTDLWvMsqDlOXSwrd8q3isB9JGWQJyld0PsmQ";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(" Log sent successfully");
    console.log(response.data);

  } catch (error) {
    console.error(" Log Error");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

module.exports = Log;