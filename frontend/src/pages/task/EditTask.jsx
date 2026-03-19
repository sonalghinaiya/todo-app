import React from "react";
import { useParams } from "react-router-dom";
import TaskForm from "../../components/TaskForm";

function EditTask() {
  const { id } = useParams();
  return <TaskForm taskId={id} />;
}

export default EditTask;
