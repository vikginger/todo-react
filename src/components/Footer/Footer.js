import React, { useState } from "react";

import styles from "./Footer.module.scss";

function Footer(props) {

  const [filterAll, setFilterAll] = useState(true);
  const [filterActive, setFilterActive] = useState(false);
  const [filterCompleted, setFilterCompleted] = useState(false);

  const clickAll = () => {
    setFilterAll(true);
    setFilterActive(false);
    setFilterCompleted(false);
    props.filterAllTasks();
  };

  const clickActive = () => {
    setFilterAll(false);
    setFilterActive(true);
    setFilterCompleted(false);
    props.filterActiveTasks();
  };

  const clickCompleted = () => {
    setFilterAll(false);
    setFilterActive(false);
    setFilterCompleted(true);
    props.filterCompletedTasks();
  };

  const deleteDoneItems = () => {
    props.deleteDoneTasks();
  };

  const tasksLeft = props.tasks.filter(task => task.done === false);
  const tasksDone = props.tasks.filter(task => task.done === true);

  const classFilterAll = filterAll ? styles.selected : '';
  const classFilterActive = filterActive ? styles.selected : '';
  const classFilterCompleted = filterCompleted ? styles.selected : '';

  return (
    <footer
      style={{ display: props.tasks.length === 0 ? "none" : "flex" }}
      className={styles.footer}
    >
      <span className={styles.count}>
        <strong id="todo-count-left" />
        {tasksLeft.length + ' '}
        item left
      </span>
      <ul className={styles.filters}>
        <li>
          <a
            className={styles.item + ' ' + classFilterAll}
            href="#/"
            onClick={clickAll}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={styles.item + ' ' + classFilterActive}
            href="#/active"
            onClick={clickActive}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={styles.item + ' ' + classFilterCompleted}
            href="#/completed"
            onClick={clickCompleted}
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        style={{ display: tasksDone.length > 0 ? "block" : "none" }}
        className={styles.completed}
        type="button"
        name="button"
        onClick={deleteDoneItems}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
