import React from 'react';
import {NewTodoForm } from './Tickets/NewTodoForm.jsx';
import TodoListItem from '/Tickets/TodoListItem';

import { connect } from "react-redux";
import { removeTodo, markTodoAsCompleted} from './Tickets/actions';
import {displayAlert} from './thunks';
import {getTodos, getTodosloading} from './Tickets/selectors'
import './TodoList.css';


//Declare and add prop for component
const TodoList = ({todos =[], onRemovePressed, onCompletedPressed})  => (
    <div className ="list-wrapper">
        <NewTdoForm/>
     {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} //onDisplayAlertClicked={onDisplayAlertClicked} 
     />)}
    </div>
);


const mapStateToProps = (state) => ({
  isLoading: getTodosloading(state),
  todos: getTodos(state),
  //todos: state.todos,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    //onDisplayAlertClicked: text => dispatch(displayAlert(text))
 
  });


export default connect(mapStateToProps, mapDispatchToProps )(TodoList);