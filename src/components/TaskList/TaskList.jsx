import { useContext } from "react";
import { Context } from "../../Context/Context";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  const { tasks } = useContext(Context);
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
