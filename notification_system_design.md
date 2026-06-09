# Notification System Design

## Introduction

This project is a Notification Management System that allows users to create and manage notifications. The main goal of the system is to send notifications through different channels such as Email, SMS, and In-App notifications. The system also keeps track of notification history and delivery status.

The project is developed using React for the frontend and Node.js with Express for the backend.

---

## System Architecture

The system follows a simple client-server architecture.

The user interacts with the frontend application. The frontend sends requests to the backend APIs. The backend processes the request, stores notification data, generates logs using the logging middleware, and returns the response to the user.

Flow of the system:

User → Frontend → Backend API → Database

The logging middleware is integrated with the backend to monitor important activities and errors.

---

## Database Design

The system mainly uses two entities:

### User

Each user has:

* User ID
* Name
* Email

### Notification

Each notification contains:

* Notification ID
* Title
* Message
* Notification Channel
* User ID
* Status
* Created Time

The status of a notification can be:

* Pending
* Sent
* Failed

---

## API Design

The backend provides REST APIs to perform different operations.

### Get All Users

This API returns the list of all users.

```http
GET /users
```

### Get User By ID

This API returns details of a particular user.

```http
GET /users/:id
```

### Create Notification

This API creates a new notification.

```http
POST /notifications
```

### Get Notifications

This API returns all notifications created in the system.

```http
GET /notifications
```

---

## Logging Middleware

A custom logging middleware is implemented as required in the assignment.

The middleware is used to log important events such as:

* API requests
* Successful operations
* Errors and exceptions
* User activities

Example:

```javascript
await Log(
  "backend",
  "info",
  "service",
  "Notification created successfully"
);
```

The logs are sent to the evaluation server using the provided logging API.

---

## Working of the System

When a user creates a notification, the request is sent to the backend server.

The backend validates the data and creates the notification. After successful creation, a log entry is generated through the logging middleware. The notification is then stored and its status is updated accordingly.

If any error occurs during the process, an error log is generated.

---

## Scalability

To handle a large number of notifications in the future, the following improvements can be added:

* Queue-based notification processing
* Redis caching
* Database optimization
* Load balancing
* Microservice architecture

These improvements will help the system process notifications more efficiently.

---

## Security Considerations

The system follows basic security practices such as:

* Input validation
* Secure API communication
* Proper error handling
* Logging and monitoring

---

## Conclusion

The Notification Management System provides a simple and efficient way to create and manage notifications. The project follows a structured architecture and uses logging middleware for monitoring and debugging purposes. The design can be further extended to support advanced notification features and large-scale deployments.


















