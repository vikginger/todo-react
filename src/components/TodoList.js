import React, { Component } from "react";
import Task from './Task.js';

class TodoList extends Component {

  render() {

    return (
      <ul className="todo-list">
       <Task />
      </ul>
    );
  }
}

export default TodoList;
