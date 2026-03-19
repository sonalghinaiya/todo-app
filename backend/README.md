# 📝 Todo App Backend (MERN)

A clean and secure backend for a Todo application built using **Node.js, Express, and MongoDB**. This project implements user authentication with JWT and provides full CRUD functionality for task management.

---

## 🚀 Features

- 🔐 User Registration & Login (bcrypt password hashing)
- 🔑 JWT-based Authentication
- 🛡️ Protected Routes using Middleware
- 📋 Task CRUD Operations (Create, Read, Update, Delete)
- 👤 User-specific Task Management
- 📁 Clean & Modular Folder Structure
- 🌱 Environment Variable Support

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT (jsonwebtoken)**
- **bcryptjs**

---

## 📁 Folder Structure

```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── .env
├── .env.sample
├── server.js
└── package.json
```

---

## 🔗 API Endpoints

### 🔐 Auth Routes

#### Register User

```
POST /api/auth/register
```

**Request Body:**

```json
{
  "name": "Sonal",
  "email": "sonal@gmail.com",
  "password": "123456"
}
```

---

#### Login User

```
POST /api/auth/login
```

**Request Body:**

```json
{
  "email": "sonal@gmail.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "success": true,
  "token": "JWT_TOKEN"
}
```

---

### 📋 Task Routes (Protected)

> ⚠️ Add Header:

```
Authorization: Bearer <token>
Headers: <token>
```

---

#### Create Task

```
POST /api/tasks
```

```json
{
  "title": "Learn MERN",
  "description": "Complete backend"
}
```

---

#### Get Tasks

```
GET /api/tasks
```

---

#### Update Task

```
PATCH /api/tasks/:id
```

```json
{
  "status": "completed"
}
```

---

#### Delete Task

```
DELETE /api/tasks/:id
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd backend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file in root:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

---

### 4. Run the Server

```bash
npm run dev
```

---

## ▶️ How to Run

- Server will run on:

```
http://localhost:8000
```

- Test APIs using:
  - Postman
  - Thunder Client

---

## 🔐 Environment Variables

| Variable       | Description                  |
| -------------- | ---------------------------- |
| PORT           | Server Port                  |
| MONGODB_URI    | MongoDB Connection String    |
| JWT_SECRET     | Secret Key for JWT           |
| JWT_EXPIRES_IN | JWT expiry (duration format) |

---

## 📌 Notes

- Passwords are securely hashed using bcrypt
- JWT is used for authentication
- Users can only access their own tasks

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👩‍💻 Author

**Sonal Ghinaiya**

---

✨ Feel free to fork, contribute, and improve this project!
