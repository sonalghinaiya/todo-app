# 📝 Todo App with Authentication (MERN)

A full-stack **Task Management Application** built using the **MERN stack** (MongoDB, Express, React, Node.js).  
Users can securely register, login, and manage their personal tasks with full CRUD functionality.

---

## 🚀 Live Demo

### 🌐 Frontend (Vercel)

👉 https://todo-rj7cikyw3-sonal-ghinaiyas-projects.vercel.app/

### 🔗 Backend API (Render)

👉 https://todo-app-boa6.onrender.com/

---

## 🚀 Project Overview

This project demonstrates a complete **full-stack implementation** including:

- Secure user authentication using JWT
- RESTful API development
- Protected routes
- Task management system (CRUD)
- Clean and responsive UI

---

## 🛠️ Tech Stack

### 🔙 Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt (password hashing)

### 🔜 Frontend

- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- Zod(Validation)

---

## ✨ Features

- 🔐 User Registration & Login
- 🔑 JWT-based Authentication
- 🔒 Protected API Routes
- 📋 Create, Read, Update, Delete Tasks
- 👤 User-specific Task Management
- 🎨 Responsive UI with Tailwind CSS
- ♻️ Reusable Components
- ⚡ Error Handling & Loading States

---

## 📁 Folder Structure

```
todo-app/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── .env
│ ├── server.js
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ ├── .env
│
└── README.md
```

---

## 🔌 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

### 📋 Task Routes

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| GET    | /api/tasks     | Get all user tasks |
| GET    | /api/tasks/:id | Get single task    |
| POST   | /api/tasks     | Create new task    |
| PATCH  | /api/tasks/:id | Update task        |
| DELETE | /api/tasks/:id | Delete task        |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

## 🔧 Backend Setup

### 2️⃣ Navigate to backend

```bash
cd backend
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Create .env

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5️⃣ Run backend

```bash
npm run dev
```

## 💻 Frontend Setup

### 6️⃣ Navigate to frontend

```bash
cd ../frontend
```

### 7️⃣ Install dependencies

```bash
npm install
```

### 8️⃣ Create .env

```bash
VITE_API_URL=http://localhost:5000/api
```

### 9️⃣ Run frontend

```bash
npm run dev
```

▶️ Run Locally (Summary)

# Terminal 1

```bash
cd backend
npm run dev
```

# Terminal 2

```bash
cd frontend
npm run dev
```

## 🔐 Environment Variables

```
Backend (.env)
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
Frontend (.env)
VITE_API_URL=http://localhost:5000/api or deployment link
```

## 👩‍💻 Author

**Sonal Ghinaiya**

## ⭐ Support

If you like this project, please ⭐ the repository!
