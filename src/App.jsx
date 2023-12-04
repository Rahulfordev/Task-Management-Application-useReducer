import "./App.css";
import { GlobalProvider } from "./Context/Globalstate";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
function App() {
  return (
    <>
      <div>
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
