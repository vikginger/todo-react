import React, { Component } from "react";

import styles from "../styles/Task.module.scss";

class Task extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      isChecked: false
    };

    this.deleteTask = this.deleteTask.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.editBegin = this.editBegin.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.editComplete = this.editComplete.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  toggleChange = () => {
    this.props.toggleTask(this.props.id);
	}

  deleteTask = () => {
    this.props.removeTask(this.props.id);
  }

  editBegin = () => {
    this.props.editBeginTask(this.props.id);
    this.state.input = this.props.title;
  }

  inputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  editComplete = () => {
    if (this.state.input) {
      this.props.editCompleteTask(this.props.id, this.state.input);
    } else {
      this.props.removeTask(this.props.id);
    }
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') this.editComplete();
  };

  render () {
    const classDone = this.props.done ? styles.completed : '';
    const classEdit = this.props.edit ? styles.edit : '';
    const className = classDone + ' ' + classEdit;
    const check = this.props.done;

    // Порядок такой: style, className, другие пропсы, коллбеки
    return(
      <li
        style={{ display: this.props.hide ? "none" : "block" }}
        className={className + styles.item}
      >
        <input
          style={{ display: this.props.edit ? "none" : "block" }}
          className={styles.toggle}
          type="checkbox"
          checked={check}
          onChange={this.toggleChange}
        />
        <label
          style={{ display: this.props.edit ? "none" : "block" }}
        />
        <label
          style={{ display: this.props.edit ? "none" : "block" }}
          className={styles.text}
          onDoubleClick={this.editBegin}
        >
          {this.props.title}
        </label>
        <input
          style={{ display: this.props.edit ? "block" : "none" }}
          className={styles.input}
          type="text"
          value={this.state.input}
          onBlur={this.editComplete}
          onChange={this.inputChange}
          onKeyPress={this.handleEnter}
        />
        <button
          style={{ display: this.props.edit ? "none" : "block" }}
          className={styles.delete}
          type="button"
          onClick={this.deleteTask}
        />
      </li>
    )
  }
}

export default Task;
