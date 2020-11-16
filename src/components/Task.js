import React, { Component } from "react";

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isChecked: false
    };
    this.editBegin = this.editBegin.bind(this);
    this.editComplete = this.editComplete.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  editBegin = () => {
    this.props.editItemBegin(this.props.id);
    this.state.input = this.props.task.title;
  }

  editComplete = () => {
    if (this.state.input) {
      this.props.editItemComplete(this.props.id, this.state.input);
    } else {
      this.props.deleteItem(this.props.id);
      this.props.removeItem(this.props.id);
    }
  }

  toggleChange = e => {
    this.setState({
      isChecked: e.target.checked},
      () => this.props.toggleItem(this.props.id)
    );
	}

  deleteTask = () => {
    this.props.deleteItem(this.props.id);
    this.props.removeItem(this.props.id);
  }

  handleEnter(e) {
    if (e.key === 'Enter') this.editComplete();
  };

  inputChange(e) {
    this.setState({ input: e.target.value });
  };

  render () {

    const classDone = this.props.task.done ? 'completed' : '';
    const classEdit = this.props.task.edit ? 'editMode' : '';
    const className = classDone + ' ' + classEdit;
    const check = this.props.task.done ? true : false;

    return(
      <li className={className} style={{ display: this.props.task.hide ? "none" : "block" }}>
        <input
        onChange={this.toggleChange}
        checked={check}
        type="checkbox" className="toggle-one"/>
        <label></label>
        <label onDoubleClick={this.editBegin} className="label-text">{this.props.task.title}</label>
        <input
        onKeyPress={this.handleEnter}
        onBlur={this.editComplete}
        onChange={this.inputChange}
        value={this.state.input}
        type="text"/>
        <button onClick={this.deleteTask} type="button" className="delete"></button>
      </li>
    )
  }
}

export default Task;
