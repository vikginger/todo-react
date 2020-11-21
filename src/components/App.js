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

  addItem = title => {
    this.setState(state => {
      // TODO
      // можно таким образом упросить запись
      // не используй let если переменная не будет модифицироваться, используй const
      const newTask = {
        id: new Date().getTime(),
        title,
        done: false,
        edit: false,
        hide: false
      };

      state.tasks.push(newTask);
      this.saveItem(newTask);

      return {...state.tasks};
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
    // TODO
    // Можно упросить запись через спред { ...object }
    this.saveItem({
      ...state[index]
    });
  }

  toggleItem = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);

    this.setState(state => {
      state.tasks[index].done = !state.tasks[index].done;
      this.recordItem(index, state.tasks);

      return {...state.tasks};
    });
  }

  toggleAll = check => {
    this.setState(state => {
      state.tasks.forEach((task) => {
        // TODO
        // можно упроситить запись, тк это тоже самое что и с if
        task.done = check;
        this.saveItem(task);
      });
      return {...state.tasks};
    });
  }

  deleteDoneItems = () => {
    const resultList = this.state.tasks.filter(task => task.done !== true);
    const removeList = this.state.tasks.filter(task => task.done === true);

    this.setState({ tasks: resultList });

    // TODO
    // Можно не использовать { ... } если нужно выполнить действие в 1 строку
    removeList.forEach((task) => this.removeItem(task.id));
  }

  deleteItem = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);

    // TODO
    // Можно записать таким образом
    this.setState(state => {
      return {...state.tasks.splice(index, 1)};
    });
  }

  editItemBegin = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);

    this.setState(state => {
      state.tasks[index].edit = true;
      return {...state.tasks};
    });
  }

  editItemComplete = (id, label) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);

    this.setState(state => {
      state.tasks[index].edit = false;
      state.tasks[index].title = label;
      this.recordItem(index, state.tasks);

      return {...state.tasks};
    });
  }

  filterAll() {
    this.setState(state => {
      state.tasks.forEach((task) => task.hide = false);

      return {...state.tasks};
    });
  }

  filterActive() {
    this.setState(state => {
      state.tasks.forEach((task) => task.hide = task.done === true);

      return {...state.tasks};
    });
  }

  filterCompleted() {
    this.setState(state => {
      state.tasks.forEach((task) => task.hide = task.done !== true);

      return {...state.tasks};
    });
  }

  render() {
    const { tasks } = this.state;
    const tasksLeft = tasks.filter(task => task.done === false);
    const tasksDone = tasks.filter(task => task.done === true);

    // TODO
    // посмотри как я организовал синтаксис, так более читабельно
    return (
      <div className="main">
        <Header />
        <TodoForm
          tasks={tasks}
          addItem={this.addItem}
          toggleAll={this.toggleAll}
        />
        <ul className="todo-list">
          {tasks.map(task => (
            <Task
              {...task} // Можно записать так
              key={task.id}
              toggleItem={this.toggleItem}
              deleteItem={this.deleteItem}
              recordItem={this.recordItem}
              removeItem={this.removeItem}
              editItemBegin={this.editItemBegin}
              editItemComplete={this.editItemComplete}
              // task={task}
              // id={task.id}
            />
          ))}
        </ul>
        <Footer
          tasks={tasks}
          tasksLeft={tasksLeft}
          tasksDone={tasksDone}
          deleteDoneItems={this.deleteDoneItems}
          filterAll={this.filterAll}
          filterActive={this.filterActive}
          filterCompleted={this.filterCompleted}
        />
      </div>
    )
  }
}

export default App;
