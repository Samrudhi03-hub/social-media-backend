# Social Media Backend API

A production‑style backend built using **Node.js, Express, TypeScript, MySQL, and TypeORM**.
This project implements core social media features such as authentication, posts, likes, comments, follow system, feed generation, notifications, and more — along with professional engineering practices like Swagger docs, logging, rate limiting, and i18n support.

---

# Features

## Authentication

* User signup & login
* JWT‑based authentication
* Password hashing using bcrypt
* Protected routes using middleware

## Post System

* Create post (text + optional image)
* Soft delete using `deletedAt`
* Likes & comments count tracking

## Likes & Comments

* Toggle like/unlike system
* Add comments on posts
* Notification generation on interaction

## Follow System & Feed

* Follow / Unfollow users
* Personalized feed from followed users
* Pagination support

## Notifications

* Follow, Like, Comment notifications
* Mark notification as read
* Paginated notification list

## Swagger Documentation

* Interactive API docs available at:

```
http://localhost:3000/docs
```

## Logging (Winston + Morgan)

* Request logging with timestamps
* Production‑style request tracing

## Rate Limiting & Throttling

* Prevent API abuse
* Request slowdown after threshold

## i18n Support

* Multi‑language API responses
* Language switch using `Accept-Language` header

---

# Tech Stack

| Layer          | Technology            |
| -------------- | --------------------- |
| Backend        | Node.js + Express     |
| Language       | TypeScript            |
| Database       | MySQL                 |
| ORM            | TypeORM               |
| Authentication | JWT                   |
| Hashing        | bcrypt                |
| API Docs       | Swagger (OpenAPI 3.0) |
| Logging        | Winston + Morgan      |
| Rate Limiting  | express-rate-limit    |
| Throttling     | express-slow-down     |
| i18n           | i18next               |

---

# Project Structure

```
src/
 ├── config/
 ├── controllers/
 ├── entities/
 ├── middlewares/
 ├── routes/
 ├── services/
 ├── locales/
 ├── app.ts
 └── server.ts
```

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <your-repo-url>
cd social-media-backend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Environment Variables

Create `.env` file in root:

```
PORT=3000
JWT_SECRET=your_secret_key
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_NAME=social_media_db
```

## 4. Run Server

```bash
npm run dev
```

Server starts at:

```
http://localhost:3000
```

---

# Testing APIs

You can test APIs using:

* Swagger UI → `/docs`
* Postman

### Authorization

Use Bearer token:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# i18n Usage

Add header to request:

```
Accept-Language: en
```

or

```
Accept-Language: hi
```

---

# API Modules

* Auth APIs
* Post APIs
* Like APIs
* Comment APIs
* Follow APIs
* Feed API
* Notification APIs

---

# Notes

* Soft delete implemented using `deletedAt` column
* Rate limiting enabled globally
* Logging enabled via Winston
* Swagger docs included for assignment requirement

---

# Author

Developed as part of a Node.js backend assignment demonstrating real‑world backend architecture and best practices.
