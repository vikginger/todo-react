import React, { Component } from "react";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.clickAll = this.clickAll.bind(this);
    this.clickActive = this.clickActive.bind(this);
    this.clickCompleted = this.clickCompleted.bind(this);
    this.deleteDoneItems = this.deleteDoneItems.bind(this);
  }

  clickAll = () => {
    this.props.filterAll();
    this.props.filterAllTasks();
  };

  clickActive = () => {
    this.props.filterActive();
    this.props.filterActiveTasks();
  };

  clickCompleted = () => {
    this.props.filterCompleted();
    this.props.filterCompletedTasks();
  };

  deleteDoneItems = () => {
    this.props.deleteDoneTasks();
  };

  render() {
    const tasksLeft = this.props.tasks.filter(task => task.done === false);
    const tasksDone = this.props.tasks.filter(task => task.done === true);

    const classFilter = 'filters__item';

    const classFilterAll = this.props.footer.filterAll ? 'selected' : '';
    const classFilterActive = this.props.footer.filterActive ? 'selected' : '';
    const classFilterCompleted = this.props.footer.filterCompleted ? 'selected' : '';

    const classNameAll = classFilter + ' ' + classFilterAll;
    const classNameActive = classFilter + ' ' + classFilterActive;
    const classNameCompleted = classFilter + ' ' + classFilterCompleted;

    return (
      <footer
        style={{ display: this.props.tasks.length === 0 ? "none" : "flex" }}
        className="footer"
      >
        <span className="todo-count">
          <strong id="todo-count-left" />
          {tasksLeft.length + ' '}
           item left
        </span>
        <ul className="filters">
          <li>
            <a
              className={classNameAll}
              href="#/"
              onClick={this.clickAll}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={classNameActive}
              href="#/active"
              onClick={this.clickActive}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={classNameCompleted}
              href="#/completed"
              onClick={this.clickCompleted}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          style={{ display: tasksDone.length > 0 ? "block" : "none" }}
          className="clear-completed"
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
