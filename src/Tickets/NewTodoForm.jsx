import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./Tickets/actions";
import {getTodos} from './Tickets/selectors'


const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type you new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}

      />
      <button
        onClick={() => {
          const isDupText = todos.some((todo) => todo.text === inputValue);
          if (!isDupText){
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create New Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);