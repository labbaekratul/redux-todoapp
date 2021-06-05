import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteAllTodo,
  deleteTodo,
} from "../redux/actions/todoActions";
import "./TodoApp.css";

function TodoApp() {
  const [inputTask, setInputTask] = useState("");
  const todotask = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  console.log(todotask);

  return (
    <div className="todoApp">
      <div className="container">
        <div className="row todo_row">
          <div className="todoApp_heading">
            <h1>REDUX Todo App</h1>
          </div>
          <div className="todoApp_input">
            <div className="col-3">
              <h6>Add you Todo</h6>
            </div>
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Add todo"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
              />
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => dispatch(addTodo(inputTask), setInputTask(""))}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-6 added_todos">
            {todotask.map((e) => (
              <div className="todo_list">
                {e.data}
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteTodo(e.id))}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="col-3"></div>
          <div className="col-12 remove_btn">
            <button
              className="btn btn-secondary"
              onClick={() => dispatch(deleteAllTodo())}
            >
              Delete All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoApp;
