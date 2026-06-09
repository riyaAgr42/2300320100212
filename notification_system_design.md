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



##stage1

# Student Notification System

## Functional Requirements

- View notifications
- Filter notifications
- Mark notification as read
- Mark all notifications as read
- Pagination support

## APIs

### GET /notifications

Purpose:
Fetch notifications.

Query Params:
- page
- limit
- type

Response:
(json)

### POST /notifications

Purpose:
Create notification.

Response:
(json)

### PATCH /notifications/:id/read

Purpose:
Mark notification as read.

### PATCH /notifications/read-all

Purpose:
Mark all notifications as read.


##stage2
## Database Design

### Database
PostgreSQL

### Table: notifications

Fields:
- id (UUID, Primary Key)
- student_id (BIGINT)
- type (VARCHAR)
- message (TEXT)
- is_read (BOOLEAN)
- created_at (TIMESTAMP)

### Indexes

1. student_id
2. (student_id, is_read, created_at)

Reason:
These indexes optimize notification retrieval,
filtering unread notifications, and sorting by time.


##stage3
## Query Optimization

### Problem

The query:

SELECT *
FROM notifications
WHERE student_id=123
AND is_read=false
ORDER BY created_at ASC;

is slow because it performs a full table scan on millions of records.

### Solution

Create a composite index:

CREATE INDEX idx_notification
ON notifications(student_id,is_read,created_at);

### Benefits

- Faster filtering
- Faster sorting
- Reduced database load
- Improved response time

### Note

Index only frequently queried columns because excessive indexes increase storage and slow write operations.



##stage4
## Caching Strategy

### Problem

Every notification request directly hits the database,
causing high database load.

### Solution

Use Redis Cache.

Flow:

Client → Backend → Redis → Database

### Cache Hit

Data is returned directly from Redis.

### Cache Miss

Backend fetches data from database,
stores it in Redis,
and returns the response.

### Benefits

- Faster response time
- Reduced database load
- Better scalability
- Improved user experience


##stage5
## Bulk Notification Processing

### Problem

Sending notifications directly to thousands of students
is slow and can overload the server.

### Solution

Use a message queue such as RabbitMQ, Kafka, or BullMQ.

### Flow

Admin
→ Notification Service
→ Queue
→ Workers
→ Students

### Benefits

- Faster processing
- Retry mechanism
- Fault tolerance
- Better scalability
- Reduced server load


##stage 6

## Priority Inbox

### Goal

Show the most important notifications first.

### Priority Order

1. Placement
2. Result
3. Event

### Ranking Strategy

Score =
Priority Weight +
Recency Weight

Example:

Placement = 100
Result = 70
Event = 40

### Process

1. Fetch notifications
2. Calculate score
3. Sort by score
4. Return top results

### Pagination

Supported query parameters:

- page
- limit
- notificationType

Example:

GET /notifications?page=1&limit=10&notificationType=placement