import React, { Component } from "react";

import styles from "../styles/TodoForm.module.scss";

class TodoForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      isChecked: false
    };

    this.addTask = this.addTask.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
  }

  addTask = () => {
    if (this.state.input) {
      this.props.addTask(this.state.input);
      this.setState({ input: '' });
    };
  };

  handleEnter(e) {
    if (e.key === 'Enter') this.addTask();
  };

  inputChange(e) {
    this.setState({ input: e.target.value });
  };

  checkboxChange = e => {
    this.setState({
      isChecked: e.target.checked},
      () => this.props.toggleAllTasks(this.state.isChecked)
    );
	}

  render () {

    return(
      <div>
        <input
          className={styles.newTask}
          type="text"
          placeholder="What needs to be done?"
          autoFocus=""
          value={this.state.input}
          onChange={this.inputChange}
          onKeyPress={this.handleEnter}
        />
        <div
          style={{ display: this.props.tasks.length === 0 ? "none" : "block" }}
          className={styles.chekboxToggle}
        >
          <input
            onChange={this.checkboxChange}
            checked={this.state.isChecked}
            className={styles.toggle}
            id="toggle-all"
            type="checkbox"
          />
          <label htmlFor="toggle-all" />
        </div>
      </div>
    )
  }
}

export default TodoForm;
