import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTask, toggleTask, editBeginTask, editCompleteTask, filterAllTasks, filterActiveTasks, filterCompletedTasks, deleteDoneTasks, addTask, toggleAllTasks, showTasksLocalStorage } from '../store/actionForm';

import Header from '../components/Header.js';
import TodoForm from '../components/TodoForm.js';
import Task from '../components/Task.js';
import Footer from '../components/Footer.js';

import '../fonts/fonts.css';
import '../styles/App.css';

class App extends Component {

  componentDidMount() {
    this.props.showTasksLocalStorage();
  }

  render() {
    const tasks = this.props.tasks;

    return (
      <div className="main">
        <Header />
        <TodoForm
          tasks={this.props.tasks}
          addTask={this.props.addTask}
          toggleAllTasks={this.props.toggleAllTasks}
        />
        <ul className="todo-list">
          {tasks.map(task => (
            <Task
              {...task}
              key={task.id}
              tasks={this.props.tasks}
              removeTask={this.props.removeTask}
              toggleTask={this.props.toggleTask}
              editBeginTask={this.props.editBeginTask}
              editCompleteTask={this.props.editCompleteTask}
            />
          ))}
        </ul>
        <Footer
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
  deleteDoneTasks,
  addTask,
  toggleAllTasks,
  showTasksLocalStorage
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
