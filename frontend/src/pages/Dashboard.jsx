import React, { useEffect, useState } from "react";
import { api } from "../api/axios";
import Button from "../components/Button";

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tasks</h1>
          <p className="text-sm text-slate-500 mt-1">
            {tasks.length} tasks total
          </p>
          {tasks.length === 0 && (
            <p className="text-gray-500 text-center">No tasks found</p>
          )}
        </div>
        <Button>New Task</Button>
      </div>
      {tasks.map((task) => (
        <div key={task._id} className="bg-white p-3 shadow mb-2 rounded mt-5">
          <h4 className="font-semibold">{task.title}</h4>
          <p className="text-sm text-gray-500">{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
