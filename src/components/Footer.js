import React, { Component } from "react";

import styles from "../styles/Footer.module.scss";

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filterAll: true,
      filterActive: false,
      filterCompleted: false
    };

    this.clickAll = this.clickAll.bind(this);
    this.clickActive = this.clickActive.bind(this);
    this.clickCompleted = this.clickCompleted.bind(this);
    this.deleteDoneItems = this.deleteDoneItems.bind(this);
  }

  clickAll = () => {
    this.setState({ filterAll: true, filterActive: false, filterCompleted: false });
    this.props.filterAllTasks();
  };

  clickActive = () => {
    this.setState({ filterAll: false, filterActive: true, filterCompleted: false });
    this.props.filterActiveTasks();
  };

  clickCompleted = () => {
    this.setState({ filterAll: false, filterActive: false, filterCompleted: true });
    this.props.filterCompletedTasks();
  };

  deleteDoneItems = () => {
    this.props.deleteDoneTasks();
  };

  render() {
    const tasksLeft = this.props.tasks.filter(task => task.done === false);
    const tasksDone = this.props.tasks.filter(task => task.done === true);

    const classFilterAll = this.state.filterAll ? styles.selected : '';
    const classFilterActive = this.state.filterActive ? styles.selected : '';
    const classFilterCompleted = this.state.filterCompleted ? styles.selected : '';

    return (
      <footer
        style={{ display: this.props.tasks.length === 0 ? "none" : "flex" }}
        className={styles.footer}
      >
        <span className={styles.count}>
          <strong id="todo-count-left" />
          {tasksLeft.length + ' '}
           item left
        </span>
        <ul className={styles.filters}>
          <li>
            <a
              className={styles.item + ' ' + classFilterAll}
              href="#/"
              onClick={this.clickAll}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={styles.item + ' ' + classFilterActive}
              href="#/active"
              onClick={this.clickActive}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={styles.item + ' ' + classFilterCompleted}
              href="#/completed"
              onClick={this.clickCompleted}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          style={{ display: tasksDone.length > 0 ? "block" : "none" }}
          className={styles.completed}
          type="button"
          name="button"
          onClick={this.deleteDoneItems}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
