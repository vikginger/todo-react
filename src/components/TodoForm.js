import React, { Component } from "react";

class TodoForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      isChecked: false
    };

    this.addTask = this.addTask.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
  }

  addTask = () => {
    if (this.state.input) {
      this.props.addItem(this.state.input);
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
      () => this.props.toggleAll(this.state.isChecked)
    );
	}

  render() {

    return (
      <div>
        <input
          className="new-task"
          type="text"
          value={this.state.input}
          placeholder="What needs to be done?"
          autoFocus=""
          onKeyPress={this.handleEnter}
          onChange={this.inputChange}
        />
        <div
          style={{ display: this.props.tasks.length === 0 ? "none" : "block" }}
          className="chekbox__toggle-all"
        >
          <input
            onChange={this.checkboxChange}
            checked={this.state.isChecked}
            className="toggle-all" id="toggle-all" type="checkbox"
          />
          <label htmlFor="toggle-all" />
        </div>
      </div>
    );
  }
}

export default TodoForm;
