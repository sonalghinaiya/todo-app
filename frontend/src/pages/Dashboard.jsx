import React, { useEffect, useState } from "react";
import { api } from "../api/axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Tasks</h2>

      {tasks.map((task) => (
        <div key={task._id} className="bg-white p-3 shadow mb-2 rounded">
          <h4 className="font-semibold">{task.title}</h4>
          <p className="text-sm text-gray-500">{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
