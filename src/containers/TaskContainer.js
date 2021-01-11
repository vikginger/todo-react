import React, { Component } from "react";
import { connect } from "react-redux";
import { editBeginInput, changeInputTask } from '../actions/actionTask';

import Task from '../components/Task.js';

class TaskContainer extends Component {

  render () {


    return(
      <Task
        title={this.props.title}
        id={this.props.id}
        done={this.props.done}
        edit={this.props.edit}
        removeTask={this.props.removeTask}
        toggleTask={this.props.toggleTask}
        input={this.props.task}
        editBeginTask={this.props.editBeginTask}
        editBeginInput={this.props.editBeginInput}
        changeInputTask={this.props.changeInputTask}
        editCompleteTask={this.props.editCompleteTask}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    task: state.task.input
  }
};

const mapDispatchToProps = {
  editBeginInput,
  changeInputTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
