import React, { useEffect, useState } from "react";
import { api } from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "../components/Button";
import { FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(res.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${selectedTask}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Task deleted successfully");
      setShowDelete(false);
      fetchTasks();
    } catch {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const statusStyle = {
    pending: "bg-gray-200 text-gray-700",
    inProgress: "bg-yellow-200 text-yellow-800",
    completed: "bg-green-200 text-green-800",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Tasks</h1>
          <p className="text-gray-500">{tasks.length} tasks total</p>
        </div>

        <div className="flex gap-3">
          <Link to="/task/add">
            <Button>+ New Task</Button>
          </Link>

          <Button
            onClick={() => setShowLogout(true)}
            className="bg-red-500 hover:bg-red-600"
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks found</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    statusStyle[task.status]
                  }`}
                >
                  {task.status}
                </span>

                <h3 className="font-semibold mt-2">{task.title}</h3>
                <p className="text-sm text-gray-500">{task.description}</p>

                <p className="text-xs text-gray-400 mt-2">
                  {new Date(task.createdAt).toDateString()}
                </p>
              </div>

              <div className="flex gap-4 text-gray-500">
                <button
                  onClick={() => navigate(`/task/edit/${task._id}`)}
                  className="hover:text-blue-600"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => {
                    setSelectedTask(task._id);
                    setShowDelete(true);
                  }}
                  className="hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showDelete && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow w-80">
            <h2 className="text-lg font-semibold mb-2">Delete Task?</h2>
            <p className="text-sm text-gray-500 mb-4">
              Are you sure you want to delete this task?
            </p>

            <div className="flex justify-end gap-2">
              <Button
                onClick={() => setShowDelete(false)}
                className="bg-gray-400"
              >
                Cancel
              </Button>

              <Button onClick={handleDelete} className="bg-red-500">
                Yes, Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      {showLogout && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow w-80">
            <h2 className="text-lg font-semibold mb-2">Logout?</h2>
            <p className="text-sm text-gray-500 mb-4">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-2">
              <Button
                onClick={() => setShowLogout(false)}
                className="bg-gray-400"
              >
                Cancel
              </Button>

              <Button onClick={handleLogout} className="bg-red-500">
                Yes, Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
