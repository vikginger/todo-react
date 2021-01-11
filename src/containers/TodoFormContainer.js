import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, changeInput, toggleAllTasks, toggleChange } from '../actions/actionForm';

import TodoForm from '../components/TodoForm.js';

class TodoFormContainer extends Component {

  render () {

    return(
      <TodoForm
        addTask={this.props.addTask}
        changeInput={this.props.changeInput}
        toggleAllTasks={this.props.toggleAllTasks}
        toggleChange={this.props.toggleChange}
        title={this.props.title}
        tasks={this.props.tasks}
        isChecked={this.props.isChecked}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.form.tasks,
    title: state.form.title,
    isChecked: state.form.isChecked
  }
};

const mapDispatchToProps = {
  addTask,
  changeInput,
  toggleAllTasks,
  toggleChange
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer);
