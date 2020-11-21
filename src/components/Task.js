import React, { Component } from "react";

class Task extends Component {

  // TODO
  // удалил пропс task, тк в App записал так {...task}
  // это позволило все содержимое task передать в props
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
    this.state.input = this.props.title;
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

  handleEnter = (e) => {
    if (e.key === 'Enter') this.editComplete();
  };

  inputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render () {
    const classDone = this.props.done ? 'completed' : '';
    const classEdit = this.props.edit ? 'editMode' : '';
    const className = classDone + ' ' + classEdit;
    const check = this.props.done; // Может ошибаюсь, но кажется это тоже самое что и запись ранее

    // TODO
    // Посмотри на организацию, так более читабельно и чище
    // Порядок такой: style, className, другие пропсы, коллбеки
    return(
      <li
        style={{ display: this.props.hide ? "none" : "block" }}
        className={className}
      >
        <input
          className="toggle-one"
          type="checkbox"
          checked={check}
          onChange={this.toggleChange}
        />
        <label/>
        <label
          className="label-text"
          onDoubleClick={this.editBegin}
        >
            {this.props.title}
        </label>
        <input
          type="text"
          value={this.state.input}
          onBlur={this.editComplete}
          onChange={this.inputChange}
          onKeyPress={this.handleEnter}
        />
        <button
          className="delete"
          type="button"
          onClick={this.deleteTask}
        />
      </li>
    )
  }
}

export default Task;
