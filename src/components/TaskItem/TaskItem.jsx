/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Context } from "../../ContextProvider/ContextProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { FaRegSave } from "react-icons/fa";

import "./TaskItem.css";

const TaskItem = ({ taskItem }) => {
  const [update, setUpdate] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const { tasks, completeTask, deleteTask } = useContext(Context);
  const { id, task, isComplete } = taskItem;

  const editTask = (id) => {
    const filterTask = tasks.find((filTask) => filTask.id === id);
    setIsEdit(true);
    setUpdate(filterTask);
    setUpdate(filterTask.task);
  };

  const addTask = (id) => {
    if (update.trim() === "") {
      return;
    } else {
      const filterTask = tasks.find((tasks) => tasks.id === id);
      setIsEdit(false);
      filterTask.task = update;
    }
  };

  return (
    <div>
      <div className="task__list">
        <div className="task__list--conent">
          <input
            checked={isComplete}
            onChange={() => completeTask(id)}
            type="checkbox"
          />
          {isEdit ? (
            <input onChange={(e) => setUpdate(e.target.value)} value={update} />
          ) : (
            <li className={`task__li ${isComplete && "complete"}`}>{task}</li>
          )}
        </div>
        <div className="task__list--button">
          <button
            onClick={() => (isEdit ? addTask(id) : editTask(id))}
            className="task__edit"
          >
            {isEdit ? <FaRegSave /> : isComplete ? null : <GrEdit />}
          </button>
          {isEdit ? null : (
            <button
              className="task__delete"
              onClick={isComplete ? () => deleteTask(id) : null}
            >
              <RiDeleteBin6Line />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
