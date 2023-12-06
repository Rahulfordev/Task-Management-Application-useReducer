import "./App.css";
import { GlobalProvider } from "./Context/Context";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
function App() {
  return (
    <>
      <div className="task-application">
        <GlobalProvider>
          <div>
            <AddTaskForm />
            <TaskList />
          </div>
        </GlobalProvider>
      </div>
    </>
  );
}

export default App;
