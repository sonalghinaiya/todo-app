# 📝 Todo App Frontend (MERN)

A modern and responsive frontend for a full-stack Todo application built using **React (Vite)** and **Tailwind CSS**.  
This application allows users to securely authenticate and manage their personal tasks with a clean UI and smooth experience.

---

## 🚀 Features

- 🔐 User Authentication (Login & Register)
- 🔑 JWT stored securely in localStorage
- 🔒 Protected Routes using React Router
- 📋 Dashboard to display user-specific tasks
- ➕ Create new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks with confirmation
- ♻️ Reusable components (Button, Input, TaskForm)
- 🔔 Toast notifications for success & error handling
- 🌐 API integration using Axios
- 🎨 Clean and responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology      | Usage                |
| --------------- | -------------------- |
| React (Vite)    | Frontend framework   |
| Tailwind CSS    | Styling              |
| React Router    | Routing & navigation |
| Axios           | API requests         |
| React Hot Toast | Notifications        |

---

## 📁 Folder Structure

```
frontend/
│── src/
│ ├── api/
│ │ └── axios.js
│ ├── components/
│ │ ├── Button.jsx
│ │ ├── Input.jsx
│ │ ├── ProtectedRoutes.jsx
│ │ └── TaskForm.jsx
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── Dashboard.jsx
│ │ ├── NotFound.jsx
│ ├── App.jsx
│ ├── main.jsx
│── public/
│── package.json
```

---

## 📄 Pages Overview

### 🔐 Login Page

- User login with email & password
- Stores JWT token in localStorage
- Redirects to dashboard after login

### 📝 Register Page

- Create a new user account
- Basic validation and error handling

### 📊 Dashboard

- Displays all user-specific tasks
- Shows task status (Pending / In Progress / Completed)
- Edit & delete functionality
- Logout option

### 🧾 Task Form (Create & Edit)

- Reusable form for adding and editing tasks
- Handles both create and update logic
- Includes title, description, and status

---

## ♻️ Reusable Components

### 🔘 Button

- Supports loading state
- Reusable across forms and actions

### ⌨️ Input

- Label + input combined
- Consistent styling across app

### 📝 TaskForm

- Shared form for create & edit task
- Reduces code duplication

### 🔒 ProtectedRoutes

- Restricts access to authenticated users only

---

## 🌐 API Integration

- Axios instance configured with base URL
- JWT token passed in request headers

Example:

```js
Authorization: Bearer <token>
```

---

## Endpoints used:

```POST /auth/login
POST /auth/register
GET /tasks
POST /tasks
GET /tasks/:id
PATCH /tasks/:id
DELETE /tasks/:id
```

---

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
cd frontend
```

### 32️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in root:

```env
VITE_API_URL=http://localhost:5000/api
```

---

### 4️⃣ Run the project

```bash
npm run dev
```

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👩‍💻 Author

**Sonal Ghinaiya**

---

✨ Feel free to fork, contribute, and improve this project!
