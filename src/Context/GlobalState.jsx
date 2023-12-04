/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useReducer } from "react";
import { reducer } from "../reducer/reducer";

const initialState = {
  tasks: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  //   function compeleteTask() {}

  const value = {
    tasks: state.tasks,
    addTask,
    deleteTask,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
