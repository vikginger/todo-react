import React, { Component } from "react";

class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
  }

  addTask = () => {
    if (this.props.title) {
      this.props.addTask(this.props.title)
    };
  };

  handleEnter(e) {
    if (e.key === 'Enter') this.addTask();
  };

  inputChange(e) {
    this.props.changeInput(e.target.value);
  };

  checkboxChange = e => {
    this.props.toggleChange(e.target.checked);
    this.props.toggleAllTasks(this.props.isChecked);
	}

  render () {

    return(
      <div>
        <input
          className="new-task"
          type="text"
          placeholder="What needs to be done?"
          autoFocus=""
          value={this.props.title}
          onChange={this.inputChange}
          onKeyPress={this.handleEnter}
        />
        <div
          style={{ display: this.props.tasks.length === 0 ? "none" : "block" }}
          className="chekbox__toggle-all"
        >
          <input
            onChange={this.checkboxChange}
            checked={this.props.isChecked}
            className="toggle-all" id="toggle-all" type="checkbox"
          />
          <label htmlFor="toggle-all" />
        </div>
      </div>
    )
  }
}

export default TodoForm;
