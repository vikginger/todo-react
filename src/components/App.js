import React, { Component } from "react";
import Header from './Header.js';
import TodoForm from './TodoForm.js';
import Task from './Task.js';
import Footer from './Footer.js';
import '../fonts/fonts.css';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.addItem = this.addItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteDoneItems = this.deleteDoneItems.bind(this);
    this.editItemBegin = this.editItemBegin.bind(this);
    this.editItemComplete = this.editItemComplete.bind(this);
    this.filterAll = this.filterAll.bind(this);
    this.filterActive = this.filterActive.bind(this);
    this.filterCompleted = this.filterCompleted.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.recordItem = this.recordItem.bind(this);
  }

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem("todo")) || {};
    const tasks = Object.values(items);
    this.setState({tasks: tasks});
  }

  addItem = task => {
    this.setState(state => {
      let { tasks } = state;
      let id = new Date().getTime();
      let newTask = {
        id: id,
        title: task,
        done: false,
        edit: false,
        hide: false
      };
      tasks.push(newTask);
      this.saveItem(newTask);
      return {...tasks};
    });
  }

  saveItem = task => {
    const items = JSON.parse(localStorage.getItem("todo")) || {};
    items[task.id] = task;
    localStorage.setItem("todo", JSON.stringify(items));
  }

  removeItem = id => {
    const items = JSON.parse(localStorage.getItem("todo")) || {};
    delete items[id];
    localStorage.setItem("todo", JSON.stringify(items));
  };

  recordItem = (index, state) => {
    let recordItem = {};
    recordItem["id"] = state[index].id;
    recordItem["title"] = state[index].title;
    recordItem["done"] = state[index].done;
    recordItem["edit"] = state[index].edit;
    recordItem["hide"] = state[index].hide;
    this.saveItem(recordItem);
  }

  toggleItem = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = !tasks[index].done;
      this.recordItem(index, tasks);
      return {...tasks};
    });
  }

  toggleAll = check => {
    this.setState(state => {
      let { tasks } = state;
      tasks.forEach((task) => {
        if (check === true) {
          task.done = true;
        } else {
          task.done = false;
        }
        this.saveItem(task);
      });
      return {...tasks};
    });
  }

  deleteDoneItems = () => {
    let resultList = this.state.tasks.filter(task => task.done !== true);
    let removeList = this.state.tasks.filter(task => task.done === true);
    this.setState({tasks: resultList});
    removeList.forEach((task) => {
      this.removeItem(task.id);
    });
  }

  deleteItem = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks.splice(index, 1);
      return {...tasks};
    });
  }

  editItemBegin = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].edit = true;
      return {...tasks};
    });
  }

  editItemComplete = (id, label) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].edit = false;
      tasks[index].title = label;
      this.recordItem(index, tasks);
      return {...tasks};
    });
  }

  filterAll() {
    this.setState(state => {
      let { tasks } = state;
      tasks.forEach((task) => {
        task.hide = false;
      });
      return {...tasks};
    });
  }

  filterActive() {
    this.setState(state => {
      let { tasks } = state;
      tasks.forEach((task) => {
        if (task.done === true) {
          task.hide = true;
        } else {
          task.hide = false;
        }
      });
      return {...tasks};
    });
  }

  filterCompleted() {
    this.setState(state => {
      let { tasks } = state;
      tasks.forEach((task) => {
        if (task.done === true) {
          task.hide = false;
        } else {
          task.hide = true;
        }
      });
      return {...tasks};
    });
  }

  render() {

    const { tasks } = this.state;
    const tasksLeft = tasks.filter(task => task.done === false);
    const tasksDone = tasks.filter(task => task.done === true);

    return (
      <div className = "main">
        <Header />
        <TodoForm tasks={tasks} addItem={this.addItem} toggleAll={this.toggleAll} />
        <ul className="todo-list">
          {tasks.map(task => (
            <Task
            tasks={tasks}
            toggleItem={this.toggleItem}
            deleteItem={this.deleteItem}
            recordItem={this.recordItem}
            removeItem={this.removeItem}
            editItemBegin={this.editItemBegin}
            editItemComplete={this.editItemComplete}
            task={task}
            id={task.id}
            key={task.id} />
          ))}
        </ul>
        <Footer tasks={tasks}
        tasksLeft={tasksLeft}
        tasksDone={tasksDone}
        deleteDoneItems={this.deleteDoneItems}
        filterAll={this.filterAll}
        filterActive={this.filterActive}
        filterCompleted={this.filterCompleted} />
      </div>
    )
  }
}

export default App;
