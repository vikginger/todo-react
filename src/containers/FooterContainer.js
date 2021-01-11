import React, { Component } from "react";
import { connect } from "react-redux";
import { filterAll, filterActive, filterCompleted } from '../actions/actionFooter';

import Footer from '../components/Footer.js';

class FooterContainer extends Component {

  render () {

    return(
      <Footer
        tasks={this.props.tasks}
        footer={this.props.footer}
        filterAllTasks={this.props.filterAllTasks}
        filterActiveTasks={this.props.filterActiveTasks}
        filterCompletedTasks={this.props.filterCompletedTasks}
        filterAll={this.props.filterAll}
        filterActive={this.props.filterActive}
        filterCompleted={this.props.filterCompleted}
        deleteDoneTasks={this.props.deleteDoneTasks}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    footer: state.footer
  }
};

const mapDispatchToProps = {
  filterAll,
  filterActive,
  filterCompleted
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
