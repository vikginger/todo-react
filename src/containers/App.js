import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTask, toggleTask, editBeginTask, editCompleteTask, filterAllTasks, filterActiveTasks, filterCompletedTasks, deleteDoneTasks } from '../actions/actionForm';

import Header from '../components/Header.js';
import TodoFormContainer from './TodoFormContainer.js';
import TaskContainer from './TaskContainer.js';
import FooterContainer from './FooterContainer.js';

import '../fonts/fonts.css';
import '../styles/App.css';

class App extends Component {


/*  componentDidMount() {
    const items = JSON.parse(localStorage.getItem("todo")) || {};
    const tasks = Object.values(items);
    this.setState({tasks: tasks});
  }

  saveItem = task => {
    const items = JSON.parse(localStorage.getItem("todo")) || {};
    items[task.id] = task;

    localStorage.setItem("todo", JSON.stringify(items));
  }

  removeItem = id => {
    const items = JSON.parse(localStorage.getItem("todo")) || {};
    delete items[id];

    localStorage.setItem("todo", JSON.stringify(items));
  };

  recordItem = (index, state) => {
    // TODO
    // Можно упросить запись через спред { ...object }
    this.saveItem({
      ...state[index]
    });
  }

  deleteDoneItems = () => {
    const resultList = this.state.tasks.filter(task => task.done !== true);
    const removeList = this.state.tasks.filter(task => task.done === true);

    this.setState({ tasks: resultList });

    // TODO
    // Можно не использовать { ... } если нужно выполнить действие в 1 строку
    removeList.forEach((task) => this.removeItem(task.id));
  }

  deleteItem = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);

    // TODO
    // Можно записать таким образом
    this.setState(state => {
      return {...state.tasks.splice(index, 1)};
    });
  }

  */


  render() {
    const tasks = this.props.tasks;

    return (
      <div className="main">
        <Header />
        <TodoFormContainer />
        <ul className="todo-list">
          {tasks.map(task => (
            <TaskContainer
              {...task}
              key={task.id}
              removeTask={this.props.removeTask}
              toggleTask={this.props.toggleTask}
              editBeginTask={this.props.editBeginTask}
              editCompleteTask={this.props.editCompleteTask}
            />
          ))}
        </ul>
        <FooterContainer
          tasks={this.props.tasks}
          filterAllTasks={this.props.filterAllTasks}
          filterActiveTasks={this.props.filterActiveTasks}
          filterCompletedTasks={this.props.filterCompletedTasks}
          deleteDoneTasks={this.props.deleteDoneTasks}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.form.tasks
  }
};

const mapDispatchToProps = {
  removeTask,
  toggleTask,
  editBeginTask,
  editCompleteTask,
  filterAllTasks,
  filterActiveTasks,
  filterCompletedTasks,
  deleteDoneTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
