import {
  ADD_TODO,
  DELETE_TODO,
  REMOVE_ALL_TODO,
} from "../constants/addtaskConstants";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      data,
      id: new Date().getTime().toString(),
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const deleteAllTodo = () => {
  return {
    type: REMOVE_ALL_TODO,
  };
};
