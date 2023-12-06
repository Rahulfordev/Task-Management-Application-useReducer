/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { useReducer } from "react";
import { reducer } from "../reducer/reducer";
// import { getDataFormLocalstorage } from "../components/Utils/Utils";

const initialState = {
  tasks: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  function addTask(task) {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  }

  function deleteTask(id) {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  function editTask(id) {
    dispatch({
      type: "EDIT__TASK",
      payload: id,
    });
  }

  function completeTask(id) {
    dispatch({
      type: "COMPLETE_TASK",
      payload: id,
      isComplete: false,
    });
  }

  const value = {
    tasks: state.tasks,
    addTask,
    deleteTask,
    editTask,
    completeTask,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
