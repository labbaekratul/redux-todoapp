import {
  ADD_TODO,
  DELETE_TODO,
  REMOVE_ALL_TODO,
} from "../constants/addtaskConstants";

const initialState = {
  list: [],
};

export const todoReducerCurd = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case DELETE_TODO:
      const newTodo = state.list.filter((x) => x.id !== action.payload);

      return {
        ...state,
        list: newTodo,
      };

    case REMOVE_ALL_TODO:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
