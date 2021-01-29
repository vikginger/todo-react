import React, { useState } from "react";

import styles from "./TodoForm.module.scss";

function TodoForm(props) {

  const [input, setInput] = useState('');
  const [isChecked, setChecked] = useState(false);

  const addItem = () => {
    if (input) {
      props.addTask(input);
      setInput('');
    };
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') addItem();
  };

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const checkboxChange = (e) => {
    setChecked(e.target.checked);
    props.toggleAllTasks(e.target.checked);
	};

  return(
    <div>
      <input
        className={styles.newTask}
        type="text"
        placeholder="What needs to be done?"
        autoFocus=""
        value={input}
        onChange={inputChange}
        onKeyPress={handleEnter}
      />
      <div
        style={{ display: props.tasks.length === 0 ? "none" : "block" }}
        className={styles.chekboxToggle}
      >
        <input
          onChange={checkboxChange}
          checked={isChecked}
          className={styles.toggle}
          id="toggle-all"
          type="checkbox"
        />
        <label htmlFor="toggle-all" />
      </div>
    </div>
  )
}

export default TodoForm;
