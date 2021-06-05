import { combineReducers, createStore } from "redux";
import { todoReducerCurd } from "./reducers/todoReducers";

const allReducers = combineReducers({
  todoReducer: todoReducerCurd,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
