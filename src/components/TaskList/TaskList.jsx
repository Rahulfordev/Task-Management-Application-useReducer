import { useContext } from "react";
import { GlobalContext } from "../../Context/Globalstate";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  const { tasks } = useContext(GlobalContext);
  return (
    <div>
      <div>
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} taskItem={task} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
