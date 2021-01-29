import React, { useEffect } from "react";
import { connect } from "react-redux";
import { removeTask, toggleTask, editBeginTask, editCompleteTask, filterAllTasks, filterActiveTasks, filterCompletedTasks, deleteDoneTasks, addTask, toggleAllTasks, showTasksLocalStorage } from '../store/actionForm';

import Header from '../components/Header/Header.js';
import TodoForm from '../components/TodoForm/TodoForm.js';
import Task from '../components/Task/Task.js';
import Footer from '../components/Footer/Footer.js';

import '../fonts/fonts.css';

import '../mainStyles.scss';
import styles from './App.module.scss';

function App(props) {

  useEffect(() => {
    props.showTasksLocalStorage();
  }, []);

  const tasks = props.tasks;

  return (
    <div className={styles.main}>
      <Header />
      <TodoForm
        tasks={props.tasks}
        addTask={props.addTask}
        toggleAllTasks={props.toggleAllTasks}
      />
      <ul className={styles.list}>
        {tasks.map(task => (
          <Task
            {...task}
            key={task.id}
            tasks={props.tasks}
            removeTask={props.removeTask}
            toggleTask={props.toggleTask}
            editBeginTask={props.editBeginTask}
            editCompleteTask={props.editCompleteTask}
          />
        ))}
      </ul>
      <Footer
        tasks={props.tasks}
        filterAllTasks={props.filterAllTasks}
        filterActiveTasks={props.filterActiveTasks}
        filterCompletedTasks={props.filterCompletedTasks}
        deleteDoneTasks={props.deleteDoneTasks}
      />
    </div>
  )
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
