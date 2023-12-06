/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../../Context/Globalstate";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

import "./TaskItem.css";

const TaskItem = ({ taskItem }) => {
  const { completeTask, deleteTask } = useContext(GlobalContext);
  const { id, task, isComplete } = taskItem;
  // const [checked, setChecked] = useState(false);
  // console.log(checked);
  return (
    <div>
      <div className="task__list">
        <div className="task__list--conent">
          <input
            checked={isComplete}
            onChange={() => completeTask(id)}
            type="checkbox"
          />

          <li className={`task__li ${isComplete && "complete"}`}>{task}</li>
        </div>
        <div className="task__list--button">
          <button className="task__edit">
            <GrEdit />
          </button>
          <button className="task__delete" onClick={() => deleteTask(id)}>
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
