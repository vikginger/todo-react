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
      <footer className="footer" style={{ display: this.props.tasks.length === 0 ? "none" : "flex" }}>
        <span className="todo-count">
          <strong id="todo-count-left"></strong>
          {this.props.tasksLeft.length} item left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className={classNameAll} onClick={this.filterAllTasks}>All</a>
          </li>
          <li>
            <a href="#/active" className={classNameActive} onClick={this.filterActiveTasks}>Active</a>
          </li>
          <li>
            <a href="#/completed" className={classNameCompleted} onClick={this.filterCompletedTasks}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed"
        onClick={this.props.deleteDoneItems}
        style={{ display: this.props.tasksDone.length > 0 ? "block" : "none" }} type="button" name="button">Clear completed</button>
      </footer>
    );
  }
}

export default Footer;
