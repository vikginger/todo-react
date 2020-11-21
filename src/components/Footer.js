import React, { Component } from "react";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterAll: true,
      filterActive: false,
      filterCompleted: false
    };
    this.filterAllTasks = this.filterAllTasks.bind(this);
    this.filterActiveTasks = this.filterActiveTasks.bind(this);
    this.filterCompletedTasks = this.filterCompletedTasks.bind(this);
  }

  filterAllTasks = () => {
    this.setState({ filterAll: true, filterActive: false, filterCompleted: false });
    this.props.filterAll();
  };

  filterActiveTasks = () => {
    this.setState({ filterAll: false, filterActive: true, filterCompleted: false });
    this.props.filterActive();
  };

  filterCompletedTasks = () => {
    this.setState({ filterAll: false, filterActive: false, filterCompleted: true });
    this.props.filterCompleted();
  };

  render() {
    const classFilter = 'filters__item';

    const classFilterAll = this.state.filterAll ? 'selected' : '';
    const classFilterActive = this.state.filterActive ? 'selected' : '';
    const classFilterCompleted = this.state.filterCompleted ? 'selected' : '';

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
          {this.props.tasksLeft.length}
          item left
        </span>
        <ul className="filters">
          <li>
            <a
              className={classNameAll}
              href="#/"
              onClick={this.filterAllTasks}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={classNameActive}
              href="#/active"
              onClick={this.filterActiveTasks}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={classNameCompleted}
              href="#/completed"
              onClick={this.filterCompletedTasks}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          style={{ display: this.props.tasksDone.length > 0 ? "block" : "none" }}
          className="clear-completed"
          type="button"
          name="button"
          onClick={this.props.deleteDoneItems}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
