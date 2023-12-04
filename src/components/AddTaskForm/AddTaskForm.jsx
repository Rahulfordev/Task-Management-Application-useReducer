import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/Globalstate";
const AddTaskForm = () => {
  const [task, setTask] = useState("");

  const { addTask } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    const taskItem = {
      id: Date.now(),
      task,
    };
    addTask(taskItem);
  };
  return (
    <div>
      <h1>Task Management Application</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task..."
            />
          </div>
          <button className="btn">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
