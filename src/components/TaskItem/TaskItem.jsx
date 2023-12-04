/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../../Context/Globalstate";

const TaskItem = ({ taskItem }) => {
  const { deleteTask } = useContext(GlobalContext);
  const { id, task } = taskItem;
  return (
    <div>
      <div>
        <li>{id}</li>
        <li>{task}</li>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
