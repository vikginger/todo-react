import React, { useState } from "react";

import styles from "./Task.module.scss";

function Task(props) {

  const [input, setInput] = useState('');

  const toggleChange = () => {
    props.toggleTask(props.id);
	}

  const deleteTask = () => {
    props.removeTask(props.id);
  }

  const editBegin = () => {
    props.editBeginTask(props.id);
    setInput(props.title);
  }

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const editComplete = () => {
    if (input) {
      props.editCompleteTask(props.id, input);
    } else {
      props.removeTask(props.id);
    }
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') editComplete();
  };


  const classDone = props.done ? styles.completed : '';
  const classEdit = props.edit ? styles.edit : '';
  const className = classDone + ' ' + classEdit;
  const check = props.done;

  return(
    <li
      style={{ display: props.hide ? "none" : "block" }}
      className={className + styles.item}
    >
      <input
        style={{ display: props.edit ? "none" : "block" }}
        className={styles.toggle}
        type="checkbox"
        checked={check}
        onChange={toggleChange}
      />
      <label
        style={{ display: props.edit ? "none" : "block" }}
      />
      <label
        style={{ display: props.edit ? "none" : "block" }}
        className={styles.text}
        onDoubleClick={editBegin}
      >
        {props.title}
      </label>
      <input
        style={{ display: props.edit ? "block" : "none" }}
        className={styles.input}
        type="text"
        value={input}
        onBlur={editComplete}
        onChange={inputChange}
        onKeyPress={handleEnter}
      />
      <button
        style={{ display: props.edit ? "none" : "block" }}
        className={styles.delete}
        type="button"
        onClick={deleteTask}
      />
    </li>
  )
}

export default Task;
